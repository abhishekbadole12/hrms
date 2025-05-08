import React from "react";
//
import Divider from "@/components/common/divider/divider";
import BoxWrapper from "@/components/wrapper/box-wrapper";
//

export default function MarkAttendanceHeader() {
  return (
    <BoxWrapper className="grid grid-cols-8 justify-center items-center text-center mb-6">
      <div className="col-span-2">
        <p>Analysis</p>
      </div>

      <Divider className="col-span-1" orientation="vertical" />

      <div className="col-span-2">
        <p>Analysis</p>
      </div>

      <Divider className="col-span-1" orientation="vertical" />

      <div className="col-span-2">
        <p>Analysis</p>
      </div>
    </BoxWrapper>
  );
}
