import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

// GET /api/users
// This route fetches all users from the database
export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const session = request.cookies.get("session");
    if (!session) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
      });
    }

    const users = await User.findAll({
      attributes: [
        "user_id",
        "first_name",
        "middle_name",
        "last_name",
        "email",
        "country_code",
        "phone_number",
        "status",
        "user_role",
      ],
      where: {
        status: "ACTIVE",
      },
      order: [["first_name", "ASC"]],
    });

    return NextResponse.json(
      {
        users,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}
