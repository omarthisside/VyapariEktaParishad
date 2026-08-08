"use client";

import { Mail, Phone, Award } from "lucide-react";

interface Member {
  name: string;
  role: string;
  business: string;
  phone: string;
  email: string;
  initials: string;
  bgColor: string;
}

export default function Committee() {
  const committeeMembers: Member[] = [
    {
      name: "Shri Vijay Kumar",
      role: "President",
      business: "Founder, Kumar Industries",
      phone: "+91 98765 00001",
      email: "president@vyapariekta.org",
      initials: "VK",
      bgColor: "from-brand-accent-500 to-amber-600 text-white",
    },
    {
      name: "Shri Ramesh Bansal",
      role: "Vice President",
      business: "Proprietor, Bansal Iron & Steel",
      phone: "+91 98765 00002",
      email: "vp@vyapariekta.org",
      initials: "RB",
      bgColor: "from-brand-primary-600 to-sky-700 text-white",
    },
    {
      name: "Smt. Anjali Gupta",
      role: "General Secretary",
      business: "CEO, Gupta Retail Outlets",
      phone: "+91 98765 00003",
      email: "secretary@vyapariekta.org",
      initials: "AG",
      bgColor: "from-purple-600 to-indigo-700 text-white",
    },
    {
      name: "Shri Harpreet Singh Sethi",
      role: "Treasurer",
      business: "Director, Sethi Cargo & Logistics",
      phone: "+91 98765 00004",
      email: "treasurer@vyapariekta.org",
      initials: "HS",
      bgColor: "from-emerald-600 to-teal-700 text-white",
    },
    {
      name: "Shri Sanjay Mehta",
      role: "Media Coordinator",
      business: "Partner, Mehta FMCG Agencies",
      phone: "+91 98765 00005",
      email: "media@vyapariekta.org",
      initials: "SM",
      bgColor: "from-rose-600 to-pink-700 text-white",
    },
    {
      name: "Shri Amit Sharma",
      role: "Tech & Digital Advisor",
      business: "Founder, Sharma Tech & Electronics",
      phone: "+91 98765 00006",
      email: "advisor@vyapariekta.org",
      initials: "AS",
      bgColor: "from-slate-700 to-slate-900 text-white dark:from-slate-800 dark:to-slate-950",
    },
  ];

  return (
    <section id="committee" className="py-20 bg-slate-100/50 dark:bg-slate-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Executive Committee (2026 - 2028)
          </h2>
          <div className="mt-4 h-1 w-16 bg-brand-accent-500 mx-auto rounded-full" />
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Meet the dedicated leadership team driving structural reforms, member growth, and legal security for the trade community.
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {committeeMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 flex items-start gap-4 relative overflow-hidden"
            >
              {/* Initials Avatar */}
              <div
                className={`h-16 w-16 shrink-0 rounded-xl bg-gradient-to-tr ${member.bgColor} flex items-center justify-center text-xl font-bold tracking-wider shadow-sm`}
              >
                {member.initials}
              </div>

              {/* Detail section */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white truncate">
                    {member.name}
                  </h3>
                  {index === 0 && (
                    <span title="President">
                      <Award className="h-4.5 w-4.5 text-brand-accent-600 dark:text-brand-accent-500 shrink-0" />
                    </span>
                  )}
                </div>
                
                {/* Role Badge */}
                <p className="text-xs font-bold text-brand-primary-600 dark:text-brand-primary-400 uppercase tracking-wide">
                  {member.role}
                </p>

                {/* Business affiliation */}
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium italic">
                  {member.business}
                </p>

                {/* Contacts */}
                <div className="mt-4 space-y-1.5 border-t border-slate-100 dark:border-slate-800/60 pt-3">
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 hover:text-brand-primary-600 dark:hover:text-brand-primary-400 transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5 text-slate-400" />
                    <span>{member.phone}</span>
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 hover:text-brand-primary-600 dark:hover:text-brand-primary-400 transition-colors"
                  >
                    <Mail className="h-3.5 w-3.5 text-slate-400" />
                    <span className="truncate">{member.email}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
