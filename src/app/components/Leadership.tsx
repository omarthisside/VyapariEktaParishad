"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Award, Mail, Phone, ShieldAlert, UserCheck, User, ChevronDown } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  desc: string;
}

interface TeamSection {
  title: string;
  members: TeamMember[];
}

interface LeadershipProps {
  labels: {
    heading: string;
    name: string;
    title: string;
    org: string;
    statement: string;
    showMembers: string;
    hideMembers: string;
    teams: {
      pradesh: TeamSection;
      mandal: TeamSection;
      zila: TeamSection;
      nagar: TeamSection;
      yuva: TeamSection;
    };
  };
}

export default function Leadership({ labels }: LeadershipProps) {
  const [expandedTeams, setExpandedTeams] = useState<Record<string, boolean>>({});

  const toggleTeam = (key: string) => {
    setExpandedTeams((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <section id="leadership" className="py-20 bg-white border-b border-[#8B312B]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-black tracking-tight text-[#8B312B] sm:text-4xl">
            {labels.heading}
          </h2>
          <div className="mt-4 h-1.5 w-16 bg-[#E81D25] mx-auto rounded-full" />
        </div>

        {/* Leadership Profile Card */}
        <div className="max-w-4xl mx-auto bg-[#ECE9DE]/25 border border-[#8B312B]/15 rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left: President Photo */}
            <div className="md:col-span-4 flex flex-col items-center">
              <div className="relative h-44 w-44 rounded-full bg-gradient-to-tr from-[#8B312B] to-[#E81D25] p-1 shadow-md select-none overflow-hidden">
                <div className="relative h-full w-full rounded-full overflow-hidden">
                  <Image
                    src="/rahul-verma-photo.png"
                    alt="Shri Rahul Verma Ji"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <span className="text-[10px] font-black text-[#8B312B] uppercase tracking-widest mt-4 bg-white px-3 py-1 rounded-full border border-[#8B312B]/15 shadow-sm">
                V.E.P. PRESIDENT
              </span>
            </div>

            {/* Right: Leadership text */}
            <div className="md:col-span-8 space-y-4 text-center md:text-left">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-[#E81D25] text-xs font-black uppercase tracking-wider">
                  <UserCheck className="h-4 w-4" />
                  <span>State Leadership Panel</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black text-[#1F1D1C]">
                  {labels.name}
                </h3>
                
                <p className="text-sm font-extrabold text-[#8B312B] uppercase tracking-wider">
                  {labels.title}
                </p>
                
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                  {labels.org} • Uttar Pradesh
                </p>
              </div>

              <blockquote className="text-sm sm:text-base font-semibold text-[#1F1D1C]/80 leading-relaxed border-t border-[#8B312B]/15 pt-4">
                {labels.statement}
              </blockquote>

              {/* Direct links to contact office */}
              <div className="pt-3 flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="tel:7669090008"
                  className="inline-flex items-center gap-2 text-xs font-black text-[#8B312B] hover:text-[#E81D25] transition-colors"
                >
                  <Phone className="h-4 w-4 text-slate-400" />
                  <span>Office Helpline: 7669090008</span>
                </a>
              </div>
            </div>
            
          </div>
        </div>

        {/* Organization Teams */}
        <div className="mt-20 space-y-12">
          {Object.entries(labels.teams).map(([key, team]) => {
            const isExpanded = !!expandedTeams[key];
            return (
              <div key={key} className="bg-[#ECE9DE]/15 border border-[#8B312B]/10 rounded-3xl p-6 md:p-8 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-[#8B312B]/10 pb-4">
                  <h3 className="text-lg md:text-xl font-extrabold text-[#8B312B] uppercase tracking-wider">
                    {team.title}
                  </h3>
                  <button
                    onClick={() => toggleTeam(key)}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white hover:bg-[#ECE9DE]/50 border border-[#8B312B]/20 text-[#8B312B] hover:text-[#E81D25] px-5 py-2.5 text-xs font-black uppercase tracking-wider shadow-sm hover:shadow transition-all cursor-pointer w-fit select-none"
                  >
                    <span>{isExpanded ? labels.hideMembers : labels.showMembers}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                  </button>
                </div>
                
                {isExpanded && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 animate-in fade-in slide-in-from-top-2 duration-300">
                    {team.members.map((member, idx) => (
                      <div
                        key={idx}
                        className="bg-white border border-[#8B312B]/10 rounded-2xl p-5 flex flex-col items-center justify-between text-center hover:shadow-md transition-shadow duration-300 min-h-[220px]"
                      >
                        <div className="flex flex-col items-center w-full">
                          {/* Space for Image (Placeholder) */}
                          <div className="w-16 h-16 rounded-full bg-[#ECE9DE]/60 border border-[#8B312B]/15 flex items-center justify-center text-slate-400 mb-3 shadow-inner">
                            <User className="h-7 w-7 text-[#8B312B]/40" />
                          </div>
                          
                          <h4 className="font-extrabold text-sm text-[#1F1D1C] leading-tight line-clamp-2">
                            {member.name}
                          </h4>
                          
                          <p className="font-bold text-[10px] text-[#E81D25] uppercase tracking-wider mt-1 leading-snug">
                            {member.role}
                          </p>
                        </div>

                        {member.desc && (
                          <p className="text-[10px] text-slate-500 font-bold tracking-wide mt-2 border-t border-[#8B312B]/5 pt-1.5 w-full">
                            {member.desc}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
