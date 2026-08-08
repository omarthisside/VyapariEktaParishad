"use client";

import React from "react";
import { UserCheck, MessageSquare } from "lucide-react";

interface JoinUsProps {
  onJoinClick: () => void;
  onContactClick: () => void;
  labels: {
    heading: string;
    copy: string;
    btnJoin: string;
    btnContact: string;
  };
}

export default function JoinUs({ onJoinClick, onContactClick, labels }: JoinUsProps) {
  return (
    <section id="join" className="py-20 bg-[#E81D25] text-white relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,#8B312B_0%,transparent_60%)] opacity-70" />
      
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight uppercase text-shadow-sm">
          {labels.heading}
        </h2>

        {/* Copy */}
        <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto font-semibold leading-relaxed">
          {labels.copy}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <button
            onClick={onJoinClick}
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg bg-white text-[#E81D25] hover:bg-[#ECE9DE] px-8 py-4 text-xs font-black uppercase tracking-wider shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <UserCheck className="h-4.5 w-4.5" />
            {labels.btnJoin}
          </button>
          
          <button
            onClick={onContactClick}
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg border-2 border-white text-white hover:bg-white/10 px-8 py-3.5 text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer"
          >
            <MessageSquare className="h-4.5 w-4.5" />
            {labels.btnContact}
          </button>
        </div>
      </div>
    </section>
  );
}
