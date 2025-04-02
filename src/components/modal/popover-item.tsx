import React from "react";

interface PopoverItemProps {
  children: string;
}

export default function PopoverItem({ children }: PopoverItemProps) {
  return (
    <div className="py-2 px-3 text-sm text-primary rounded-md cursor-pointer hover:bg-gray-100 hover:font-medium">
      <p className="">{children}</p>
    </div>
  );
}
