import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

type InputProps = {
  label?: string;
  id?: string;
  name: string;
  type?: "text" | "email" | "password" | "number" | "tel" | "date";
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  inputStyle?: string;
  Icon?: React.ReactNode;
  errorMsg?: string[] | string;
  disabled?: boolean;
};

export default function Input({
  label,
  id,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
  inputStyle = "",
  Icon,
  errorMsg,
  disabled = false,
  ...props
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className={`flex flex-col relative ${className}`}>
      {label && (
        <label className="mb-2 ml-[2px] text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <div
        className={clsx(
          "flex items-center border rounded-lg px-3 py-2.5 focus-within:ring-2 focus-within:ring-blue-500",
          disabled && "bg-gray-100"
        )}
      >
        {Icon && <span className="mr-3 text-gray-400">{Icon}</span>}

        <input
          type={isPassword && !showPassword ? "password" : type}
          placeholder={placeholder}
          value={value}
          name={name}
          id={id}
          onChange={onChange}
          className={clsx(
            "w-full text-sm focus:outline-none text-zinc-700 font-medium",
            inputStyle && inputStyle,
            disabled && "text-zinc-400 bg-gray-100 opacity-75",
          )}
          disabled={disabled}
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

      {errorMsg && (
        <p className="absolute -bottom-4 left-4 text-xs font-semibold text-red-500">
          {errorMsg}
        </p>
      )}
    </div>
  );
}
