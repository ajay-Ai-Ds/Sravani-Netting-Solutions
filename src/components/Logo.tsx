"use client";

import React from "react";
import Image from "next/image";

interface LogoProps {
  height?: number | string;
  className?: string;
  isScrolled?: boolean;
  theme?: "light" | "dark" | "adaptive";
  showPartnerBadge?: boolean;
}

export default function Logo({
  className = "",
  theme = "dark",
}: LogoProps) {
  const isDarkBg = theme === "light"; // light theme prop means white text for dark background

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none transition-all duration-300 ${className}`}>
      {/* Real 3D Globe with Netting PNG Logo */}
      <div className="relative flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#000000] shadow-md border border-[#e63946]/40 overflow-hidden p-0.5 group-hover:scale-105 transition-transform duration-200">
        <Image
          src="/images/globe_netting_logo.png"
          alt="Sravani Netting Solutions Globe Logo"
          fill
          className="object-cover rounded-lg"
          priority
          sizes="44px"
        />
      </div>

      {/* Premium Theme Typography: SRAVANI NETTING */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5 leading-none mb-1">
          <span className={`font-extrabold text-sm sm:text-base xl:text-lg tracking-tight font-display ${isDarkBg ? "text-white" : "text-[#000000]"}`}>
            SRAVANI
          </span>
          <span className="font-extrabold text-sm sm:text-base xl:text-lg tracking-tight text-[#e63946] font-display">
            NETTING
          </span>
        </div>

        <div className="flex items-center gap-1.5 leading-none">
          <span className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider ${isDarkBg ? "text-slate-300" : "text-slate-600"}`}>
            SAFETY SOLUTIONS
          </span>
          <span className="text-[#e63946] text-[8px] font-extrabold">•</span>
          <span className="bg-[#e63946] text-white text-[8px] sm:text-[9px] font-extrabold px-1.5 py-0.5 rounded uppercase tracking-wider shadow-xs">
            PREMIUM
          </span>
        </div>
      </div>
    </div>
  );
}



