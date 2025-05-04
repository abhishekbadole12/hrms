"use client";

import React, { useEffect, useState } from "react";
//
import EmployeeCard from "./components/employee-card";
import Loading from "@/components/common/snakebar/loading";
//
import { useUserStore } from "@/store/useUserStore";
// import { EMPLOYEE_DUMMY_DATA } from "@/utils/constant";

export default function EmployeeCardsComponent() {
  const { users, fetchAllUsers, setUsers } = useUserStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      await fetchAllUsers();
      setLoading(false);
    };

    fetchUsers();
  }, []);

  // loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center w-full min-h-full">
        <Loading size="sm" />
      </div>
    );
  }

  // empty state
  if (users.length === 0) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <p className="text-center text-gray-500">No employees found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 overflow-auto md:grid-cols-2 lg:grid-cols-3">
      {users.length > 0 &&
        users.map((employee) => (
          <EmployeeCard key={employee.user_id} item={employee} />
        ))}
    </div>
  );
}
