import { JSX } from "react";
import { Icons } from "@/constants";

interface SubSection {
  label: string;
  route: string;
}

interface NavSection {
  label: string;
  iconComponent: JSX.Element;
  route: string;
  isExpandable: boolean;
  subSections?: SubSection[];
}

interface NavItem {
  label: string;
  subSections: NavSection[];
}

export const navItems: NavItem[] = [
  // General Section
  {
    label: "Overview", // Changed from General to Overview
    subSections: [
      {
        label: "Dashboard", // Updated the label to be more descriptive
        iconComponent: Icons.Dashboard,
        route: "/dashboard",
        isExpandable: false,
      },
    ],
  },

  // Management Section
  {
    label: "Management",
    subSections: [
      {
        label: "Employee",
        iconComponent: Icons.Dashboard,
        route: "/employee/list",
        isExpandable: true,
        subSections: [
          {
            label: "Employee List",
            route: "/list",
          },
          {
            label: "Create Employee",
            route: "/add-employee",
          },
          {
            label: "View Employee",
            route: "/view-employee/<EMPLOYEEID>",
          },
          {
            label: "Edit Employee",
            route: "/edit-employee/<EMPLOYEEID>",
          },
          {
            label: "Employee Documents",
            route: "/employee-documents/<EMPLOYEEID>",
          },
        ],
      },
      {
        label: "Payroll",
        iconComponent: Icons.Dashboard,
        route: "/payroll",
        isExpandable: true,
        subSections: [
          {
            label: "Payroll List",
            route: "/list",
          },
          {
            label: "Generate Payslip",
            route: "/generate-payslip",
          },
          {
            label: "View Payslip",
            route: "/view-payslip/<PAYSLIPID>",
          },
          {
            label: "Salary Structure",
            route: "/salary-structure",
          },
        ],
      },
      {
        label: "Leave",
        iconComponent: Icons.Dashboard,
        route: "/leave",
        isExpandable: true,
        subSections: [
          {
            label: "Leave Balance",
            route: "/balance",
          },
          {
            label: "Request Leave",
            route: "/request-leave",
          },
          {
            label: "Leave History",
            route: "/leave-history",
          },
          {
            label: "Approve Leave",
            route: "/approve-leave",
          },
        ],
      },
      {
        label: "Attendance",
        iconComponent: Icons.Dashboard,
        route: "/attendance",
        isExpandable: true,
        subSections: [
          {
            label: "Mark Attendance",
            route: "/mark-attendance",
          },
          {
            label: "Attendance Report",
            route: "/attendance-report",
          },
          {
            label: "Attendance History",
            route: "/attendance-history",
          },
        ],
      },
      {
        label: "Performance",
        iconComponent: Icons.Dashboard,
        route: "/performance",
        isExpandable: true,
        subSections: [
          {
            label: "Set Goals",
            route: "/set-goals",
          },
          {
            label: "Performance Reviews",
            route: "/performance-reviews",
          },
          {
            label: "Employee Appraisal",
            route: "/employee-appraisal",
          },
        ],
      },
    ],
  },

  // Master Data Section
  {
    label: "Master Data",
    subSections: [
      {
        label: "Overview",
        iconComponent: Icons.Dashboard, // Updated to iconComponent
        route: "/training",
        isExpandable: true,
        subSections: [
          {
            label: "Departments",
            route: "/departments",
          },
          {
            label: "Designations",
            route: "/designations",
          },
          {
            label: "Employee Types",
            route: "/employee-types",
          },
          {
            label: "Locations",
            route: "/locations",
          },
        ],
      },
    ],
  },

  // Training & Recruitment Section
  {
    label: "Training & Recruitment",
    subSections: [
      {
        label: "Training & Development",
        iconComponent: Icons.Dashboard, // Updated to iconComponent
        route: "/training",
        isExpandable: true,
        subSections: [
          {
            label: "Training Programs",
            route: "/training-programs",
          },
          {
            label: "Employee Training Records",
            route: "/training-records",
          },
        ],
      },
      {
        label: "Recruitment",
        iconComponent: Icons.Dashboard, // Updated to iconComponent
        route: "/recruitment",
        isExpandable: true,
        subSections: [
          {
            label: "Job Openings",
            route: "/job-openings",
          },
          {
            label: "Candidate List",
            route: "/candidate-list",
          },
          {
            label: "Interview Schedule",
            route: "/interview-schedule",
          },
        ],
      },
    ],
  },
];
