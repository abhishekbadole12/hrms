"use client";

import React, { useState, startTransition } from "react";
import BoxWrapper from "@/components/wrapper/box-wrapper";
import Button from "@/components/custom/button";
import Input from "@/components/custom/input";
import Select from "@/components/custom/select";

const ACCOUNT_TYPES = [
  { value: "savings", label: "Savings" },
  { value: "current", label: "Current" },
  { value: "salary", label: "Salary" },
];

const TAX_STATUSES = [
  { value: "single", label: "Single" },
  { value: "married", label: "Married" },
  { value: "head", label: "Head of Household" },
];

export default function BankDetailsForm({
  onSubmit,
}: {
  onSubmit: () => void;
}) {
  const [formInputs, setFormInputs] = useState({
    account_holder: "",
    account_number: "",
    bank_name: "",
    branch_name: "",
    ifsc_code: "",
    account_type: "",
    pan_number: "",
    tax_id: "",
    tax_status: "",
    tax_exemptions: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    startTransition(() => {
      console.log("Submitting: ", formInputs);
    });
  };

  return (
    <BoxWrapper className="w-full p-6">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <Input
          label="Account Holder Name"
          name="account_holder"
          placeholder="Enter account holder name"
          value={formInputs.account_holder}
          onChange={handleInputChange}
        />
        <Input
          label="Account Number"
          name="account_number"
          placeholder="Enter account number"
          value={formInputs.account_number}
          onChange={handleInputChange}
        />
        <Input
          label="Bank Name"
          name="bank_name"
          placeholder="Enter bank name"
          value={formInputs.bank_name}
          onChange={handleInputChange}
        />
        <Input
          label="Branch Name"
          name="branch_name"
          placeholder="Enter branch name"
          value={formInputs.branch_name}
          onChange={handleInputChange}
        />
        <Input
          label="IFSC Code"
          name="ifsc_code"
          placeholder="Enter IFSC code"
          value={formInputs.ifsc_code}
          onChange={handleInputChange}
        />
        <Select
          label="Account Type"
          name="account_type"
          options={ACCOUNT_TYPES}
          selected={formInputs.account_type}
          onChange={(value) => handleSelectChange("account_type", value)}
        />
        <Input
          label="PAN Number"
          name="pan_number"
          placeholder="Enter PAN number"
          value={formInputs.pan_number}
          onChange={handleInputChange}
        />
        <Input
          label="Tax ID / TIN"
          name="tax_id"
          placeholder="Enter tax ID"
          value={formInputs.tax_id}
          onChange={handleInputChange}
        />
        <Select
          label="Tax Status"
          name="tax_status"
          options={TAX_STATUSES}
          selected={formInputs.tax_status}
          onChange={(value) => handleSelectChange("tax_status", value)}
        />
        <Input
          label="Tax Exemptions"
          name="tax_exemptions"
          type="number"
          placeholder="Enter number of exemptions"
          value={formInputs.tax_exemptions}
          onChange={handleInputChange}
        />
      </form>
      <div className="mt-6 flex justify-end">
        <Button onClick={handleSubmit}>Save Changes</Button>
      </div>
    </BoxWrapper>
  );
}
