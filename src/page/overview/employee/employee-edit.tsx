import BreadCrumb from "@/components/bread-crumb/bread-crumb";
import EmployeeEditComponent from "@/components/employee/edit/employee-edit";

import React from "react";

export default function EmployeeEditPage({
  user_id,
}: {
  user_id: string;
}) {
  return (
    <div>
      <BreadCrumb title="Edit employee" />
      <EmployeeEditComponent user_id={user_id} />
    </div>
  );
}
