import React from "react";
//
import MarkAttendanceComponent from "@/components/attendance/mark-attendance";
import MarkAttendanceHeader from "@/components/attendance/components/mark-attendance-header";
//

export default function MarkAttendancePage() {
  return (
    <>
      <MarkAttendanceHeader />

      <MarkAttendanceComponent />
    </>
  );
}
