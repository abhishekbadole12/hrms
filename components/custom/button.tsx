import clsx from "clsx";
import React, { FormEvent } from "react";

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({
  children,
  type,
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
        "block px-3 py-2 rounded-md text-white text-sm font-bold transition duration-300",
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
