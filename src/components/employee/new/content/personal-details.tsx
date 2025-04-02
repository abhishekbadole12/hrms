import React from "react";
//
import ProfileCard from "../components/profile-card";
import FormCard from "../components/form-card";

export default function PersonalDetailsForm() {
  return (
    <div className="w-full grid gap-6 grid-cols-3">
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
