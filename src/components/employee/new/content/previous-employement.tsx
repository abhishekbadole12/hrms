"use client";

import React, {
  startTransition,
  useActionState,
  useEffect,
  useState,
} from "react";
//
import { createPreviousEmployementDetail } from "@/app/actions/user";
//
import Button from "@/components/custom/button";
import Input from "@/components/custom/input";
import BoxWrapper from "@/components/wrapper/box-wrapper";
import Select from "@/components/custom/select";
import { EMPLOYMENT_TYPE_OPTIONS } from "@/utils/constant";
import { useParams } from "next/navigation";

// const DUMMY_EMPLOYMENT = [{ name: "First employement", value: "first" }];

interface EmploymentFormData {
  user_id: string;
  company_name: string;
  position: string;
  employment_type: string;
  start_date: string;
  end_date: string;
  salary: number;
  reference_name: string;
  reference_email: string;
  reference_phone_number: string;
}

export default function PreviousJobForm({
  onSubmit,
}: {
  onSubmit: () => void;
}) {
  const params = useParams();
  const user_id = Array.isArray(params.user_id)
    ? params.user_id[0]
    : params.user_id ?? "";

  const [formInputs, setFormInputs] = useState<EmploymentFormData>({
    user_id: user_id || "",
    company_name: "",
    position: "",
    employment_type: "",
    start_date: "",
    end_date: "",
    salary: 0,
    reference_name: "",
    reference_email: "",
    reference_phone_number: "",
  });

  const [state, formAction, isPending] = useActionState(
    createPreviousEmployementDetail,
    null
  );

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormInputs((prev) => ({ ...prev, [name]: value }));
  };

  // Handle select change
  const handleSelectChange = (name: string, value: string) => {
    setFormInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(formInputs).forEach(([key, value]) => {
      formData.set(key, value);
    });
    console.log(formInputs);

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
    <div className="w-full grid grid-cols-3 gap-6">
      <BoxWrapper className="col-span-3 p-6">
        <form onSubmit={handleSubmit} className="p-2">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
            <Input
              type="text"
              label="Previous Company"
              id="company_name"
              name="company_name"
              value={formInputs.company_name}
              placeholder="Enter previous company name"
              onChange={handleInputChange}
              errorMsg={state?.errors?.company_name}
            />
            <Input
              type="text"
              label="Previous Position"
              name="position"
              value={formInputs.position}
              placeholder="Enter previous position"
              onChange={handleInputChange}
              errorMsg={state?.errors?.position}
            />
            <Select
              label="Employment Type"
              name="employment_type"
              selected={formInputs.employment_type}
              options={EMPLOYMENT_TYPE_OPTIONS}
              onChange={(value) => handleSelectChange("employment_type", value)}
              errorMsg={state?.errors?.employment_type}
            />
            <Input
              type="date"
              label="Start Date"
              name="start_date"
              value={formInputs.start_date}
              onChange={handleInputChange}
              errorMsg={state?.errors?.start_date}
            />
            <Input
              type="date"
              label="End Date"
              name="end_date"
              value={formInputs.end_date}
              onChange={handleInputChange}
              errorMsg={state?.errors?.end_date}
            />
            <Input
              type="number"
              label="Last Drawn Salary (ctc)"
              name="salary"
              placeholder="Enter last salary e.g., 400000"
              value={formInputs.salary || ""}
              onChange={handleInputChange}
              errorMsg={state?.errors?.salary}
            />

            {/* Line Break */}
            <div className="col-span-full my-2 border-t-[.75px] border-zinc-200" />

            <Input
              type="text"
              label="HR/Manager Name"
              name="reference_name"
              placeholder="Enter reference name"
              value={formInputs.reference_name}
              onChange={handleInputChange}
              errorMsg={state?.errors?.reference_name}
            />
            <Input
              type="email"
              label="HR/Manager Email"
              name="reference_email"
              placeholder="Enter reference email"
              value={formInputs.reference_email}
              onChange={handleInputChange}
              errorMsg={state?.errors?.reference_email}
            />
            <Input
              type="tel"
              label="HR/Manager Number"
              name="reference_phone_number"
              placeholder="Enter reference phone"
              value={formInputs.reference_phone_number}
              onChange={handleInputChange}
              errorMsg={state?.errors?.reference_phone_number}
            />
          </div>

          <div className="col-span-2 flex justify-end mt-4">
            <Button type="submit" className="ml-auto px-5">
              {isPending ? "Saving..." : "Save changes"}
            </Button>
          </div>
        </form>
      </BoxWrapper>

      {/* Right - More Employeement*/}
      {/* <div className="w-full">
        <div className="col-span-1 w-full py-2 px-4">
          <h3 className="text-sm text-black font-medium mb-4">
            Employment History
          </h3>

          {forms.map((item, index) => (
            <div key={index} className="w-full flex items-center mb-2">
              <button
                className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium transition duration-200 ${
                  index === 0
                    ? "bg-gray-400 text-black"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300`}
                onClick={() => {
                  // Handle button click
                }}
                type="button"
              >
                <span>{index + 1}. </span>
                <span className="text-gray-700">{item.company_name}</span>
              </button>
            </div>
          ))}

          <Button
            type="button"
            className="w-full bg-black text-white px-4 py-2 mt-4 rounded-md"
            onClick={addMoreEmployment}
          >
            + Add New Employment
          </Button>
        </div>
      </div> */}
    </div>
  );
}
