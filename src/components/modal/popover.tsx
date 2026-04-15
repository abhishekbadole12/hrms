"use client";

import React, { useEffect, useState } from "react";
//
import clsx from "clsx";
//

interface ModalProps {
  Icon: React.ReactNode;
  children?: React.ReactNode;
  containerStyles?: string; // Wrapper styles
  contentStyles?: string; // Styles for the popover content
  position?: "top" | "bottom" | "left" | "right"; // Positioning
  //
  _isOpen?: boolean;
  onOpenChange?: (val: boolean) => void;
}

export default function Popover({
  Icon,
  children,
  containerStyles = "",
  contentStyles = "",
  position = "bottom",
  //
  _isOpen = false,
}: ModalProps) {
  const [isOpen, setIsOpen] = useState(_isOpen);

  const handleClick = () => setIsOpen(!isOpen);
  // const handleMouseEnter = () => setIsOpen(true);
  // const handleMouseLeave = () => setTimeout(() => setIsOpen(false), 500);

  const ref = React.useRef<HTMLDivElement>(null);

  // outside click handling
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Escape key support
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleEsc);
    return () =>
      document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div
      ref={ref}
      className={clsx("relative inline-block ", containerStyles)}
    // onMouseEnter={handleMouseEnter}
    // onMouseLeave={handleMouseLeave}
    >
      <button onClick={(e) => {
        e.stopPropagation(); // prevent bubbling issues
        handleClick();
      }} className="text-lg">
        {Icon}
      </button>

      {/* Popover Content */}
      {isOpen && (
        <div
          className={clsx(
            "absolute bg-white shadow-lg rounded-xl px-1 py-2 w-40 border border-gray-200 z-10",
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
