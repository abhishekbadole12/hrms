import React, { useEffect, useRef, useState } from "react";
//
import clsx from "clsx";
//
import Icon from "../common/icon/icon";
//

interface SelectProps {
  label?: string;
  name?: string;
  options: { name: string; value: string }[];
  selected?: string | null;
  value?: string;
  onChange: (option: { name: string; value: string }) => void;
  placeholder?: string;
  className?: string;
  FirstIcon?: React.ReactNode;
  errorMsg?: string[] | string;
  tabIndex?: number;
}

export default function Select({
  label,
  name,
  options,
  selected,
  value,
  onChange,
  placeholder = "Select",
  className = "",
  FirstIcon,
  errorMsg,
  tabIndex,
  ...props
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Find label from options based on selected value
  const selectedLabel =
    options.find((opt) => opt.value === selected)?.name || placeholder;

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={clsx("flex flex-col relative", className)}
      ref={dropdownRef}
    >
      {label && (
        <label className="mb-2 ml-[2px] text-sm font-medium">{label}</label>
      )}

      {/* Select Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between gap-1 w-full border rounded-lg py-2.5 px-3 cursor-pointer select-none focus-within:ring-2 focus-within:ring-blue-500"
      >
        <div className="flex items-center justify-between gap-2">
          {FirstIcon && FirstIcon}

          <h4
            className={clsx("text-sm text-gray-400 capitalize", {
              "text-zinc-700 font-medium": selected,
            })}
          >
            {selectedLabel}
          </h4>
        </div>

        <Icon
          icon="arrow"
          className={clsx(
            "text-gray-500 text-xs p-1 transition-transform duration-200",
            { "rotate-180": isOpen }
          )}
        />
      </div>

      {/* Select Menu */}
      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 min-w-full p-1 bg-white border rounded-lg shadow-lg z-10">
          {options.map((item) => (
            <div
              tabIndex={tabIndex ? tabIndex : -1}
              key={String(item.name)}
              onClick={() => {
                onChange(item);
                setIsOpen(false);
              }}
              className={clsx(
                "py-2.5 px-3 mb-1 text-sm text-primary rounded-md hover:bg-gray-100 cursor-pointer whitespace-nowrap",
                selected === item.value && "font-semibold bg-gray-100"
              )}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}

      {errorMsg && (
        <p className="absolute -bottom-4 left-4 text-xs font-semibold text-red-500">
          {errorMsg}
        </p>
      )}
    </div>
  );
}
