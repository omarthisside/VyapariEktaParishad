"use client";

import React, { useState } from "react";
import {
  Scale,
  ShieldAlert,
  Building,
  FileText,
  Store,
  TrendingUp,
  Shield,
  Layers,
  ChevronDown,
  ChevronUp
} from "lucide-react";

interface CardLabels {
  title: string;
  desc: string;
}

interface IssuesProps {
  labels: {
    heading: string;
    subheading: string;
    learnMore: string;
    cards: CardLabels[];
  };
}

export default function Issues({ labels }: IssuesProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const icons = [
    <Scale key="1" className="h-6 w-6 text-[#E81D25]" />,
    <ShieldAlert key="2" className="h-6 w-6 text-[#8B312B]" />,
    <Building key="3" className="h-6 w-6 text-[#251F65]" />,
    <FileText key="4" className="h-6 w-6 text-[#E81D25]" />,
    <Store key="5" className="h-6 w-6 text-[#8B312B]" />,
    <TrendingUp key="6" className="h-6 w-6 text-[#251F65]" />,
    <Shield key="7" className="h-6 w-6 text-[#E81D25]" />,
    <Layers key="8" className="h-6 w-6 text-[#8B312B]" />
  ];

  // Extended details for bilingual toggle expansion
  const extendedDetails = [
    "We advocate for democratic policies ensuring the merchant bodies are consulted before enforcing zoning regulations or changes to commercial market layouts. Independent retail blocks deserve a seat at the policy table.",
    "No vendor should be harassed under arbitrary inspections. We provide a swift collective response unit to ensure local shopkeepers are handled with legal respect and in compliance with authorized guidelines.",
    "Markets require clean public pathways, high-quality street lamps, modern fire protection, and adequate parking for customers. We push administrative authorities to allocate municipal budgets to retail zones.",
    "Navigating tax filings, local business licensing, and administrative paperwork can be challenging. VEP holds regular advisory meetings to simplify documentation pathways and resolve compliance bottlenecks.",
    "Micro-businesses require low-interest finance credits, rental protections during market construction phases, and local advertising. We support small-scale shop owners through micro-networking networks.",
    "By establishing thriving trade hubs, our members generate local jobs and stable employment opportunities. We work closely with commercial associations to keep local trading active.",
    "A secure shop is a thriving shop. We coordinate with local law enforcement to arrange security patrols in marketplaces to prevent theft, burglary, and extortion attempts.",
    "We assist traders in resolving delays in utility billing, commercial licensing renewals, municipal tax assessments, and resolving disputes with utility suppliers."
  ];

  const extendedDetailsHindi = [
    "हम लोकतांत्रिक नीतियों की वकालत करते हैं ताकि यह सुनिश्चित हो सके कि वाणिज्यिक बाजार के लेआउट में बदलाव करने से पहले व्यापारी निकायों से परामर्श किया जाए। स्वतंत्र खुदरा ब्लॉकों को नीति निर्धारण में भाग लेने का अधिकार है।",
    "किसी भी विक्रेता को मनमाने ढंग से निरीक्षण के तहत परेशान नहीं किया जाना चाहिए। हम यह सुनिश्चित करने के लिए एक त्वरित प्रतिक्रिया इकाई प्रदान करते हैं कि स्थानीय दुकानदारों के साथ कानूनी सम्मान और नियमों के अनुसार व्यवहार हो।",
    "बाजारों को ग्राहकों के लिए साफ रास्तों, उच्च गुणवत्ता वाली स्ट्रीट लाइट, आधुनिक अग्नि सुरक्षा और पर्याप्त पार्किंग की आवश्यकता होती है। हम प्रशासनिक अधिकारियों को खुदरा क्षेत्रों के लिए नगरपालिका बजट आवंटित करने के लिए प्रेरित करते हैं।",
    "टैक्स फाइलिंग, स्थानीय व्यवसाय लाइसेंस और प्रशासनिक कागजी कार्रवाई को संभालना चुनौतीपूर्ण हो सकता है। वीईपी दस्तावेज़ीकरण को आसान बनाने और अनुपालन की बाधाओं को हल करने के लिए नियमित सलाहकार बैठकें आयोजित करता है।",
    "सूक्ष्म-व्यवसायों को कम ब्याज वाले ऋण सहायता, बाजार निर्माण चरणों के दौरान किराये के संरक्षण और स्थानीय विज्ञापन की आवश्यकता होती है। हम सूक्ष्म-नेटवर्किंग नेटवर्क के माध्यम से छोटे दुकानदारों का समर्थन करते हैं।",
    "समृद्ध व्यापारिक गलियारे स्थापित करके, हमारे सदस्य स्थानीय नौकरियां और स्थिर रोजगार के अवसर पैदा करते हैं। हम स्थानीय व्यापार को सक्रिय रखने के लिए वाणिज्यिक संघों के साथ मिलकर काम करते हैं।",
    "एक सुरक्षित दुकान ही एक समृद्ध दुकान है। हम बाजारों में चोरी, सेंधमारी और जबरन वसूली के प्रयासों को रोकने के लिए स्थानीय पुलिस गश्त की व्यवस्था करने के लिए कानून प्रवर्तन के साथ समन्वय करते हैं।",
    "हम लाइसेंस नवीनीकरण में देरी, वाणिज्यिक बिलिंग विसंगतियों, संपत्ति कर मूल्यांकन और उपयोगिता आपूर्तिकर्ताओं के साथ विवादों को हल करने में व्यापारियों की सहायता करते हैं।"
  ];

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="issues" className="py-24 bg-white border-b border-[#8B312B]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black text-[#E81D25] uppercase tracking-widest">
            ADVOCACY IN ACTION
          </span>
          <h2 className="text-3xl font-black tracking-tight text-[#8B312B] sm:text-4xl mt-2">
            {labels.heading}
          </h2>
          <div className="mt-4 h-1.5 w-16 bg-[#E81D25] mx-auto rounded-full" />
          <p className="mt-4 text-sm md:text-base font-semibold text-[#1F1D1C]/75">
            {labels.subheading}
          </p>
        </div>

        {/* Issues Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {labels.cards.map((card, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={index}
                className="bg-[#ECE9DE]/25 border border-[#8B312B]/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#E81D25]/35 hover:shadow-sm transition-all duration-200"
              >
                <div>
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center p-3 rounded-xl bg-white border border-[#8B312B]/5 mb-5">
                    {icons[index] || <Scale className="h-6 w-6 text-[#E81D25]" />}
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-extrabold text-[#1F1D1C] leading-snug mb-2">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs font-semibold text-[#1F1D1C]/80 leading-relaxed mb-4">
                    {card.desc}
                  </p>

                  {/* Expanded Content with smooth transition */}
                  {isExpanded && (
                    <p className="text-[11px] font-semibold text-[#8B312B] leading-relaxed border-t border-[#8B312B]/10 pt-3 mt-3 animate-in fade-in slide-in-from-top-1 duration-200">
                      {labels.heading.includes("व्यापारियों")
                        ? extendedDetailsHindi[index]
                        : extendedDetails[index]}
                    </p>
                  )}
                </div>

                {/* Learn More Trigger */}
                <button
                  onClick={() => handleToggle(index)}
                  className="flex items-center gap-1 mt-4 text-[11px] font-black uppercase tracking-wider text-[#E81D25] hover:text-[#8B312B] transition-colors cursor-pointer"
                >
                  <span>{labels.learnMore}</span>
                  {isExpanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
