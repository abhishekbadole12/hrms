"use client";

import React, { useEffect, useState } from "react";
//
import { usePathname, useRouter, useSearchParams } from "next/navigation";
//
import FormWrapper from "../new/components/form-wrapper";
//
import Tabs from "@/components/common/tabs/tabs";
//
import EmploymentDetailsEditForm from "./content/employment-details-edit";
import PersonalDetailsEditForm from "./content/personal-details-edit";
import PreviousJobEditForm from "./content/previous-employement-edit";
import BankDetailsEditForm from "./content/bank-details-edit";
//
import { useUserStore } from "@/store/useUserStore";
//
import { TAB_OPTIONS } from "@/utils/constant";
//

export default function EmployeeEditComponent({
  user_id,
}: {
  user_id: string;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const initialTab = searchParams.get("tab") || "PERSONAL_DETAILS";

  const { getUserProfileDetailsById } = useUserStore(); // useUserStore store

  const [activeTab, setActiveTab] = useState(initialTab); // Default to first tab

  // When tab changes, update the query param in URL
  const handleTabChange = (newTab: string) => {
    setActiveTab(newTab);
    router.push(`${pathname}?tab=${newTab}`);
  };

  //
  useEffect(() => {
    getUserProfileDetailsById(user_id);
  }, []);

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
          <PersonalDetailsEditForm userId={user_id} />
        )}

        {activeTab === "EMPLOYMENT_DETAILS" && (
          <EmploymentDetailsEditForm userId={user_id} />
        )}

        {activeTab === "PREVIOUS_JOB_DETAILS" && (
          <PreviousJobEditForm userId={user_id} />
        )}

        {activeTab === "BANK_DETAILS" && (
          <BankDetailsEditForm userId={user_id} />
        )}
      </FormWrapper>
    </>
  );
}
