"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTemplateProps {
  badge?: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}

export default function PageTemplate({
  badge = "DidYet",
  title,
  subtitle,
  children,
}: PageTemplateProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0F172A] text-white">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Glow */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-emerald-400/20 blur-[120px]" />
      <div className="absolute top-1/2 -right-40 h-96 w-96 rounded-full bg-cyan-400/10 blur-[120px]" />
      <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[100px]" />

      <div className="relative z-10">
        {/* Hero */}
        <section className="mx-auto flex min-h-[45vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5 }}
            className="mb-6 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300"
          >
            ✨ {badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .1 }}
            className="text-5xl font-bold leading-tight md:text-7xl"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .2 }}
            className="mt-8 max-w-3xl text-lg leading-8 text-slate-400"
          >
            {subtitle}
          </motion.p>
        </section>

        {/* Content */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          {children}
        </section>
      </div>
    </main>
  );
}