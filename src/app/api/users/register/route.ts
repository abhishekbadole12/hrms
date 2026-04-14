import { NextResponse } from "next/server";
import { verifySession } from "@/lib/session"; // adjust path
import  User  from "@/models/User"; // adjust path

import { UserRole } from "@/utils/canUpdateUser";
import { RegisterUserSchema } from "@/lib/definitions";

// This is for testing purposes only. In production, you should implement proper authentication and role management. //

export async function POST(req: Request) {
  try {
    // 1. Verify session (cookie-based)
    const session = await verifySession();

    if (!session?.isAuth) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }


    // // 2. Role check
    // if (
    //   session.user_role !== UserRole.ADMIN &&
    //   session.user_role !== UserRole.HR &&
    //   session.user_role !== UserRole.MANAGER
    // ) {
    //   return NextResponse.json(
    //     { message: "Unauthorized to register user" },
    //     { status: 403 }
    //   );
    // }

    // // 3. Parse request body
    // const body = await req.json();

    // // 4. Validate input
    // const validationResult = RegisterUserSchema.safeParse({
    //   first_name: body.first_name,
    //   middle_name: body.middle_name,
    //   last_name: body.last_name,
    //   gender: body.gender,
    //   email: body.email,
    //   country_code: body.country_code,
    //   phone_number: body.phone_number,
    //   user_role: body.user_role,
    //   status: body.status || "ACTIVE",
    //   isVerified: Boolean(body.isVerified),
    // });

    // if (!validationResult.success) {
    //   return NextResponse.json(
    //     {
    //       errors: validationResult.error.flatten().fieldErrors,
    //     },
    //     { status: 400 }
    //   );
    // }

    // const {
    //   first_name,
    //   middle_name,
    //   last_name,
    //   gender,
    //   email,
    //   country_code,
    //   phone_number,
    //   user_role,
    //   status,
    // } = validationResult.data;

    // // 5. Check existing user
    // const existingUser = await User.findOne({ where: { email } });

    // if (existingUser) {
    //   return NextResponse.json(
    //     { message: "User already exists" },
    //     { status: 409 }
    //   );
    // }

    // // 6. Create user
    // const newUser = await User.create({
    //   first_name,
    //   middle_name,
    //   last_name,
    //   gender,
    //   email,
    //   country_code,
    //   phone_number,
    //   user_role,
    //   password: `${first_name}@${last_name}`, // FIXED template string
    //   status,
    //   created_by: session.user_id,
    // });

    // if (!newUser) {
    //   return NextResponse.json(
    //     { message: "Failed to create user" },
    //     { status: 500 }
    //   );
    // }

    // return NextResponse.json({
    //   success: true,
    //   user_id: newUser.user_id,
    // });

  } catch (error) {
    console.error("Register User Error:", error);

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}