"use client";

import React from "react";
import {
  ShieldCheck,
  Megaphone,
  TrendingUp,
  Users,
  AlertTriangle,
  BookOpen,
  MapPin,
  Briefcase
} from "lucide-react";

interface CardLabels {
  title: string;
  desc: string;
}

interface ObjectivesProps {
  labels: {
    heading: string;
    cards: CardLabels[];
  };
}

export default function Objectives({ labels }: ObjectivesProps) {
  // Map icons to the 8 cards in sequence
  const icons = [
    <ShieldCheck key="1" className="h-6 w-6 text-[#E81D25]" />,
    <Megaphone key="2" className="h-6 w-6 text-[#8B312B]" />,
    <TrendingUp key="3" className="h-6 w-6 text-[#251F65]" />,
    <Users key="4" className="h-6 w-6 text-[#E81D25]" />,
    <AlertTriangle key="5" className="h-6 w-6 text-[#8B312B]" />,
    <BookOpen key="6" className="h-6 w-6 text-[#251F65]" />,
    <MapPin key="7" className="h-6 w-6 text-[#E81D25]" />,
    <Briefcase key="8" className="h-6 w-6 text-[#8B312B]" />
  ];

  return (
    <section className="py-20 bg-[#ECE9DE]/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-black tracking-tight text-[#8B312B] sm:text-4xl">
            {labels.heading}
          </h2>
          <div className="mt-4 h-1.5 w-16 bg-[#E81D25] mx-auto rounded-full" />
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {labels.cards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-white border border-[#8B312B]/10 p-6 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              {/* Icon Container */}
              <div className="inline-flex items-center justify-center p-3 rounded-xl bg-[#ECE9DE]/50 border border-[#8B312B]/5 mb-5 group-hover:scale-105 transition-transform duration-200">
                {icons[index] || <ShieldCheck className="h-6 w-6 text-[#E81D25]" />}
              </div>

              {/* Title */}
              <h3 className="text-base font-extrabold text-[#1F1D1C] mb-2 leading-snug">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-xs font-semibold text-[#1F1D1C]/75 leading-relaxed">
                {card.desc}
              </p>

              {/* Red Left Accent Bar */}
              <div className="absolute top-6 bottom-6 left-0 w-1 bg-[#E81D25] rounded-r-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
