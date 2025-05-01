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

// Create User Form
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

// Update Employment Details Form
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

// Create Previous Employment Details Form
export const CreatePreviousEmploymentDetail = z.object({
  company_name: z.string().nonempty("Company name is required"),
  position: z.string().nonempty("Position is required"),
  employment_type: z.string().nonempty("Employment type is required"),
  start_date: z.date({ required_error: "Start date is required" }),
  end_date: z.date({ required_error: "End date is required" }),
  salary: z.number({ required_error: "Salary is required" }),
  reference_name: z.string().nonempty("Reference name is required"),
  reference_email: z.string().email("Invalid email format"),
  reference_phone_number: z.string().nonempty("Reference number is required"),
  //
  user_id: z.string().nonempty("User ID is required"),
  created_by: z.string().nonempty("Created by is required"),
  updated_by: z.string().nonempty("Updated by is required"),
});

// Add Bank Details Form
export const AddBankDetails = z.object({
  account_holder: z.string().nonempty("Account holder name is required"),
  account_number: z.string().nonempty("Account number is required"),
  bank_name: z.string().nonempty("Bank name is required"),
  branch_name: z.string().nonempty("Branch name is required"),
  ifsc_code: z
    .string()
    .nonempty("IFSC code is required")
    .regex(/^[A-Z]{4}0[A-Z0-9]{6}$/, "Invalid IFSC code format"),
  account_type: z.enum(["SAVINGS", "CURRENT"], {
    errorMap: () => ({ message: "Account type is required" }),
  }),
  pan_number: z
    .string()
    .nonempty("PAN number is required")
    .regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN number format"),
  //
  user_id: z.string().nonempty("User ID is required"),
  created_by: z.string().nonempty("Created by is required"),
  updated_by: z.string().nonempty("Updated by is required"),
});
