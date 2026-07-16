"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Terminal, 
  Layers, 
  Cpu, 
  Activity, 
  Fingerprint, 
  CheckCircle2, 
  GitBranch,
  Workflow
} from 'lucide-react';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<'cli' | 'metrics'>('cli');

  const features = [
    {
      icon: <Layers className="text-[#22E3A9]" size={20} />,
      title: "Asynchronous Aggregation",
      description: "Seamlessly map internal stack state updates and build logs into a single structured telemetry layer."
    },
    {
      icon: <Cpu className="text-[#14D9C4]" size={20} />,
      title: "Edge Orchestration",
      description: "Distributed ingest nodes capture high-throughput system logs instantly with zero performance overhead."
    },
    {
      icon: <Activity className="text-[#22E3A9]" size={20} />,
      title: "Predictive Analytics",
      description: "Detect systemic pipeline bottlenecks before failures trip continuous integration environments."
    },
    {
      icon: <Fingerprint className="text-[#14D9C4]" size={20} />,
      title: "Cryptographic Attestation",
      description: "SOC2 Type II telemetry tracking signed with end-to-end payload integrity keys."
    }
  ];

  return (
    <div className="w-full relative z-10 pt-12 md:pt-20">
      
      {/* 1. HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-20 md:mb-32">
        <Link 
          href="/network"
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#22E3A9]/20 bg-[#22E3A9]/5 text-[#22E3A9] text-xs font-medium mb-8 hover:bg-[#22E3A9]/10 transition-colors"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#22E3A9] animate-pulse" />
          DidYet Protocol v2.4 Is Live &rarr;
        </Link>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent leading-none">
          The software grid <br />
          <span className="bg-gradient-to-r from-[#22E3A9] to-[#14D9C4] bg-clip-text text-transparent">
            knows what you did.
          </span>
        </h1>
        
        <p className="text-base md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
          Streamline real-time logs, aggregate system telemetry, and monitor high-performance continuous workflows through one beautiful dark-mode sandbox.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/get-started"
            className="w-full sm:w-auto relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold text-[#0F172A] rounded-xl group bg-gradient-to-br from-[#22E3A9] to-[#14D9C4] hover:shadow-[0_0_30px_rgba(34,227,169,0.25)] transition-all duration-300"
          >
            <span className="relative px-8 py-4 bg-gradient-to-r from-[#22E3A9] to-[#14D9C4] text-[#0F172A] rounded-[10px] font-bold flex items-center gap-2 group-hover:opacity-90 transition-opacity">
              Provision Free Node
              <ArrowRight size={16} />
            </span>
          </Link>
          <Link 
            href="/pricing" 
            className="w-full sm:w-auto px-8 py-4 text-sm font-semibold border border-white/10 hover:bg-white/5 rounded-xl transition-all text-slate-200"
          >
            View Scale Plans
          </Link>
        </div>
      </section>

      {/* 2. INTERACTIVE TERMINAL / CONSOLE PREVIEW */}
      <section className="max-w-4xl mx-auto mb-24 md:mb-36">
        <div className="rounded-2xl border border-white/5 bg-[#111827]/40 backdrop-blur-xl shadow-2xl overflow-hidden">
          {/* Window Control Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#0F172A]/40">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
              <div className="w-3 h-3 rounded-full bg-green-500/20" />
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => setActiveTab('cli')}
                className={`px-3 py-1 rounded-md text-xs font-mono transition-all ${activeTab === 'cli' ? 'bg-white/5 text-[#22E3A9] border border-[#22E3A9]/20' : 'text-slate-500 hover:text-slate-300'}`}
              >
                didyet.sh
              </button>
              <button 
                onClick={() => setActiveTab('metrics')}
                className={`px-3 py-1 rounded-md text-xs font-mono transition-all ${activeTab === 'metrics' ? 'bg-white/5 text-[#14D9C4] border border-[#14D9C4]/20' : 'text-slate-500 hover:text-slate-300'}`}
              >
                telemetry.json
              </button>
            </div>
          </div>

          {/* Code Window Display Container */}
          <div className="p-6 md:p-8 font-mono text-xs md:text-sm leading-relaxed text-slate-300 min-h-[220px]">
            {activeTab === 'cli' ? (
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-slate-500">
                  <span>$</span>
                  <span className="text-white">npm i -g @didyet/core</span>
                </div>
                <div className="text-slate-400">✓ Package initialized successfully. [2.4.0-edge]</div>
                <div className="flex items-center gap-2 text-slate-500 mt-2">
                  <span>$</span>
                  <span className="text-white">didyet pipeline:verify --target=production</span>
                </div>
                <div className="text-[#22E3A9] flex items-center gap-2">
                  <CheckCircle2 size={14} /> Connected to global orchestration network hub.
                </div>
                <div className="text-slate-400 pl-5">&rarr; Node 0x7F...E2 active [Latency: 8ms]</div>
              </div>
            ) : (
              <pre className="text-slate-400 overflow-x-auto">
{`{
  "node": "didyet-core-cluster-01",
  "status": "synchronized",
  "metrics": {
    "throughput": "4.28 GB/s",
    "ingest_rate": "142,840 ops/sec",
    "integrity_checksum": "sha256:d8f99e01ca2b"
  },
  "bridges": ["github", "vercel", "linear"]
}`}
              </pre>
            )}
          </div>
        </div>
      </section>

      {/* 3. CORE VALUE PROP MATRIX GRID */}
      <section className="mb-24 md:mb-36">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">Engineered for extreme precision.</h2>
          <p className="text-sm md:text-base text-slate-400">Minimal structural overhead. Instant asynchronous tracking deployment features.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feat, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-2xl border border-white/5 bg-[#111827]/30 backdrop-blur-xl hover:border-white/10 transition-all duration-300 group flex items-start gap-5"
            >
              <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:border-[#22E3A9]/20 transition-all">
                {feat.icon}
              </div>
              <div>
                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-[#22E3A9] transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CALL TO ACTION CONTAINER BLOCK */}
      <section className="p-8 md:p-12 rounded-3xl border border-white/5 bg-gradient-to-r from-[#111827]/80 to-[#0F172A]/80 backdrop-blur-xl relative overflow-hidden flex flex-col items-center text-center max-w-4xl mx-auto mb-16 shadow-2xl">
        <div className="absolute top-[-50%] left-[-50%] w-[400px] h-[400px] bg-[#22E3A9]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-50%] right-[-50%] w-[400px] h-[400px] bg-[#14D9C4]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#22E3A9] to-[#14D9C4] p-[1px] mb-6 flex items-center justify-center">
          <div className="h-full w-full bg-[#0F172A] rounded-[15px] flex items-center justify-center text-[#22E3A9]">
            <Workflow size={20} />
          </div>
        </div>

        <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 text-white">
          Ready to scale your log tracking?
        </h2>
        
        <p className="text-xs md:text-sm text-slate-400 max-w-md mb-8 leading-relaxed">
          Initialize your tracking clusters right now. Seamless migration modules built out of the box for modern cloud deployments.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <Link
            href="/get-started"
            className="w-full sm:w-auto px-6 h-12 flex items-center justify-center font-semibold text-sm rounded-xl bg-gradient-to-r from-[#22E3A9] to-[#14D9C4] text-[#0F172A] hover:opacity-95 transition-all duration-300 shadow-[0_4px_20px_rgba(34,227,169,0.15)]"
          >
            Deploy Sandbox Cluster
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-6 h-12 flex items-center justify-center font-medium text-sm rounded-xl bg-[#0F172A] border border-white/10 text-white hover:bg-white/5 transition-colors"
          >
            Request System Demo
          </Link>
        </div>
      </section>

    </div>
  );
}