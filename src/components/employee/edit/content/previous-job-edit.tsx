import Button from "@/components/custom/button";
import Input from "@/components/custom/input";
import BoxWrapper from "@/components/wrapper/box-wrapper";
import React from "react";

const arr = [
  { name: "First employement", value: "first" },
  { name: "Second employement", value: "second" },
  { name: "Third employement", value: "third" },
];

export default function PreviousJobEditForm({ userId }: { userId: string }) {
  return (
    <div className="w-full grid grid-cols-4 gap-6">
      <BoxWrapper className="col-span-3 p-6">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-2">
          <Input
            type="text"
            label="Previous Company"
            id="prev_company"
            name="prev_company"
            placeholder="Enter previous company name"
          />
          <Input
            type="text"
            label="Previous Position"
            name="prev_position"
            placeholder="Enter previous position"
          />
          <Input
            type="text"
            label="Employment Type"
            name="employment_type"
            placeholder="e.g., Full-time, Contract"
          />
          <Input type="date" label="Start Date" name="prev_start_date" />
          <Input type="date" label="End Date" name="prev_end_date" />
          <Input
            type="number"
            label="Last Drawn Salary (ctc)"
            name="salary"
            placeholder="Enter last salary"
          />

          {/* Line Break */}
          <div className="w-full col-span-2 my-2 border-t-[.75px] border-zinc-200" />

          <Input
            type="text"
            label="HR/Manager Name"
            name="reference_name"
            placeholder="Enter reference name"
          />
          <Input
            type="email"
            label="HR/Manager Email"
            name="reference_email"
            placeholder="Enter reference email"
          />
          <Input
            type="tel"
            label="HR/Manager Number"
            name="reference_email"
            placeholder="Enter reference email"
          />
        </div>

        <div className="col-span-2 flex justify-end mt-4">
          <Button type="submit" className="ml-auto px-5">
            Save
          </Button>
        </div>
      </BoxWrapper>

      {/* Right */}
      <div className="w-full">
        <div className="col-span-1 w-full py-2 px-4">
          <h3 className="text-sm text-black font-medium mb-4">
            Employment History
          </h3>

          {arr.map((item, index) => (
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
                <span className="text-gray-700">{item.name}</span>
              </button>
            </div>
          ))}

          <Button
            type="button"
            className="w-full bg-black text-white px-4 py-2 mt-6 rounded-md"
          >
            + Add New Employment
          </Button>
        </div>
      </div>
    </div>
  );
}
