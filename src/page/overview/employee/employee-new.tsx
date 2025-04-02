import React from "react";
//
import BreadCrumb from "@/components/bread-crumb/bread-crumb";
import EmployeeNewComponent from "@/components/employee/new/employee-new";

export default function EmployeeNewPage() {
  return (
    <div>
      <BreadCrumb title="Create a new employee" />
      <EmployeeNewComponent />
    </div>
  );
}
