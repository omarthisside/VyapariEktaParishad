"use client";

import React from "react";
import { Quote } from "lucide-react";

interface VisionProps {
  labels: {
    heading: string;
    statement: string;
    supporting: string;
    quote: string;
  };
}

export default function Vision({ labels }: VisionProps) {
  return (
    <section id="vision" className="py-24 bg-[#E81D25] text-white relative overflow-hidden">
      {/* Subtle abstract background overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#8B312B_0%,transparent_60%)] opacity-60" />
      <div className="absolute -top-12 left-1/3 h-56 w-56 rounded-full bg-white/5 blur-2xl" />
      <div className="absolute -bottom-20 right-1/4 h-80 w-80 rounded-full bg-[#251F65]/20 blur-3xl" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        {/* Heading */}
        <h2 className="text-xl sm:text-2xl font-black uppercase tracking-widest text-white/95 mb-6 text-shadow-sm">
          {labels.heading}
        </h2>

        {/* Main Statement */}
        <p className="text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] tracking-tight mb-8 max-w-4xl mx-auto">
          {labels.statement}
        </p>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg text-white/80 max-w-2.5xl mx-auto mb-12 font-medium leading-relaxed">
          {labels.supporting}
        </p>

        {/* Highlight Quote */}
        <div className="relative max-w-3xl mx-auto pt-8 border-t border-white/20">
          <Quote className="absolute -top-3 left-1/2 -translate-x-1/2 h-8 w-8 text-white/20 rotate-180" />
          <blockquote className="text-xl sm:text-2xl font-extrabold italic text-white leading-relaxed">
            {labels.quote}
          </blockquote>
        </div>
      </div>
    </section>
  );
}
