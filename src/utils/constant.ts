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
  {
    id: "PREVIOUS_JOB_DETAILS",
    label: "Previous Job Details",
    Icon: "",
  },
  { id: "BANK_DETAILS", label: "Bank Details", Icon: "" },
  { id: "DOCUMENTS", label: "Documents", Icon: "" },
];

// Department options
export const DEPARTMENT_OPTIONS = [
  { value: "HR", label: "Human Resource" },
  { value: "IT", label: "Information Technology" },
  { value: "FINANCE", label: "Finance" },
  { value: "MARKETING", label: "Marketing" },
  { value: "SALES", label: "Sales" },
];

// Employeement type options
export const EMPLOYMENT_TYPE_OPTIONS = [
  { value: "FULL_TIME", label: "Full Time" },
  { value: "PART_TIME", label: "Part Time" },
  { value: "CONTRACT", label: "Contract" },
  { value: "INTERN", label: "Intern" },
  { value: "FREELANCE", label: "Freelance" },
  { value: "TEMPORARY", label: "Temporary" },
  { value: "PROBATION", label: "Probation" },
];

// Work location options
export const WORK_LOCATION_OPTIONS = [
  { value: "REMOTE", label: "Remote" },
  { value: "ONSITE", label: "Onsite" },
  { value: "HYBRID", label: "Hybrid" },
];

// Work schedule options
export const WORK_SCHEDULE_OPTIONS = [
  { value: "FULL_TIME", label: "Full Time" },
  { value: "PART_TIME", label: "Part Time" },
  { value: "FLEXIBLE", label: "Flexible" },
  { value: "SHIFT", label: "Shift" },
];
