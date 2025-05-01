"use client";

import React, {
  useState,
  startTransition,
  useActionState,
  useEffect,
} from "react";
import { useParams } from "next/navigation";
//
import BoxWrapper from "@/components/wrapper/box-wrapper";
import Button from "@/components/custom/button";
import Input from "@/components/custom/input";
import Select from "@/components/custom/select";
//
import { addBankDetails } from "@/app/actions/user";
//
import { ACCOUNT_TYPES } from "@/utils/constant";

interface formInputs {
  user_id: string;
  account_holder: string;
  account_number: string;
  bank_name: string;
  branch_name: string;
  ifsc_code: string;
  account_type: "SAVINGS" | "CURRENT";
  pan_number: string;
}

export default function BankDetailsForm({
  onSubmit,
}: {
  onSubmit: () => void;
}) {
  const params = useParams();
  const user_id = Array.isArray(params.user_id)
    ? params.user_id[0]
    : params.user_id ?? "";

  const [formInputs, setFormInputs] = useState<formInputs>({
    user_id: user_id || "",
    account_holder: "",
    account_number: "",
    bank_name: "",
    branch_name: "",
    ifsc_code: "",
    account_type: "SAVINGS",
    pan_number: "",
  });

  const [state, formAction, isPending] = useActionState(addBankDetails, null);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const formattedValue =
      name === "ifsc_code" || name === "pan_number"
        ? value.toUpperCase()
        : value;

    setFormInputs((prev) => ({ ...prev, [name]: formattedValue }));
  };

  // Handle select change
  const handleSelectChange = (name: string, value: string) => {
    setFormInputs((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formInputs);

    const formData = new FormData();
    Object.entries(formInputs).forEach(([key, value]) => {
      formData.set(key, value);
    });

    startTransition(() => {
      formAction(formData);
    });
  };

  useEffect(() => {
    if (state?.success) {
      onSubmit();
    }
  }, [state, onSubmit]);

  return (
    <BoxWrapper className="w-full">
      <form onSubmit={handleSubmit} className="p-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Input
            label="Account Holder Name"
            name="account_holder"
            placeholder="Enter account holder name"
            value={formInputs.account_holder}
            onChange={handleInputChange}
            errorMsg={state?.errors?.account_holder}
            inputStyle="uppercase"
          />
          <Input
            label="Account Number"
            name="account_number"
            placeholder="Enter account number"
            value={formInputs.account_number}
            onChange={handleInputChange}
            errorMsg={state?.errors?.account_number}
          />
          <Input
            label="Bank Name"
            name="bank_name"
            placeholder="Enter bank name"
            value={formInputs.bank_name}
            onChange={handleInputChange}
            errorMsg={state?.errors?.bank_name}
          />
          <Input
            label="Branch Name"
            name="branch_name"
            placeholder="Enter branch name"
            value={formInputs.branch_name}
            onChange={handleInputChange}
            errorMsg={state?.errors?.branch_name}
          />
          <Input
            label="IFSC Code"
            name="ifsc_code"
            placeholder="Enter IFSC code"
            value={formInputs.ifsc_code}
            onChange={handleInputChange}
            errorMsg={state?.errors?.ifsc_code}
            inputStyle="uppercase"
          />
          <Select
            label="Account Type"
            name="account_type"
            options={ACCOUNT_TYPES}
            selected={formInputs.account_type}
            onChange={(value) => handleSelectChange("account_type", value)}
            errorMsg={state?.errors?.account_type}
          />
          <Input
            label="PAN Number"
            name="pan_number"
            placeholder="Enter PAN number"
            value={formInputs.pan_number}
            onChange={handleInputChange}
            errorMsg={state?.errors?.pan_number}
            inputStyle="uppercase"
          />
        </div>

        {/* save button */}
        <div className="col-span-2 flex justify-end mt-4">
          <Button type="submit" disabled={isPending}>
            {isPending ? "saving..." : "save & next"}
          </Button>
        </div>
      </form>
    </BoxWrapper>
  );
}
