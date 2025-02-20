import StatusTag from "@/components/common/status-tag";
import Switch from "@/components/custom/switch";
import BoxWrapper from "@/components/wrapper/box-wrapper";
import React from "react";

export default function ProfileCard() {
  const current_status = "pending";

  return (
    <BoxWrapper className="">
      <StatusTag
        text={current_status}
        status={current_status}
        className=""
      />

      {/* Image  */}
      <div className="w-fit my-10 mx-auto p-2 border border-third rounded-full overflow-hidden">
        <div className="w-[100px] h-[100px] bg-third rounded-full" />
      </div>

      {/* content */}
      <div>
        {/* Status */}
        <div className="flex items-center gap-2 mb-5">
          <div className="">
            <h5 className="text-sm text-primary font-medium mb-1">Status</h5>
            <p className="text-sm text-secondary font-normal">
              Tick to disable user
            </p>
          </div>

          {/* Toggle button */}
          <Switch size="md" className="ml-auto"/>
        </div>

        {/* Verification */}
        <div className="flex items-center gap-2 mb-5">
          <div className="">
            <h5 className="text-sm text-primary font-medium mb-1">Verification</h5>
            <p className="text-sm text-secondary font-normal">
              Tick if verification completed
            </p>
          </div>

          {/* Toggle button */}
          <Switch size="md" className="ml-auto"/>
        </div>
      </div>
    </BoxWrapper>
  );
}
