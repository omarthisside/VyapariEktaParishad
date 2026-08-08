"use client";

import React from "react";
import { MessageCircle, Shield } from "lucide-react";

interface StruggleProps {
  onRaiseClick: () => void;
  labels: {
    heading: string;
    copy: string;
    cta: string;
  };
}

export default function Struggle({ onRaiseClick, labels }: StruggleProps) {
  return (
    <section className="py-20 bg-[#ECE9DE]/30 relative overflow-hidden">
      {/* Decorative vertical lines representing a newspaper or editorial background */}
      <div className="absolute top-0 bottom-0 left-8 w-[1px] bg-[#8B312B]/10 hidden md:block" />
      <div className="absolute top-0 bottom-0 left-12 w-[1px] bg-[#8B312B]/10 hidden md:block" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white border-2 border-[#8B312B]/20 p-8 md:p-12 rounded-3xl shadow-sm">
          {/* Tag */}
          <div className="inline-flex items-center gap-1.5 text-[#E81D25] text-xs font-black uppercase tracking-widest mb-4">
            <Shield className="h-4 w-4" />
            <span>COLLECTIVE PROTECTION</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3.5xl font-black text-[#8B312B] tracking-tight mb-6 leading-tight uppercase">
            {labels.heading}
          </h2>

          {/* Copy */}
          <p className="text-base sm:text-lg text-[#1F1D1C] leading-relaxed font-semibold mb-8 border-l-4 border-[#E81D25] pl-4">
            {labels.copy}
          </p>

          {/* Action Trigger */}
          <button
            onClick={onRaiseClick}
            className="flex items-center gap-2 rounded-lg bg-[#E81D25] hover:bg-[#E81D25]/90 text-white px-6 py-3.5 text-xs font-black uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            <MessageCircle className="h-4.5 w-4.5" />
            {labels.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
