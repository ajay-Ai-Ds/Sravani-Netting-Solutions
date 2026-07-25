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
      {/* Globe with Netting Emblem */}
      <div className="relative flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#000000] text-white shadow-md border border-[#e63946]/40 p-1.5 transition-transform duration-200">
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Globe Outer Circle Sphere */}
          <circle cx="18" cy="18" r="14" stroke="#e63946" strokeWidth="2.2" />
          
          {/* Globe Latitude & Longitude Meridians */}
          <ellipse cx="18" cy="18" rx="14" ry="6" stroke="#e63946" strokeWidth="1.2" strokeOpacity="0.4" />
          <ellipse cx="18" cy="18" rx="6" ry="14" stroke="#e63946" strokeWidth="1.2" strokeOpacity="0.4" />
          <line x1="4" y1="18" x2="32" y2="18" stroke="#e63946" strokeWidth="1.2" strokeOpacity="0.4" />

          {/* Overlaid Protective Safety Netting Grid */}
          <path d="M18 4L32 18L18 32L4 18Z" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M18 10L26 18L18 26L10 18Z" stroke="#e63946" strokeWidth="1.5" />

          {/* Central High-Tensile Anchor Knot Node */}
          <circle cx="18" cy="18" r="2.8" fill="#e63946" stroke="#ffffff" strokeWidth="1.2" />
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



