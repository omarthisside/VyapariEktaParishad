"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { X, MessageSquare } from "lucide-react";

interface PromoModalProps {
  lang: "en" | "hi";
}

export default function PromoModal({ lang }: PromoModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already closed the promo in this session
    const isClosed = sessionStorage.getItem("vep-promo-closed");
    if (isClosed === "true") return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("vep-promo-closed", "true");
  };

  if (!isOpen) return null;

  const headerTitle = lang === "hi"
    ? "स्वतंत्रता दिवस के पावन पर्व पर आयोजित विशाल तिरंगा यात्रा"
    : "Grand Tiranga Yatra on the Holy Occasion of Independence Day";

  const btnText = lang === "hi"
    ? "व्हाट्सएप चैनल से जुड़ें"
    : "Join WhatsApp Channel";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      {/* Outer Click dismiss wrapper */}
      <div className="absolute inset-0 cursor-default" onClick={handleClose} />

      {/* Modal Container */}
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl max-w-sm sm:max-w-md w-full border border-[#8B312B]/10 animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh]">
        
        {/* Floating Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 bg-black/50 hover:bg-black/75 text-white rounded-full p-2 transition-all shadow-md z-50 cursor-pointer select-none"
          aria-label="Close Promo"
        >
          <X className="h-4.5 w-4.5" />
        </button>

        {/* Header Title Section */}
        <div className="bg-[#E81D25] text-white p-4 text-center shrink-0 border-b border-[#8B312B]/10">
          <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#ECE9DE]/80">
            {lang === "hi" ? "विशेष आमंत्रण" : "Special Invitation"}
          </p>
          <h2 className="text-xs sm:text-sm font-black uppercase tracking-wide leading-snug mt-1">
            {headerTitle}
          </h2>
        </div>

        {/* Scrollable Image Area */}
        <div className="relative overflow-y-auto flex-1 bg-slate-50 flex justify-center items-center p-2">
          <div className="relative w-full aspect-[2/3] max-h-[55vh] rounded-2xl overflow-hidden shadow-inner">
            <Image
              src="/tiranga-yatra.jpg"
              alt="Vishal Tiranga Yatra Banner"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Bottom CTA Row */}
        <div className="p-4 bg-white border-t border-[#8B312B]/10 shrink-0 text-center flex flex-col gap-2">
          <a
            href="https://whatsapp.com/channel/0029Vb8ReUAAzNc3qf1GEm1T"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClose}
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-xs font-black uppercase tracking-wider shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
          >
            <MessageSquare className="h-4 w-4 fill-white" />
            <span>{btnText}</span>
          </a>
        </div>

      </div>
    </div>
  );
}
