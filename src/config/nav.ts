import {
  faBuilding,
  faCalendarCheck,
  faClipboardCheck,
  faLandmark,
  faLayerGroup,
  faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";

interface SubSection {
  label: string;
  route: string;
}

interface NavSection {
  label: string;
  iconComponent: any;
  route: string;
  isExpandable: boolean;
  subSections?: SubSection[];
}

interface NavItem {
  label: string;
  section: NavSection[];
}

export const navItems: NavItem[] = [
  // General Section
  {
    label: "Overview",
    section: [
      {
        label: "Dashboard",
        iconComponent: faLayerGroup,
        route: "/dashboard",
        isExpandable: false,
      },
    ],
  },

  // Management Section
  {
    label: "Management",
    section: [
      {
        label: "Employee",
        iconComponent: faLayerGroup,
        route: "/employee",
        isExpandable: true,
        subSections: [
          {
            label: "Cards",
            route: "/cards",
          },
          {
            label: "List",
            route: "/list",
          },
          {
            label: "Create",
            route: "/new?tab=PERSONAL_DETAILS",
          },
          {
            label: "Edit",
            route: "/edit/<EMPLOYEEID>",
          },
          // {
          //   label: "Employee Documents",
          //   route: "/documents/<EMPLOYEEID>",
          // },
        ],
      },
      {
        label: "Payroll",
        iconComponent: faLandmark,
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
        iconComponent: faPlaneDeparture,
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
        iconComponent: faCalendarCheck,
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
        iconComponent: faLayerGroup,
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
    section: [
      {
        label: "Overview",
        iconComponent: faBuilding, // Updated to iconComponent
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
    section: [
      {
        label: "Training & Development",
        iconComponent: faLayerGroup, // Updated to iconComponent
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
        iconComponent: faLayerGroup, // Updated to iconComponent
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
