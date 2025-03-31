import React from "react";

export default function HorizontalLine() {
  return (
    <div className="mb-5 flex items-center justify-center">
      <div className="w-full border-[.75px] border-gray-200" />
      <span className="mx-3 text-sm text-gray-500">OR</span>
      <div className="w-full border-[.75px] border-gray-200" />
    </div>
  );
}
