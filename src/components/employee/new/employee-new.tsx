"use client";

import React, { useState } from "react";
//
//
import PersonalDetailsForm from "./content/personal-details";
import EmploymentDetailsForm from "./content/employment-details";
import BankDetailsForm from "./content/bank-details";
import ProfessionalDetailsForm from "./content/professional-details";
//
import Tabs from "@/components/common/tabs/tabs";
//
import FormWrapper from "./components/form-wrapper";
//
import { TAB_OPTIONS } from "@/utils/constant";

export default function EmployeeNewComponent() {
  const [activeTab, setActiveTab] = useState(TAB_OPTIONS[0].id); // Default to first tab

  return (
    <>
      <div className="mt-4" />
      <Tabs
        tabs={TAB_OPTIONS}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <div className="h-10" />

      <FormWrapper>
        <>
          {activeTab === "PERSONAL_DETAILS" && <PersonalDetailsForm />}
          {activeTab === "EMPLOYMENT_DETAILS" && <EmploymentDetailsForm />}
          {activeTab === "BANK_DETAILS" && <BankDetailsForm />}
          {activeTab === "DOCUMENTS" && <ProfessionalDetailsForm />}
        </>
      </FormWrapper>
    </>
  );
}
