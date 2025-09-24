import React from "react";

interface TextFieldProps {
  label?: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number";
  error?: string;
  disabled?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  inputContainerClassName?: string;
}

export function TextField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  error,
  disabled,
  required,
  fullWidth,
  startIcon,
  endIcon,
  className,
  containerClassName,
  labelClassName,
  inputClassName,
  inputContainerClassName,
}: TextFieldProps) {
  const labelClasses = `${labelClassName ?? ""} block mb-2`.trim();

  const containerClasses = `flex flex-col ${fullWidth ? "w-full" : "w-auto"} ${
    className ?? ""
  } ${containerClassName ?? ""}`.trim();

  const inputContainerClasses =
    `flex items-center border rounded px-3 py-4 bg-white ${
      error
        ? "border-red-500"
        : "border-[#BDBDBD] hover:border-black focus-within:border-[#1B76D3] focus-within:border-1 focus-within:hover:border-purple-500"
    } ${disabled ? "bg-gray-50" : ""} ${inputContainerClassName ?? ""}`.trim();

  const inputClasses =
    `flex-1 outline-none bg-transparent placeholder-[#6B6B6B] ${
      inputClassName ?? ""
    }`.trim();

  return (
    <div className={containerClasses}>
      {label && (
        <label className={labelClasses}>
          {label} {required && "*"}
        </label>
      )}

      <div className={inputContainerClasses}>
        {startIcon && <span className="mr-2">{startIcon}</span>}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          className={inputClasses}
        />
        {endIcon && <span className="ml-2">{endIcon}</span>}
      </div>

      {error && <span className="mt-1 text-xs text-red-500">{error}</span>}
    </div>
  );
}
