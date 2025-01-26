import React from "react";

export default function InputContainer() {
  return (
    <div className="w-[500px] translate-x-1">
      <input
        type="text"
        placeholder="enter to search"
        className="w-full text-sm text-primary rounded-lg py-2.5 px-4 border border-slate-100 shadow-lg shadow-slate-200"
      />
    </div>
  );
}
