import React from "react";
//
import CalendarHeader from "./components/calendar-header";
import BoxWrapper from "../wrapper/box-wrapper";
//

export default function MarkAttendanceComponent() {
  return (
    <BoxWrapper className="w-full p-4">
      <CalendarHeader />
    </BoxWrapper>
  );
}
