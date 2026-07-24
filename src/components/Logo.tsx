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
  const isDarkTheme =
    theme === "dark" || (theme === "adaptive" && !isScrolled);

  // High-contrast dynamic colors for Option 2 (Deep Blue, Cyan, Gold)
  const primaryColor = isDarkTheme ? "#ffffff" : "#003d82"; // White on dark, Deep Blue on light
  const secondaryColor = isDarkTheme ? "#ffc107" : "#008ba3"; // Gold on dark, Deep Cyan on light
  const dividerColor = isDarkTheme ? "rgba(255, 255, 255, 0.35)" : "rgba(0, 61, 130, 0.25)";

  const parsedHeight = typeof height === "number" ? height : parseInt(height) || 50;
  const iconSize = Math.round(parsedHeight * 0.95);

  return (
    <div className={`flex items-center select-none transition-all duration-300 ${className}`} style={{ height: parsedHeight }}>
      {/* sravani-logo.png Icon */}
      <div 
        className="relative flex-shrink-0 transition-all duration-300 rounded-xl overflow-hidden shadow-sm" 
        style={{ width: iconSize, height: iconSize }}
      >
        <Image
          src="/images/sravani-logo.png"
          alt="Sravani Netting Solutions Logo Icon"
          fill
          className="object-contain rounded-lg"
          priority
        />
      </div>

      {/* Divider */}
      <div 
        className="h-3/5 w-[1.5px] mx-2 sm:mx-3.5 transition-colors duration-300 flex-shrink-0" 
        style={{ backgroundColor: dividerColor }}
      />

      {/* Business Name Text - High Contrast & Guaranteed Mobile Visibility */}
      <div className="flex flex-col justify-center leading-none whitespace-nowrap flex-shrink-0">
        <span 
          className="font-black tracking-wider text-base sm:text-xl font-display uppercase drop-shadow-sm"
          style={{ color: primaryColor }}
        >
          SRAVANI
        </span>
        <span 
          className="font-extrabold tracking-widest text-[10px] sm:text-[12px] font-display uppercase mt-0.5"
          style={{ color: secondaryColor }}
        >
          NETTING SOLUTIONS
        </span>
      </div>
    </div>
  );
}



