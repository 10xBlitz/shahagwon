import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({
  label,
  id,
  className = "",
  ...props
}: InputProps) {
  const inputId =
    id || `input-${(label ?? "input").replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className="flex flex-col">
      <label
        htmlFor={inputId}
        className="mb-1 text-sm font-medium text-gray-600"
      >
        {label}
      </label>
      <input
        id={inputId}
        className={`border-0 border-b border-black bg-transparent px-0 py-1 focus:outline-none ${className}`}
        {...props}
      />
    </div>
  );
}
