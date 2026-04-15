import React from "react";

interface PopoverItemProps {
  children: React.ReactNode;
  Icon?: any;
  //
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "default" | "danger";
}

export default function PopoverItem({ children, Icon, onClick, variant="default" }: PopoverItemProps) {
  return (
    <button
      type="submit"
      className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm font-normal rounded-md transition
        ${variant === "danger"
          ? "text-red-500 hover:bg-red-50"
          : "text-primary hover:bg-gray-100 hover:font-medium"
        }
      `} onClick={onClick}
    >
      {Icon && <span className="text-sm">{Icon}</span>}
      <p>{children}</p>
    </button>
  );
}
