"use client";

import { ChevronRight } from "lucide-react";
import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  hasArrow?: boolean;
}

export default function Button({
  onClick,
  children,
  className,
  hasArrow,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${className} flex items-center justify-around hover:cursor-pointer`}
    >
      <span>{children}</span>
      {hasArrow && <ChevronRight color="#566FE7" />}
    </button>
  );
}
