import clsx from "clsx";
import React from "react";

interface StatusTagProps {
  text: string;
  status?: "success" | "warning" | "error" | "info" | "pending";
  size?: "sm" | "md" | "lg";
  className?: string;
  textStyle?: string;
}

export default function StatusTag({
  text,
  status = "info",
  size = "md",
  className,
  textStyle,
}: StatusTagProps) {
  const statusStyles = {
    success: "bg-green-200 text-green-700",
    warning: "bg-yellow-100 text-yellow-700",
    error: "bg-red-100 text-red-700",
    info: "bg-blue-100 text-blue-700",
    pending: "bg-gray-100 text-gray-700",
  };

  const sizeStyles = {
    sm: "text-xs px-3 py-1",
    md: "text-sm px-3 py-1",
    lg: "text-base px-4 py-1.5",
  };

  return (
    <div
      className={clsx(
        "inline-flex items-center rounded-md font-semibold capitalize",
        statusStyles[status],
        sizeStyles[size],
        className
      )}
    >
      <span className={clsx("m-0", textStyle)}>{text}</span>
    </div>
  );
}
