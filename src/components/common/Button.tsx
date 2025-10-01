"use client";

import { ChevronRight, Plus, RefreshCcw } from "lucide-react";
import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  hasCycle?: boolean;
  hasPlus?: boolean;
  hasArrow?: boolean;
}

export default function Button({
  onClick,
  children,
  className,
  hasCycle,
  hasPlus,
  hasArrow,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${className} flex items-center justify-around hover:cursor-pointer`}
    >
      {hasCycle && <RefreshCcw color="#FFFFFF" size={18} />}
      {hasPlus && <Plus color="#FFFFFF" size={18} />}
      <span>{children}</span>
      {hasArrow && <ChevronRight color="#566FE7" />}
    </button>
  );
}
