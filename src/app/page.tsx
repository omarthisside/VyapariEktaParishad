"use client";

import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Vision from "./components/Vision";
import Objectives from "./components/Objectives";
import Issues from "./components/Issues";
import Leadership from "./components/Leadership";
import Activities from "./components/Activities";
import Gallery from "./components/Gallery";
import JoinUs from "./components/JoinUs";
import RegistrationForm from "./components/RegistrationForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { translations } from "./data/translations";

export default function Home() {
  const [lang, setLangState] = useState<"en" | "hi">("hi");
  const [mounted, setMounted] = useState(false);

  const registerRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Synchronize language state with localStorage, URL search params, and HTML element attributes
  useEffect(() => {
    setMounted(true);
    
    // 1. Check URL parameters first
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get("lang");
    
    if (urlLang === "en" || urlLang === "hi") {
      setLangState(urlLang);
      document.documentElement.lang = urlLang;
      localStorage.setItem("vep-lang", urlLang);
    } else {
      // 2. Check localStorage
      const cached = localStorage.getItem("vep-lang");
      if (cached === "en" || cached === "hi") {
        setLangState(cached);
        document.documentElement.lang = cached;
      } else {
        // Default to Hindi
        document.documentElement.lang = "hi";
      }
    }
  }, []);

  const setLang = (newLang: "en" | "hi") => {
    setLangState(newLang);
    localStorage.setItem("vep-lang", newLang);
    document.documentElement.lang = newLang;
    
    // Update URL query parameters without reloading the page
    const url = new URL(window.location.href);
    url.searchParams.set("lang", newLang);
    window.history.pushState({}, "", url.toString());
  };

  // Dynamically update document title based on language selection
  useEffect(() => {
    if (!mounted) return;
    document.title = lang === "hi" 
      ? "व्यापारी एकता परिषद (वी.ई.पी.) | उत्तर प्रदेश" 
      : "Vyapari Ekta Parishad (V.E.P.) | Uttar Pradesh";
  }, [lang, mounted]);

  const scrollToRegister = () => {
    registerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (!mounted) {
    // Return layout loading skeletal background in Cream to prevent server flash
    return <div className="min-h-screen bg-[#ECE9DE]" />;
  }

  const currentText = translations[lang];

  return (
    <div className="flex flex-col min-h-screen bg-[#ECE9DE]">
      {/* Sticky Navigation Header */}
      <Header
        lang={lang}
        setLang={setLang}
        onJoinClick={scrollToRegister}
        labels={currentText.nav}
      />

      {/* Hero section */}
      <Hero
        onJoinClick={scrollToRegister}
        onRaiseIssueClick={scrollToRegister}
        labels={currentText.hero}
      />

      {/* About Us section */}
      <AboutUs labels={currentText.about} />

      {/* Vision statement */}
      <Vision labels={currentText.vision} />

      {/* Mission / Objectives grid */}
      <Objectives labels={currentText.mission} />

      {/* Traders' Issues grid with interactive read triggers */}
      <Issues labels={currentText.issues} />

      {/* Leadership Profile */}
      <Leadership labels={currentText.leadership} />

      {/* Activities / Updates Cards */}
      <Activities labels={currentText.activities} />

      {/* Gallery Section */}
      <Gallery labels={currentText.gallery} />

      {/* Registration Section */}
      <div ref={registerRef} id="join">
        {/* Banner */}
        <JoinUs
          onJoinClick={scrollToRegister}
          onContactClick={scrollToContact}
          labels={currentText.joinSection}
        />
        
        {/* Form Container */}
        <div className="py-20 bg-[#ECE9DE]/30 px-4 sm:px-6 lg:px-8 border-b border-[#8B312B]/10">
          <RegistrationForm labels={currentText.form} />
        </div>
      </div>

      {/* Contact Cards section */}
      <div ref={contactRef}>
        <Contact labels={currentText.contactSection} />
      </div>

      {/* Footer Sitemap */}
      <Footer labels={currentText.nav} />
    </div>
  );
}
