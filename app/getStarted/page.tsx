"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Terminal, User, Users, CheckCircle2, Shield } from 'lucide-react';

export default function GetStartedPage() {
  const [step, setStep] = useState<number>(1);
  const [workspaceType, setWorkspaceType] = useState<'personal' | 'team'>('personal');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    workspaceName: '',
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) {
      setStep(step + 1);
    } else {
      setLoading(true);
      // Simulate pipeline generation & account provisioning telemetry delay
      setTimeout(() => {
        setLoading(false);
        setStep(3);
      }, 1800);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto py-12 md:py-20 relative z-10">
      
      {/* Top Wizard Step Tracker Progress Indicators */}
      {step < 3 && (
        <div className="flex items-center justify-center gap-4 mb-10 max-w-xs mx-auto">
          <div className={`h-1.5 flex-grow rounded-full transition-all duration-300 ${step >= 1 ? 'bg-gradient-to-r from-[#22E3A9] to-[#14D9C4]' : 'bg-white/10'}`} />
          <div className={`h-1.5 flex-grow rounded-full transition-all duration-300 ${step >= 2 ? 'bg-gradient-to-r from-[#22E3A9] to-[#14D9C4]' : 'bg-white/10'}`} />
        </div>
      )}

      {/* Dynamic Header Section Context */}
      <div className="text-center mb-8">
        {step === 1 && (
          <>
            <h1 className="text-3xl font-bold tracking-tight mb-2 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">Initialize your Node.</h1>
            <p className="text-sm text-slate-400">Deploy your DidYet workflow intelligence environment.</p>
          </>
        )}
        {step === 2 && (
          <>
            <h1 className="text-3xl font-bold tracking-tight mb-2 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">Configure Workspace.</h1>
            <p className="text-sm text-slate-400">Set up the orchestration boundaries for your metrics streams.</p>
          </>
        )}
        {step === 3 && (
          <>
            <div className="h-12 w-12 rounded-full bg-[#22E3A9]/10 text-[#22E3A9] flex items-center justify-center mx-auto mb-4 animate-bounce">
              <CheckCircle2 size={24} />
            </div>
            <h1 className="text-3xl font-bold tracking-tight mb-2 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">Node Provisioned.</h1>
            <p className="text-sm text-slate-400">Your cloud workflow framework is live and listening.</p>
          </>
        )}
      </div>

      {/* Core Interface Form Wrap */}
      <div className="p-8 rounded-2xl border border-white/5 bg-[#111827]/60 backdrop-blur-xl shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[#14D9C4]/5 rounded-full blur-3xl pointer-events-none" />

        {step === 1 && (
          <form onSubmit={handleNextStep} className="flex flex-col gap-5">
            <div>
              <label htmlFor="fullName" className="block text-[10px] font-bold text-slate-300 mb-2 uppercase tracking-wider">Full Identity Name</label>
              <input 
                type="text" 
                id="fullName"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                placeholder="Gavin Belson"
                className="w-full h-11 px-4 text-sm rounded-xl bg-[#0F172A]/80 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#22E3A9]/50 transition-all duration-200"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[10px] font-bold text-slate-300 mb-2 uppercase tracking-wider">Secure Developer Email</label>
              <input 
                type="email" 
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="gavin@hooli.xyz"
                className="w-full h-11 px-4 text-sm rounded-xl bg-[#0F172A]/80 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#22E3A9]/50 transition-all duration-200"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-[10px] font-bold text-slate-300 mb-2 uppercase tracking-wider">Encryption Password</label>
              <input 
                type="password" 
                id="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                placeholder="••••••••••••"
                className="w-full h-11 px-4 text-sm rounded-xl bg-[#0F172A]/80 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#22E3A9]/50 transition-all duration-200"
              />
            </div>

            <button
              type="submit"
              className="w-full h-12 mt-2 font-semibold text-sm rounded-xl bg-gradient-to-r from-[#22E3A9] to-[#14D9C4] text-[#0F172A] hover:opacity-95 shadow-[0_4px_20px_rgba(34,227,169,0.15)] flex items-center justify-center gap-2 transition-all duration-300"
            >
              Continue Architecture Setup
              <ArrowRight size={14} />
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleNextStep} className="flex flex-col gap-6">
            
            {/* Custom Interactive Workspace Segment Toggles */}
            <div>
              <span className="block text-[10px] font-bold text-slate-300 mb-3 uppercase tracking-wider">Deployment Topology</span>
              <div className="grid grid-cols-2 gap-4">
                <div 
                  onClick={() => setWorkspaceType('personal')}
                  className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 flex flex-col gap-2 bg-[#0F172A]/50 ${
                    workspaceType === 'personal' ? 'border-[#22E3A9] ring-1 ring-[#22E3A9]/30' : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <User size={16} className={workspaceType === 'personal' ? 'text-[#22E3A9]' : 'text-slate-400'} />
                  <span className="text-sm font-semibold text-white">Personal Node</span>
                  <span className="text-[11px] text-slate-400 leading-tight">Optimized for isolated individual operations pipeline logging.</span>
                </div>

                <div 
                  onClick={() => setWorkspaceType('team')}
                  className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 flex flex-col gap-2 bg-[#0F172A]/50 ${
                    workspaceType === 'team' ? 'border-[#22E3A9] ring-1 ring-[#22E3A9]/30' : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <Users size={16} className={workspaceType === 'team' ? 'text-[#22E3A9]' : 'text-slate-400'} />
                  <span className="text-sm font-semibold text-white">Multi-seat Grid</span>
                  <span className="text-[11px] text-slate-400 leading-tight">Engineered for fast-scaling engineering collaborative teams.</span>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="workspaceName" className="block text-[10px] font-bold text-slate-300 mb-2 uppercase tracking-wider">Workspace Namespace</label>
              <div className="relative flex items-center">
                <span className="absolute left-4 text-xs font-mono text-slate-600 pointer-events-none">didyet.com/</span>
                <input 
                  type="text" 
                  id="workspaceName"
                  required
                  value={formData.workspaceName}
                  onChange={(e) => setFormData({...formData, workspaceName: e.target.value})}
                  placeholder="hooli-core"
                  className="w-full h-11 pl-24 pr-4 text-sm rounded-xl bg-[#0F172A]/80 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#22E3A9]/50 transition-all duration-200 font-mono"
                />
              </div>
            </div>

            {/* Back Button and Finalize Trigger layout */}
            <div className="flex gap-4 mt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-1/3 h-12 font-medium text-sm rounded-xl bg-[#0F172A] border border-white/10 text-slate-300 hover:bg-white/5 transition-colors"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex-grow h-12 font-semibold text-sm rounded-xl bg-gradient-to-r from-[#22E3A9] to-[#14D9C4] text-[#0F172A] hover:opacity-95 disabled:opacity-50 shadow-[0_4px_20px_rgba(34,227,169,0.15)] flex items-center justify-center gap-2 transition-all duration-300"
              >
                {loading ? (
                  <span className="w-5 h-5 border-2 border-[#0F172A] border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    Initialize Framework
                    <Terminal size={14} />
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        {step === 3 && (
          <div className="py-6 text-center flex flex-col gap-6 animate-fadeIn">
            <p className="text-sm text-slate-400 max-w-sm mx-auto leading-relaxed">
              Welcome aboard, <span className="text-white font-semibold">{formData.fullName}</span>. Your workspace path <span className="text-[#22E3A9] font-mono font-medium">/{formData.workspaceName}</span> has successfully completed authorization tests.
            </p>
            <div className="p-4 rounded-xl border border-white/5 bg-[#0F172A]/50 text-left font-mono text-xs text-slate-300 flex items-center gap-3">
              <span className="text-[#22E3A9]">$</span>
              <span>npm i -g @didyet/cli && didyet auth:login</span>
            </div>
            <button
              onClick={() => alert("Redirecting payload to dashboard dashboard engine")}
              className="w-full h-12 font-semibold text-sm rounded-xl bg-gradient-to-r from-[#22E3A9] to-[#14D9C4] text-[#0F172A] hover:opacity-95 shadow-[0_4px_20px_rgba(34,227,169,0.15)] flex items-center justify-center gap-2 transition-all duration-300"
            >
              Enter Dashboard Console
              <ArrowRight size={14} />
            </button>
          </div>
        )}
      </div>

      {/* Auxiliary Regulatory Notice Footer */}
      {step < 3 && (
        <div className="mt-6 text-center flex items-center justify-center gap-1.5 text-xs text-slate-500">
          <Shield size={12} />
          <span>Protected by SOC2 Type II end-to-end framework layers.</span>
        </div>
      )}

    </div>
  );
}