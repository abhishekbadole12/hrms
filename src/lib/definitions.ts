import { z } from "zod";

// User registration Zod schema
export const RegisterUserSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  gender: z.enum(["MALE", "FEMALE", "OTHER"], {
    errorMap: () => ({ message: "Invalid gender" }),
  }),
  phone_number: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number"), // You can adjust the regex as per your needs
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  user_role: z.enum(["ADMIN", "MANAGER", "EMPLOYEE", "HR"], {
    errorMap: () => ({ message: "User role is required" }),
  }),
});

// Login user Zod schema
export const LoginUserSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(1, "Password is required"),
});

export type SessionPayload = {
  user_id: string | number;
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
