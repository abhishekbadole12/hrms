"use client";
//
import React, {
  startTransition,
  useActionState,
  useEffect,
  useState,
} from "react";
//
import BoxWrapper from "@/components/wrapper/box-wrapper";
import Input from "@/components/custom/input";
import Select from "@/components/custom/select";
import Button from "@/components/custom/button";
//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
//
import {
  EMPLOYMENT_TYPE_OPTIONS,
  WORK_LOCATION_OPTIONS,
} from "@/utils/constant";
//
import { updateEmploymentDetails } from "@/app/actions/user";
//
import { useDepartmentStore } from "@/store/useDepartmentStore";
import Loading from "@/components/common/snakebar/loading";
import { useUserStore } from "@/store/useUserStore";
import { formatCurrency } from "@/utils/formattedCurrency";

interface FormInputs {
  user_id: string;
  //
  job_title: string;
  department_id: string;
  reporting_manager_id?: string;
  employment_type: string;
  work_location: string;
  join_date: string;
  probation_end_date: string;
  confirmation_date: string;
  salary: string;
}

export default function EmploymentDetailsEditForm({
  userId,
}: {
  userId: string;
}) {
  const { departments } = useDepartmentStore(); // useDepartment store
  const { userProfileDetails } = useUserStore();

  // Local state for form inputs
  const [formInputs, setFormInputs] = useState<FormInputs>({
    user_id: userId,
    //
    job_title: "",
    department_id: "",
    reporting_manager_id: "",
    employment_type: "",
    work_location: "",
    join_date: "",
    probation_end_date: "",
    confirmation_date: "",
    salary: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [state, formAction, isPending] = useActionState(
    updateEmploymentDetails,
    null
  );

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle select change
  const handleSelectChange = (name: string, value: string) => {
    setFormInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(formInputs).forEach(([key, value]) => {
      formData.set(key, value);
    });

    startTransition(() => {
      formAction(formData);
    });
  };

  useEffect(() => {
    if (userProfileDetails) {
      setFormInputs((prev) => ({
        ...prev,
        ...userProfileDetails.employmentDetails,
        confirmation_date:
          userProfileDetails.employmentDetails.confirmation_date?.split(
            "T"
          )[0] || "",
        join_date:
          userProfileDetails.employmentDetails.join_date?.split("T")[0] || "",
        end_date:
          userProfileDetails.employmentDetails.confirmation_date?.split(
            "T"
          )[0] || "",
      }));
    }
  }, [userProfileDetails]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <Loading size={"sm"} />
      </div>
    );
  }

  return (
    <BoxWrapper className="w-full">
      <form onSubmit={handleSubmit} className="p-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Input
            label="Employee ID"
            name="user_id"
            placeholder="Enter employee ID"
            value={formInputs.user_id}
            onChange={handleInputChange}
            errorMsg={state?.errors?.user_id}
            disabled
          />
          <Input
            label="Job Title"
            name="job_title"
            placeholder="Enter job title"
            value={formInputs.job_title}
            onChange={handleInputChange}
            errorMsg={state?.errors?.job_title}
          />
          <Select
            label="Department"
            name="department_id"
            options={departments}
            selected={formInputs.department_id}
            onChange={(value) => handleSelectChange("department_id", value)}
            errorMsg={state?.errors?.department_id}
          />
          <Select
            label="Reporting Manager"
            name="reporting_manager_id"
            options={[{ name: "John Doe", value: "john_doe" }]}
            selected={""}
            onChange={() => {}}
          />
          <Select
            label="Employment Type"
            name="employment_type"
            options={EMPLOYMENT_TYPE_OPTIONS}
            selected={formInputs.employment_type}
            onChange={(value) => handleSelectChange("employment_type", value)}
            errorMsg={state?.errors?.employment_type}
          />
          <Select
            label="Work Location"
            name="work_location"
            options={WORK_LOCATION_OPTIONS}
            selected={formInputs.work_location}
            onChange={(value) => handleSelectChange("work_location", value)}
            errorMsg={state?.errors?.work_location}
          />
          <Input
            label="Date of Joining"
            name="join_date"
            type="date"
            Icon={<FontAwesomeIcon icon={faCalendar} />}
            value={formInputs.join_date}
            onChange={handleInputChange}
            errorMsg={state?.errors?.join_date}
          />
          <Input
            label="Probation End Date"
            name="probation_end_date"
            type="date"
            Icon={<FontAwesomeIcon icon={faCalendar} />}
            value={formInputs.probation_end_date}
            onChange={handleInputChange}
            errorMsg={state?.errors?.probation_end_date}
          />
          <Input
            label="Conformation Date"
            name="confirmation_date"
            type="date"
            Icon={<FontAwesomeIcon icon={faCalendar} />}
            value={formInputs.confirmation_date}
            onChange={handleInputChange}
            errorMsg={state?.errors?.confirmation_date}
          />
          <Input
            label="Current Salary (ctc)"
            name="salary"
            type="number"
            placeholder="Enter current salary"
            value={formInputs.salary}
            onChange={handleInputChange}
            errorMsg={state?.errors?.salary}
          />
        </div>

        {/* save button */}
        <div className="col-span-2 flex justify-between mt-2">
          <Button
            type="button"
            className="mr-4 bg-red-500 hover:bg-red-600 text-white"
            onClick={() => {
              // Handle cancel action
            }}
          >
            Cancel
          </Button>

          <Button type="submit" className="px-4 py-2" disabled={isPending}>
            {isPending ? "Updating..." : "Update"}
          </Button>
        </div>
      </form>
    </BoxWrapper>
  );
}
