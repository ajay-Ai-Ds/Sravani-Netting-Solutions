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
      {/* Garware Corporate Style Theme Emblem Logo */}
      <div className="relative flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#e63946] to-[#dc2626] text-white shadow-md border border-[#e63946]/30">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white"
        >
          {/* Garware Shield Container */}
          <path
            d="M20 4L32 9.5V19.5C32 27.2 26.9 34.3 20 36.5C13.1 34.3 8 27.2 8 19.5V9.5L20 4Z"
            fill="currentColor"
            fillOpacity="0.2"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Garware Netting Cross Weave */}
          <path d="M14 13L26 27M26 13L14 27" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="20" cy="20" r="3" fill="#ffffff" />
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
          <span className="bg-[#000000] text-white text-[8px] sm:text-[9px] font-extrabold px-1.5 py-0.5 rounded uppercase tracking-wider border border-white/20">
            GARWARE
          </span>
        </div>
      </div>
    </div>
  );
}



