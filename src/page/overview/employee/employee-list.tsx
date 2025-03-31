import BreadCrumb from "@/components/bread-crumb/bread-crumb";
import EmployeeComponent from "@/components/employee/list/employee-list";
import React from "react";

export default function EmployeeListPage() {
  return (
    <div>
      <BreadCrumb title="Employee" />
      <EmployeeComponent />
    </div>
  );
}
