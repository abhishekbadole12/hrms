import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface SelectProps {
  label?: string;
  options: { value: string; label: string }[];
  selected: string | null;
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  Icon?: React.ReactNode;
}

export default function Select({
  label,
  options,
  selected,
  value,
  onChange,
  placeholder = "Select",
  className = "",
  Icon,
  ...props
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    <div className={`flex flex-col relative ${className}`} ref={dropdownRef}>
      {label && (
        <label className="mb-2 ml-[2px] text-sm font-medium">{label}</label>
      )}

      {/* Select Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between gap-2.5 border rounded-lg p-3 cursor-pointer select-none focus-within:ring-2 focus-within:ring-blue-500"
      >
        <h4 className="text-sm">{selected ?? placeholder}</h4>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`text-gray-500 text-xs transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
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
              className={`py-2 px-3 text-sm text-primary rounded-md hover:bg-gray-100 cursor-pointer ${
                selected === item.value ? "font-semibold bg-gray-100" : ""
              }`}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
