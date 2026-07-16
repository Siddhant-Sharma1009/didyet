"use client";

import React, { useState } from 'react';
import { Network, Users, Terminal, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface NetworkTier {
  title: string;
  description: string;
  benefits: string[];
}

export default function JoinNetworkPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'developer',
    bio: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Intentionally abstracting submission layer for pipeline safety
    setSubmitted(true);
  };

  const networkTiers: NetworkTier[] = [
    {
      title: "Core Engineers & Operators",
      description: "For elite systems architects and automated pipeline specialists looking to extend the underlying DidYet graph orchestration.",
      benefits: ["Direct alpha access to core systems APIs", "Revenue-sharing infrastructure tools integration", "Dedicated Slack backchannel with DidYet core team"]
    },
    {
      title: "Enterprise Solutions Partners",
      description: "For consultancies, cloud agencies, and specialized integrators embedding workflow intelligence architectures into modern scale setups.",
      benefits: ["Priority co-marketing and client allocation pipelines", "Dedicated sandboxing environments", "Joint architectural consulting support"]
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto py-12 md:py-20 relative z-10">
      
      {/* Hero Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#22E3A9]/20 bg-[#22E3A9]/5 text-[#22E3A9] text-xs font-medium mb-5">
          <Network size={12} />
          Ecosystem Hub
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
          Accelerate workflow <br />
          <span className="bg-gradient-to-r from-[#22E3A9] to-[#14D9C4] bg-clip-text text-transparent">
            intelligence together.
          </span>
        </h1>
        <p className="text-base md:text-lg text-slate-400 max-w-xl mx-auto">
          Join a global grid of elite systems developers, integrators, and product engineers building on top of the DidYet protocol framework.
        </p>
      </div>

      {/* Network High-Level Telemetry Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {[
          { icon: <Users size={20} />, value: "4,800+", label: "Active Nodes Globally" },
          { icon: <Terminal size={20} />, value: "140M+", label: "API Invocations Handled" },
          { icon: <ShieldCheck size={20} />, value: "99.99%", label: "Pipeline Core Uptime" }
        ].map((stat, idx) => (
          <div key={idx} className="p-6 rounded-2xl border border-white/5 bg-[#111827]/30 backdrop-blur-xl flex items-center gap-4">
            <div className="h-10 w-10 rounded-xl bg-[#22E3A9]/10 text-[#22E3A9] flex items-center justify-center shrink-0">
              {stat.icon}
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-slate-400 font-medium tracking-wide">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        
        {/* Left Columns - Tiers Info */}
        <div className="lg:col-span-3 flex flex-col gap-8">
          <h2 className="text-2xl font-bold tracking-tight text-white mb-2">Network Specializations</h2>
          
          {networkTiers.map((tier, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-2xl border border-white/5 bg-[#111827]/40 backdrop-blur-xl hover:border-white/10 transition-all duration-300 group"
            >
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#22E3A9] transition-colors">{tier.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">{tier.description}</p>
              
              <ul className="flex flex-col gap-3">
                {tier.benefits.map((benefit, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-[#14D9C4] shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right Columns - Application Intake Glassmorphism Form */}
        <div className="lg:col-span-2">
          <div className="p-8 rounded-2xl border border-white/5 bg-[#111827]/60 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-[150px] h-[150px] bg-[#22E3A9]/5 rounded-full blur-3xl pointer-events-none" />
            
            <h2 className="text-xl font-bold tracking-tight text-white mb-2">Apply for Entry</h2>
            <p className="text-xs text-slate-400 mb-6">Applications are typically vetted by our developer relations desk within 48 business hours.</p>

            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center gap-4 animate-fadeIn">
                <div className="h-12 w-12 rounded-full bg-[#22E3A9]/10 text-[#22E3A9] flex items-center justify-center">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">Application Received</h3>
                  <p className="text-xs text-slate-400 max-w-xs mt-1">Our review module has queued your node. Look out for an activation handshake via your email inbox.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Erlich Bachman"
                    className="w-full h-11 px-4 text-sm rounded-xl bg-[#0F172A]/80 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#22E3A9]/50 transition-all duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">Engineering Email</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="erlich@aviato.com"
                    className="w-full h-11 px-4 text-sm rounded-xl bg-[#0F172A]/80 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#22E3A9]/50 transition-all duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">Primary Track</label>
                  <select 
                    id="role"
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                    className="w-full h-11 px-4 text-sm rounded-xl bg-[#0F172A]/80 border border-white/10 text-slate-300 focus:outline-none focus:border-[#22E3A9]/50 transition-all duration-200 cursor-pointer"
                  >
                    <option value="developer">Core Systems Engineer</option>
                    <option value="partner">Solutions Integration Partner</option>
                    <option value="enterprise">Enterprise Systems Architect</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="bio" className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">Telemetry/Focus Outline</label>
                  <textarea 
                    id="bio"
                    rows={4}
                    required
                    value={formData.bio}
                    onChange={(e) => setFormData({...formData, bio: e.target.value})}
                    placeholder="Briefly state your technology index or target integration use-case..."
                    className="w-full p-4 text-sm rounded-xl bg-[#0F172A]/80 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#22E3A9]/50 transition-all duration-200 resize-none leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-12 mt-2 font-semibold text-sm rounded-xl bg-gradient-to-r from-[#22E3A9] to-[#14D9C4] text-[#0F172A] hover:opacity-95 shadow-[0_4px_20px_rgba(34,227,169,0.15)] hover:shadow-[0_4px_25px_rgba(34,227,169,0.25)] flex items-center justify-center gap-2 transition-all duration-300"
                >
                  Submit Network Request
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