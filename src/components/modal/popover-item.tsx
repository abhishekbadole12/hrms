import React from "react";

interface PopoverItemProps {
  children: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function PopoverItem({ children, onClick }: PopoverItemProps) {
  return (
    <button
      type="submit"
      className="w-full text-start py-2 px-3 text-sm text-primary rounded-md hover:bg-gray-100 hover:font-medium"
      onClick={onClick}
    >
      <p>{children}</p>
    </button>
  );
}
