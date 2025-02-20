import React from "react";
import ProfileCard from "./components/profile-card";
import FormCard from "./components/form-card";

export default function EmployeeNewComponent() {
  return (
    <div className="w-full grid gap-4 grid-cols-3">
      <div className="col-span-1">
        <ProfileCard />
      </div>

      {/* Form Card */}
      <div className="col-span-2">
        <FormCard />
      </div>
    </div>
  );
}
