import { z } from "zod";

// User registration Zod schema
export const RegisterUserSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  middle_name: z.string().min(1, "Middle name is required"),
  last_name: z.string().min(1, "Last name is required"),
  gender: z.enum(["MALE", "FEMALE", "OTHER"], {
    errorMap: () => ({ message: "Invalid gender" }),
  }),
  country_code: z.string().regex(/^\+\d{1,3}$/, "Invalid country code"),
  phone_number: z
    .string()
    .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  email: z.string().email("Invalid email format"),
  user_role: z.enum(["ADMIN", "MANAGER", "EMPLOYEE", "HR"], {
    errorMap: () => ({ message: "User role is required" }),
  }),
  status: z.enum(["ACTIVE", "INACTIVE"]),
  isVerified: z.boolean({
    required_error: "isVerified is required",
    invalid_type_error: "isVerified must be a boolean",
  }),
});

//
//
// User update Zod schema
export const UpdateUserSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  middle_name: z.string().min(1, "Middle name is required"),
  last_name: z.string().min(1, "Last name is required"),
  gender: z.enum(["MALE", "FEMALE", "OTHER"], {
    errorMap: () => ({ message: "Invalid gender" }),
  }),
  country_code: z.string().regex(/^\+\d{1,3}$/, "Invalid country code"),
  phone_number: z
    .string()
    .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  // email: z.string().email("Invalid email format"),
  user_role: z.enum(["ADMIN", "MANAGER", "EMPLOYEE", "HR"], {
    errorMap: () => ({ message: "User role is required" }),
  }),
  status: z.enum(["ACTIVE", "INACTIVE"]),
  isVerified: z.boolean({
    required_error: "isVerified is required",
    invalid_type_error: "isVerified must be a boolean",
  }),
});

//
//
// Login user Zod schema
export const LoginUserSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(1, "Password is required"),
});

export type ISessionPayload = {
  user_id: string;
  user_role: string;
  expiresAt: Date;
};

export type LoginFormState = {
  email?: string[];
  password?: string[];
  errors?: {
    email?: string[];
    password?: string[];
  };
  message?: string;
};

// User registration form state
export const CreateEmploymentDetails = z.object({
  user_id: z.string().min(1, "Employee ID is required"),
  job_title: z.string().min(1, "Job title is required"),
  department_id: z.string().min(1, "Department is required"),
  reporting_manager_id: z.string().optional(),
  employment_type: z.enum(
    ["FULL_TIME", "PART_TIME", "CONTRACT", "INTERNSHIP"],
    {
      errorMap: () => ({ message: "Employment type is required" }),
    }
  ),
  work_location: z.string().min(1, "Work location is required"),
  join_date: z.date(),
  end_date: z.date().optional(),
  probation_end_date: z.date(),
  confirmation_date: z.date().optional(),
  salary: z.number().optional(),
  currency_unit: z.enum(["INR", "USD", "EUR"]).optional(),
  is_active: z.boolean().optional(),
  created_by: z.string().optional(),
  updated_by: z.string().optional(),
});

//  update employment details
export const UpdateEmploymentDetails = z.object({
  user_id: z.string().min(1, "Employee ID is required"),
  job_title: z.string().min(1, "Job title is required"),
  department_id: z.string().min(1, "Department is required"),
  reporting_manager_id: z.string().optional(),
  employment_type: z.enum(
    ["FULL_TIME", "PART_TIME", "CONTRACT", "INTERNSHIP"],
    {
      errorMap: () => ({ message: "Employment type is required" }),
    }
  ),
  work_location: z.string().min(1, "Work location is required"),
  join_date: z.date(),
  end_date: z.date().optional(),
  probation_end_date: z.date(),
  confirmation_date: z.date().optional(),
  salary: z.number().optional(),
  currency_unit: z.enum(["INR", "USD", "EUR"]).optional(),
  is_active: z.boolean().optional(),
  created_by: z.string().optional(),
  updated_by: z.string().optional(),
});
