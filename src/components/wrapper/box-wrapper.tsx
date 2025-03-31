import clsx from "clsx";
import React from "react";

interface BoxWrapperProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "primary" | "secondary" | "danger";
  bordered?: boolean;
}

export default function BoxWrapper({
  children,
  className = "",
  variant = "default",
  bordered = false,
}: BoxWrapperProps) {
  const baseStyles = "w-auto p-4 rounded-xl  transition-all inline-block";

  const variantStyles = {
    default: "bg-white text-primary",
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-100 text-gray-800",
    danger: "bg-red-500 text-white",
  };

  return (
    <div
      className={clsx(
        baseStyles,
        variantStyles[variant],
        bordered && "border border-gray-300",
        className
      )}
      style={{
        boxShadow:
          "0 0 2px 0 rgba(145, 158, 171, 0.2), 0 12px 24px -4px rgba(145, 158, 171, 0.12)",
      }}
    >
      {children}
    </div>
  );
}
