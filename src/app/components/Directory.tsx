"use client";

import { useState, useMemo } from "react";
import { Search, Phone, MapPin, Building, Globe, CheckCircle } from "lucide-react";

export interface BusinessMember {
  id: string;
  name: string;
  owner: string;
  category: "Retail" | "Wholesale" | "Manufacturing" | "Services" | "Food & Beverage";
  phone: string;
  address: string;
  website?: string;
  verified: boolean;
}

// Initial mock members
export const INITIAL_MEMBERS: BusinessMember[] = [
  {
    id: "1",
    name: "Gupta Kirana & General Store",
    owner: "Ramesh Kumar Gupta",
    category: "Retail",
    phone: "+91 98765 43210",
    address: "Shop No. 12, Main Market, Sector 4, New Delhi",
    verified: true,
  },
  {
    id: "2",
    name: "Sharma Electronics & Appliances",
    owner: "Amit Sharma",
    category: "Retail",
    phone: "+91 98123 45678",
    address: "24-B, Nehru Place Computer Market, New Delhi",
    verified: true,
    website: "https://sharmaelectronics.example.com",
  },
  {
    id: "3",
    name: "Verma Silk & Textiles",
    owner: "Vijay Verma",
    category: "Wholesale",
    phone: "+91 99988 77665",
    address: "Katra Neel, Chandni Chowk, Delhi",
    verified: true,
  },
  {
    id: "4",
    name: "Aggarwal Sweets & Restaurant",
    owner: "Pawan Aggarwal",
    category: "Food & Beverage",
    phone: "+91 93111 22233",
    address: "Plot 42, Block C, Rohini Sector 8, Delhi",
    verified: true,
  },
  {
    id: "5",
    name: "Bansal Iron & Steel Traders",
    owner: "Suresh Bansal",
    category: "Manufacturing",
    phone: "+91 98222 33344",
    address: "B-76, Industrial Area Phase II, Mayapuri, New Delhi",
    verified: true,
  },
  {
    id: "6",
    name: "Sethi Cargo & Logistics Solutions",
    owner: "Harpreet Singh Sethi",
    category: "Services",
    phone: "+91 99111 55566",
    address: "102, Transport Nagar, Sanjay Gandhi Transport Nagar, Delhi",
    verified: true,
  },
  {
    id: "7",
    name: "Kapoor Sons Fine Jewellers",
    owner: "Raj Kapoor",
    category: "Retail",
    phone: "+91 98100 99900",
    address: "Shop 5, Gold Plaza, Karol Bagh, New Delhi",
    verified: true,
  },
  {
    id: "8",
    name: "Mehta FMCG Distributors",
    owner: "Sanjay Mehta",
    category: "Wholesale",
    phone: "+91 97111 22200",
    address: "411, Sadar Bazar Trading Complex, Delhi",
    verified: true,
  },
];

interface DirectoryProps {
  customMembers?: BusinessMember[];
}

export default function Directory({ customMembers = [] }: DirectoryProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Retail", "Wholesale", "Manufacturing", "Services", "Food & Beverage"];

  // Merge initial list with any members newly registered in the session
  const allMembers = useMemo(() => {
    return [...customMembers, ...INITIAL_MEMBERS];
  }, [customMembers]);

  const filteredMembers = useMemo(() => {
    return allMembers.filter((member) => {
      const matchesSearch =
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.address.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || member.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [allMembers, searchTerm, selectedCategory]);

  const categoryColor = (cat: string) => {
    switch (cat) {
      case "Retail":
        return "bg-sky-50 dark:bg-sky-950/30 text-sky-700 dark:text-sky-400 border-sky-100 dark:border-sky-900/40";
      case "Wholesale":
        return "bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 border-amber-100 dark:border-amber-900/40";
      case "Manufacturing":
        return "bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-400 border-purple-100 dark:border-purple-900/40";
      case "Services":
        return "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/40";
      case "Food & Beverage":
        return "bg-rose-50 dark:bg-rose-950/30 text-rose-700 dark:text-rose-400 border-rose-100 dark:border-rose-900/40";
      default:
        return "bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200";
    }
  };

  return (
    <section id="directory" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Members Business Directory
          </h2>
          <div className="mt-4 h-1 w-16 bg-brand-accent-500 mx-auto rounded-full" />
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Search, connect, and collaborate with verified members of Vyapari Ekta Parishad.
          </p>
        </div>

        {/* Filter controls */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-8">
          {/* Search bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search by business, owner name or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-950 dark:text-slate-50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-primary-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-sm font-semibold rounded-lg border transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-brand-primary-600 text-white border-brand-primary-600 shadow-md shadow-brand-primary-500/10"
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid of members */}
        {filteredMembers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Badge & Verify Status */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs px-2.5 py-0.5 rounded-full font-bold border ${categoryColor(
                        member.category
                      )}`}
                    >
                      {member.category}
                    </span>
                    {member.verified && (
                      <span className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                        <CheckCircle className="h-3.5 w-3.5 fill-emerald-50 dark:fill-transparent" />
                        Verified
                      </span>
                    )}
                  </div>

                  {/* Business Name */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug mb-1">
                    {member.name}
                  </h3>

                  {/* Owner */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-4">
                    <Building className="h-3.5 w-3.5" />
                    <span>Prop: {member.owner}</span>
                  </div>

                  {/* Address */}
                  <div className="flex gap-2 text-sm text-slate-600 dark:text-slate-400 mb-6">
                    <MapPin className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{member.address}</span>
                  </div>
                </div>

                {/* Contact and Links */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between gap-3">
                  <a
                    href={`tel:${member.phone}`}
                    className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700/80 text-slate-800 dark:text-slate-200 py-2 text-xs font-bold transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    {member.phone}
                  </a>

                  {member.website && (
                    <a
                      href={member.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-brand-primary-50 dark:hover:bg-brand-primary-950/30 text-slate-500 hover:text-brand-primary-600 dark:hover:text-brand-primary-400 border border-slate-200 dark:border-slate-800 transition-colors"
                      title="Visit Website"
                    >
                      <Globe className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white dark:bg-slate-900 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl">
            <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">
              No matching business partners found.
            </p>
            <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">
              Try adjusting your search criteria or choosing a different category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
