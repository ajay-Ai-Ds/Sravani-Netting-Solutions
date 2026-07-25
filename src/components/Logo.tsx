"use client";

import React from "react";

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
      {/* Modern Diamond Safety Net Weave Emblem */}
      <div className="relative flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#000000] text-white shadow-md border border-[#e63946]/40 p-1.5 transition-transform duration-200">
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Diamond Outer Frame */}
          <path
            d="M18 3L32 18L18 33L4 18L18 3Z"
            stroke="#e63946"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Inner Safety Mesh Grid */}
          <path d="M18 7.5L27.5 18L18 28.5L8.5 18L18 7.5Z" stroke="#e63946" strokeWidth="1.2" strokeOpacity="0.4" />
          {/* Cross Strand Tension Cables */}
          <path d="M11 11L25 25M25 11L11 25" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
          {/* Center High-Tensile Anchor Knot Node */}
          <circle cx="18" cy="18" r="3" fill="#e63946" stroke="#ffffff" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Garware Theme Typography: SRAVANI NETTING */}
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
            GARWARE
          </span>
        </div>
      </div>
    </div>
  );
}



