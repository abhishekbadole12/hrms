export const navItems = [
  {
    title: "Dashboard",
    icon: "dashboard-icon",
    path: "/dashboard",
    isInner: false,
  },
  {
    title: "Employee Management",
    icon: "employee-icon",
    path: "/employee/list",
    isInner: true,
    inner: [
      {
        title: "Employee List",
        icon: "list-icon",
        path: "/list",
      },
      {
        title: "Create Employee",
        icon: "add-icon",
        path: "/add-employee",
      },
      {
        title: "View Employee",
        icon: "view-icon",
        path: "/view-employee/<EMPLOYEEID>",
      },
      {
        title: "Edit Employee",
        icon: "edit-icon",
        path: "/edit-employee/<EMPLOYEEID>",
      },
      {
        title: "Employee Documents",
        icon: "documents-icon",
        path: "/employee-documents/<EMPLOYEEID>",
      },
      {
        title: "Employee Feedback",
        icon: "feedback-icon",
        path: "/employee-feedback/<EMPLOYEEID>",
      },
    ],
  },
  {
    title: "Payroll Management",
    icon: "payroll-icon",
    path: "/payroll",
    isInner: true,
    inner: [
      {
        title: "Payroll List",
        icon: "list-icon",
        path: "/list",
      },
      {
        title: "Generate Payslip",
        icon: "generate-icon",
        path: "/generate-payslip",
      },
      {
        title: "View Payslip",
        icon: "view-icon",
        path: "/view-payslip/<PAYSLIPID>",
      },
      {
        title: "Salary Structure",
        icon: "salary-icon",
        path: "/salary-structure",
      },
    ],
  },
  {
    title: "Leave Management",
    icon: "leave-icon",
    path: "/leave",
    isInner: true,
    inner: [
      {
        title: "Leave Balance",
        icon: "balance-icon",
        path: "/balance",
      },
      {
        title: "Request Leave",
        icon: "request-icon",
        path: "/request-leave",
      },
      {
        title: "Leave History",
        icon: "history-icon",
        path: "/leave-history",
      },
      {
        title: "Approve Leave",
        icon: "approve-icon",
        path: "/approve-leave",
      },
    ],
  },
  {
    title: "Attendance Management",
    icon: "attendance-icon",
    path: "/attendance",
    isInner: true,
    inner: [
      {
        title: "Mark Attendance",
        icon: "mark-icon",
        path: "/mark-attendance",
      },
      {
        title: "Attendance Report",
        icon: "report-icon",
        path: "/attendance-report",
      },
      {
        title: "Attendance History",
        icon: "history-icon",
        path: "/attendance-history",
      },
    ],
  },
  {
    title: "Performance Management",
    icon: "performance-icon",
    path: "/performance",
    isInner: true,
    inner: [
      {
        title: "Set Goals",
        icon: "goals-icon",
        path: "/set-goals",
      },
      {
        title: "Performance Reviews",
        icon: "review-icon",
        path: "/performance-reviews",
      },
      {
        title: "Employee Appraisal",
        icon: "appraisal-icon",
        path: "/employee-appraisal",
      },
    ],
  },
  {
    title: "Master Data",
    icon: "master-icon",
    path: "/master",
    isInner: true,
    inner: [
      {
        title: "Departments",
        icon: "department-icon",
        path: "/departments",
      },
      {
        title: "Designations",
        icon: "designation-icon",
        path: "/designations",
      },
      {
        title: "Employee Types",
        icon: "type-icon",
        path: "/employee-types",
      },
      {
        title: "Locations",
        icon: "location-icon",
        path: "/locations",
      },
    ],
  },
  {
    title: "Training & Development",
    icon: "training-icon",
    path: "/training",
    isInner: true,
    inner: [
      {
        title: "Training Programs",
        icon: "program-icon",
        path: "/training-programs",
      },
      {
        title: "Employee Training Records",
        icon: "records-icon",
        path: "/training-records",
      },
    ],
  },
  {
    title: "Recruitment",
    icon: "recruitment-icon",
    path: "/recruitment",
    isInner: true,
    inner: [
      {
        title: "Job Openings",
        icon: "openings-icon",
        path: "/job-openings",
      },
      {
        title: "Candidate List",
        icon: "candidate-icon",
        path: "/candidate-list",
      },
      {
        title: "Interview Schedule",
        icon: "schedule-icon",
        path: "/interview-schedule",
      },
    ],
  },
  {
    title: "Reports",
    icon: "reports-icon",
    path: "/reports",
    isInner: true,
    inner: [
      {
        title: "Employee Reports",
        icon: "employee-report-icon",
        path: "/employee-reports",
      },
      {
        title: "Payroll Reports",
        icon: "payroll-report-icon",
        path: "/payroll-reports",
      },
      {
        title: "Leave Reports",
        icon: "leave-report-icon",
        path: "/leave-reports",
      },
      {
        title: "Attendance Reports",
        icon: "attendance-report-icon",
        path: "/attendance-reports",
      },
      {
        title: "Performance Reports",
        icon: "performance-report-icon",
        path: "/performance-reports",
      },
    ],
  },
  {
    title: "Settings",
    icon: "settings-icon",
    path: "/settings",
    isInner: false,
  },
  {
    title: "Help & Support",
    icon: "support-icon",
    path: "/help",
    isInner: false,
  },
  {
    title: "Logout",
    icon: "logout-icon",
    path: "/logout",
    isInner: false,
  },
];
