"use client";

import React, { useState } from "react";
//
import BoxWrapper from "../wrapper/box-wrapper";
import Calendar from "../calendar/calendar";
//
//

export default function MarkAttendanceComponent() {
  return (
    <BoxWrapper className="w-full p-5">
      <Calendar />
    </BoxWrapper>
  );
}
