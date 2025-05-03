import { NextRequest, NextResponse } from "next/server";
//
import { verifySession } from "@/lib/session";
//
import User from "@/models/User";
import EmploymentDetail from "@/models/EmploymentDetail";
import PreviousEmploymentDetail from "@/models/PreviousEmploymentDetails";
import BankDetails from "@/models/BankDetails";
import SocialAndMore from "@/models/SocialAndMore";
//
import { canUpdate, UserRole } from "@/utils/canUpdateUser";

// This route fetches a user by their ID from the database
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ user_id: string }> }
) {
  try {
    const session = await verifySession();

    const targetUserId = (await params).user_id;

    if (!targetUserId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    const results = await Promise.allSettled([
      User.findOne({
        where: { user_id: targetUserId },
        attributes: [
          "first_name",
          "middle_name",
          "last_name",
          "email",
          "phone_number",
          "gender",
          "user_role",
        ],
      }),
      EmploymentDetail.findOne({
        where: {
          user_id: targetUserId,
        },
        attributes: [
          "job_title",
          "department_id",
          "reporting_manager_id",
          "employment_type",
          "work_location",
          "join_date",
          "probation_end_date",
          "confirmation_date",
          "salary",
        ],
      }),
      PreviousEmploymentDetail.findAll({
        where: {
          user_id: targetUserId,
        },
        attributes: [
          "id",
          "company_name",
          "position",
          "employment_type",
          "start_date",
          "end_date",
          "salary",
          "reference_name",
          "reference_email",
          "reference_phone_number",
        ],
      }),
      BankDetails.findAll({
        where: {
          user_id: targetUserId,
        },
        attributes: [
          "id",
          "account_holder",
          "account_number",
          "bank_name",
          "branch_name",
          "account_type",
          "ifsc_code",
          "pan_number",
        ],
      }),
      SocialAndMore.findOne({
        where: {
          user_id: targetUserId,
        },
        attributes: ["id", "linkedin_url", "twitter_url", "github_url"],
      }),
    ]);

    const [
      userResult,
      employmentResult,
      previousEmploymentResult,
      bankResult,
      SocialAndMoreResult,
    ] = results;

    const userDetails =
      userResult.status === "fulfilled" ? userResult.value?.dataValues : null;

    const employmentDetails =
      employmentResult.status === "fulfilled"
        ? employmentResult.value?.dataValues
        : null;

    const previousEmploymentDetails =
      previousEmploymentResult.status === "fulfilled"
        ? previousEmploymentResult.value?.map((item) => item.dataValues)
        : null;

    const bankDetails =
      bankResult.status === "fulfilled"
        ? bankResult.value?.map((item) => item.dataValues)
        : null;

    const socialAndMore =
      SocialAndMoreResult.status === "fulfilled"
        ? SocialAndMoreResult.value?.dataValues
        : null;

    // Helper function to check current role can chnage or not
    const isAllowed = canUpdate(
      session.user_id,
      targetUserId,
      session.user_role as UserRole,
      userDetails?.user_role as UserRole
    );

    if (!isAllowed) {
      return NextResponse.json(
        { error: "Unauthorized to view this user" },
        { status: 403 }
      );
    }

    return NextResponse.json(
      {
        userDetails: {
          status: userResult.status,
          data: userDetails,
        },
        employmentDetails: {
          status: employmentResult.status,
          data: employmentDetails,
        },
        previousEmploymentDetails: {
          status: previousEmploymentResult.status,
          data: previousEmploymentDetails,
        },
        bankDetails: {
          status: bankResult.status,
          data: bankDetails,
        },
        socialAndMore: {
          status: SocialAndMoreResult.status,
          data: socialAndMore,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}
