import React from "react";
import clsx from "clsx";
//
import Dropdown from "@/components/custom/dropdown";
import Button from "@/components/custom/button";
//
import { faCalendar as farCalendar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//

export enum TabOption {
  DAY = "DAY",
  WEEK = "WEEK",
  MONTH = "MONTH",
}

export const DEFAULT_MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

interface CalendarHeaderProps {
  selectedMonth?: number;
  selectedYear?: number;
  activeTab: TabOption;
  onTabChange?: (tab: TabOption) => void;
  onMonthChange: (index: number) => void;
}

export default function CalendarHeader({
  selectedMonth = 0,
  activeTab,
  onTabChange,
  onMonthChange,
}: CalendarHeaderProps) {
  const handleTabChange = () => {};

  const handleMonthChange = (value: string) => {
    const index = DEFAULT_MONTHS.findIndex((month) => month === value);
    onMonthChange(index);
  };

  return (
    <div className="w-full flex items-center gap-4 mb-8">
      <Dropdown
        options={DEFAULT_MONTHS}
        selected={DEFAULT_MONTHS[selectedMonth]}
        onChange={(value) => handleMonthChange(value)}
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
        {Object.values(TabOption).map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange?.(tab)}
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
