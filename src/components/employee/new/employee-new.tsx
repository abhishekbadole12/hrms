"use client";

import React, { useState } from "react";
//
//
import PersonalDetailsForm from "./content/personal-details";
import EmploymentDetailsForm from "./content/employment-details";
import PreviousJobForm from "./content/previous-employement";
import BankDetailsForm from "./content/bank-details";
import SocialAndMore from "./content/social-and-more";
//
import Tabs from "@/components/common/tabs/tabs";
//
import FormWrapper from "./components/form-wrapper";
//
import { TAB_OPTIONS } from "@/utils/constant";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function EmployeeNewComponent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const initialTab = searchParams.get("tab") || "PERSONAL_DETAILS";

  const [activeTab, setActiveTab] = useState(initialTab); // Default to first tab

  // When tab changes, update the query param in URL
  const handleTabChange = (newTab: string) => {
    const currentIndex = TAB_OPTIONS.findIndex((tab) => tab.id === activeTab);

    if (currentIndex < TAB_OPTIONS.length - 1) return;
    setActiveTab(newTab);
    router.push(`${pathname}?tab=${newTab}`);
  };

  // handle form submission
  const handleFormSubmit = (user_id?: string) => {
    const currentIndex = TAB_OPTIONS.findIndex((tab) => tab.id === activeTab);

    if (currentIndex < TAB_OPTIONS.length - 1) {
      const nextTab = TAB_OPTIONS[currentIndex + 1].id;

      // Only append user_id if it's not already in the pathname
      let newPath = pathname;
      if (user_id && !pathname.includes(user_id)) {
        newPath = `${pathname}/${user_id}`;
      }

      setActiveTab(nextTab);
      router.push(`${newPath}?tab=${nextTab}`);
    }
  };

  return (
    <>
      <div className="mt-4" />
      <Tabs
        tabs={TAB_OPTIONS}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
      <div className="h-10" />

      <FormWrapper>
        {activeTab === "PERSONAL_DETAILS" && (
          <PersonalDetailsForm onSubmit={handleFormSubmit} />
        )}
        {activeTab === "EMPLOYMENT_DETAILS" && (
          <EmploymentDetailsForm onSubmit={handleFormSubmit} />
        )}
        {activeTab === "PREVIOUS_JOB_DETAILS" && (
          <PreviousJobForm onSubmit={handleFormSubmit} />
        )}
        {activeTab === "BANK_DETAILS" && (
          <BankDetailsForm onSubmit={handleFormSubmit} />
        )}
        {activeTab === "DOCUMENTS" && <SocialAndMore />}
      </FormWrapper>
    </>
  );
}
