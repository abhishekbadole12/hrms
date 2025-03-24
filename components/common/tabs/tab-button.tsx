import clsx from "clsx";
import React from "react";

export function TabButton({ label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "px-4 py-2 border-b-2 focus:outline-none",
        isActive
          ? "border-blue-500 text-blue-500 font-bold"
          : "border-transparent text-gray-500"
      )}
    >
      {label}
    </button>
  );
}
