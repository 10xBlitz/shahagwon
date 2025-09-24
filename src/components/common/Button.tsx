"use client";

import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  hasArrow?: boolean;
}

export default function Button({ onClick, children, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${className} flex items-center justify-around hover:cursor-pointer`}
    >
      <span>{children}</span>
    </button>
  );
}
