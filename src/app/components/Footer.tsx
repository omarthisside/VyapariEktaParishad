"use client";

import React from "react";
import Logo from "./Logo";
import { Phone, ArrowUp } from "lucide-react";

interface FooterProps {
  lang: "en" | "hi";
  setLang: (lang: "en" | "hi") => void;
  labels: {
    home: string;
    about: string;
    vision: string;
    issues: string;
    leadership: string;
    activities: string;
    joinUs: string;
    contact: string;
    gallery: string;
    members: string;
  };
}

export default function Footer({ lang, setLang, labels }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1F1D1C] text-[#ECE9DE]/80 pt-16 pb-8 border-t-2 border-[#8B312B]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12 items-start">
          {/* Logo & Descriptor */}
          <div className="md:col-span-5 space-y-4">
            <a href="#home" className="cursor-pointer inline-block">
              <Logo size={44} textColor="text-white" />
            </a>
            <p className="text-xs font-semibold text-[#ECE9DE]/65 leading-relaxed max-w-sm">
              Dedicated to protecting the legitimate rights of traders, establishing unified representations, and contributing to Uttar Pradesh's economic progress.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#E81D25]">
              Sitemap Links
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-bold">
              <a href="#about" className="hover:text-white transition-colors">
                {labels.about}
              </a>
              <a href="#vision" className="hover:text-white transition-colors">
                {labels.vision}
              </a>
              <a href="#issues" className="hover:text-white transition-colors">
                {labels.issues}
              </a>
              <a href="#leadership" className="hover:text-white transition-colors">
                {labels.members}
              </a>
              <a href="#activities" className="hover:text-white transition-colors">
                {labels.activities}
              </a>
              <a href="#join" className="hover:text-white transition-colors">
                {labels.joinUs}
              </a>
              <a href="#gallery" className="hover:text-white transition-colors">
                {labels.gallery}
              </a>
              <a href="#contact" className="hover:text-white transition-colors">
                {labels.contact}
              </a>
            </div>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#E81D25]">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs font-bold text-[#ECE9DE]/75">
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-[#E81D25]" />
                <a href="tel:7669090008" className="hover:text-white transition-colors">
                  7669090008
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-[#ECE9DE]/10 flex flex-col sm:flex-row justify-between items-center text-[10px] font-bold text-[#ECE9DE]/50">
          <p className="tracking-wide">
            © 2023–{currentYear} Vyapari Ekta Parishad (V.E.P.). All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 sm:mt-0 flex-wrap justify-center sm:justify-end">
            {/* Footer Language Switcher */}
            <div className="flex items-center bg-white/5 rounded-full p-0.5 border border-white/10 select-none">
              <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-0.5 text-[9px] font-black rounded-full transition-all cursor-pointer uppercase ${
                  lang === "en"
                    ? "bg-[#E81D25] text-white shadow-sm"
                    : "text-[#ECE9DE]/60 hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("hi")}
                className={`px-2.5 py-0.5 text-[9px] font-black rounded-full transition-all cursor-pointer ${
                  lang === "hi"
                    ? "bg-[#E81D25] text-white shadow-sm"
                    : "text-[#ECE9DE]/60 hover:text-white"
                }`}
              >
                हिन्दी
              </button>
            </div>

            <span className="text-[#ECE9DE]/20 select-none">|</span>
            <span>Region: Uttar Pradesh, India</span>
            <span className="text-[#ECE9DE]/40 select-none">|</span>
            <button
              onClick={handleScrollTop}
              className="flex items-center gap-1 hover:text-white transition-colors uppercase tracking-wider select-none cursor-pointer"
            >
              Back to top
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
