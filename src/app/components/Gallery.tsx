"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryProps {
  labels: {
    heading: string;
    subheading: string;
  };
}

const photoFiles = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "6.png",
  "7.png",
  "8.png",
  "10.png",
  "10-1.png",
  "12.png",
  "13.png",
  "14.png",
  "15.png",
  "16.png"
];

export default function Gallery({ labels }: GalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : photoFiles.length - 1));
  }, [lightboxIndex]);

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev < photoFiles.length - 1 ? prev + 1 : 0));
  }, [lightboxIndex]);

  const handleClose = () => {
    setLightboxIndex(null);
  };

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      else if (e.key === "ArrowLeft") handlePrev();
      else if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, handlePrev, handleNext]);

  return (
    <section id="gallery" className="py-20 bg-[#ECE9DE]/10 border-b border-[#8B312B]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-black tracking-tight text-[#8B312B] sm:text-4xl">
            {labels.heading}
          </h2>
          <div className="mt-4 h-1.5 w-16 bg-[#E81D25] mx-auto rounded-full" />
          <p className="mt-4 text-base md:text-lg text-[#1F1D1C]/80 font-medium">
            {labels.subheading}
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photoFiles.map((file, idx) => (
            <div
              key={file}
              onClick={() => setLightboxIndex(idx)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white border border-[#8B312B]/10 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className="aspect-[4/3] w-full relative overflow-hidden">
                <Image
                  src={`/gallery/${file}`}
                  alt={`Gallery Image ${idx + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#8B312B]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white/90 backdrop-blur-sm text-xs font-bold text-[#8B312B] uppercase tracking-wider px-4 py-2 rounded-full shadow-sm">
                    View Photo
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={handleClose}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 z-50 rounded-full bg-white/10 hover:bg-white/20 p-3 text-white transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-50 rounded-full bg-white/10 hover:bg-white/20 p-3 text-white transition-colors cursor-pointer"
            aria-label="Previous Image"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          {/* Large Image Container */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full aspect-[4/3] sm:aspect-video select-none"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/gallery/${photoFiles[lightboxIndex]}`}
              alt={`Gallery Fullscreen ${lightboxIndex + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 1280px"
              priority
            />
            {/* Index Counter Indicator */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/80 text-xs font-bold tracking-wider uppercase bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
              {lightboxIndex + 1} / {photoFiles.length}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-50 rounded-full bg-white/10 hover:bg-white/20 p-3 text-white transition-colors cursor-pointer"
            aria-label="Next Image"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </div>
      )}
    </section>
  );
}
