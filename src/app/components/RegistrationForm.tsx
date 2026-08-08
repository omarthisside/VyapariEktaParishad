"use client";

import React, { useState } from "react";
import { CheckCircle2, Loader2, Sparkles, AlertCircle } from "lucide-react";

interface RegistrationFormProps {
  labels: {
    title: string;
    desc: string;
    ownerName: string;
    ownerPlaceholder: string;
    businessName: string;
    businessPlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    category: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    submitting: string;
    success: string;
    validationError: string;
  };
}

export default function RegistrationForm({ labels }: RegistrationFormProps) {
  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
    category: "Retail",
    phone: "",
    message: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // We check if the header has Hindi to render category names in Hindi
  const categories = labels.title.includes("पंजीकरण")
    ? ["खुदरा (Retail)", "थोक (Wholesale)", "विनिर्माण (Manufacturing)", "सेवाएं (Services)", "खाद्य और पेय (Food & Beverage)"]
    : ["Retail", "Wholesale", "Manufacturing", "Services", "Food & Beverage"];

  const validate = () => {
    if (!formData.businessName.trim() || formData.businessName.length < 3) return false;
    if (!formData.ownerName.trim() || formData.ownerName.length < 3) return false;
    
    // Strict phone check (minimum 10 digits)
    const digitsOnly = formData.phone.replace(/[^0-9]/g, "");
    if (digitsOnly.length < 10) return false;

    if (!formData.message.trim() || formData.message.length < 10) return false;

    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setError(labels.validationError);
      return;
    }

    setLoading(true);
    setError(null);

    // Simulate database submission
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      businessName: "",
      ownerName: "",
      category: "Retail",
      phone: "",
      message: "",
    });
    setSuccess(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white border border-[#8B312B]/15 rounded-3xl p-8 shadow-sm relative overflow-hidden">
      {/* Decorative Brand Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#E81D25] via-[#8B312B] to-[#251F65]" />

      {success ? (
        <div className="text-center py-10 animate-in fade-in zoom-in-95 duration-300">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 mb-6">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h3 className="text-2xl font-black text-[#1F1D1C] mb-4">
            {labels.title}
          </h3>
          <p className="text-sm font-semibold text-[#1F1D1C]/80 max-w-lg mx-auto mb-8 leading-relaxed">
            {labels.success}
          </p>
          <button
            onClick={handleReset}
            className="px-6 py-2.5 rounded-lg bg-[#E81D25] hover:bg-[#E81D25]/90 text-white text-xs font-black uppercase tracking-wider shadow-md transition-all cursor-pointer"
          >
            Submit Another Issue / पंजीकरण
          </button>
        </div>
      ) : (
        <div>
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-[#E81D25] text-xs font-black uppercase tracking-wider mb-2">
              <Sparkles className="h-4 w-4" />
              <span>Trader Welfare Board</span>
            </div>
            <h3 className="text-2xl font-black text-[#8B312B]">
              {labels.title}
            </h3>
            <p className="text-xs font-semibold text-slate-500 mt-1">
              {labels.desc}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Error Message */}
            {error && (
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-100 text-rose-700 text-xs font-bold flex items-start gap-2.5">
                <AlertCircle className="h-4.5 w-4.5 shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            {/* Owner Name */}
            <div>
              <label className="block text-[11px] font-black text-slate-500 uppercase tracking-wide mb-1.5">
                {labels.ownerName} <span className="text-[#E81D25]">*</span>
              </label>
              <input
                type="text"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                placeholder={labels.ownerPlaceholder}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#E81D25] focus:border-transparent text-sm bg-slate-50/50 text-[#1F1D1C] font-semibold transition-all"
                required
              />
            </div>

            {/* Business Name & Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-[11px] font-black text-slate-500 uppercase tracking-wide mb-1.5">
                  {labels.businessName} <span className="text-[#E81D25]">*</span>
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder={labels.businessPlaceholder}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#E81D25] focus:border-transparent text-sm bg-slate-50/50 text-[#1F1D1C] font-semibold transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-black text-slate-500 uppercase tracking-wide mb-1.5">
                  {labels.category} <span className="text-[#E81D25]">*</span>
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#E81D25] focus:border-transparent text-sm bg-slate-50/50 text-[#1F1D1C] font-semibold transition-all"
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-[11px] font-black text-slate-500 uppercase tracking-wide mb-1.5">
                {labels.phone} <span className="text-[#E81D25]">*</span>
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={labels.phonePlaceholder}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#E81D25] focus:border-transparent text-sm bg-slate-50/50 text-[#1F1D1C] font-semibold transition-all"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-[11px] font-black text-slate-500 uppercase tracking-wide mb-1.5">
                {labels.message} <span className="text-[#E81D25]">*</span>
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder={labels.messagePlaceholder}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#E81D25] focus:border-transparent text-sm bg-slate-50/50 text-[#1F1D1C] font-semibold transition-all resize-none"
                required
              />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end pt-3">
              <button
                type="submit"
                disabled={loading}
                className="flex items-center gap-2 rounded-lg bg-[#E81D25] hover:bg-[#E81D25]/90 disabled:bg-[#E81D25]/60 text-white px-6 py-3 text-xs font-black uppercase tracking-wider shadow-md cursor-pointer transition-all"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {labels.submitting}
                  </>
                ) : (
                  labels.submit
                )}
              </button>
            </div>
            
          </form>
        </div>
      )}
    </div>
  );
}
