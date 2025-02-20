import clsx from "clsx";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  children,
  className,
  disabled,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "px-3 py-2 rounded-md text-white text-sm font-bold transition duration-300",
        {
          "bg-gray-400 cursor-not-allowed": disabled,
          "bg-blue-600 hover:bg-blue-700": !disabled,
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
