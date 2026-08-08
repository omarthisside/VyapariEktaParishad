"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, CheckSquare } from "lucide-react";
import Logo from "./Logo";

interface HeaderProps {
  onJoinClick: () => void;
  labels: {
    home: string;
    about: string;
    vision: string;
    issues: string;
    leadership: string;
    activities: string;
    joinUs: string;
    contact: string;
    joinCta: string;
    gallery: string;
    members: string;
  };
}

export default function Header({ onJoinClick, labels }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: labels.about, href: "#about" },
    { name: labels.vision, href: "#vision" },
    { name: labels.issues, href: "#issues" },
    { name: labels.members, href: "#leadership" },
    { name: labels.activities, href: "#activities" },
    { name: labels.gallery, href: "#gallery" },
    { name: labels.contact, href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#ECE9DE]/90 backdrop-blur-md shadow-md border-b border-[#8B312B]/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#home" className="cursor-pointer">
            <Logo size={46} />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[13px] font-extrabold tracking-wider uppercase text-[#1F1D1C] hover:text-[#E81D25] transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile menu block */}
          <div className="flex items-center gap-3 xl:hidden">
            {/* Hamburger button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-[#1F1D1C] hover:bg-[#1F1D1C]/5 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="xl:hidden absolute top-20 left-0 right-0 bg-[#ECE9DE] border-b border-[#8B312B]/20 px-6 py-6 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-5 duration-200">
          <nav className="flex flex-col gap-3">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-extrabold uppercase tracking-wide text-[#1F1D1C] hover:bg-[#1F1D1C]/5 hover:text-[#E81D25] transition-all"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
