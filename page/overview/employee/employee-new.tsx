import BreadCrumb from "@/components/bread-crumb/bread-crumb";
import Tabs from "@/components/common/tabs/tabs";
import EmployeeNewComponent from "@/components/employee/new/employee-new";
import { TAB_OPTIONS } from "@/utils/constant";
import React from "react";

export default function EmployeeNewPage() {
  return (
    <div>
      <BreadCrumb title="Create a new employee" />
      <div className="mt-4" />
      <Tabs tabs={TAB_OPTIONS} defaultTab={TAB_OPTIONS[0]}/>
      <div className="h-10" />
      <EmployeeNewComponent />
    </div>
  );
}
