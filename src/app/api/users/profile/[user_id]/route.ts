import { NextRequest, NextResponse } from "next/server";
//
import { verifySession } from "@/lib/session";
//
import User from "@/models/User";
import EmploymentDetail from "@/models/EmploymentDetail";
import PreviousEmploymentDetail from "@/models/PreviousEmploymentDetails";
import BankDetails from "@/models/BankDetails";
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

    const userDetails = await User.findOne({
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
    });

    if (!userDetails) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Helper function to check current role can chnage or not
    const isAllowed = canUpdate(
      session.user_id,
      targetUserId,
      session.user_role as UserRole,
      userDetails.user_role as UserRole
    );

    if (!isAllowed) {
      return NextResponse.json(
        { error: "Unauthorized to view this user" },
        { status: 403 }
      );
    }

    const employmentDetails = await EmploymentDetail.findOne({
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
    });

    if (!employmentDetails) {
      return NextResponse.json(
        { error: "Employment details not found" },
        { status: 404 }
      );
    }

    const previousEmploymentDetails = await PreviousEmploymentDetail.findOne({
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
    });

    console.log(previousEmploymentDetails);

    if (!previousEmploymentDetails) {
      return NextResponse.json(
        { error: "Previous employment details not found" },
        { status: 404 }
      );
    }

    // const bankDetails = await BankDetails.findOne({
    //   where: {
    //     user_id: targetUserId,
    //   },
    //   attributes: [
    //     "bank_name",
    //     "account_number",
    //     "ifsc_code",
    //     "branch_name",
    //     "account_type",
    //     "pan_number",
    //     "aadhaar_number",
    //   ],
    // });

    return NextResponse.json(
      {
        userDetails: { ...userDetails.dataValues },
        employmentDetails: { ...employmentDetails?.dataValues },
        previousEmploymentDetails: {
          ...previousEmploymentDetails?.dataValues,
        },
        // bankDetails: { ...bankDetails?.dataValues },
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
