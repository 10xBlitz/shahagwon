"use client";

import { User } from "lucide-react";
import Image from "next/image";
import React from "react";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: number;
  className?: string;
}

export default function Avatar({
  src,
  size = 48,
  className = "",
  alt = "User avatar",
}: AvatarProps) {
  const sizeClasses = `h-[${size}px] w-[${size}px]`;
  const baseClasses = `${sizeClasses} flex items-center justify-center rounded-full overflow-hidden ${className}`;

  if (src) {
    return (
      <div className={baseClasses}>
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className={`${baseClasses} bg-[#B0DBF0] p-2`}>
      <User size={size * 0.5} className="text-white" />
    </div>
  );
}
