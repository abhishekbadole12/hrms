"use server";

import bcrypt from "bcrypt";
//
import { LoginFormState, LoginUserSchema } from "@/lib/definitions";
import User from "@/models/User";
//
import { createSession } from "@/lib/session";
import { redirect } from "next/navigation";

export async function loginUser(state: unknown, formData: FormData) {
  // 1. validate field
  const validationResult = LoginUserSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validationResult.success) {
    return {
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validationResult.data;

  const existingUser = await User.findOne({
    where: { email },
    attributes: ["user_id", "email", "user_role", "password"],
  });

  if (!existingUser) {
    return { message: "User does not exist" };
  }

  // Validate password
  const isMatch = await bcrypt.compare(password, existingUser.password);
  if (!isMatch) {
    return { message: "Invalid credentials" };
  }

  // Create session
  const sessionResult = await createSession(String(existingUser.user_id));

  if (sessionResult.success) {
    return redirect("/dashboard"); 
  }

  return { success: true, message: "Login successful" };
}
