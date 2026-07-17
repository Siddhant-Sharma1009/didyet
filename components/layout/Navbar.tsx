"use client";

import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Image from "next/image";

interface NavLink {
  name: string;
  href: string;
  highlight?: boolean;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks: NavLink[] = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/aboutUs' },
    { name: 'Join our Network', href: '/network', highlight: true },
    { name: 'Pricing', href: '/pricing' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0F172A]/80 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">

        {/* Logo */}
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

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-all duration-200 ${link.highlight
                ? 'bg-gradient-to-r from-[#22E3A9] to-[#14D9C4] bg-clip-text text-transparent hover:brightness-110'
                : 'text-slate-400 hover:text-white'
                }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/login"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors px-4 py-2"
          >
            Login
          </a>
          <a
            href="/getStarted"
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold text-white rounded-xl group bg-gradient-to-br from-[#22E3A9] to-[#14D9C4] hover:shadow-[0_0_25px_rgba(34,227,169,0.3)] transition-all duration-300"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#0F172A] rounded-[10px] group-hover:bg-opacity-0 flex items-center gap-2">
              Get Started
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Panel */}
      <div
        className={`fixed inset-x-0 top-20 border-b border-white/5 bg-[#0F172A]/95 backdrop-blur-xl transition-all duration-300 ease-in-out md:hidden ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'
          }`}
      >
        <div className="flex flex-col gap-4 px-6 py-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-medium py-2 border-b border-white/5 ${link.highlight
                ? 'bg-gradient-to-r from-[#22E3A9] to-[#14D9C4] bg-clip-text text-transparent'
                : 'text-slate-300'
                }`}
            >
              {link.name}
            </a>
          ))}

          {/* Mobile CTAs */}
          <div className="flex flex-col gap-3 pt-4">
            <a
              href="/login"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 rounded-xl font-medium border border-white/10 text-white hover:bg-white/5 transition-all"
            >
              Login
            </a>
            <a
              href="/get-started"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 rounded-xl font-semibold bg-gradient-to-r from-[#22E3A9] to-[#14D9C4] text-[#0F172A] hover:opacity-90 transition-all shadow-[0_4px_20px_rgba(34,227,169,0.2)]"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;