export interface GenderOption {
  value: string;
  label: string;
}

// Gender Options
export const GENDER_OPTIONS = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

export interface RoleOption {
  value: string;
  label: string;
}

// Role Options
export const ROLE_OPTIONS = [
  { value: "admin", label: "Admin" },
  { value: "hr", label: "Human Resource" },
  { value: "employee", label: "Employee" },
  { value: "manager", label: "Manager" },
];

export interface TabOption {
  id: string;
  label: string;
  Icon: string;
}

// Tab Options
export const TAB_OPTIONS: TabOption[] = [
  {
    id: "PERSONAL_DETAILS",
    label: "Personal Details",
    Icon: "",
  },
  {
    id: "EMPLOYMENT_DETAILS",
    label: "Employment Details",
    Icon: "",
  },
  { id: "BANK_DETAILS", label: "Bank Details", Icon: "" },
  { id: "DOCUMENTS", label: "Documents", Icon: "" },
];
