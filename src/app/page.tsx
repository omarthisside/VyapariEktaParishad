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
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ArticleView from "./components/ArticleView";
import AnnouncementBanner from "./components/AnnouncementBanner";
import PromoModal from "./components/PromoModal";
import { translations } from "./data/translations";

export default function Home() {
  const [lang, setLangState] = useState<"en" | "hi">("hi");
  const [mounted, setMounted] = useState(false);
  const [activeArticle, setActiveArticle] = useState<any>(null);

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

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleJoinClick = () => {
    window.open("https://whatsapp.com/channel/0029Vb8ReUAAzNc3qf1GEm1T", "_blank", "noopener,noreferrer");
  };

  if (!mounted) {
    // Return layout loading skeletal background in Cream to prevent server flash
    return <div className="min-h-screen bg-[#ECE9DE]" />;
  }

  const currentText = translations[lang];

  if (activeArticle) {
    return (
      <div className="flex flex-col min-h-screen bg-[#ECE9DE]">
        {/* Animated Announcement Banner */}
        <AnnouncementBanner lang={lang} />

        {/* Sticky Navigation Header */}
        <Header
          onJoinClick={handleJoinClick}
          labels={currentText.nav}
        />
        
        {/* Article Page View */}
        <ArticleView
          article={activeArticle}
          onClose={() => {
            setActiveArticle(null);
            setTimeout(() => {
              document.getElementById("activities")?.scrollIntoView({ behavior: "smooth" });
            }, 100);
          }}
          labels={currentText.activities}
        />
        
        {/* Footer Sitemap */}
        <Footer lang={lang} setLang={setLang} labels={currentText.nav} />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#ECE9DE]">
      {/* Promotional Modal Popup */}
      <PromoModal lang={lang} />

      {/* Animated Announcement Banner */}
      <AnnouncementBanner lang={lang} />

      {/* Sticky Navigation Header */}
      <Header
        onJoinClick={handleJoinClick}
        labels={currentText.nav}
      />

      {/* Hero section */}
      <Hero
        onJoinClick={handleJoinClick}
        onRaiseIssueClick={scrollToContact}
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
      <Activities onCardClick={setActiveArticle} labels={currentText.activities} />

      {/* Gallery Section */}
      <Gallery labels={currentText.gallery} />

      {/* Registration Banner Section */}
      <div id="join">
        <JoinUs
          onJoinClick={handleJoinClick}
          onContactClick={scrollToContact}
          labels={currentText.joinSection}
        />
      </div>

      {/* Contact Cards section */}
      <div ref={contactRef}>
        <Contact labels={currentText.contactSection} />
      </div>

      {/* Footer Sitemap */}
      <Footer lang={lang} setLang={setLang} labels={currentText.nav} />
    </div>
  );
}
