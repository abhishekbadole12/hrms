import React from "react";
import EmployeeEditPage from "@/page/overview/employee/employee-edit";

export default async function EmployeeID({
  params,
}: {
  params: Promise<{
    user_id: string;
  }>;
}) {
  const user_id = (await params).user_id;
  
  return (
    <div>
      <EmployeeEditPage user_id={user_id} />
    </div>
  );
}
