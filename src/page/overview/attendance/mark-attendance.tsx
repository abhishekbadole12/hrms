import MarkAttendanceComponent from "@/components/attendance/mark-attendance";
import BoxWrapper from "@/components/wrapper/box-wrapper";
import React from "react";

export default function MarkAttendancePage() {
  return (
    <>
      <BoxWrapper className="grid grid-cols-3 text-center mb-4">
        <div>
          <p>Analysis</p>
        </div>

        <div>
          <p>Analysis</p>
        </div>
        <div>
          <p>Analysis</p>
        </div>
      </BoxWrapper>

      <MarkAttendanceComponent />
    </>
  );
}
