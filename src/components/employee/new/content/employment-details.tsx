import React from "react";
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
  DEPARTMENT_OPTIONS,
  EMPLOYMENT_TYPE_OPTIONS,
  WORK_LOCATION_OPTIONS,
  WORK_SCHEDULE_OPTIONS,
} from "@/utils/constant";

export default function EmploymentDetailsForm({
  onSubmit,
}: {
  onSubmit: () => void;
}) {
  return (
    <BoxWrapper className="w-full">
      <form action="" className="p-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Input
            label="Employee ID"
            name="employee_id"
            placeholder="Enter employee ID"
          />
          <Input
            label="Job Title"
            name="job_title"
            placeholder="Enter job title"
          />
          <Select
            label="Department"
            name="department"
            options={DEPARTMENT_OPTIONS}
            selected={""}
            onChange={() => {}}
          />
          <Select
            label="Reporting Manager"
            name="reporting_manager"
            options={[{ label: "John Doe", value: "john_doe" }]}
            selected={""}
            onChange={() => {}}
          />
          <Select
            label="Employment Type"
            name="employment_type"
            options={EMPLOYMENT_TYPE_OPTIONS}
            selected={""}
            onChange={() => {}}
          />
          <Select
            label="Work Location"
            name="work_location"
            options={WORK_LOCATION_OPTIONS}
            selected={""}
            onChange={() => {}}
          />
          <Input
            label="Date of Joining"
            name="join_date"
            type="date"
            Icon={<FontAwesomeIcon icon={faCalendar} />}
          />
          <Input
            label="Probation End Date"
            name="probation_end"
            type="date"
            Icon={<FontAwesomeIcon icon={faCalendar} />}
          />
          <Input
            label="Current Salary (ctc)"
            name="current_salary"
            type="number"
            placeholder="Enter current salary"
          />
          <Select
            label="Work Schedule"
            name="work_schedule"
            options={WORK_SCHEDULE_OPTIONS}
            selected={""}
            onChange={() => {}}
          />
        </div>

        {/* save button */}
        <div className="col-span-2 flex justify-end mt-2">
          <Button className="px-4 py-2">save & next</Button>
        </div>
      </form>
    </BoxWrapper>
  );
}
