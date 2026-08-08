"use client";

import React from "react";
import Logo from "./Logo";
import { Sparkles, ArrowRight, AlertTriangle } from "lucide-react";

interface HeroProps {
  onJoinClick: () => void;
  labels: {
    titleSpan1: string;
    titleSpan2: string;
    titleSpan3: string;
    subtitle: string;
    copy: string;
    trustStatement: string;
    primaryCta: string;
  };
}

export default function Hero({ onJoinClick, labels }: HeroProps) {
  return (
    <section id="home" className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 lg:pb-36 bg-[#ECE9DE]">
      {/* Visual background accents representing the fist/strength motif (subtle grids and shapes) */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8B312B/5_1px,transparent_1px),linear-gradient(to_bottom,#8B312B/5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25" />
      
      {/* Decorative colored blobs matching brand colors */}
      <div className="absolute top-0 right-1/4 -z-10 h-80 w-80 rounded-full bg-[#E81D25]/10 blur-3xl" />
      <div className="absolute top-20 left-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-[#8B312B]/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
          {/* Centered Large V.E.P. Logo with Indian Flag Badge Element */}
          <div className="mb-6 relative group flex justify-center">
            <div className="relative transform hover:scale-105 transition-transform duration-300">
              <Logo size={200} showText={false} />
              
              {/* Floating Indian Flag Badge Element */}
              <div className="absolute -bottom-1 -right-1 flex flex-col w-12 h-8 rounded border-2 border-white shadow-md overflow-hidden rotate-6 hover:rotate-0 transition-all duration-200 select-none">
                <div className="bg-[#FF671F] flex-1" />
                <div className="bg-white flex-1 flex items-center justify-center relative">
                  <div className="w-2.5 h-2.5 rounded-full border border-[#000080] flex items-center justify-center relative">
                    {/* Spokes */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[0.5px] h-full bg-[#000080]/30 transform rotate-0" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[0.5px] h-full bg-[#000080]/30 transform rotate-45" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[0.5px] h-full bg-[#000080]/30 transform rotate-90" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[0.5px] h-full bg-[#000080]/30 transform rotate-135" />
                    </div>
                    <div className="w-0.75 h-0.75 rounded-full bg-[#000080]" />
                  </div>
                </div>
                <div className="bg-[#128807] flex-1" />
              </div>
            </div>
          </div>

          {/* Secondary Headline (Organization Name) */}
          <h2 className="text-xl md:text-2xl font-extrabold tracking-widest text-[#8B312B] uppercase mb-4 text-shadow-sm">
            {labels.subtitle}
          </h2>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6.5xl font-black text-[#1F1D1C] leading-[1.05] tracking-tight mb-8">
            <span className="text-[#E81D25] block sm:inline">{labels.titleSpan1}</span>
            <span className="block sm:inline">{labels.titleSpan2}</span>
            <span className="text-[#8B312B] block">{labels.titleSpan3}</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base md:text-lg text-[#1F1D1C]/80 max-w-2.5xl mx-auto mb-10 leading-relaxed font-medium">
            {labels.copy}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto mb-12">
            <button
              onClick={onJoinClick}
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg bg-[#E81D25] hover:bg-[#E81D25]/90 text-white px-8 py-4 text-sm font-black uppercase tracking-wider shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              {labels.primaryCta}
              <ArrowRight className="h-4.5 w-4.5" />
            </button>
          </div>

          {/* Trust Statement */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#E81D25]/5 border border-[#8B312B]/10 px-5 py-2 text-xs font-bold text-[#8B312B]">
            <span className="h-2 w-2 rounded-full bg-[#E81D25] animate-ping" />
            <span>{labels.trustStatement}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
