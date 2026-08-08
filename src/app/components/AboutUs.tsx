"use client";

import React from "react";
import Image from "next/image";
import { Award, BookOpen, Shield } from "lucide-react";

interface AboutUsProps {
  labels: {
    heading: string;
    para1: string;
    para2: string;
    para3: string;
  };
}

export default function AboutUs({ labels }: AboutUsProps) {
  return (
    <section id="about" className="py-20 bg-white border-y border-[#8B312B]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-[#E81D25] text-xs font-black uppercase tracking-widest">
              <Shield className="h-4 w-4" />
              <span>ESTABLISHED 2023 • UTTAR PRADESH</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black text-[#8B312B] tracking-tight">
              {labels.heading}
            </h2>
            
            <div className="h-1.5 w-16 bg-[#E81D25] rounded-full" />
            
            <div className="space-y-4 text-sm md:text-base text-[#1F1D1C]/90 leading-relaxed font-medium">
              <p>{labels.para1}</p>
              <p className="border-l-4 border-[#8B312B] pl-4 italic bg-[#ECE9DE]/30 py-2 rounded-r-lg">
                {labels.para2}
              </p>
              <p>{labels.para3}</p>
            </div>
          </div>

          {/* Right: About Us Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative rounded-3xl w-full max-w-md aspect-[4/3] overflow-hidden border border-[#8B312B]/20 shadow-md">
              <Image
                src="/about-us.jpeg"
                alt="About Vyapari Ekta Parishad"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 450px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
