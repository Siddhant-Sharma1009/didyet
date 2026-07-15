// src/app/what-we-provide/page.tsx

import {
  Brain,
  Target,
  MessageCircleMore,
  Users,
  BarChart3,
  ClipboardCheck,
} from "lucide-react";

const features = [
  {
    title: "AI Daily Check-ins",
    description:
      "Start and end every day with intelligent AI conversations that keep you focused on your goals.",
    icon: Brain,
  },
  {
    title: "Smart Goal Tracking",
    description:
      "Track progress automatically with milestones, streaks, and actionable insights.",
    icon: Target,
  },
  {
    title: "WhatsApp Reminders",
    description:
      "Receive timely reminders and check-ins directly on WhatsApp without installing another app.",
    icon: MessageCircleMore,
  },
  {
    title: "Human Accountability",
    description:
      "Stay committed through regular mentor support and personalized accountability sessions.",
    icon: Users,
  },
  {
    title: "Progress Analytics",
    description:
      "Visualize your consistency, productivity, and long-term growth through meaningful analytics.",
    icon: BarChart3,
  },
  {
    title: "Personalized Plans",
    description:
      "Get adaptive daily plans based on your goals, habits, deadlines, and performance.",
    icon: ClipboardCheck,
  },
];

export default function WhatWeProvidePage() {
  return (
    <main className="min-h-screen bg-[#1A1D24]">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            What We Provide
          </h1>

          <p className="mt-5 text-[#A0AABF] text-lg">
            Everything you need to stay consistent, accountable, and make
            measurable progress toward your personal and professional goals.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="bg-[#222630] border border-white/10 rounded-xl p-7 hover:border-[#20E296] hover:bg-[#262B36] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-[#20E296]/10 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-[#20E296]" />
                </div>

                <h2 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h2>

                <p className="text-[#A0AABF] leading-7">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}