import React from "react";
import type { Metadata } from "next";
import EmployeeCardsPage from "@/page/overview/employee/employee-cards";

export const metadata: Metadata = {
  title: "Employee cards",
  description: "HRMS employee",
};

export default function EmployeeNew() {
  return (
    <div>
      <EmployeeCardsPage />
    </div>
  );
}
