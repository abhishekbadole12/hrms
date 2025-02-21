import BreadCrumb from "@/components/bread-crumb/bread-crumb";
import EmployeeCardsComponent from "@/components/employee/cards/employee-cards";
import React from "react";

export default function EmployeeCardsPage() {
  return (
    <div>
      <BreadCrumb title="Employee cards" />
      <EmployeeCardsComponent />
    </div>
  );
}
