"use client";

import React from "react";
import { Calendar, Tag, ArrowRight, FileText } from "lucide-react";

interface ActivityCard {
  date: string;
  category: string;
  title: string;
  desc: string;
}

interface ActivitiesProps {
  labels: {
    heading: string;
    readMore: string;
    cards: ActivityCard[];
  };
}

export default function Activities({ labels }: ActivitiesProps) {
  // Styled SVGs to act as card visual backgrounds based on categories
  const renderCardGraphic = (category: string) => {
    const isMeeting = category === "MEETING" || category === "बैठक";
    const isNews = category === "NEWS" || category === "समाचार";

    return (
      <div className="h-44 w-full relative overflow-hidden bg-[#ECE9DE]/60 border-b border-[#8B312B]/10 flex items-center justify-center select-none">
        {/* Abstract grids */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8B312B/5_1px,transparent_1px),linear-gradient(to_bottom,#8B312B/5_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-20" />
        
        {/* Core emblem vector in background */}
        <div className="absolute h-24 w-24 rounded-full bg-white/40 flex items-center justify-center border border-[#8B312B]/5 shadow-inner">
          <FileText className={`h-10 w-10 ${isMeeting ? "text-[#E81D25]" : isNews ? "text-[#8B312B]" : "text-[#251F65]"}`} />
        </div>

        {/* Decorative dynamic badge */}
        <div className="absolute bottom-3 left-4 bg-white/80 backdrop-blur-sm border border-[#8B312B]/10 px-2.5 py-1 rounded text-[10px] font-black uppercase tracking-wider text-[#1F1D1C] flex items-center gap-1.5 shadow-sm">
          <Tag className="h-3 w-3 text-[#E81D25]" />
          <span>{category}</span>
        </div>
      </div>
    );
  };

  return (
    <section id="activities" className="py-20 bg-[#ECE9DE]/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-black tracking-tight text-[#8B312B] sm:text-4xl">
            {labels.heading}
          </h2>
          <div className="mt-4 h-1.5 w-16 bg-[#E81D25] mx-auto rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {labels.cards.map((card, index) => (
            <article
              key={index}
              className="bg-white border border-[#8B312B]/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
            >
              {/* Graphic Banner */}
              {renderCardGraphic(card.category)}

              {/* Text Area */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div className="space-y-3">
                  {/* Date */}
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs font-semibold">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{card.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-extrabold text-[#1F1D1C] leading-snug group-hover:text-[#E81D25] transition-colors">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs font-semibold text-[#1F1D1C]/80 leading-relaxed line-clamp-3">
                    {card.desc}
                  </p>
                </div>

                {/* Read More button */}
                <div className="pt-5 border-t border-[#8B312B]/5 mt-5 flex items-center">
                  <span className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider text-[#E81D25] hover:text-[#8B312B] transition-colors">
                    {labels.readMore}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
