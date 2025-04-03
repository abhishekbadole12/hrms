import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

interface SelectProps {
  label?: string;
  name?: string;
  options: { value: string; label: string }[];
  selected: string | null;
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  Icon?: React.ReactNode;
  errorMsg?: string[] | string;
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
  Icon,
  errorMsg,
  ...props
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Find label from options based on selected value
  const selectedLabel =
    options.find((opt) => opt.value === selected)?.label || placeholder;

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
        className="flex items-center justify-between gap-2.5 border rounded-lg p-2.5 cursor-pointer select-none focus-within:ring-2 focus-within:ring-blue-500"
      >
        <h4
          className={clsx(
            "text-sm text-gray-400 capitalize",
            selected && "text-zinc-700 font-medium"
          )}
        >
          {selectedLabel}
        </h4>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={clsx(
            "text-gray-500 text-xs transition-transform",
            isOpen && "rotate-180"
          )}
        />
      </div>

      {/* Select Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-full p-1 bg-white border rounded-lg shadow-lg z-10">
          {options.map((item) => (
            <div
              key={String(item.label)}
              onClick={() => {
                onChange(item.value);
                setIsOpen(false);
              }}
              className={clsx(
                "py-2 px-3 text-sm text-primary rounded-md hover:bg-gray-100 cursor-pointer",
                selected === item.value && "font-semibold bg-gray-100"
              )}
            >
              {item.label}
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
