import React from "react";
import ProfileCardEdit from "./components/profile-card-edit";
import FormCardEdit from "./components/form-card-edit";

export default function EmployeeEditComponent({
  employeeId,
}: {
  employeeId: string;
}) {
  return (
    <div className="w-full grid gap-6 grid-cols-3">
      <div className="col-span-1">
        <ProfileCardEdit />
      </div>

      {/* Form Card */}
      <div className="col-span-2">
        <FormCardEdit />
      </div>
    </div>
  );
}
