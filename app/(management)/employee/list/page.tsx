import React from "react";
import type { Metadata } from "next";
import EmployeePage from "@/page/overview/employee/employee-list";

export const metadata: Metadata = {
  title: "Employee",
  description: "HRMS employee",
};

export default function EmployeeList() {
  return <EmployeePage />;
}
