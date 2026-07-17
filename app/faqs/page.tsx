"use client";

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquare, ArrowRight } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqsData: FAQItem[] = [
  {
    category: "General",
    question: "What exactly is DidYet?",
    answer: "DidYet is a premium workflow intelligence platform designed to replace fragmented task managers. It aggregates logs, automates updates, and provides developers and fast-moving teams with extreme precision visibility over their real-time output."
  },
  {
    category: "General",
    question: "How does the platform integrate with my current developer toolkit?",
    answer: "We offer native, single-click API bridges for GitHub, GitLab, Vercel, Linear, and Slack. It effortlessly structures incoming activity without forcing you or your team to change how you already code."
  },
  {
    category: "Security",
    question: "Is my codebase and workspace telemetry secure?",
    answer: "Absolutely. Security is our absolute foundation. DidYet is SOC2 Type II compliant. All telemetry pipeline connections are heavily protected via end-to-end AES-256 encryption at rest, and TLS 1.3 in transit."
  },
  {
    category: "Billing",
    question: "Can I try DidYet with my team before committing?",
    answer: "Yes. Our Pro tier comes with a completely unrestricted 14-day free trial. No credit card is required to initialize your sandbox. If you need longer to scale out evaluations, contact our engineering group."
  },
  {
    category: "Billing",
    question: "Are there any hidden costs or per-seat overage fees?",
    answer: "None. We believe in clear pricing configurations. You are billed exclusively on a transparent, per-seat structure. Internal project logs, data retention pipelines, and automations carry zero additional premium fees."
  }
];

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-12 md:py-20 relative z-10">
      
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#22E3A9]/20 bg-[#22E3A9]/5 text-[#22E3A9] text-xs font-medium mb-5">
          <HelpCircle size={12} />
          Documentation & Help
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
          Frequently Asked <br />
          <span className="bg-gradient-to-r from-[#22E3A9] to-[#14D9C4] bg-clip-text text-transparent">
            Questions.
          </span>
        </h1>
        <p className="text-base md:text-lg text-slate-400">
          Everything you need to know about the architecture, security infrastructure, and billing setup.
        </p>
      </div>

      {/* Accordion List Box */}
      <div className="flex flex-col gap-4">
        {faqsData.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="group rounded-2xl border border-white/5 bg-[#111827]/40 backdrop-blur-xl transition-all duration-300 overflow-hidden hover:border-white/10"
            >
              {/* Question Header Trigger */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-6 py-5 md:px-8 md:py-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:bg-white/5"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <span className="text-[10px] font-bold tracking-widest text-[#22E3A9] uppercase bg-[#22E3A9]/10 px-2 py-0.5 rounded-md w-fit">
                    {faq.category}
                  </span>
                  <span className="text-base md:text-lg font-medium text-slate-100 group-hover:text-white transition-colors">
                    {faq.question}
                  </span>
                </div>
                <div 
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#0F172A] text-slate-400 group-hover:text-white transition-all duration-300 ${
                    isOpen ? 'rotate-180 border-[#22E3A9]/30 text-[#22E3A9]' : ''
                  }`}
                >
                  <ChevronDown size={16} />
                </div>
              </button>

              {/* Dynamic Answer Panel Wrapper */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-[500px] border-t border-white/5 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                }`}
              >
                <div className="px-6 py-5 md:px-8 md:py-6 text-sm md:text-base text-slate-400 leading-relaxed bg-[#0F172A]/30">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modern Floating Support Card Footer */}
      <div className="mt-16 p-8 rounded-2xl border border-white/5 bg-gradient-to-r from-[#111827]/80 to-[#0F172A]/80 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[#22E3A9]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#22E3A9] to-[#14D9C4] p-[1px] flex items-center justify-center shrink-0">
            <div className="h-full w-full bg-[#0F172A] rounded-[11px] flex items-center justify-center text-[#22E3A9]">
              <MessageSquare size={20} />
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-white">Still have questions?</h3>
            <p className="text-sm text-slate-400">Can't find what you need? Reach out directly to our engineering desk.</p>
          </div>
        </div>

        <a
          href="/contact"
          className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold text-white rounded-xl group bg-gradient-to-br from-[#22E3A9] to-[#14D9C4] hover:shadow-[0_0_20px_rgba(34,227,169,0.2)] transition-all duration-300 shrink-0"
        >
          <span className="relative px-5 py-3 transition-all ease-in duration-75 bg-[#0F172A] rounded-[10px] group-hover:bg-opacity-0 flex items-center gap-2">
            Contact Support
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </span>
        </a>
      </div>

    </div>
  );
}