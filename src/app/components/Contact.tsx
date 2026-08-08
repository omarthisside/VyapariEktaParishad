"use client";

import React from "react";
import { Phone, MessageSquare, ShieldCheck, MapPin } from "lucide-react";

interface ContactProps {
  labels: {
    heading: string;
    presidentTitle: string;
    whatsappBtn: string;
    addressLabel: string;
    addressVal: string;
  };
}

export default function Contact({ labels }: ContactProps) {

  return (
    <section id="contact" className="py-24 bg-white border-b border-[#8B312B]/10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black text-[#E81D25] uppercase tracking-widest">
            OFFICE OF STATE PRESIDENT
          </span>
          <h2 className="text-3xl font-black tracking-tight text-[#8B312B] sm:text-4xl mt-2">
            {labels.heading}
          </h2>
          <div className="mt-4 h-1.5 w-16 bg-[#E81D25] mx-auto rounded-full" />
        </div>

        {/* Contact Details Card */}
        <div className="max-w-2xl mx-auto bg-[#ECE9DE]/25 border border-[#8B312B]/15 rounded-3xl p-8 md:p-12 flex flex-col justify-between shadow-sm">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#E81D25] text-xs font-black uppercase tracking-wider mb-4">
              <ShieldCheck className="h-4.5 w-4.5" />
              <span>Registered Association</span>
            </div>
            
            <h3 className="text-xl font-black text-[#1F1D1C] mb-1">
              {labels.presidentTitle}
            </h3>
            
            <p className="text-lg font-black text-[#8B312B] mb-1">
              Shri Rahul Verma Ji
            </p>
            
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">
              Vyapari Ekta Parishad
            </p>

            {/* Direct numbers listing */}
            <div className="space-y-4 text-sm font-semibold text-[#1F1D1C]">
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-400 uppercase tracking-widest w-16">
                  Mobile:
                </span>
                <a href="tel:7669090008" className="hover:text-[#E81D25] transition-colors">
                  7669090008
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-400 uppercase tracking-widest w-16">
                  WhatsApp:
                </span>
                <a
                  href="https://wa.me/917669090008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:text-emerald-700 transition-colors font-extrabold"
                >
                  7669090008
                </a>
              </div>
            </div>

            {/* Address Details */}
            <div className="mt-6 pt-6 border-t border-[#8B312B]/10 space-y-2">
              <div className="flex items-start gap-3">
                <MapPin className="h-4.5 w-4.5 text-[#E81D25] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-extrabold">
                    {labels.addressLabel}
                  </span>
                  <span className="text-xs font-semibold text-[#1F1D1C]/90 leading-relaxed block mt-0.5">
                    {labels.addressVal}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Quick Action Buttons */}
          <div className="pt-8 border-t border-[#8B312B]/10 mt-8">
            <a
              href="https://wa.me/917669090008"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 px-6 text-xs font-black uppercase tracking-wider shadow-sm hover:shadow transition-all duration-200 w-full"
            >
              <MessageSquare className="h-4.5 w-4.5" />
              {labels.whatsappBtn}
            </a>
          </div>

          {/* Helpline Notice */}
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/50 mt-8 flex gap-3 items-start select-none">
            <span className="text-lg">📢</span>
            <p className="text-[11px] font-bold text-amber-900 leading-normal">
              Helpline is active for Uttar Pradesh region traders. For quick legal security or harassment issues, contact the central numbers directly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
