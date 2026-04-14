import React from "react";
//
import Input from "@/components/custom/input";
import Select from "@/components/custom/select";
//
import Icon from "../../icon/icon";
//
import { ROLE_OPTIONS, SORT_OPTIONS } from "@/utils/constant";
//

interface ITableHeader {
  selectedRole: string | null;
  selectedSort: string | null;
  onRoleChange: (name: string, value: string) => void;
  onSortChange: (name: string, value: string) => void;
}

// For All this new is created
const NEW_ROLE_OPTIONS = [{ name: "All", value: "" }, ...ROLE_OPTIONS];

export default function TableHeader({
  selectedRole,
  selectedSort,
  onRoleChange,
  onSortChange,
}: ITableHeader) {
  return (
    <div className="flex gap-4 mb-5">
      <Select
        name="role"
        options={NEW_ROLE_OPTIONS}
        selected={selectedRole}
        placeholder="Role"
        onChange={onRoleChange}
        className="min-w-[120px]"
      />
      <Input
        name="search"
        type="text"
        placeholder="Search"
        value={""}
        Icon={<Icon icon="search" className="" />}
        className=""
      />
      <Select
        name="sort"
        options={SORT_OPTIONS}
        selected={selectedSort}
        placeholder="Sort"
        onChange={onSortChange}
        FirstIcon={<Icon icon="sort" />}
        className="m-w-[120px] ml-auto"
      />
    </div>
  );
}
