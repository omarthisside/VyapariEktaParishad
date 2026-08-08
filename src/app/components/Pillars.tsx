"use client";

import { Scale, Network, ShieldCheck, Zap, Handshake, Heart } from "lucide-react";

export default function Pillars() {
  const pillars = [
    {
      icon: <Scale className="h-6 w-6 text-brand-primary-600 dark:text-brand-primary-400" />,
      title: "Legal & Regulatory Advocacy",
      description: "Representing traders before government departments, advocating for fair tax policies, and defending business rights.",
    },
    {
      icon: <Network className="h-6 w-6 text-brand-accent-500 dark:text-brand-accent-400" />,
      title: "B2B Trade Networking",
      description: "Connecting local wholesalers, manufacturers, and retailers to build strong, localized supply chain relationships.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
      title: "Dispute Redressal Cell",
      description: "Providing quick and friendly mediation for commercial disputes, tenant-landlord challenges, and local issues.",
    },
    {
      icon: <Zap className="h-6 w-6 text-amber-500" />,
      title: "Digital Empowerment",
      description: "Conducting regular workshops on digital payments, e-commerce tools, and modern tax compliance systems.",
    },
    {
      icon: <Handshake className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
      title: "Unified Collective Voice",
      description: "Unifying retail owners, service providers, and traders to create a powerful single voice for business protection.",
    },
    {
      icon: <Heart className="h-6 w-6 text-rose-500" />,
      title: "Trader Welfare Schemes",
      description: "Facilitating group health insurance policies, education grants for families, and emergency financial support pools.",
    },
  ];

  return (
    <section id="objectives" className="py-20 bg-slate-100/50 dark:bg-slate-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Our Core Objectives & Pillars
          </h2>
          <div className="mt-4 h-1 w-16 bg-brand-accent-500 mx-auto rounded-full" />
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Vyapari Ekta Parishad operates with a clear vision: to make trading safe, collaborative, and rewarding for businesses of all scales.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 hover:shadow-xl hover:shadow-brand-primary-500/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon Container */}
                <div className="inline-flex items-center justify-center p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom accent glow */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary-500 to-brand-accent-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
