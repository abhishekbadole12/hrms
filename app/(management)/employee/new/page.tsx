import React from "react";
import type { Metadata } from "next";
import EmployeeNewPage from "@/page/overview/employee/employee-new";

export const metadata: Metadata = {
  title: "Create a new employee",
  description: "HRMS employee",
};

export default function EmployeeNew() {
  return (
    <div>
      <EmployeeNewPage />
    </div>
  );
}
