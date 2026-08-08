"use client";

import React from "react";
import { MessageSquare } from "lucide-react";

interface AnnouncementBannerProps {
  lang: "en" | "hi";
}

export default function AnnouncementBanner({ lang }: AnnouncementBannerProps) {
  const btnText = lang === "hi" ? "चैनल से जुड़ें" : "Join Channel";
  
  const scrollText = lang === "hi" 
    ? "🇮🇳 विशाल तिरंगा यात्रा | 15 अगस्त | प्रातः 10:00 बजे | बिजनौर — स्वतंत्रता दिवस के पावन पर्व पर व्यापारी एकता परिषद द्वारा आयोजित | प्रारंभ स्थल: श्री शमशाद अंसारी जी का कैंप कार्यालय | आइए मिलकर तिरंगा लहराएं और गर्व से कहें — हम भारतीय हैं! 🇮🇳 • 🇮🇳 Grand Tiranga Yatra | 15th August | 10:00 AM | Bijnor — Organized by Vyapari Ekta Parishad on the occasion of Independence Day | Starting Point: Camp Office of Shri Shamshad Ansari Ji | Let's raise the tricolor together and say with pride — We are Indians! 🇮🇳 • "
    : "🇮🇳 Grand Tiranga Yatra | 15th August | 10:00 AM | Bijnor — Organized by Vyapari Ekta Parishad on the occasion of Independence Day | Starting Point: Camp Office of Shri Shamshad Ansari Ji | Let's raise the tricolor together and say with pride — We are Indians! 🇮🇳 • 🇮🇳 विशाल तिरंगा यात्रा | 15 अगस्त | प्रातः 10:00 बजे | बिजनौर — स्वतंत्रता दिवस के पावन पर्व पर व्यापारी एकता परिषद द्वारा आयोजित | प्रारंभ स्थल: श्री शमशाद अंसारी जी का कैंप कार्यालय | आइए मिलकर तिरंगा लहराएं और गर्व से कहें — हम भारतीय हैं! 🇮🇳 • ";

  return (
    <div className="bg-[#E81D25] text-white h-11 flex items-center justify-between px-4 overflow-hidden border-b border-white/10 select-none relative z-50">

      {/* Ticker marquee container */}
      <div className="flex-1 overflow-hidden relative flex items-center h-full">
        <div className="absolute flex whitespace-nowrap animate-marquee gap-8 text-xs font-black uppercase tracking-wider text-white">
          <span>{scrollText}</span>
          <span>{scrollText}</span>
        </div>
      </div>

      {/* Call to action button */}
      <a
        href="https://whatsapp.com/channel/0029Vb8ReUAAzNc3qf1GEm1T"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-4 shrink-0 inline-flex items-center gap-1 bg-white hover:bg-[#ECE9DE] text-[#E81D25] px-3.5 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-sm hover:shadow transition-all duration-150 cursor-pointer text-center"
      >
        <MessageSquare className="h-3 w-3 fill-current" />
        <span>{btnText}</span>
      </a>

    </div>
  );
}
