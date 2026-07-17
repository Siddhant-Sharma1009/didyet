"use client";

import { motion } from "framer-motion";

export default function DidYetHome() {
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

      {/* Glow Effects */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-emerald-400/20 blur-[120px]" />
      <div className="absolute top-1/2 -right-40 h-96 w-96 rounded-full bg-cyan-400/10 blur-[120px]" />
      <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[100px]" />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="mx-auto flex flex-col items-center justify-center px-6 text-center pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300"
          >
            ✨ Welcome to DidYet
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-bold leading-tight md:text-7xl max-w-4xl"
          >
            Delegate Tasks. Reclaim Your Time.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-8 max-w-3xl text-lg leading-8 text-slate-400"
          >
            The ultimate platform connecting busy professionals with reliable assistants. Whether you need to offload daily tasks or want to monetize your skills as an assistant, DidYet makes it happen.
          </motion.p>
        </section>

        {/* Content Section */}
        <section className="mx-auto max-w-7xl px-6 pb-20">
          
          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 mt-12 mb-24 relative z-20"
          >
            <button className="w-full sm:w-auto rounded-full bg-emerald-500 px-8 py-4 font-semibold text-slate-900 transition-all hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]">
              Hire an Assistant
            </button>
            <button className="w-full sm:w-auto rounded-full border border-slate-600 bg-slate-800/50 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all hover:border-emerald-500/50 hover:bg-slate-800">
              Become an Assistant
            </button>
          </motion.div>

          {/* Value Proposition Grid */}
          <div className="grid gap-8 md:grid-cols-2 relative z-10">
            
            {/* Hire Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-8 transition-colors hover:border-emerald-500/30"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl transition-all group-hover:bg-emerald-500/20" />
              
              <div className="mb-6 inline-flex rounded-xl bg-emerald-500/10 p-3 text-emerald-400">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              
              <h3 className="mb-4 text-2xl font-bold text-white">Need an extra hand?</h3>
              <p className="mb-6 text-slate-400 leading-relaxed">
                Post your tasks, browse verified profiles, and hire top-tier assistants to help you manage your daily workload. Focus your energy on what truly matters.
              </p>
              
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-center gap-3">
                  <div className="rounded-full bg-emerald-500/20 p-1 text-emerald-400">
                     <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  Verified, professional talent
                </li>
                <li className="flex items-center gap-3">
                  <div className="rounded-full bg-emerald-500/20 p-1 text-emerald-400">
                     <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  Flexible hourly or project-based rates
                </li>
                <li className="flex items-center gap-3">
                  <div className="rounded-full bg-emerald-500/20 p-1 text-emerald-400">
                     <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  Secure payments & reliable support
                </li>
              </ul>
            </motion.div>

            {/* Earn Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-8 transition-colors hover:border-cyan-500/30"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl transition-all group-hover:bg-cyan-500/20" />
              
              <div className="mb-6 inline-flex rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h3 className="mb-4 text-2xl font-bold text-white">Ready to earn?</h3>
              <p className="mb-6 text-slate-400 leading-relaxed">
                Put your organizational skills to work. Build your profile, set your own rates, and choose the clients and projects that perfectly fit your schedule.
              </p>
              
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-center gap-3">
                  <div className="rounded-full bg-cyan-500/20 p-1 text-cyan-400">
                     <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  Be your own boss
                </li>
                <li className="flex items-center gap-3">
                  <div className="rounded-full bg-cyan-500/20 p-1 text-cyan-400">
                     <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  Work from anywhere, anytime
                </li>
                <li className="flex items-center gap-3">
                  <div className="rounded-full bg-cyan-500/20 p-1 text-cyan-400">
                     <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  Build a steady, long-term client base
                </li>
              </ul>
            </motion.div>

          </div>
        </section>
      </div>
    </main>
  );
}