"use client";

import React from "react";
import { Phone, MessageSquare, ShieldCheck, MapPin } from "lucide-react";

interface ContactProps {
  labels: {
    heading: string;
    presidentTitle: string;
    whatsappBtn: string;
    callBtn: string;
    followUs: string;
    addressLabel: string;
    addressVal: string;
  };
}

export default function Contact({ labels }: ContactProps) {
  // Social media placeholders as requested (clearly marked for configuration)
  const socialLinks = [
    {
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
        </svg>
      ),
      href: "#",
      name: "Facebook",
    },
    {
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
      href: "#",
      name: "Instagram",
    },
    {
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      href: "#",
      name: "X (Twitter)",
    },
  ];

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

        {/* Contact Block Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Contact Details Card */}
          <div className="bg-[#ECE9DE]/25 border border-[#8B312B]/15 rounded-3xl p-8 flex flex-col justify-between">
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
                    Mobile:
                  </span>
                  <a href="tel:7669790008" className="hover:text-[#E81D25] transition-colors">
                    7669790008
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
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-[#8B312B]/10 mt-8">
              <a
                href="https://wa.me/917669090008"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-xs font-black uppercase tracking-wider shadow-sm transition-all duration-200"
              >
                <MessageSquare className="h-4 w-4" />
                {labels.whatsappBtn}
              </a>
              
              <a
                href="tel:7669090008"
                className="flex items-center justify-center gap-2 rounded-lg bg-[#E81D25] hover:bg-[#E81D25]/90 text-white py-3 text-xs font-black uppercase tracking-wider shadow-sm transition-all duration-200"
              >
                <Phone className="h-4 w-4" />
                {labels.callBtn}
              </a>
            </div>
          </div>

          {/* Social Channels and Message area */}
          <div className="bg-[#ECE9DE]/15 border border-[#8B312B]/10 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-black text-[#8B312B] uppercase tracking-wider mb-2">
                {labels.followUs}
              </h3>
              <p className="text-xs font-semibold text-[#1F1D1C]/75 leading-relaxed mb-6">
                Stay updated with the latest declarations, policy memos, and meetings of Vyapari Ekta Parishad across social channels.
              </p>

              {/* Social list */}
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-[#8B312B]/10 text-[#8B312B] hover:text-white hover:bg-[#E81D25] hover:border-transparent transition-all shadow-sm"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Helpline Notice */}
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/50 mt-6 flex gap-3 items-start select-none">
              <span className="text-lg">📢</span>
              <p className="text-[11px] font-bold text-amber-900 leading-normal">
                Helpline is active for Uttar Pradesh region traders. For quick legal security or harassment issues, contact the central numbers directly.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
