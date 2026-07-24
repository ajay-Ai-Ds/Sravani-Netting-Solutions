"use client";

import React from "react";
import Image from "next/image";

interface LogoProps {
  height?: number | string;
  className?: string;
  isScrolled?: boolean;
  theme?: "light" | "dark" | "adaptive";
}

export default function Logo({
  height = 50,
  className = "",
  isScrolled = false,
  theme = "adaptive",
}: LogoProps) {
  const parsedHeight = typeof height === "number" ? height : parseInt(height) || 50;
  // Aspect ratio of trimmed reallogo.webp (1188px / 406px = 2.926)
  const logoWidth = Math.round(parsedHeight * 2.926);

  return (
    <div className={`flex items-center select-none transition-all duration-300 ${className}`} style={{ height: parsedHeight }}>
      <div 
        className="relative flex-shrink-0 transition-all duration-300" 
        style={{ width: logoWidth, height: parsedHeight }}
      >
        <Image
          src="/images/reallogo.webp"
          alt="Sravani Netting Solutions Logo"
          fill
          className="object-contain"
          priority
          sizes="(max-width: 640px) 160px, 200px"
        />
      </div>
    </div>
  );
}



