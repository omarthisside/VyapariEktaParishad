"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Calendar, Tag, ArrowLeft, MessageCircle } from "lucide-react";

interface Article {
  date: string;
  category: string;
  title: string;
  desc: string;
  content: string;
  image?: string;
}

interface ArticleViewProps {
  article: Article;
  onClose: () => void;
  labels: {
    backBtn: string;
    shareBtn: string;
  };
}

export default function ArticleView({ article, onClose, labels }: ArticleViewProps) {
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const textToShare = `${article.title}\n\n${article.desc}\n\nRead more at: ${window.location.href}`;
      setShareUrl(`https://api.whatsapp.com/send?text=${encodeURIComponent(textToShare)}`);
    }
  }, [article]);

  // Split content by newlines to render proper paragraphs
  const paragraphs = article.content.split("\n\n");

  return (
    <main className="flex-1 bg-[#ECE9DE]/30 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        
        {/* Navigation & Actions Top Row */}
        <div className="flex items-center justify-between gap-4 mb-8 border-b border-[#8B312B]/10 pb-4">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs font-black text-[#8B312B] hover:text-[#E81D25] uppercase tracking-wider transition-colors cursor-pointer select-none"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{labels.backBtn}</span>
          </button>

          {shareUrl && (
            <a
              href={shareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-1.5 text-[10px] font-black uppercase tracking-wider shadow-sm transition-all cursor-pointer select-none"
            >
              <MessageCircle className="h-3.5 w-3.5 fill-white" />
              <span>{labels.shareBtn}</span>
            </a>
          )}
        </div>

        {/* Article Container */}
        <article className="bg-white border border-[#8B312B]/10 rounded-3xl p-8 md:p-12 shadow-sm space-y-6 overflow-hidden">
          {article.image && (
            <div className="w-full h-64 md:h-80 relative rounded-2xl overflow-hidden mb-6 border border-[#8B312B]/10">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover animate-fade-in"
              />
            </div>
          )}
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500">
            <span className="bg-[#E81D25]/10 text-[#E81D25] border border-[#E81D25]/10 px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
              <Tag className="h-3.5 w-3.5" />
              {article.category}
            </span>
            
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {article.date}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3.5xl sm:text-4xl font-black text-[#1F1D1C] leading-[1.1] tracking-tight border-b border-[#8B312B]/10 pb-6">
            {article.title}
          </h1>

          {/* Article Paragraphs */}
          <div className="text-sm sm:text-base font-semibold text-[#1F1D1C]/80 leading-relaxed space-y-5">
            {paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </article>

        {/* Bottom Back Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 rounded-xl bg-white hover:bg-[#ECE9DE]/50 border border-[#8B312B]/20 text-[#8B312B] hover:text-[#E81D25] px-6 py-3 text-xs font-black uppercase tracking-wider shadow-sm hover:shadow transition-all cursor-pointer select-none"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{labels.backBtn}</span>
          </button>
        </div>

      </div>
    </main>
  );
}
