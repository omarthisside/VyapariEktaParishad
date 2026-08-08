"use client";

import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  textColor?: string;
}

export default function Logo({
  className = "",
  size = 48,
  showText = true,
  textColor = "text-[#E81D25]"
}: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* VEP Logo Image */}
      <Image
        src="/logo.png"
        alt="VEP Logo"
        width={size}
        height={size}
        className="shrink-0 drop-shadow-sm select-none object-contain"
        priority
      />

      {showText && (
        <div className="flex flex-col select-none">
          <span className={`text-sm sm:text-base md:text-lg font-black leading-tight tracking-tight uppercase whitespace-nowrap ${textColor}`}>
            Vyapari Ekta Parishad
          </span>
          <div className="flex items-center gap-1.5 -mt-0.5">
            <span className="text-[10px] font-extrabold tracking-widest text-[#E81D25] uppercase">
              V.E.P. • ESTD. 2023
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#8B312B]" />
            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">
              Uttar Pradesh
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

