import React from "react";

interface PopoverItemProps {
  children: string;
}

export default function PopoverItem({ children }: PopoverItemProps) {
  return (
    <div className="py-2 px-3 text-sm text-primary rounded-md hover:bg-gray-100 cursor-pointer">
      <p className="hover:font-medium">{children}</p>
    </div>
  );
}
