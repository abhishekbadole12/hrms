"use client";

import React, { useState } from "react";
import clsx from "clsx";
//
import Dropdown from "@/components/custom/dropdown";
import Button from "@/components/custom/button";
//
import { faCalendar as farCalendar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//

enum TABS {
  DAY = "DAY",
  WEEK = "WEEK",
  MONTH = "MONTH",
}

const MONTHS = ["January", "Feb"];

export default function CalendarHeader() {
  const [activeTab, setActiveTab] = useState(TABS.WEEK);

  const tabList = Object.values(TABS);
  const tabIndex = tabList.indexOf(activeTab);

  const handleTabChange = (tab: TABS) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full flex items-center gap-4">
      <Dropdown
        options={MONTHS}
        selected={MONTHS[0]}
        onChange={() => {}}
        Icon={
          <FontAwesomeIcon
            icon={farCalendar}
            className="text-primary text-base"
          />
        }
        className="py-2"
      />

      {/* Line Break */}
      <div className="h-[32px] border-r border-zinc-200" />

      {/* Toggle Tabs */}
      <div className="flex bg-zinc-100 rounded-lg p-1 overflow-hidden">
        {Object.values(TABS).map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={clsx(
              "min-w-[4rem] flex-1 px-2.5 py-1.5 rounded-md text-sm font-medium transition-all duration-300",
              {
                "bg-white text-black font-semibold": activeTab === tab,
                "text-zinc-700": activeTab !== tab,
              }
            )}
          >
            {tab.charAt(0) + tab.slice(1).toLowerCase()}
          </button>
        ))}
      </div>

      <Button className="ml-auto px-4">Today</Button>
    </div>
  );
}
