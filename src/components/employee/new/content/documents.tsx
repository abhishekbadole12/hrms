import React from "react";
//
import BoxWrapper from "@/components/wrapper/box-wrapper";
import UploadBox from "@/components/common/upload-box/upload-box";
//
import { DOCUMENT_TYPES } from "@/utils/constant";

export default function Documents() {
  return (
    <div className="grid grid-cols-3 gap-6 md:grid-cols-3 sm:grid-cols-1">
      {DOCUMENT_TYPES.map(({ name, value }) => {
        return (
          <BoxWrapper key={value} className="w-full">
            <h4 className="text-sm font-medium mb-4">{name}</h4>
            <UploadBox onFileUpload={() => {}} />
          </BoxWrapper>
        );
      })}
    </div>
  );
}
