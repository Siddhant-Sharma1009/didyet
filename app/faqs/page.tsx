"use client";

import React, { useState } from 'react';

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "What is DidYet?",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>,
      answer: "DidYet is a personalized accountability service that connects you with a real human partner to help you achieve your goals."
    },
    {
      question: "How is DidYet different from other apps?",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>,
      answer: "Unlike automated bots or to-do lists, we provide real human interaction, empathy, and dynamic adjustments when life gets in the way."
    },
    {
      question: "Who is DidYet for?",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>,
      answer: "It's for anyone struggling with consistency, whether you're trying to build a fitness habit, finish a project, or stick to a daily routine."
    },
    {
      question: "How does accountability work?",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>,
      answer: "You are paired with a guide who checks in daily, reviews your progress, and helps you navigate obstacles without judgment."
    },
    {
      question: "How often will my check-ins happen?",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>,
      answer: "Check-ins happen daily via your preferred messaging platform at a time that works best for your schedule."
    },
    {
      question: "Is my data safe and private?",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>,
      answer: "Yes. We take privacy seriously. Your conversations and personal goals are strictly confidential."
    },
    {
      question: "What are the pricing and plans?",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>,
      answer: "We offer straightforward monthly and annual plans. Check out our Pricing page for specific details."
    },
    {
      question: "Can I pause or cancel my subscription?",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>,
      answer: "Absolutely. You can pause or cancel your subscription at any time directly from your account settings."
    },
    {
      question: "How can I contact support?",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>,
      answer: "You can reach our support team 24/7 via the 'Contact Us' button or by emailing support@didyet.com."
    }
  ];

  return (
    <div className="bg-[#070d14] text-white min-h-screen py-16 font-sans">
      
      {/* Header Area */}
      <header className="flex flex-col items-center text-center px-4 mb-16">
        
        {/* Small Logo Badge */}
        <div className="flex items-center gap-2 bg-[#0c1622] px-4 py-2 rounded-xl border border-[#1a2635] mb-8">
          <div className="bg-[#00e5b5]/10 p-1 rounded-md">
            <svg className="w-5 h-5 text-[#00e5b5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight">DidYet</span>
        </div>

        <h1 className="text-6xl md:text-7xl font-extrabold tracking-widest mb-6">
          FAQ<span className="text-[#00e5b5]">s</span>
        </h1>
        
        {/* Heart Divider */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-[2px] w-12 bg-[#1a2635]"></div>
          <svg className="w-5 h-5 text-[#00e5b5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
          <div className="h-[2px] w-12 bg-[#1a2635]"></div>
        </div>

        <h2 className="text-[#00e5b5] text-2xl md:text-3xl font-medium mb-4">Your questions, answered.</h2>
        <p className="text-[#94a3b8] text-lg max-w-md mx-auto leading-relaxed">
          Everything you need to know about DidYet<br className="hidden md:block" /> and how we help you stay consistent.
        </p>
      </header>

      {/* Main Grid: Support Card + Accordions */}
      <main className="max-w-5xl mx-auto px-6 grid md:grid-cols-[1fr_2fr] gap-6 mb-8">
        
        {/* Left Card - Support Info */}
        <div className="bg-[#0c1622] border border-[#1a2635] rounded-3xl p-8 flex flex-col md:text-left h-fit relative overflow-hidden">
          
          {/* Decorative Glowing Element */}
          <div className="mb-10 relative">
            <div className="absolute inset-0 bg-[#00e5b5]/20 blur-3xl rounded-full"></div>
            <svg className="w-24 h-24 text-[#00e5b5] relative z-10 drop-shadow-[0_0_15px_rgba(0,229,181,0.5)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            {/* Sparkles */}
            <svg className="absolute top-0 right-4 w-6 h-6 text-[#00e5b5]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2z"/></svg>
            <svg className="absolute bottom-4 -left-2 w-4 h-4 text-[#00e5b5]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2z"/></svg>
          </div>

          <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
            We&apos;re here to<br />
            help you <span className="text-[#00e5b5]">succeed.</span>
          </h3>
          
          <div className="h-[2px] w-12 bg-[#1a2635] mb-6"></div>
          
          <p className="text-[#94a3b8] mb-10 leading-relaxed text-[15px]">
            Can&apos;t find the answer<br />
            you&apos;re looking for?<br />
            Our team is always<br />
            happy to help.
          </p>
          
          <button className="flex items-center justify-center gap-3 border border-[#00e5b5] text-[#00e5b5] px-6 py-3 rounded-full hover:bg-[#00e5b5]/10 transition-colors font-medium w-full md:w-auto">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            Contact Us
          </button>
        </div>

        {/* Right Area - Accordion List */}
        <div className="flex flex-col gap-3">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`bg-[#0c1622] border rounded-2xl overflow-hidden transition-colors duration-200 ${
                  isOpen ? 'border-[#00e5b5]' : 'border-[#1a2635] hover:border-[#1a2635]/80'
                }`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full border border-[#1a2635] flex items-center justify-center shrink-0 text-[#00e5b5] bg-[#070d14]/50 group-hover:border-[#00e5b5]/50 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {faq.icon}
                      </svg>
                    </div>
                    <span className="font-semibold text-white text-[15px]">{faq.question}</span>
                  </div>
                  <svg 
                    className={`w-5 h-5 text-[#00e5b5] transform transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                
                {/* Accordion Answer Content */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5 pt-0 ml-14">
                    <p className="text-[#94a3b8] leading-relaxed text-sm">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Bottom Banner Area */}
      <div className="max-w-5xl mx-auto px-6 mb-12">
        <div className="bg-gradient-to-r from-[#07191e] to-[#0c1622] border border-[#00e5b5]/30 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
          
          {/* Plant Illustration & Sparkle */}
          <div className="w-28 h-28 md:mr-8 mb-6 md:mb-0 shrink-0 relative">
            <svg className="absolute -top-4 -right-4 w-6 h-6 text-[#00e5b5]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2z"/></svg>
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 90 L30 40 C30 20 45 10 50 30 C55 10 70 20 70 40 Z" fill="#00e5b5" fillOpacity="0.2" stroke="#00e5b5" strokeWidth="2"/>
              <path d="M50 90 L20 60 C10 45 20 30 35 45 C45 55 50 70 50 90 Z" fill="#00e5b5" fillOpacity="0.1" stroke="#00e5b5" strokeWidth="2"/>
              <path d="M50 90 L80 60 C90 45 80 30 65 45 C55 55 50 70 50 90 Z" fill="#00e5b5" fillOpacity="0.1" stroke="#00e5b5" strokeWidth="2"/>
              <rect x="40" y="85" width="20" height="15" fill="#1a2635"/>
            </svg>
          </div>

          {/* CTA Text */}
          <div className="flex-1 text-center md:text-left mb-8 md:mb-0 z-10">
            <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
            <p className="text-sm text-[#94a3b8] mb-6 leading-relaxed">
              We&apos;re here to help you on your journey<br className="hidden sm:block" /> towards your goals.
            </p>
            <button className="bg-[#00e5b5] text-black font-semibold px-6 py-2.5 rounded-full text-sm hover:bg-teal-400 transition-colors flex items-center justify-center gap-2 mx-auto md:mx-0">
              Contact Support
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </div>

          {/* Features List */}
          <div className="flex flex-col gap-4 text-sm font-medium z-10 shrink-0 md:pl-8 md:border-l border-[#1a2635]/50">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#00e5b5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
              <span className="text-[#94a3b8]">Real people, real support</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#00e5b5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              <span className="text-[#94a3b8]">Quick responses</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#00e5b5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
              <span className="text-[#94a3b8]">We genuinely care</span>
            </div>
          </div>
          
          {/* Deco Paper Plane */}
          <div className="hidden md:block absolute right-0 bottom-4 opacity-40 z-0 pointer-events-none">
            <svg className="w-28 h-28 text-[#00e5b5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
            <svg className="absolute top-1/2 -left-12 w-20 h-10 text-[#00e5b5]" viewBox="0 0 100 50" fill="none">
              <path d="M100 0C80 20 50 40 0 50" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            </svg>
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <div className="text-center text-[#94a3b8] text-sm">
        <p className="flex items-center justify-center gap-2 mb-1">
          <svg className="w-4 h-4 text-[#00e5b5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
          Your success is our mission.
        </p>
        <p>We&apos;re with you, every step of the way.</p>
      </div>

    </div>
  );
}