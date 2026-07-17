"use client";

import React, { useState } from 'react';
import { Check, HelpCircle, Sparkles, Zap, Shield, HelpCircle as InfoIcon } from 'lucide-react';

interface PricingTier {
  name: string;
  price: { monthly: string; annual: string };
  description: string;
  cta: string;
  popular: boolean;
  icon: React.ReactNode;
  features: string[];
}

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState<boolean>(false);

  const pricingTiers: PricingTier[] = [
    {
      name: "Sandbox",
      price: { monthly: "$0", annual: "$0" },
      description: "For individual engineers and creators building baseline pipeline logging automation.",
      cta: "Deploy Free Node",
      popular: false,
      icon: <Zap size={18} className="text-slate-400" />,
      features: [
        "Up to 3 active telemetry streams",
        "7-day rolling data retention window",
        "Community Slack documentation support",
        "Standard Webhook ingestion nodes"
      ]
    },
    {
      name: "Pro Pack",
      price: { monthly: "$29", annual: "$22" },
      description: "For fast-moving engineering teams requiring continuous workflow analytics.",
      cta: "Initialize Pro Sandbox",
      popular: true,
      icon: <Sparkles size={18} className="text-[#22E3A9]" />,
      features: [
        "Unlimited active telemetry streams",
        "90-day comprehensive retention engine",
        "Priority 1-hour developer desk SLA",
        "Native GitHub, Vercel & Linear bridges",
        "Custom metrics visualization dashboards",
        "Advanced team seats sharing settings"
      ]
    },
    {
      name: "Scale Core",
      price: { monthly: "Custom", annual: "Custom" },
      description: "For high-volume operations demanding compliance guarantees and custom telemetry nodes.",
      cta: "Contact Architecture Desk",
      popular: false,
      icon: <Shield size={18} className="text-slate-400" />,
      features: [
        "Custom high-throughput telemetry configurations",
        "Infinite log archive retention storage",
        "Dedicated enterprise solution engineer",
        "SOC2 Type II compliance audit framework",
        "Custom legal agreements & custom invoicing",
        "Dedicated isolated private cloud infrastructure"
      ]
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto py-12 md:py-20 relative z-10">
      
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#22E3A9]/20 bg-[#22E3A9]/5 text-[#22E3A9] text-xs font-medium mb-5">
          <Sparkles size={12} />
          Pricing Models
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
          Predictable scale. <br />
          <span className="bg-gradient-to-r from-[#22E3A9] to-[#14D9C4] bg-clip-text text-transparent">
            No unexpected overages.
          </span>
        </h1>
        <p className="text-base md:text-lg text-slate-400 max-w-lg mx-auto">
          Choose the performance profile built exactly for your project architecture footprint.
        </p>

        {/* Dynamic Billing Cycle Selector Toggle Toggle Switch */}
        <div className="flex items-center justify-center gap-3 mt-10">
          <span className={`text-sm font-medium transition-colors ${!isAnnual ? 'text-white' : 'text-slate-400'}`}>Monthly</span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-12 h-6 rounded-full bg-[#111827] border border-white/10 p-0.5 relative transition-colors duration-300 focus:outline-none"
            aria-label="Toggle Billing Cycle"
          >
            <div 
              className={`w-4 h-4 rounded-full bg-gradient-to-br from-[#22E3A9] to-[#14D9C4] transition-transform duration-300 transform ${
                isAnnual ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
          <span className={`text-sm font-medium transition-colors flex items-center gap-1.5 ${isAnnual ? 'text-white' : 'text-slate-400'}`}>
            Annually 
            <span className="text-[10px] font-bold tracking-wide uppercase px-1.5 py-0.5 rounded bg-[#22E3A9]/10 text-[#22E3A9]">Save ~25%</span>
          </span>
        </div>
      </div>

      {/* Pricing Tiers Columns Box Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-8">
        {pricingTiers.map((tier) => (
          <div
            key={tier.name}
            className={`flex flex-col rounded-2xl p-8 bg-[#111827]/40 border backdrop-blur-xl relative transition-all duration-300 ${
              tier.popular 
                ? 'border-[#22E3A9]/30 shadow-[0_0_40px_rgba(34,227,169,0.05)] ring-1 ring-[#22E3A9]/30 lg:-translate-y-4' 
                : 'border-white/5 hover:border-white/10'
            }`}
          >
            {tier.popular && (
              <div className="absolute top-0 right-8 transform -translate-y-1/2 rounded-full bg-gradient-to-r from-[#22E3A9] to-[#14D9C4] px-3 py-1 text-[10px] font-bold text-[#0F172A] uppercase tracking-wider shadow-lg">
                Most Popular
              </div>
            )}

            {/* Core Card Info Header */}
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="text-lg font-bold text-slate-100">{tier.name}</span>
              <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/5">
                {tier.icon}
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed mb-6 min-h-[36px]">
              {tier.description}
            </p>

            {/* Dynamic Card Display Price Pricing State */}
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                {isAnnual ? tier.price.annual : tier.price.monthly}
              </span>
              {tier.price.monthly !== "Custom" && (
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  / user / mo
                </span>
              )}
            </div>

            {/* Action CTA Trigger Button */}
            <button
              className={`w-full h-12 rounded-xl text-sm font-semibold transition-all duration-300 mb-8 flex items-center justify-center ${
                tier.popular
                  ? 'bg-gradient-to-r from-[#22E3A9] to-[#14D9C4] text-[#0F172A] hover:opacity-95 shadow-[0_4px_20px_rgba(34,227,169,0.15)]'
                  : 'bg-[#0F172A] border border-white/10 text-white hover:bg-white/5'
              }`}
            >
              {tier.cta}
            </button>

            {/* Feature List Matrix Column */}
            <div className="flex-grow">
              <span className="block text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-4">Includes:</span>
              <ul className="flex flex-col gap-3.5">
                {tier.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                    <div className="h-4 w-4 rounded-md bg-[#22E3A9]/10 text-[#22E3A9] flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={10} />
                    </div>
                    <span className="leading-tight">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Subtle Information Footnote Layer */}
      <div className="mt-12 text-center flex items-center justify-center gap-2 text-xs text-slate-500">
        <InfoIcon size={12} />
        <span>Need a tailored custom sandbox configuration for your open source organization? Contact developer relations.</span>
      </div>

    </div>
  );
}