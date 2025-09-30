import React from "react";
import { Search } from "lucide-react";

interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeHolder?: string;
}

export default function SearchBar({
  className = "",
  placeHolder,
  ...props
}: SearchBarProps) {
  return (
    <div
      className={`flex items-center rounded-md border border-[#CCD7E0] bg-[#FBFCFE] px-3 py-2 transition-all focus-within:border-2 focus-within:border-[#0567CB] ${className}`}
    >
      <Search size={20} className="mr-2 text-[#626B73]" />
      <input
        type="text"
        className="flex-1 bg-transparent text-gray-900 placeholder-[#7A7F82] focus:outline-none"
        placeholder={placeHolder}
        {...props}
      />
    </div>
  );
}
