"use client";

import { ChevronRight, Plus } from "lucide-react";
import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  hasPlus?: boolean;
  hasArrow?: boolean;
}

export default function Button({
  onClick,
  children,
  className,
  hasPlus,
  hasArrow,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${className} flex items-center justify-around hover:cursor-pointer`}
    >
      {hasPlus && <Plus color="#FFFFFF" size={18} />}
      <span>{children}</span>
      {hasArrow && <ChevronRight color="#566FE7" />}
    </button>
  );
}
