"use client";

import clsx from "clsx";
import React, { useState } from "react";

interface ModalProps {
  Icon: React.ReactNode;
  children?: React.ReactNode;
  containerStyles?: string; // Wrapper styles
  contentStyles?: string; // Styles for the popover content
  position?: "top" | "bottom" | "left" | "right"; // Positioning
}

export default function Popover({
  Icon,
  children,
  containerStyles = "",
  contentStyles = "",
  position = "bottom",
}: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);
  // const handleMouseEnter = () => setIsOpen(true);
  // const handleMouseLeave = () => setTimeout(() => setIsOpen(false), 500);

  return (
    <div
      className={clsx("relative inline-block ", containerStyles)}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      <button onClick={handleClick} className="text-lg">
        {Icon}
      </button>

      {/* Popover Content */}
      {isOpen && (
        <div
          className={clsx(
            "absolute bg-white shadow-lg rounded-xl px-1 py-2 w-48 border border-gray-200 z-10",
            contentStyles,
            {
              "top-full -right-2 mt-2": position === "bottom",
              "bottom-full mb-2": position === "top",
              "left-full ml-2": position === "right",
              "right-full mr-2": position === "left",
            }
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}
