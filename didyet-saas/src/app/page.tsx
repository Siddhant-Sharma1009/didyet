// src/app/page.tsx

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-[#1A1D24]">
      <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-xl border border-[#20E296]/30 bg-[#20E296]/10 px-4 py-2">
            <span className="text-sm font-medium text-[#20E296]">
              🚀 Meet the didyet Assistant
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">
            Build Better Habits with Your
            <span className="block text-[#20E296]">
              AI Productivity Assistant
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#A0AABF]">
            didyet helps you stay accountable, build lasting habits, and
            achieve your goals using AI-powered guidance, personalized
            insights, science-backed strategies, and expert mentorship.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/signup"
              className="rounded-xl bg-[#20E296] px-7 py-3 text-base font-semibold text-black transition hover:opacity-90"
            >
              Try for Free
            </Link>

            <Link
              href="#what-we-provide"
              className="rounded-xl border border-white/10 px-7 py-3 text-base font-medium text-white transition hover:border-[#20E296] hover:text-[#20E296]"
            >
              Learn More
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-3xl font-bold text-[#20E296]">10K+</h3>
              <p className="mt-2 text-sm text-[#A0AABF]">
                Active learners building better habits.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-3xl font-bold text-[#20E296]">24/7</h3>
              <p className="mt-2 text-sm text-[#A0AABF]">
                AI assistance whenever you need guidance.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-3xl font-bold text-[#20E296]">100%</h3>
              <p className="mt-2 text-sm text-[#A0AABF]">
                Focused on science-backed personal growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}