"use client";

import React from "react";
import clsx from "clsx";

interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Switch({
  checked = false,
  onChange,
  size = "md",
  className,
}: SwitchProps) {
  const handleToggle = () => {
    if (onChange) onChange(!checked);
  };

  const sizeStyles = {
    sm: "w-8 h-4 after:h-3 after:w-3 after:top-[2px] after:start-[2px]",
    md: "w-[40px] h-[22px] after:h-[18px] after:w-[18px] after:top-[2px] after:start-[2px]",
    lg: "w-12 h-[24px] after:h-5 after:w-5 after:top-[2px] after:start-[3px]",
  };

  return (
    <label
      className={clsx("inline-flex items-center cursor-pointer", className)}
    >
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={() => {}}
      />
      <div
        className={clsx(
          "relative bg-gray-200 peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer after:absolute after:bg-white after:border after:rounded-full after:transition-all peer-checked:bg-blue-600 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full",
          sizeStyles[size]
        )}
      ></div>
    </label>
  );
}
