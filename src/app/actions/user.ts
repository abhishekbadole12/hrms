"use server";

import { verifySession } from "@/lib/session";
import {
  RegisterUserSchema,
  CreateEmploymentDetails,
  UpdateUserSchema,
  UpdateEmploymentDetails,
} from "@/lib/definitions";
//
import EmploymentDetails from "@/models/EmploymentDetail";
import User from "@/models/User";
//
import { canUpdate, UserRole } from "@/utils/canUpdateUser";

// Helper function to format date
const formattedDate = (date: string) => new Date(date);

//
// This function is used to register a new user
//
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

  // console.log(
  //   `Generated password for ${newUser.email}:`,
  //   (newUser as any)._plainPassword
  // );

  return { success: true, user_id: newUser.user_id };
}

//
// This function is used to update user details
//
export async function updateUser(state: unknown, formData: FormData) {
  // Extract user from session
  const session = await verifySession();

  if (!session.isAuth) {
    return { message: "Unauthroized" };
  }

  const user_id = formData.get("user_id") as string;

  if (!user_id) {
    return { message: "User ID is required" };
  }

  // 1. Validate input fields
  const validationResult = UpdateUserSchema.safeParse({
    first_name: formData.get("first_name"),
    middle_name: formData.get("middle_name"),
    last_name: formData.get("last_name"),
    gender: formData.get("gender"),
    // email: formData.get("email"),
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
    // email,
    country_code,
    phone_number,
    user_role,
    status,
  } = validationResult.data;

  // 2. Check if user already exists
  const existingUser = await User.findOne({
    where: { user_id, user_role },
    attributes: ["user_id", "user_role"],
  });

  if (!existingUser) {
    return { message: "User doesn't exists" };
  }

  if (
    !canUpdate(
      session.user_id,
      user_id,
      session.user_role as UserRole,
      existingUser.user_role as UserRole
    )
  ) {
    return { message: "Unauthorized to update this user" };
  }

  // 3. Update user details
  const [affectedCount] = await User.update(
    {
      first_name,
      middle_name,
      last_name,
      gender,
      // email,
      country_code,
      phone_number,
      user_role,
      status,
      updated_by: session.user_id,
    },
    {
      where: { user_id },
    }
  );

  if (affectedCount === 0) {
    return { message: "Failed to update user" };
  }

  return { success: true, user_id };
}

//
//
// This function is used to update employment details of an existing user
export async function createEmploymentDetails(
  state: unknown,
  formData: FormData
) {
  // Extract user from session
  const session = await verifySession();

  if (!session.isAuth) {
    return { message: "Unauthroized" };
  }

  // 1. Validate input fields
  const validationResult = CreateEmploymentDetails.safeParse({
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
  const createEmploymentDetail = await EmploymentDetails.create({
    user_id,
    job_title,
    department_id,
    reporting_manager_id: user_id,
    employment_type,
    work_location,
    join_date,
    end_date,
    probation_end_date,
    confirmation_date,
    salary,
    currency_unit,
    created_by: session?.user_id,
    updated_by: session?.user_id,
  });

  if (!createEmploymentDetail) {
    return {
      message: "Failed to create employment details. Please try again.",
    };
  }

  return { success: true };
}

//
//
// Update employment details
export async function updateEmploymentDetails(
  state: unknown,
  formData: FormData
) {
  // Extract user from session
  const session = await verifySession();

  if (!session.isAuth) {
    return { message: "Unauthroized" };
  }

  // 1. Validate input fields
  const validationResult = UpdateEmploymentDetails.safeParse({
    user_id: formData.get("user_id"),
    //
    job_title: formData.get("job_title"),
    department_id: formData.get("department_id"),
    reporting_manager_id: formData.get("reporting_manager_id"),
    employment_type: formData.get("employment_type"),
    work_location: formData.get("work_location"),
    join_date: formattedDate(formData.get("join_date") as string), // Format date
    end_date: formData.get("end_date")
    ? formattedDate(formData.get("end_date") as string)
    : undefined, // Format date
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
    //
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
  } = validationResult.data;

  // 2. Check if employee id  exists or not
  const existingEmployee = await User.findOne({
    where: { user_id },
  });

  if (!existingEmployee) {
    return { message: "Employee not found" };
  }

  // 3. Check if employment details already exist
  const existingDetails = await EmploymentDetails.findOne({
    where: { user_id },
  });

  let result;

  if (existingDetails) {
    // If exists, update
    const [affectedCount] = await EmploymentDetails.update(
      {
        user_id,
        job_title,
        department_id,
        reporting_manager_id: user_id,
        employment_type,
        work_location,
        join_date,
        end_date,
        probation_end_date,
        confirmation_date,
        salary,
        currency_unit,
        updated_by: session.user_id,
      },
      {
        where: { user_id },
      }
    );

    result = {
      message:
        affectedCount > 0
          ? "Employment details updated successfully"
          : "No changes made to employment details",
    };
  } else {
    // If not exists, create new
    await EmploymentDetails.create({
      user_id,
      job_title,
      department_id,
      reporting_manager_id: user_id,
      employment_type,
      work_location,
      join_date,
      end_date,
      probation_end_date,
      confirmation_date,
      salary,
      currency_unit,
      created_by: session.user_id,
      updated_by: session.user_id,
    });

    result = { message: "Employment details created successfully" };
  }

  return result;
}
