import React from "react";
import type { Metadata } from "next";
//
import MarkAttendancePage from "@/page/overview/attendance/mark-attendance";

export const metadata: Metadata = {
  title: "Mark attendance",
  description: "HRMS employee",
};

export default function MarkAttendance() {
  return (
    <>
      <MarkAttendancePage />
    </>
  );
}
