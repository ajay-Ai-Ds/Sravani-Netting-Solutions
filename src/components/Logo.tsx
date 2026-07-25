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
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none transition-all duration-300 ${className}`}>
      {/* Visual Logo Image */}
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
          sizes="(max-width: 640px) 140px, 180px"
        />
      </div>

      {/* Business Name & Garware Partnership Badge */}
      {showPartnerBadge && (
        <div className={`hidden sm:flex flex-col justify-center border-l ${isDarkBg ? "border-white/20" : "border-[#e5e5e5]"} pl-2.5 sm:pl-3 py-0.5`}>
          <div className="flex items-center gap-1 leading-none mb-1">
            <span className={`font-extrabold text-xs sm:text-sm xl:text-base tracking-tight font-display ${isDarkBg ? "text-white" : "text-[#000000]"}`}>
              SRAVANI
            </span>
            <span className="font-extrabold text-xs sm:text-sm xl:text-base tracking-tight text-[#e63946] font-display">
              NETTING
            </span>
          </div>

          <div className="flex items-center gap-1">
            <span className="inline-flex items-center gap-1 bg-[#e63946] text-white text-[9px] sm:text-[10px] font-extrabold px-2 py-0.5 rounded-full shadow-xs uppercase tracking-wider">
              <ShieldCheck className="w-3 h-3 text-white" />
              Garware Certified
            </span>
          </div>
        </div>
      )}
    </div>
  );
}



