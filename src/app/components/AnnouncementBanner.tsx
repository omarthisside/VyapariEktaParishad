"use client";

import React from "react";
import { MessageSquare, Volume2 } from "lucide-react";

interface AnnouncementBannerProps {
  lang: "en" | "hi";
}

export default function AnnouncementBanner({ lang }: AnnouncementBannerProps) {
  const btnText = lang === "hi" ? "चैनल से जुड़ें" : "Join Channel";
  
  // Prefilled double scroll text to allow seamless infinite loop
  const scrollText = lang === "hi" 
    ? "📢 व्यापारी एकता परिषद के आधिकारिक व्हाट्सएप चैनल से जुड़कर नवीनतम समाचार, कर सुधार और व्यापारियों की सुरक्षा से जुड़े सभी अपडेट तुरंत प्राप्त करें! • Join the official Vyapari Ekta Parishad WhatsApp Channel to get instant updates on tax compliances, merchant security, and latest news! • "
    : "📢 Join the official Vyapari Ekta Parishad WhatsApp Channel to get instant updates on tax compliances, merchant security, and latest news! • व्यापारी एकता परिषद के आधिकारिक व्हाट्सएप चैनल से जुड़कर नवीनतम समाचार, कर सुधार और व्यापारियों की सुरक्षा से जुड़े सभी अपडेट तुरंत प्राप्त करें! • ";

  return (
    <div className="bg-[#E81D25] text-white h-11 flex items-center justify-between px-4 overflow-hidden border-b border-white/10 select-none relative z-50">
      
      {/* Live Badge indicator */}
      <div className="flex items-center gap-1.5 bg-black/25 backdrop-blur-sm border border-white/15 px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-widest mr-4 shrink-0 shadow-inner">
        <Volume2 className="h-3.5 w-3.5 animate-pulse text-white" />
        <span>Live</span>
      </div>

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
