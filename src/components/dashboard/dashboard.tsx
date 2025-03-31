"use client";

import BoxWrapper from "../wrapper/box-wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "../custom/dropdown";
import { useState } from "react";
import DonutChart from "../donut-chart";

export default function DashboardComponent() {
  const [year, setYear] = useState<number | null>(2025);

  const team_members = 10000;
  const total_downloads = 1000;
  const total_installed = 500;

  return (
    <div className="grid grid-cols-3 gap-5">
      {/* 1st row */}
      <BoxWrapper className="col-span-2 min-h-[275px] rounded-xl p-10">
        <h2 className="text-xl font-bold">Welcome Abhishek,</h2>
        <h5 className="text-lg font-semibold">Good Morning</h5>
      </BoxWrapper>

      <BoxWrapper className="col-span-1 rounded-xl p-6">
        <h4>Here will be on going events</h4>
      </BoxWrapper>

      {/* 2nd row */}
      <BoxWrapper className="col-span-1 rounded-xl p-6">
        {/* Content */}
        <div>
          <h3 className="text-sm font-semibold text-primary">Total members</h3>

          <h2 className="text-3xl font-bold mt-5 mb-3 tracking-tight">
            {team_members.toLocaleString("en-IN")}
          </h2>

          <div className="px-2 flex items-center space-x-1">
            <FontAwesomeIcon
              icon={faCaretDown}
              className="text-xl text-[#22C55E] mr-1"
            />
            <span className="text-sm font-semibold text-primary">+25%</span>
            <span className="text-sm font-medium text-primary opacity-75">
              last 30 days
            </span>
          </div>
        </div>

        {/* line/bar chart svg */}
        <div>{/* <img src="" alt="" /> */}</div>
      </BoxWrapper>

      <BoxWrapper className="col-span-1 rounded-xl p-6">
        {/* Content */}
        <div>
          <h3 className="text-sm font-semibold text-primary">
            Total downloads
          </h3>

          <h2 className="text-3xl font-bold mt-5 mb-3 tracking-tight">
            {total_downloads.toLocaleString("en-IN")}
          </h2>

          <div className="px-2 flex items-center space-x-1">
            <FontAwesomeIcon
              icon={faCaretDown}
              className="text-xl text-[#22C55E] mr-1"
            />
            <span className="text-sm font-semibold text-primary">+25%</span>
            <span className="text-sm font-medium text-primary opacity-75">
              last 30 days
            </span>
          </div>
        </div>

        {/* line/bar chart svg */}
        <div>{/* <img src="" alt="" /> */}</div>
      </BoxWrapper>

      <BoxWrapper className="col-span-1 rounded-xl p-6">
        {/* Content */}
        <div>
          <h3 className="text-sm font-semibold text-primary">
            Total installed
          </h3>

          <h2 className="text-3xl font-bold mt-5 mb-3 tracking-tight">
            {total_installed.toLocaleString("en-IN")}
          </h2>

          <div className="px-2 flex items-center space-x-1">
            <FontAwesomeIcon
              icon={faCaretDown}
              className="text-xl text-[#22C55E] mr-1"
            />
            <span className="text-sm font-semibold text-primary">+25%</span>
            <span className="text-sm font-medium text-primary opacity-75">
              last 30 days
            </span>
          </div>
        </div>

        {/* line/bar chart svg */}
        <div>{/* <img src="" alt="" /> */}</div>
      </BoxWrapper>

      {/* 3rd row */}
      <BoxWrapper className="col-span-2 rounded-xl p-6">
        <div>
          <div>
            <h4 className="text-base font-semibold text-primary mb-1.5">
              Heading
            </h4>
            <h5 className="text-sm font-semibold text-secondary">
              Sub-heading
            </h5>
          </div>
        </div>
      </BoxWrapper>

      <BoxWrapper className="col-span-1 rounded-xl p-6">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="text-base font-semibold text-primary mb-1.5">
              Heading
            </h4>
            <h5 className="text-sm font-semibold text-secondary">
              Sub-heading
            </h5>
          </div>

          {/* Year dropdown */}
          <Dropdown
            options={[2023, 2024, 2025]}
            selected={year}
            onChange={(value) => setYear(value)}
            placeholder="Select Year"
          />
        </div>

        {/* Circular progress */}
        <div className="my-10">
          <DonutChart />
        </div>
      </BoxWrapper>
    </div>
  );
}
