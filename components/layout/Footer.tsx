"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Command } from 'lucide-react';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import Image from "next/image";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { name: 'Features', href: '/features' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Changelog', href: '/changelog' },
      { name: 'Roadmap', href: '/roadmap' },
    ],
    Company: [
      { name: 'About Us', href: '/about' },
      { name: 'Join our Network', href: '/network' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact Us', href: '/contact' },
    ],
    Resources: [
      { name: 'Documentation', href: '/docs' },
      { name: 'System Status', href: '/status' },
      { name: 'FAQs', href: '/faqs' },
      { name: 'Privacy Policy', href: '/privacy' },
    ],
  };

  return (
    <footer className="w-full border-t border-white/5 bg-[#0F172A] relative overflow-hidden z-10">
      {/* Subtle bottom-right glow effect */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#14D9C4]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-12 border-b border-white/5">
          
          {/* Brand Identity / Left Column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="flex items-center gap-2 cursor-pointer group">
                        <Image
                          src="/images/logo.jpeg"
                          alt="DidYet Logo"
                          width={42}
                          height={42}
                          priority
                          className="rounded-xl object-contain transition-transform duration-300 group-hover:scale-105"
                        />
              
                        <span className="text-xl font-bold tracking-tight text-white group-hover:text-white/90 transition-colors">
                          Did
                          <span className="bg-gradient-to-r from-[#22E3A9] to-[#14D9C4] bg-clip-text text-transparent">
                            Yet
                          </span>
                        </span>
                      </div>
            </Link>
            
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Premium workflow intelligence engineered for performance-driven teams. Fast, beautiful, and absolutely minimal.
            </p>

            {/* Newsletter Subscription Box */}
            <div className="flex flex-col gap-3 max-w-sm mt-2">
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Subscribe to updates</span>
              <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center">
                <input 
                  type="email" 
                  placeholder="you@domain.com" 
                  className="w-full h-11 px-4 text-sm rounded-xl bg-[#111827]/60 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#22E3A9]/50 focus:ring-1 focus:ring-[#22E3A9]/50 transition-all duration-300 backdrop-blur-md" 
                />
                <button 
                  type="submit" 
                  aria-label="Subscribe"
                  className="absolute right-1.5 h-8 w-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#22E3A9] to-[#14D9C4] text-[#0F172A] hover:opacity-90 transition-opacity"
                >
                  <ArrowRight size={14} />
                </button>
              </form>
            </div>
          </div>

          {/* Links Columns Mapping */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-4">
              <span className="text-xs font-semibold text-slate-200 uppercase tracking-widest">{category}</span>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Metadata & Social Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span>&copy; {currentYear} DidYet Inc. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <div className="hidden sm:flex items-center gap-1">
              <Command size={10} />
              <span>Built for speed</span>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center gap-5 text-slate-400">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200" aria-label="Twitter">
              <FaTwitter size={18} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200" aria-label="GitHub">
              <FaGithub size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200" aria-label="LinkedIn">
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;