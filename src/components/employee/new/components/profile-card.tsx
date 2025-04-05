"use client";

import StatusTag from "@/components/common/status-tag";
import Switch from "@/components/custom/switch";
import BoxWrapper from "@/components/wrapper/box-wrapper";
import React, { useState } from "react";

interface ProfileCardProps {
  profileImage: File |null;
  status: "ACTIVE" | "INACTIVE";
  onStatusChange: (newStatus: boolean) => void;
  isVerified: boolean;
  onVerificationChange: (isVerified: boolean) => void;
  onImageChange: (file: File | null) => void;
}

export default function ProfileCard({
  profileImage,
  status,
  isVerified,
  onStatusChange,
  onVerificationChange,
  onImageChange,
}: ProfileCardProps) {
  const [previewImage, setPreviewImage] = useState<any>(profileImage || null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      setPreviewImage(URL.createObjectURL(file)); // Show preview
    }
    onImageChange(file);
  };

  return (
    <BoxWrapper className="p-6 flex flex-col">
      <StatusTag
        text={status ? "active" : "disabled"}
        status={status ? "success" : "warning"}
        className="ml-auto"
        textStyle="lowercase"
      />

      {/* Image  */}
      <label
        htmlFor="profile-upload"
        className="w-fit my-10 mx-auto p-2 border border-third rounded-full overflow-hidden cursor-pointer"
      >
        <input
          id="profile-upload"
          type="file"
          accept="image/*"
          className="hidden cursor-pointer"
          onChange={handleFileChange}
        />

        {profileImage ? (
          <img
            src={
              previewImage ||
              (typeof profileImage === "string" ? profileImage : "")
            }
            alt="Profile"
            className="w-[115px] h-[115px] rounded-full object-cover"
          />
        ) : (
          <div className="w-[115px] h-[115px] bg-third rounded-full" />
        )}
      </label>

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
          <Switch
            size="md"
            className="ml-auto"
            checked={status === "ACTIVE"}
            onChange={() => onStatusChange(!status)}
          />
        </div>

        {/* Verification */}
        <div className="flex items-center gap-2 mb-5">
          <div className="">
            <h5 className="text-sm text-primary font-medium mb-1">
              Verification
            </h5>
            <p className="text-sm text-secondary font-normal">
              Tick if verification completed
            </p>
          </div>

          {/* Toggle button */}
          <Switch
            size="md"
            className="ml-auto"
            checked={isVerified}
            onChange={() => onVerificationChange(!isVerified)}
          />
        </div>
      </div>
    </BoxWrapper>
  );
}
