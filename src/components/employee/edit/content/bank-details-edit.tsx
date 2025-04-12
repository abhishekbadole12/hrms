"use client";

import React, { useState, startTransition, useActionState } from "react";
import BoxWrapper from "@/components/wrapper/box-wrapper";
import Button from "@/components/custom/button";
import Input from "@/components/custom/input";
import Select from "@/components/custom/select";

const ACCOUNT_TYPES = [
  { value: "SAVING", name: "Savings" },
  { value: "CURRENT", name: "Current" },
];

const MARTIAL_STATUS = [
  { value: "SINGLE", name: "Single" },
  { value: "MARRIED", name: "Married" },
  { valye: "WIDOW", name: "Widow" },
];

export default function BankDetailsEditForm({ userId }: { userId: string }) {
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

  const [state, formAction, isPending] = useActionState(updateBank, null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();

    Object.entries(formInputs).forEach(([Key, value]) => {
      formData.set(Key, value);
    });

    startTransition(() => {
      formAction(formData);
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
      </form>
      <div className="mt-6 flex justify-end">
        <Button onClick={handleSubmit}>Save Changes</Button>
      </div>
    </BoxWrapper>
  );
}
