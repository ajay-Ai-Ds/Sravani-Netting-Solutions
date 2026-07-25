"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";

interface LogoProps {
  height?: number | string;
  className?: string;
  isScrolled?: boolean;
  theme?: "light" | "dark" | "adaptive";
  showPartnerBadge?: boolean;
}

export default function Logo({
  height = 48,
  className = "",
  theme = "dark",
  showPartnerBadge = true,
}: LogoProps) {
  const parsedHeight = typeof height === "number" ? height : parseInt(height) || 48;
  const logoWidth = Math.round(parsedHeight * 2.8);

  const isDarkBg = theme === "light"; // "light" theme prop means light-colored logo text for dark bg

  return (
    <div className={`flex items-center gap-1.5 xs:gap-2 sm:gap-3 select-none transition-all duration-300 ${className}`}>
      {/* Visual Logo Image */}
      <div 
        className="relative flex-shrink-0 transition-all duration-300 w-[95px] xs:w-[115px] sm:w-[135px]" 
        style={{ height: parsedHeight }}
      >
        <Image
          src="/images/reallogo.webp"
          alt="Sravani Netting Solutions Logo"
          fill
          className="object-contain"
          priority
          sizes="(max-width: 640px) 110px, 180px"
        />
      </div>

      {/* Business Name & Garware Partnership Badge (Visible on Mobile & Desktop) */}
      {showPartnerBadge && (
        <div className={`flex flex-col justify-center border-l ${isDarkBg ? "border-white/20" : "border-[#e5e5e5]"} pl-1.5 xs:pl-2 sm:pl-3 py-0.5`}>
          <div className="flex items-center gap-1 leading-none mb-0.5 sm:mb-1">
            <span className={`font-extrabold text-[10px] xs:text-xs sm:text-sm xl:text-base tracking-tight font-display ${isDarkBg ? "text-white" : "text-[#000000]"}`}>
              SRAVANI
            </span>
            <span className="font-extrabold text-[10px] xs:text-xs sm:text-sm xl:text-base tracking-tight text-[#e63946] font-display">
              NETTING
            </span>
          </div>

          <div className="flex items-center gap-1">
            <span className="inline-flex items-center gap-0.5 sm:gap-1 bg-[#e63946] text-white text-[8px] xs:text-[9px] sm:text-[10px] font-extrabold px-1.5 sm:px-2 py-0.5 rounded-full shadow-xs uppercase tracking-wider whitespace-nowrap">
              <ShieldCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
              Garware Certified
            </span>
          </div>
        </div>
      )}
    </div>
  );
}



