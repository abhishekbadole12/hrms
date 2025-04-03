import React from "react";
//
import BoxWrapper from "@/components/wrapper/box-wrapper";
import Input from "@/components/custom/input";
import Select from "@/components/custom/select";
import Button from "@/components/custom/button";


export default function EmploymentDetailsForm({
  onSubmit,
}: {
  onSubmit: () => void;
}) {
  return (
    <BoxWrapper>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Input label="Employee ID" name="employee_id" placeholder="Enter employee ID" />

          <Input label="Job Title" name="job_title" placeholder="Enter job title" />

          <Select
            label="Department"
            name="department"
            options={[{ label: "Engineering", value: "engineering" }]}
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
            options={[
              { value: "full-time", label: "Full-time" },
              { value: "part-time", label: "Part-time" },
              { value: "contract", label: "Contract" },
              { value: "intern", label: "Intern" },
              { value: "probation", label: "Probation" },
            ]}
            selected={""}
            onChange={() => {}}
          />

          <Select
            label="Work Location"
            name="work_location"
            options={[
              { value: "hq", label: "Headquarters" },
              { value: "branch1", label: "Branch Office 1" },
              { value: "branch2", label: "Branch Office 2" },
              { value: "remote", label: "Remote" },
            ]}
            selected={""}
            onChange={() => {}}
          />

          <Input label="Date of Joining" name="join_date" type="date" />

          <Input label="Probation End Date" name="probation_end" type="date" />

          <Input label="Current Salary" name="current_salary" type="number" placeholder="Enter current salary" />

          <Select
            label="Work Schedule"
            name="work_schedule"
            options={[
              { value: "regular", label: "Regular (9 AM - 6 PM)" },
              { value: "flexible", label: "Flexible Hours" },
              { value: "shift1", label: "Morning Shift" },
              { value: "shift2", label: "Evening Shift" },
              { value: "shift3", label: "Night Shift" },
            ]}
            selected={""}
            onChange={() => {}}
          />
        </div>

        <div className="mt-6">
          <label htmlFor="skills">Skills & Expertise</label>
          <textarea id="skills" placeholder="Enter employee skills and expertise" className="min-h-[100px]" />
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-medium mb-4">Previous Employment</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Previous Company" name="prev_company" placeholder="Enter previous company name" />
            <Input label="Previous Position" name="prev_position" placeholder="Enter previous position" />
            <Input label="Start Date" name="prev_start_date" type="date" />
            <Input label="End Date" name="prev_end_date" type="date" />
          </div>
          <Button variant="outline" className="mt-4">
            + Add More Employment History
          </Button>
        </div>

        <div className="mt-6 flex justify-end">
          <Button>Save Changes</Button>
        </div>
      </div>
    </BoxWrapper>
  );
}
