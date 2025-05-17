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
  onRoleChange: (option: { name: string; value: string }) => void;
  onSortChange: (option: { name: string; value: string }) => void;
}

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
        options={NEW_ROLE_OPTIONS}
        selected={selectedRole}
        placeholder="Role"
        onChange={(item) => onRoleChange(item)}
        className="min-w-[120px]"
      />
      <Input
        type="text"
        placeholder="Search"
        name=""
        value={""}
        Icon={<Icon icon="search" className="" />}
        className=""
      />
      <Select
        options={SORT_OPTIONS}
        selected={selectedSort}
        placeholder="Sort"
        onChange={(item) => onSortChange(item)}
        FirstIcon={<Icon icon="sort" />}
        className="m-w-[120px] ml-auto"
      />
    </div>
  );
}
