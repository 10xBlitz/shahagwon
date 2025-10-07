"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  pointer?: boolean;
}

export default function Button({
  children,
  className,
  icon,
  iconPosition = "right",
  pointer = true,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${className} flex items-center justify-around ${pointer ? "hover:cursor-pointer" : ""}`}
      {...props}
    >
      {icon && iconPosition === "left" && icon}
      <span>{children}</span>
      {icon && iconPosition === "right" && icon}
    </button>
  );
}
