"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Lock, Mail, ShieldAlert } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Mimicking authentication pipeline delay
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-md mx-auto py-16 md:py-24 relative z-10">
      
      {/* Brand & Heading Header */}
      <div className="text-center mb-10">
        <Link href="/" className="inline-flex items-center gap-2 group mb-6">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#22E3A9] to-[#14D9C4] p-[1px]">
            <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-[#0F172A]">
              <div className="h-2 w-2 rounded-sm bg-gradient-to-br from-[#22E3A9] to-[#14D9C4]" />
            </div>
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            Did<span className="bg-gradient-to-r from-[#22E3A9] to-[#14D9C4] bg-clip-text text-transparent">Yet</span>
          </span>
        </Link>
        <h1 className="text-3xl font-bold tracking-tight mb-2 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
          Welcome back.
        </h1>
        <p className="text-sm text-slate-400">
          Enter your telemetry key authorization details.
        </p>
      </div>

      {/* Main Glassmorphism Authentication Card */}
      <div className="p-8 rounded-2xl border border-white/5 bg-[#111827]/60 backdrop-blur-xl relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[#22E3A9]/5 rounded-full blur-3xl pointer-events-none" />

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          
          {/* Email Input Field */}
          <div>
            <label htmlFor="email" className="block text-[10px] font-bold text-slate-300 mb-2 uppercase tracking-wider">
              Work Email Address
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-4 text-slate-500 pointer-events-none">
                <Mail size={16} />
              </span>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="richard@piedpiper.com"
                className="w-full h-11 pl-12 pr-4 text-sm rounded-xl bg-[#0F172A]/80 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#22E3A9]/50 transition-all duration-200"
              />
            </div>
          </div>

          {/* Password Input Field */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="password" className="block text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                Account Password
              </label>
              <a href="#forgot" className="text-xs text-[#14D9C4] hover:text-[#22E3A9] transition-colors">
                Forgot access keys?
              </a>
            </div>
            <div className="relative flex items-center">
              <span className="absolute left-4 text-slate-500 pointer-events-none">
                <Lock size={16} />
              </span>
              <input
                type="password"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full h-11 pl-12 pr-4 text-sm rounded-xl bg-[#0F172A]/80 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#22E3A9]/50 transition-all duration-200"
              />
            </div>
          </div>

          {/* Remember Session Checkbox */}
          <div className="flex items-center justify-between mt-1">
            <label className="flex items-center gap-2 cursor-pointer group select-none">
              <input 
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="sr-only"
              />
              <div className={`h-4 w-4 rounded-md border flex items-center justify-center transition-all duration-200 ${
                rememberMe ? 'bg-gradient-to-br from-[#22E3A9] to-[#14D9C4] border-transparent' : 'border-white/20 bg-[#0F172A]'
              }`}>
                {rememberMe && <div className="h-1.5 w-1.5 rounded-sm bg-[#0F172A]" />}
              </div>
              <span className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">Keep session signed in</span>
            </label>
          </div>

          {/* Core Sign In Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 mt-2 font-semibold text-sm rounded-xl bg-gradient-to-r from-[#22E3A9] to-[#14D9C4] text-[#0F172A] hover:opacity-95 disabled:opacity-50 shadow-[0_4px_20px_rgba(34,227,169,0.15)] flex items-center justify-center gap-2 transition-all duration-300"
          >
            {loading ? (
              <span className="w-5 h-5 border-2 border-[#0F172A] border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                Authorize Environment
                <ArrowRight size={14} />
              </>
            )}
          </button>
        </form>

        {/* Divider Layer */}
        <div className="flex items-center gap-4 my-6">
          <div className="h-[1px] flex-grow bg-white/5" />
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Or login with</span>
          <div className="h-[1px] flex-grow bg-white/5" />
        </div>

        {/* SSO Providers */}
        <button 
          onClick={() => alert("SSO integration initialized")}
          className="w-full h-11 border border-white/10 rounded-xl bg-[#0F172A] text-sm font-medium text-slate-200 hover:bg-white/5 transition-all flex items-center justify-center gap-2"
        >
          <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
          Single Sign-on with GitHub
        </button>
      </div>

      {/* Auxiliary Footer Account Prompt */}
      <div className="text-center mt-6">
        <p className="text-xs text-slate-500">
          New to the architecture grid?{' '}
          <Link href="#get-started" className="text-[#14D9C4] hover:text-[#22E3A9] transition-colors font-semibold">
            Provision a new account
          </Link>
        </p>
      </div>

    </div>
  );
}