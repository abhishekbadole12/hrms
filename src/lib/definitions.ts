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
  })
});

// Login user Zod schema
export const LoginUserSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(1, "Password is required"),
});

export type ISessionPayload = {
  user_id: string;
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
