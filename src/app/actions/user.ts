"use server";

import { RegisterUserSchema } from "@/lib/definitions";
import { verifySession } from "@/lib/session";
import User from "@/models/User";

export async function registerUser(state: unknown, formData: FormData) {
  // Extract user from session
  const session = await verifySession();

  if (!session.isAuth) {
    return { message: "Unauthroized" };
  }

  // 1. Validate input fields
  const validationResult = RegisterUserSchema.safeParse({
    first_name: formData.get("first_name"),
    middle_name: formData.get("middle_name"),
    last_name: formData.get("last_name"),
    gender: formData.get("gender"),
    email: formData.get("email"),
    country_code: formData.get("country_code"),
    phone_number: formData.get("phone_number"),
    user_role: formData.get("user_role"),
    status: formData.get("status") || "ACTIVE",
  });

  if (!validationResult.success) {
    return {
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  const {
    first_name,
    middle_name,
    last_name,
    gender,
    email,
    country_code,
    phone_number,
    user_role,
    status,
  } = validationResult.data;

  // 2. Check if user already exists
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    return { message: "User already exists" };
  }

  // 3. Create new user in the database
  const newUser = await User.create({
    first_name,
    middle_name,
    last_name,
    gender,
    email,
    country_code,
    phone_number,
    user_role,
    password: "",
    status,
    created_by: session?.user_id,
  });

  if (!newUser) {
    return { message: "Failed to create user. Please try again." };
  }

  // console.log(
  //   `Generated password for ${newUser.email}:`,
  //   (newUser as any)._plainPassword
  // );
}
