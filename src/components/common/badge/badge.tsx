import React from "react";
import clsx from "clsx";

interface IBadgeProps {
  type?: "success" | "info" | "warning" | "default";
  label: string;
}

export default function Badge({ type = "default", label }: IBadgeProps) {
  const baseStyles =
    "w-fit py-1 px-3 border-[0.85px] rounded-full text-xs font-semibold";

  const typeStyles = {
    success:
      "border-[rgb(34,197,94,0.35)] text-[#118d57] bg-[rgb(34,197,94,0.25)]",
    info: "border-blue-200 text-blue-700 bg-blue-100",
    warning: "border-yellow-200 text-yellow-800 bg-yellow-100",
    default: "border-gray-300 text-gray-700 ",
  };

  return <div className={clsx(baseStyles, typeStyles[type])}>{label}</div>;
}
