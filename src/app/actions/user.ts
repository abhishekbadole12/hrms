"use server";

import { RegisterUserSchema, UpdateEmploymentDetails } from "@/lib/definitions";
import { verifySession } from "@/lib/session";
import EmploymentDetails from "@/models/EmploymentDetail";
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
    isVerified: Boolean(formData.get("isVerified")),
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

  console.log(
    `Generated password for ${newUser.email}:`,
    (newUser as any)._plainPassword
  );

  return { success: true, user_id: newUser.user_id };
}

export async function updateEmploymentDetails(
  state: unknown,
  formData: FormData
) {
  // Helper function to format date
  const formattedDate = (date: string) => new Date(date);

  // Extract user from session
  const session = await verifySession();

  if (!session.isAuth) {
    return { message: "Unauthroized" };
  }

  // 1. Validate input fields
  const validationResult = UpdateEmploymentDetails.safeParse({
    user_id: formData.get("user_id"),
    job_title: formData.get("job_title"),
    department_id: formData.get("department_id"),
    reporting_manager_id: formData.get("reporting_manager_id"),
    employment_type: formData.get("employment_type"),
    work_location: formData.get("work_location"),
    join_date: formattedDate(formData.get("join_date") as string), // Format date
    end_date: formattedDate(formData.get("end_date") as string), // Format date
    probation_end_date: formattedDate(formData.get("probation_end") as string), // Format date
    confirmation_date: formData.get("confirmation_date")
      ? formattedDate(formData.get("confirmation_date") as string)
      : undefined, // Format date
    salary: Number(formData.get("salary")), // Convert to number
    employment_status: formData.get("employment_status"),
    updated_by: session?.user_id,
  });

  if (!validationResult.success) {
    return {
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  const {
    user_id,
    job_title,
    department_id,
    reporting_manager_id,
    employment_type,
    work_location,
    join_date,
    end_date,
    probation_end_date,
    confirmation_date,
    salary,
    currency_unit,
    updated_by,
  } = validationResult.data;

  // 2. Check if employee id  exists or not
  const existingEmployee = await User.findOne({
    where: { user_id },
  });
  if (!existingEmployee) {
    return { message: "Employee not found" };
  }

  // 3. Update employment_details in the database
  const updatedEmployee = await EmploymentDetails.create({
    user_id,
    job_title,
    department_id,
    reporting_manager_id : user_id,
    employment_type,
    work_location,
    join_date,
    end_date,
    probation_end_date,
    confirmation_date,
    salary,
    currency_unit,
    created_by: session?.user_id,
    updated_by : session?.user_id,
  });

  if (!updatedEmployee) {
    return {
      message: "Failed to update employment details. Please try again.",
    };
  }

  return { success: true };
}
