import React from "react";
import EmployeeCard from "./components/employee-card";
import { EMPLOYEE_DUMMY_DATA } from "@/utils/constant";

export default function EmployeeCardsComponent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {EMPLOYEE_DUMMY_DATA.map((employee) => (
        <EmployeeCard key={employee.id} item={employee} />
      ))}
    </div>
  );
}
