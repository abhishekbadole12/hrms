import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen, faSearch } from "@fortawesome/free-solid-svg-icons";

type InputProps = {
  label?: string;
  type?: string | "text" | "password" | "email" | "number";
  placeholder?: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  Icon?: React.ReactNode;
};

export default function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
  Icon,
  ...props
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label className="mb-2 ml-[2px] text-sm font-medium">{label}</label>
      )}

      <div className="flex items-center border rounded-lg px-3 py-2.5 focus-within:ring-2 focus-within:ring-blue-500">
        {Icon && <span className="mr-3 text-gray-400">{Icon}</span>}

        <input
          type={isPassword && !showPassword ? "password" : "text"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full text-sm focus:outline-none"
          {...props}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="ml-2 text-gray-500 focus:outline-none"
          >
            {showPassword ? (
              <FontAwesomeIcon icon={faSearch} className="" />
            ) : (
              <FontAwesomeIcon icon={faSearch} className="" />
            )}
          </button>
        )}
      </div>
    </div>
  );
}
