import BreadCrumb from "@/components/bread-crumb/bread-crumb";
import EmployeeEditComponent from "@/components/employee/edit/employee-edit";

import React from "react";

export default function EmployeeEditPage({
  employeeId,
}: {
  employeeId: string;
}) {
  return (
    <div>
      <BreadCrumb title="Edit employee" />
      <EmployeeEditComponent employeeId={employeeId} />
    </div>
  );
}
