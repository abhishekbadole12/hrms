export const navs = [
  {
    title: "dashboard",
    icon: "",
    path: "/dashboard",
    isInner: false,
  },
  {
    title: "employee",
    icon: "",
    path: "/emmployee/list",
    isInner: true,
    inner: [
      {
        title: "list",
        icon: "",
        path: "/list",
      },
      {
        title: "Create Employee",
        icon: "",
        path: "/add-employee",
      },
      {
        title: "View Employee",
        icon: "",
        path: "/view-employee/<EMPLOYEEID>",
      },
    ],
  },
  {
    title: "master",
    icon: "",
    path: "/master/department",
    isInner: true,
    inner: [
      {
        title: "list",
        icon: "",
        path: "/list",
      },
      {
        title: "Create Department",
        icon: "",
        path: "/add-department",
      },
      {
        title: "View Department",
        icon: "",
        path: "/view-employee/<DEPARTMENTID>",
      },
    ],
  },
  {
    title: "calendar",
    icon: "",
    path: "/calendar",
    isInner: false,
  },
];
