import { NextRequest, NextResponse } from "next/server";
import { verifySession } from "@/lib/session";
import EmploymentDetail from "@/models/EmploymentDetail";
import User from "@/models/User";
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
        // "user_id",
        "first_name",
        "middle_name",
        "last_name",
        "email",
        "phone_number",
        // "country_code",
        "gender",
        "user_role",
        // "status",
        // "isVerified",
        // "profile_image_url",
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
        // "user_id",
        "job_title",
        "department_id",
        "reporting_manager_id",
        "employment_type",
        "work_location",
        "join_date",
        // "end_date",
        "probation_end_date",
        "confirmation_date",
        "salary",
        // "currency_unit",
        // "created_by": session?.user_id,
        // "updated_by": session?.user_id,
      ],
    });

    return NextResponse.json(
      {
        userDetails: { ...userDetails.dataValues },
        employmentDetails: { ...employmentDetails?.dataValues },
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
