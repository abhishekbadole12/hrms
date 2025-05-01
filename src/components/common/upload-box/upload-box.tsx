"use client";

import React, { useRef } from "react";
//
import { faCloudUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IUploadBoxProps {
  onFileUpload?: (file: File) => void;
}

export default function UploadBox({ onFileUpload }: IUploadBoxProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onFileUpload) {
      onFileUpload(file);
    }
  };

  return (
    <div className="w-full h-[180px] rounded-xl border-zinc-400 bg-zinc-100 flex flex-col justify-center items-center cursor-pointer">
      <FontAwesomeIcon
        icon={faCloudUpload}
        className="text-zinc-300 text-3xl"
      />
      <p className="text-sm text-zinc-400 font-medium mt-1">Upload file</p>
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}
