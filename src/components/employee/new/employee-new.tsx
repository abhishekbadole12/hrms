"use client";

import React, { useState } from "react";
//
//
import PersonalDetailsForm from "./content/personal-details";
import EmploymentDetailsForm from "./content/employment-details";
import BankDetailsForm from "./content/bank-details";
import SocialAndMore from "./content/social-and-more";
//
import Tabs from "@/components/common/tabs/tabs";
//
import FormWrapper from "./components/form-wrapper";
//
import { TAB_OPTIONS } from "@/utils/constant";

export default function EmployeeNewComponent() {
  const [activeTab, setActiveTab] = useState(TAB_OPTIONS[0].id); // Default to first tab

  // Find the index of the current tab to move to the next one
  const handleFormSubmit = () => {
    const currentIndex = TAB_OPTIONS.findIndex((tab) => tab.id === activeTab);

    if (currentIndex < TAB_OPTIONS.length - 1) {
      setActiveTab(TAB_OPTIONS[currentIndex + 1].id);
    }
  };

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
        {activeTab === "PERSONAL_DETAILS" && <PersonalDetailsForm onSubmit={handleFormSubmit}/>}
        {activeTab === "EMPLOYMENT_DETAILS" && <EmploymentDetailsForm  onSubmit={handleFormSubmit}/>}
        {activeTab === "BANK_DETAILS" && <BankDetailsForm onSubmit={handleFormSubmit}/>}
        {activeTab === "DOCUMENTS" && <SocialAndMore />}
      </FormWrapper>
    </>
  );
}
