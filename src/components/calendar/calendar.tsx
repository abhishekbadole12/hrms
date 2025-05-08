"use client";

import React, { useState } from "react";
//
import BoxWrapper from "../wrapper/box-wrapper";
import CalendarHeader, { TabOption } from "./components/calendar-header";
import CalendarBody from "./components/calendar-body";

interface ICalendarProps {
  isTab: boolean;
}

export default function Calendar({ isTab }: ICalendarProps) {
  const todaysDate = new Date();

  const [activeTab, setActiveTab] = useState(TabOption.MONTH);

  const [currentMonth, setCurrentMonth] = useState(todaysDate.getMonth());
  const [currentYear, setCurrentYear] = useState(todaysDate.getFullYear());

  const handleMonthChange = (newMonthIndex: number) => {
    setCurrentMonth(newMonthIndex);
  };

  return (
    <BoxWrapper className="w-full p-5">
      <CalendarHeader
        selectedMonth={currentMonth}
        selectedYear={currentYear}
        isTab={isTab}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        //
        onMonthChange={handleMonthChange}
      />
      <CalendarBody
        todaysDate={todaysDate}
        month={currentMonth}
        year={currentYear}
      />
    </BoxWrapper>
  );
}
