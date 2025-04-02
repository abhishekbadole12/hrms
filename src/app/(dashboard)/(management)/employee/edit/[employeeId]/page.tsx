import React from "react";
import EmployeeEditPage from "@/page/overview/employee/employee-edit";

export default async function EmployeeID({
  params,
}: {
  params: {
    employeeId: string;
  };
}) {
  return (
    <div>
      <EmployeeEditPage employeeId={params.employeeId} />
    </div>
  );
}
