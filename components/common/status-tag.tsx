import clsx from "clsx";
import React from "react";

interface StatusTagProps {
  text: string;
  status?: "success" | "warning" | "error" | "info" | "pending";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function StatusTag({
  text,
  status = "info",
  size = "md",
  className,
}: StatusTagProps) {

  const statusStyles = {
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-700",
    error: "bg-red-100 text-red-700",
    info: "bg-blue-100 text-blue-700",
    pending: "bg-gray-100 text-gray-700",
  };

  const sizeStyles = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-3 py-1",
    lg: "text-base px-4 py-1.5",
  };

  return (
    <div
      className={clsx(
        "inline-block items-center rounded-md font-semibold capitalize",
        statusStyles[status],
        sizeStyles[size],
        className
      )}
    >
      <p className="m-0 inline-block">{text}</p>
    </div>
  );
}
