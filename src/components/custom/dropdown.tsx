import { useState, useRef, useEffect } from "react";
//
import clsx from "clsx";
//
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//

interface DropdownProps<T> {
  options: T[];
  selected: T | null;
  onChange: (value: T) => void;
  placeholder?: string;
  className?: string;
  Icon?: any;
  defaultIcon?: boolean;
}

export default function Dropdown<T extends string | number>({
  options,
  selected,
  onChange,
  placeholder = "Select",
  className = "",
  Icon,
  defaultIcon = true,
}: DropdownProps<T>) {
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
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "flex items-center justify-between gap-2.5 border border-third rounded-lg py-1.5 px-2.5 cursor-pointer select-none bg-white",
          className && className
        )}
      >
        {Icon}
        <h4 className="text-sm font-semibold text-primary">
          {selected ?? placeholder}
        </h4>
        {defaultIcon && (
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`text-primary text-xs transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        )}
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-1 min-w-full p-1 bg-white border border-third rounded-lg shadow-lg z-10">
          {options.map((item) => (
            <div
              key={String(item)}
              onClick={() => {
                onChange(item);
                setIsOpen(false);
              }}
              className={`py-2 px-3 text-sm text-primary rounded-md hover:bg-gray-100 cursor-pointer ${
                selected === item ? "font-semibold bg-gray-100" : ""
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
