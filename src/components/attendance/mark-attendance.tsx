import React from "react";
//
import CalendarHeader from "./components/calendar-header";
import CalendarBody from "./components/calendar-body";
import BoxWrapper from "../wrapper/box-wrapper";
//

export default function MarkAttendanceComponent() {
  return (
    <BoxWrapper className="w-full p-5">
      <CalendarHeader />
      
      <CalendarBody/>
    </BoxWrapper>
  );
}
