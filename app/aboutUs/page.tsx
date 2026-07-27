"use client";

import { motion } from "framer-motion";

export default function DidYetHome() {
  return (
    <div className="bg-[#070d14] text-white antialiased min-h-screen pb-20 font-sans">
      {/* Navbar - Remove if your team uses a global Layout component for this */}
 

      {/* Header Section */}
      <header className="text-center mt-12 mb-16 px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">How We Work</h1>
        
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-16 bg-[#1a2635]"></div>
          <svg className="w-5 h-5 text-[#00e5b5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
          <div className="h-px w-16 bg-[#1a2635]"></div>
        </div>

        <h2 className="text-[#00e5b5] text-xl md:text-2xl font-medium mb-4">Real people. Real conversations. Real results.</h2>
        <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto leading-relaxed">
          At DidYet, we believe consistency comes from accountability.<br />
          That&apos;s why you&apos;ll always have a <span className="text-[#00e5b5]">real human</span> by your side,<br />
          helping you stay on track and achieve your goals.
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          
          {/* Step 1 */}
          <div className="bg-[#0c1622] border border-[#1a2635] rounded-2xl p-8 flex flex-col sm:flex-row gap-6 hover:border-[#00e5b5]/50 transition-colors">
            <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-full border border-[#1a2635] bg-[#070d14]/50">
              <svg className="w-8 h-8 text-[#00e5b5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2"><span className="text-[#00e5b5] mr-2">1.</span> Tell us about yourself</h3>
              <div className="h-[2px] w-6 bg-[#1a2635] my-4"></div>
              <p className="text-[#94a3b8] leading-relaxed text-sm">Share your goals, routine, deadlines, challenges and what success looks like for you.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-[#0c1622] border border-[#1a2635] rounded-2xl p-8 flex flex-col sm:flex-row gap-6 hover:border-[#00e5b5]/50 transition-colors">
            <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-full border border-[#1a2635] bg-[#070d14]/50">
              <svg className="w-8 h-8 text-[#00e5b5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2"><span className="text-[#00e5b5] mr-2">2.</span> We create your action plan</h3>
              <div className="h-[2px] w-6 bg-[#1a2635] my-4"></div>
              <p className="text-[#94a3b8] leading-relaxed text-sm">We break your goals into small, achievable daily actions that fit your life. Simple, realistic and easy to follow.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-[#0c1622] border border-[#1a2635] rounded-2xl p-8 flex flex-col sm:flex-row gap-6 hover:border-[#00e5b5]/50 transition-colors">
            <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-full border border-[#1a2635] bg-[#070d14]/50">
              <svg className="w-8 h-8 text-[#00e5b5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2"><span className="text-[#00e5b5] mr-2">3.</span> Daily check-ins</h3>
              <div className="h-[2px] w-6 bg-[#1a2635] my-4"></div>
              <p className="text-[#94a3b8] leading-relaxed text-sm">We check in with you every day. We ask, you share. We keep you accountable and help you plan for tomorrow.</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-[#0c1622] border border-[#1a2635] rounded-2xl p-8 flex flex-col sm:flex-row gap-6 hover:border-[#00e5b5]/50 transition-colors">
            <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-full border border-[#1a2635] bg-[#070d14]/50">
              <svg className="w-8 h-8 text-[#00e5b5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2"><span className="text-[#00e5b5] mr-2">4.</span> Gentle reminders</h3>
              <div className="h-[2px] w-6 bg-[#1a2635] my-4"></div>
              <p className="text-[#94a3b8] leading-relaxed text-sm">Life gets busy. We remind you about important commitments, upcoming deadlines and the goals you&apos;ve set.</p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="bg-[#0c1622] border border-[#1a2635] rounded-2xl p-8 flex flex-col sm:flex-row gap-6 hover:border-[#00e5b5]/50 transition-colors">
            <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-full border border-[#1a2635] bg-[#070d14]/50">
              <svg className="w-8 h-8 text-[#00e5b5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2"><span className="text-[#00e5b5] mr-2">5.</span> We notice when you&apos;re struggling</h3>
              <div className="h-[2px] w-6 bg-[#1a2635] my-4"></div>
              <p className="text-[#94a3b8] leading-relaxed text-sm">Missed a few days? We reach out, understand what&apos;s going on and help you get back on track.</p>
            </div>
          </div>

          {/* Step 6 */}
          <div className="bg-[#0c1622] border border-[#1a2635] rounded-2xl p-8 flex flex-col sm:flex-row gap-6 hover:border-[#00e5b5]/50 transition-colors">
            <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-full border border-[#1a2635] bg-[#070d14]/50">
              <svg className="w-8 h-8 text-[#00e5b5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 20h16"></path></svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2"><span className="text-[#00e5b5] mr-2">6.</span> Weekly progress reviews</h3>
              <div className="h-[2px] w-6 bg-[#1a2635] my-4"></div>
              <p className="text-[#94a3b8] leading-relaxed text-sm">We review your progress together, celebrate wins, identify what&apos;s blocking you and adjust your plan when needed.</p>
            </div>
          </div>
        </div>

        {/* Step 7 (Full Width Banner) */}
        <div className="bg-[#0c1622] border border-[#1a2635] rounded-2xl p-8 mb-6 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
          <div className="flex flex-col sm:flex-row gap-6 relative z-10 w-full md:w-2/3">
            <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-full border border-[#1a2635] bg-[#070d14]/50">
              <svg className="w-8 h-8 text-[#00e5b5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 12h14M5 12l4-4m-4 4l4 4M13 5l7 7-7 7"></path><path d="M3 21l9-18 9 18H3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2"><span className="text-[#00e5b5] mr-2">7.</span> Keep moving forward</h3>
              <div className="h-[2px] w-6 bg-[#1a2635] my-4"></div>
              <p className="text-[#94a3b8] leading-relaxed text-sm max-w-xl">Small actions become habits. Habits become results. Results change lives. We&apos;re here to help you stay consistent until your goals become reality.</p>
            </div>
          </div>
          
          <div className="mt-8 md:mt-0 opacity-70 z-0 relative flex-shrink-0">
            <svg width="240" height="120" viewBox="0 0 240 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 120 C 40 80, 80 80, 100 50 C 110 30, 130 30, 140 50 C 160 80, 200 80, 200 120" stroke="#00e5b5" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.3"/>
              <circle cx="100" cy="50" r="10" fill="#00e5b5" opacity="0.6"/>
              <circle cx="140" cy="50" r="10" fill="#00e5b5" opacity="0.6"/>
              <path d="M90 60 L 120 90 L 150 60" stroke="#00e5b5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Why DidYet Section */}
        <div className="bg-[#0c1622] border border-[#1a2635] rounded-2xl p-8 mb-6">
          <div className="text-center mb-10 flex items-center justify-center gap-3">
            <span className="text-[#00e5b5] text-lg">→</span>
            <h3 className="text-xl font-semibold text-[#00e5b5]">Why DidYet?</h3>
            <span className="text-[#00e5b5] text-lg">←</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-y-8 md:gap-y-0 gap-x-4 divide-y md:divide-y-0 md:divide-x divide-[#1a2635] text-center">
            <div className="flex flex-col items-center pt-4 md:pt-0">
              <svg className="w-8 h-8 text-[#00e5b5] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              <span className="text-xs text-[#94a3b8] leading-relaxed">Real people,<br />not bots</span>
            </div>
            <div className="flex flex-col items-center pt-4 md:pt-0">
              <svg className="w-8 h-8 text-[#00e5b5] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
              <span className="text-xs text-[#94a3b8] leading-relaxed">Personalized<br />accountability</span>
            </div>
            <div className="flex flex-col items-center pt-4 md:pt-0">
              <svg className="w-8 h-8 text-[#00e5b5] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              <span className="text-xs text-[#94a3b8] leading-relaxed">Daily support,<br />not just reminders</span>
            </div>
            <div className="flex flex-col items-center pt-4 md:pt-0">
              <svg className="w-8 h-8 text-[#00e5b5] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              <span className="text-xs text-[#94a3b8] leading-relaxed">Support when<br />motivation disappears</span>
            </div>
            <div className="flex flex-col items-center pt-4 md:pt-0">
              <svg className="w-8 h-8 text-[#00e5b5] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
              <span className="text-xs text-[#94a3b8] leading-relaxed">Honest conversations,<br />never judgment</span>
            </div>
            <div className="flex flex-col items-center pt-4 md:pt-0">
              <svg className="w-8 h-8 text-[#00e5b5] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              <span className="text-xs text-[#94a3b8] leading-relaxed">Consistency<br />over perfection</span>
            </div>
          </div>
        </div>

        {/* Call to Action Footer */}
        <div className="bg-gradient-to-r from-[#07191e] to-[#0c1622] border border-[#00e5b5]/30 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
          {/* Plant Illustration */}
          <div className="w-32 h-32 md:mr-8 mb-8 md:mb-0 shrink-0">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 90 L30 40 C30 20 45 10 50 30 C55 10 70 20 70 40 Z" fill="#00e5b5" fillOpacity="0.2" stroke="#00e5b5" strokeWidth="2"/>
              <path d="M50 90 L20 60 C10 45 20 30 35 45 C45 55 50 70 50 90 Z" fill="#00e5b5" fillOpacity="0.1" stroke="#00e5b5" strokeWidth="2"/>
              <path d="M50 90 L80 60 C90 45 80 30 65 45 C55 55 50 70 50 90 Z" fill="#00e5b5" fillOpacity="0.1" stroke="#00e5b5" strokeWidth="2"/>
              <rect x="40" y="85" width="20" height="15" fill="#1a2635"/>
            </svg>
          </div>

          {/* CTA Text */}
          <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
            <h3 className="text-3xl font-bold mb-3">Ready to begin?</h3>
            <p className="text-sm text-[#94a3b8] mb-6 leading-relaxed">Join DidYet and experience what it feels like to have<br className="hidden sm:block" />someone genuinely invested in your progress.</p>
            <button className="bg-[#00e5b5] text-black font-semibold px-6 py-3 rounded-full text-sm hover:bg-teal-400 transition-colors flex items-center justify-center gap-2 mx-auto md:mx-0">
              Get Started Today
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </div>

          {/* Features List */}
          <div className="flex flex-col gap-5 text-sm font-medium z-10 shrink-0 md:pl-8 md:border-l border-[#1a2635]/50">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#00e5b5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              Real human check-ins
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#00e5b5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              Personal support
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#00e5b5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
              Better you, every day
            </div>
          </div>
          
          {/* Deco Paper Plane */}
          <div className="hidden md:block absolute right-[-10px] bottom-4 opacity-30 z-0 pointer-events-none">
            <svg className="w-24 h-24 text-[#00e5b5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
          </div>
        </div>
      </main>
    </div>
  );
}