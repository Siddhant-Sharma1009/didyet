"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  Target, 
  Eye, 
  UserCheck, 
  Briefcase, 
  ShieldCheck, 
  Clock, 
  Zap, 
  Users, 
  Sparkles, 
  MessageSquare, 
  Cpu,
  ChevronDown, 
  HelpCircle,
  TrendingUp,
  Award
} from "lucide-react";

import {
  FaLinkedin,
  FaGithub,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";

// --- ANIMATION CONFIGS (Linear/Vercel Style: Snappy yet smooth) ---
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.05 } }
};

// --- DATA STRUCTURES ---
const stats = [
  { value: "5K+", label: "Active Users" },
  { value: "1,200+", label: "Verified Assistants" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "24/7", label: "Availability" }
];

const offerings = [
  { icon: UserCheck, title: "Hire an Assistant", desc: "Find verified assistants precisely matched for your personal or professional needs without the friction." },
  { icon: Briefcase, title: "Become an Assistant", desc: "Create your verified professional profile, set your terms, and start earning by helping others." },
  { icon: ShieldCheck, title: "Secure Platform", desc: "End-to-end encrypted communication, secure holding accounts, and fully vetted user profiles." },
  { icon: Clock, title: "Flexible Opportunities", desc: "Monetize your unique skills on your own schedule. Choose exactly when, how, and with whom you work." },
  { icon: Zap, title: "24/7 Accessibility", desc: "Global timezone coverage ensures you can connect with talented support agents anytime, anywhere." },
  { icon: Users, title: "Community Driven", desc: "A collaborative ecosystem designed to help individuals scale their time and assistants scale their businesses." }
];

const features = [
  { title: "Verified Profiles", desc: "Comprehensive identity, background, and skill authentication standard for every member.", icon: UserCheck },
  { title: "Smart Matching", desc: "Context-aware algorithmic routing connects your exact project criteria with the perfect specialist.", icon: Cpu },
  { title: "Easy Communication", desc: "Integrated workspace environments with real-time tracking, messaging, and file sharing.", icon: MessageSquare },
  { title: "Secure Experience", desc: "Tier-1 payment gateways and robust milestone-based payment protections built right in.", icon: ShieldCheck },
  { title: "Modern Technology", desc: "Lightning fast, reliable interfaces engineered for real-time collaboration.", icon: Sparkles },
  { title: "Growing Community", desc: "A thriving global landscape of founders, executives, creators, and expert helpers.", icon: Users }
];

const values = [
  { title: "Integrity", desc: "Radical transparency and unwavering commitment to high-security operational standards." },
  { title: "Trust", desc: "The bedrock of our marketplace—earned daily through verifiable execution and safety protocols." },
  { title: "Innovation", desc: "Continuously refining algorithmic human resource pairing to maximize productivity vectors." },
  { title: "Collaboration", desc: "Fostering environments where cross-functional alignment happens automatically." },
  { title: "Empowerment", desc: "Providing tools that unlock lifestyle autonomy for both clients and independent agents." },
  { title: "Growth", desc: "Compounding value for our ecosystem through educational infrastructure and performance loops." }
];

const team = [
  { name: "Elena Rostova", role: "Co-Founder & CEO", desc: "Ex-Stripe Product Lead. Obsessed with building secure digital labor economies.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
  { name: "Marcus Vance", role: "Chief Technology Officer", desc: "Former Principal Engineer at Vercel. Distributed systems and infrastructure specialist.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" },
  { name: "Siddharth Nair", role: "Head of Trust & Safety", desc: "Dedicated to building top-tier validation models and marketplace integrity pipelines.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" }
];

const testimonials = [
  { quote: "DidYet completely optimized our executive operations. We found a stellar technical assistant within 48 hours. The workflow is seamless.", author: "Sarah Jenkins", role: "Founder, AlphaStream", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" },
  { quote: "Monetizing my backend engineering support skills on DidYet has changed my freelance career. The platform's verification filters out all low-quality requests.", author: "David Chen", role: "Systems Assistant", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" },
  { quote: "The security framework gives us immense peace of mind. We spin up support assistants during high-traffic product launches securely and dynamically.", author: "Amara Okafor", role: "Operations Dir, Omnicor", img: "https://images.unsplash.com/photo-1534751516642-a131fed10495?auto=format&fit=crop&w=150&q=80" }
];

const faqs = [
  { q: "How do I hire an assistant?", a: "Simply sign up, specify your task requirements, operational hours, and required technical stacks. Our matching system filters matching profiles instantly for you to interview and contract." },
  { q: "How can I become an assistant?", a: "Click 'Become an Assistant', complete your thorough identity verification mapping, build your specialized profile, pass our standard skills verification process, and go live." },
  { q: "Is DidYet secure?", a: "Absolutely. We employ enterprise-grade security protocols, multi-party escrow accounts for payments, and sandboxed dynamic communication networks to insulate sensitive operations." },
  { q: "How are assistants verified?", a: "Every agent goes through standard multi-factor identity cross-checks, background screenings where applicable, and automated performance evaluation testing frameworks before badge approval." },
  { q: "Can businesses use DidYet?", a: "Yes. DidYet scales cleanly from individual founders seeking personal executive admins up to enterprise scaling requiring hundreds of distributed professional agents." }
];

export default function AboutUsPage() {
  return (
    <div className="relative min-h-screen bg-brand-bg bg-grid-pattern text-slate-200 antialiased selection:bg-brand-accent selection:text-brand-bg-dark">
      
      {/* --- FLOATING BACKGROUND BLOBS --- */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-brand-accent/10 blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-[40%] right-[-5%] w-[500px] h-[500px] rounded-full bg-brand-glow/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] w-[700px] h-[700px] rounded-full bg-brand-accent/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-24 relative z-10 space-y-32">
        
        {/* =======================================
            1. HERO SECTION
           ======================================= */}
        <motion.section 
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="text-center max-w-4xl mx-auto space-y-8 py-12"
        >
          <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-white/10 text-brand-accent text-sm font-medium tracking-wide">
            <Sparkles className="w-4 h-4 text-brand-accent" />
            <span>About DidYet</span>
          </motion.div>

          <motion.h1 variants={fadeIn} className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Connecting People with{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Trusted Assistants
            </span>
          </motion.h1>

          <motion.p variants={fadeIn} className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Whether you need a virtual assistant, personal support, professional expertise, or want to offer your skills, DidYet makes meaningful connections simple, secure, and efficient.
          </motion.p>

          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="w-full sm:w-auto px-8 py-4 rounded-premium bg-brand-gradient text-brand-bg-dark font-semibold shadow-[0_0_30px_rgba(34,227,169,0.3)] hover:opacity-95 transition-all flex items-center justify-center gap-2 group cursor-pointer">
              Get Started
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-premium glass-card hover:bg-white/5 font-semibold text-white transition-all border-white/10 cursor-pointer">
              Become an Assistant
            </button>
          </motion.div>
        </motion.section>

        {/* =======================================
            2. OUR STORY
           ======================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="relative group rounded-premium overflow-hidden glass-card p-1 aspect-video lg:aspect-square flex items-center justify-center border-white/5"
          >
            <div className="absolute inset-0 bg-brand-gradient opacity-5 group-hover:opacity-10 transition-opacity duration-500" />
            {/* Minimal High Tech Placeholder Visual */}
            <div className="w-full h-full bg-slate-950/40 rounded-premium flex flex-col items-center justify-center p-8 border border-white/5 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-40" />
              <div className="w-16 h-16 rounded-full bg-brand-accent/10 flex items-center justify-center mb-4 border border-brand-accent/20 shadow-[0_0_20px_rgba(34,227,169,0.1)]">
                <TrendingUp className="w-8 h-8 text-brand-accent" />
              </div>
              <h4 className="text-white font-semibold text-lg z-10">Platform Infrastructure Visual</h4>
              <p className="text-slate-500 text-sm max-w-xs mt-2 z-10">Interactive user maps and secure connection node frameworks live dashboard interface.</p>
            </div>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-brand-accent font-medium text-sm tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-accent" /> Our Story
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Reimagining Distributed Assistance Systems
            </h2>
            <div className="space-y-4 text-slate-400 font-light leading-relaxed">
              <p>
                DidYet was created to solve a simple problem—finding reliable assistance shouldn't be complicated. The modern marketplace was fragmented, riddled with trust deficits, and bogged down by slow onboarding processes.
              </p>
              <p>
                We believe talented individuals deserve boundaryless opportunities, and businesses deserve seamless access to trustworthy assistants whenever they need them. By replacing traditional friction with top-tier automation and thorough screening frameworks, we built a modern ecosystem that yields immediate productivity dividends.
              </p>
              <p className="text-sm border-l-2 border-brand-accent/30 pl-4 text-slate-500 italic">
                [Optional Placeholder: Expand here on local market expansions, initial seed funding insights, specific platform architectural breakthroughs, or targeted cross-border milestone projections.]
              </p>
            </div>
          </motion.div>
        </section>

        {/* =======================================
            3. MISSION & VISION
           ======================================= */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="glass-card rounded-premium p-8 lg:p-10 space-y-4 glass-card-hover group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-3xl group-hover:bg-brand-accent/10 transition-colors" />
            <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center border border-brand-accent/20 mb-4">
              <Target className="w-6 h-6 text-brand-accent" />
            </div>
            <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            <p className="text-slate-400 font-light leading-relaxed">
              To make finding and offering professional assistance effortless, trustworthy, and accessible for everyone globally. We systematically reduce transactional friction so workflows remain perfectly uninterrupted.
            </p>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="glass-card rounded-premium p-8 lg:p-10 space-y-4 glass-card-hover group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-glow/5 rounded-full blur-3xl group-hover:bg-brand-glow/10 transition-colors" />
            <div className="w-12 h-12 rounded-xl bg-brand-glow/10 flex items-center justify-center border border-brand-glow/20 mb-4">
              <Eye className="w-6 h-6 text-brand-glow" />
            </div>
            <h3 className="text-2xl font-bold text-white">Our Vision</h3>
            <p className="text-slate-400 font-light leading-relaxed">
              To pioneer the structural layer for the future of flexible talent acquisition. We envision a digital global workspace where matching latency drops to near zero, backed entirely by cryptographic validation architecture.
            </p>
          </motion.div>
        </section>

        {/* =======================================
            4. WHAT WE OFFER
           ======================================= */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Core Operational Deliverables</h2>
            <p className="text-slate-400 font-light">Engineered to serve all sides of the operational network seamlessly.</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {offerings.map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeIn} 
                className="glass-card rounded-premium p-6 lg:p-8 space-y-4 glass-card-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-800/80 flex items-center justify-center border border-white/5 text-brand-accent">
                  <item.icon className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                <p className="text-slate-400 font-light text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* =======================================
            5. WHY CHOOSE DIDYET
           ======================================= */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Architected Differently</h2>
            <p className="text-slate-400 font-light">Why forward-thinking enterprises and top-tier assistants scale here.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative rounded-premium glass-card p-6 overflow-hidden glass-card-hover"
              >
                {/* Micro Hover Border Glow Component Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="flex items-start gap-4 z-10 relative">
                  <div className="mt-1 p-2 rounded-lg bg-brand-accent/5 border border-brand-accent/10 text-brand-accent group-hover:scale-110 transition-transform duration-300">
                    <feat.icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-semibold text-white group-hover:text-brand-accent transition-colors">{feat.title}</h4>
                    <p className="text-slate-400 text-sm font-light leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* =======================================
            6. NUMBERS SECTION
           ======================================= */}
        <motion.section 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="glass-card rounded-premium bg-gradient-to-b from-white/[0.04] to-transparent p-8 lg:p-12 border-white/5 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 division-lines">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center space-y-2">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight bg-brand-gradient bg-clip-text text-transparent"
                >
                  {stat.value}
                </motion.div>
                <p className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* =======================================
            7. OUR VALUES
           ======================================= */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Our Core Ecosystem Principles</h2>
            <p className="text-slate-400 font-light">The fundamental non-negotiable standards anchoring every line of platform logic.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-premium border border-white/5 bg-slate-900/30 backdrop-blur-md hover:border-white/10 transition-colors space-y-2"
              >
                <div className="text-brand-accent text-xs font-mono tracking-wider mb-2">0{idx + 1} // VALUE</div>
                <h4 className="text-lg font-semibold text-white">{val.title}</h4>
                <p className="text-slate-400 font-light text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* =======================================
            8. MEET OUR TEAM
           ======================================= */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Leadership</h2>
            <p className="text-slate-400 font-light">Backed by designers, security systems experts, and marketplace engineers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="glass-card rounded-premium overflow-hidden group border-white/5 flex flex-col h-full"
              >
                <div className="relative aspect-square overflow-hidden bg-slate-950">
                  <div className="absolute inset-0 bg-brand-gradient mix-blend-color opacity-20 group-hover:opacity-0 transition-opacity duration-300 z-10" />
                  <img 
                    src={member.img} 
                    alt={member.name}
                    className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                </div>
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-white">{member.name}</h4>
                    <p className="text-brand-accent text-xs tracking-wider uppercase font-medium">{member.role}</p>
                    <p className="text-slate-400 text-sm font-light leading-relaxed pt-2">{member.desc}</p>
                  </div>
                  <div className="flex items-center gap-4 pt-4 border-t border-white/5 text-slate-500">
                    <a href="#" className="hover:text-white transition-colors"><FaXTwitter className="w-4 h-4" /></a>
                    <a href="#" className="hover:text-white transition-colors"><FaLinkedin className="w-4 h-4" /></a>
                    <a href="#" className="hover:text-white transition-colors"><FaGithub className="w-4 h-4" /></a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* =======================================
            9. TESTIMONIALS
           ======================================= */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Validated by Industry Teams</h2>
            <p className="text-slate-400 font-light">Real workflow optimization statistics straight from the source.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="glass-card rounded-premium p-6 lg:p-8 flex flex-col justify-between border-white/5">
                <p className="text-slate-300 font-light italic leading-relaxed text-sm">
                  “{t.quote}”
                </p>
                <div className="flex items-center gap-3 pt-6 mt-6 border-t border-white/5">
                  <img src={t.img} alt={t.author} className="w-9 h-9 rounded-full object-cover border border-white/10" />
                  <div>
                    <h5 className="text-white text-sm font-semibold">{t.author}</h5>
                    <p className="text-slate-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =======================================
            10. FAQ SECTION (Accordion)
           ======================================= */}
        <section className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 p-2 rounded-xl bg-slate-900 border border-white/5 text-slate-400 text-xs">
              <HelpCircle className="w-4 h-4 text-brand-accent" /> Frequently Asked Questions
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Platform Details Explained</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => <FAQRow key={index} faq={faq} index={index} />)}
          </div>
        </section>

        {/* =======================================
            11. CTA SECTION
           ======================================= */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-premium overflow-hidden p-8 sm:p-12 lg:p-16 text-center glass-card border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
        >
          {/* Internal Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-accent/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Ready to Get Started?
            </h2>
            <p className="text-slate-400 font-light leading-relaxed">
              Whether you're looking for world-class specialized operational assistance or ready to deploy your technical skills globally, DidYet provides the professional framework to connect.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <button className="w-full sm:w-auto px-8 py-4 rounded-premium bg-brand-gradient text-brand-bg-dark font-semibold shadow-lg hover:opacity-95 transition-opacity flex items-center justify-center gap-2 cursor-pointer">
                Hire an Assistant
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 rounded-premium glass-card hover:bg-white/5 border-white/10 text-white font-semibold transition-colors cursor-pointer">
                Become an Assistant
              </button>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}

// --- SUB-COMPONENT: ACCORDION CONTROLLER FOR FAQS ---
function FAQRow({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="rounded-premium glass-card border-white/5 overflow-hidden transition-all"
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 text-left flex items-center justify-between text-white font-medium hover:bg-white/[0.02] transition-colors gap-4 cursor-pointer"
      >
        <span className="text-base sm:text-lg">{faq.q}</span>
        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180 text-brand-accent" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-6 pb-6 text-sm sm:text-base text-slate-400 font-light leading-relaxed border-t border-white/5 pt-4 bg-slate-950/20">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

