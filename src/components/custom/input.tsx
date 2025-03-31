import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen, faEye, faEyeSlash, faSearch, faSlash } from "@fortawesome/free-solid-svg-icons";

type InputProps = {
  label?: string;
  name: string;
  type: string | "text" | "email" | "password" | "number";
  placeholder?: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  Icon?: React.ReactNode;
};

export default function Input({
  label,
  name,
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
        <label className="mb-2 ml-[2px] text-sm font-medium text-gray-700">{label}</label>
      )}

      <div className="flex items-center border rounded-lg px-3 py-2.5 focus-within:ring-2 focus-within:ring-blue-500">
        {Icon && <span className="mr-3 text-gray-400">{Icon}</span>}

        <input
          type={isPassword && !showPassword ? "password" : "text"}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
          className="w-full text-sm focus:outline-none text-zinc-700 font-medium"
          {...props}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="ml-2 text-gray-500 focus:outline-none"
          >
            {showPassword ? (
              <FontAwesomeIcon icon={faEyeSlash} className="" />
            ) : (
              <FontAwesomeIcon icon={faEye} className="" />
            )}
          </button>
        )}
      </div>
    </div>
  );
}
