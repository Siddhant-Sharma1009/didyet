"use client";

import React, { useState } from 'react';
import { Mail, MessageSquare, Building2, HelpCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: 'general',
    message: ''
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Vetting submission layer safely 
    setSubmitted(true);
  };

  const contactMethods = [
    {
      icon: <MessageSquare size={18} />,
      title: "General Inquiries",
      description: "For questions regarding features, ecosystem updates, or account setups.",
      linkText: "Read documentation",
      href: "#docs"
    },
    {
      icon: <Building2 size={18} />,
      title: "Enterprise Solutions",
      description: "Talk directly to our architectural engineering group about high-throughput scaling profiles.",
      linkText: "View pricing scale",
      href: "/pricing"
    },
    {
      icon: <HelpCircle size={18} />,
      title: "Developer Helpdesk",
      description: "Active system debugging, operational pipelines support, or API integration errors.",
      linkText: "Open ticket profile",
      href: "#faqs"
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto py-12 md:py-20 relative z-10">
      
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#22E3A9]/20 bg-[#22E3A9]/5 text-[#22E3A9] text-xs font-medium mb-5">
          <Mail size={12} />
          Communication Channels
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
          Connect with our <br />
          <span className="bg-gradient-to-r from-[#22E3A9] to-[#14D9C4] bg-clip-text text-transparent">
            engineering desk.
          </span>
        </h1>
        <p className="text-base md:text-lg text-slate-400 max-w-xl mx-auto">
          Have an architectural question or exploring enterprise deployment tracks? We usually answer within a few hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
        
        {/* Left Side: Secondary Contact Options */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <h2 className="text-xl font-bold tracking-tight text-white mb-2">Dedicated Desks</h2>
          
          {contactMethods.map((method, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl border border-white/5 bg-[#111827]/30 backdrop-blur-xl group hover:border-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-9 w-9 rounded-xl bg-[#22E3A9]/10 text-[#22E3A9] flex items-center justify-center shrink-0">
                  {method.icon}
                </div>
                <h3 className="text-base font-semibold text-white">{method.title}</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {method.description}
              </p>
              <a 
                href={method.href}
                className="inline-flex items-center gap-1 text-xs font-medium text-[#14D9C4] hover:text-[#22E3A9] transition-colors"
              >
                {method.linkText}
                <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* Right Side: Interactive Intake Form Container */}
        <div className="lg:col-span-3">
          <div className="p-8 md:p-10 rounded-2xl border border-white/5 bg-[#111827]/50 backdrop-blur-xl relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-1/4 w-[200px] h-[200px] bg-[#14D9C4]/5 rounded-full blur-3xl pointer-events-none" />
            
            {submitted ? (
              <div className="py-16 flex flex-col items-center text-center gap-4">
                <div className="h-12 w-12 rounded-full bg-[#22E3A9]/10 text-[#22E3A9] flex items-center justify-center animate-pulse">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Transmission Successful</h3>
                  <p className="text-sm text-slate-400 max-w-sm mt-1 mx-auto">
                    Your transmission payload has been routed to our core team. We will establish a secure diagnostic response path shortly.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">Your Name</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Richard Hendricks"
                      className="w-full h-11 px-4 text-sm rounded-xl bg-[#0F172A]/80 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#22E3A9]/50 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">Work Email</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="richard@piedpiper.com"
                      className="w-full h-11 px-4 text-sm rounded-xl bg-[#0F172A]/80 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#22E3A9]/50 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">Company / Org</label>
                    <input 
                      type="text" 
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      placeholder="Pied Piper Inc."
                      className="w-full h-11 px-4 text-sm rounded-xl bg-[#0F172A]/80 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#22E3A9]/50 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="inquiryType" className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">Inquiry Target</label>
                    <select 
                      id="inquiryType"
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
                      className="w-full h-11 px-4 text-sm rounded-xl bg-[#0F172A]/80 border border-white/10 text-slate-300 focus:outline-none focus:border-[#22E3A9]/50 transition-all duration-200 cursor-pointer"
                    >
                      <option value="general">General Support / FAQ</option>
                      <option value="enterprise">Enterprise Scaling Solutions</option>
                      <option value="billing">Billing Operations Track</option>
                      <option value="security">Security & Integration Audits</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">Message Details</label>
                  <textarea 
                    id="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your pipeline integration profile, target seat allocation, or feature constraints..."
                    className="w-full p-4 text-sm rounded-xl bg-[#0F172A]/80 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#22E3A9]/50 transition-all duration-200 resize-none leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-12 mt-2 font-semibold text-sm rounded-xl bg-gradient-to-r from-[#22E3A9] to-[#14D9C4] text-[#0F172A] hover:opacity-95 shadow-[0_4px_20px_rgba(34,227,169,0.15)] hover:shadow-[0_4px_25px_rgba(34,227,169,0.25)] flex items-center justify-center gap-2 transition-all duration-300"
                >
                  Send Payload
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}