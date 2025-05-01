import {
  faBriefcase,
  faBuildingColumns,
  faBusinessTime,
  faFileLines,
  faUser,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

export interface GenderOption {
  value: string;
  name: string;
}

// Gender Options
export const GENDER_OPTIONS = [
  { value: "MALE", name: "Male" },
  { value: "FEMALE", name: "Female" },
  { value: "OTHER", name: "Other" },
];

export interface RoleOption {
  value: string;
  name: string;
}

// Role Options
export const ROLE_OPTIONS = [
  { value: "ADMIN", name: "Admin" },
  { value: "HR", name: "Human Resource" },
  { value: "EMPLOYEE", name: "Employee" },
  { value: "MANAGER", name: "Manager" },
];

export interface ITabOption {
  id: string;
  name: string;
  Icon: IconDefinition;
}

// Tab Options
export const TAB_OPTIONS: ITabOption[] = [
  {
    id: "PERSONAL_DETAILS",
    name: "Personal Details",
    Icon: faUser,
  },
  {
    id: "EMPLOYMENT_DETAILS",
    name: "Employment Details",
    Icon: faBriefcase,
  },
  {
    id: "PREVIOUS_JOB_DETAILS",
    name: "Previous Job Details",
    Icon: faBusinessTime,
  },
  {
    id: "BANK_DETAILS",
    name: "Bank Details",
    Icon: faBuildingColumns,
  },
  {
    id: "DOCUMENTS",
    name: "Documents",
    Icon: faFileLines,
  },
];

interface IDEPARTMENT_OPTIONS {
  id: number;
  value: string;
  name: string;
}

// Department options
export const DEPARTMENT_OPTIONS: IDEPARTMENT_OPTIONS[] = [
  { id: 1, value: "HR", name: "Human Resource" },
  { id: 2, value: "IT", name: "Information Technology" },
  { id: 3, value: "FINANCE", name: "Finance" },
  { id: 4, value: "MARKETING", name: "Marketing" },
  { id: 5, value: "SALES", name: "Sales" },
];

// Employeement type options
export const EMPLOYMENT_TYPE_OPTIONS = [
  { value: "FULL_TIME", name: "Full Time" },
  { value: "PART_TIME", name: "Part Time" },
  { value: "CONTRACT", name: "Contract" },
  { value: "INTERN", name: "Intern" },
];

// Work location options
export const WORK_LOCATION_OPTIONS = [
  { value: "REMOTE", name: "Remote" },
  { value: "ONSITE", name: "Onsite" },
  { value: "HYBRID", name: "Hybrid" },
];

// Work schedule options
export const WORK_SCHEDULE_OPTIONS = [
  { value: "FULL_TIME", name: "Full Time" },
  { value: "PART_TIME", name: "Part Time" },
  { value: "FLEXIBLE", name: "Flexible" },
  { value: "SHIFT", name: "Shift" },
];

// Account types
export const ACCOUNT_TYPES = [
  { value: "SAVINGS", name: "Savings" },
  { value: "CURRENT", name: "Current" },
];
