export interface GenderOption {
  value: string;
  label: string;
}

// Gender Options
export const GENDER_OPTIONS = [
  { value: "MALE", label: "Male" },
  { value: "FEMALE", label: "Female" },
  { value: "OTHER", label: "Other" },
];

export interface RoleOption {
  value: string;
  label: string;
}

// Role Options
export const ROLE_OPTIONS = [
  { value: "ADMIN", label: "Admin" },
  { value: "HR", label: "Human Resource" },
  { value: "EMPLOYEE", label: "Employee" },
  { value: "MANAGER", label: "Manager" },
];

export interface ITabOption {
  id: string;
  label: string;
  Icon: string;
}

// Tab Options
export const TAB_OPTIONS: ITabOption[] = [
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
