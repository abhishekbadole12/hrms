"use client";

import React, { useEffect, useState } from "react";
//
import BoxWrapper from "@/components/wrapper/box-wrapper";
import Badge from "@/components/common/badge/badge";
import TableFooter from "@/components/common/table/components/table-footer";
import Table from "@/components/common/table/table";
import TableHeader from "@/components/common/table/components/table-header";
import Icon from "@/components/common/icon/icon";
//
import { useUserStore } from "@/store/useUserStore";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
//

const TABLE_HEAD = [
  "Employee Id",
  "Full name",
  "Email",
  "Phone number",
  "Role",
  "Status",
  "Actions",
];

export default function EmployeeListComponent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const { fetchAllUsers, users } = useUserStore();
  const [currentPage, setCurrentPage] = useState(1); // page number
  const [rowsPerPage, setRowsPerPage] = useState(7); // limit
  const [filterRole, setFilterRole] = useState(searchParams.get("role"));
  const [filterSort, setFilterSort] = useState(searchParams.get("sort"));

  useEffect(() => {
    fetchAllUsers();
  }, []);

  useEffect(() => {
    const role = searchParams.get("role");
    const sort = searchParams.get("sort");

    setFilterRole(role || "");
    setFilterSort(sort || "");
    setCurrentPage(1);
  }, [searchParams]);

  let filteredUsers = filterRole
    ? users.filter((user) => user.user_role === filterRole)
    : users;

  if (filterSort) {
    filteredUsers = [...filteredUsers].sort((a, b) => {
      if (filterSort === "ASC") {
        return a.first_name.localeCompare(b.first_name);
      } else if (filterSort === "DESC") {
        return b.first_name.localeCompare(a.first_name);
      }
      return 0;
    });
  }

  const totalPages = Math.ceil(filteredUsers.length / rowsPerPage);

  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const tbodyData = paginatedUsers.map((user) => ({
    id: user.user_id,
    data: [
      user.user_id,
      `${user.first_name} ${user?.middle_name || ""} ${user.last_name}`,
      user.email,
      `${user?.country_code || ""} ${user.phone_number}`,
      <Badge type="default" label={user.user_role} />, // e.g., "Admin"
      <Badge
        type={user.status === "ACTIVE" ? "success" : "warning"}
        label={user.status}
      />,
      <div className="flex items-center gap-1">
        <div className="w-9 h-9 flex justify-center items-center text-center rounded-full cursor-pointer text-red-400 hover:bg-zinc-100 hover:text-red-500 transition-colors duration-200">
          <Icon
            icon="delete"
            className="text-base"
            onClick={() => {
              console.log("Delete user:", user.user_id);
            }}
          />
        </div>

        <div className="w-9 h-9 flex justify-center items-center text-center rounded-full cursor-pointer text-gray-400 hover:bg-zinc-100 hover:text-gray-500 transition-colors duration-200">
          <Icon
            icon="menu"
            className="text-base"
            onClick={() => {
              console.log("menu user:", user.user_id);
            }}
          />
        </div>
      </div>,
    ],
  }));

  // handle header dropdown
  const handleChange = ({
    name,
    value,
  }: {
    name: "role" | "search" | "sort";
    value: { name: string; value: string } | null;
  }) => {
    const search = new URLSearchParams(window.location.search);
    setCurrentPage(1);

    const actualValue = value?.value || "";

    if (name === "role") {
      actualValue ? search.set("role", actualValue) : search.delete("role");
    }

    if (name === "sort") {
      actualValue ? search.set("sort", actualValue) : search.delete("sort");
    }

    if (name === "search") {
      actualValue ? search.set("search", actualValue) : search.delete("search");
    }

    router.push(`${pathname}?${search.toString()}`);
  };

  return (
    <BoxWrapper className="w-full h-full p-5">
      {/* Table header */}
      <TableHeader
        selectedRole={filterRole}
        selectedSort={filterSort}
        onRoleChange={(value) => handleChange({ name: "role", value })}
        onSortChange={(value) => handleChange({ name: "sort", value })}
      />

      {/* Table body */}
      <Table theadData={TABLE_HEAD} tbodyData={tbodyData} />

      {/* Table footer - pagination*/}
      <TableFooter
        currentPage={currentPage}
        totalPages={totalPages}
        rowsPerPage={rowsPerPage}
        onPageChange={setCurrentPage}
        onRowsPerPageChange={(newRows) => {
          setRowsPerPage(newRows);
          setCurrentPage(1); // reset page on rows change
        }}
        rowsPerPageOptions={[7, 14, 21]}
      />
    </BoxWrapper>
  );
}
