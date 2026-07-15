// src/app/mentors/page.tsx

import {
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const mentors = [
  {
    name: "Shivam",
    role: "Founder & AI Engineer",
    bio: "Building AI-powered accountability systems that help people stay consistent and achieve meaningful goals.",
  },
  {
    name: "Siddhant",
    role: "Frontend Developer",
    bio: "Designing intuitive user experiences with modern React, Next.js, and Tailwind CSS.",
  },
  {
    name: "Rahul",
    role: "Backend Developer",
    bio: "Creating scalable backend services, APIs, authentication, and reliable infrastructure.",
  },
  {
    name: "Your Mentor",
    role: "Accountability Coach",
    bio: "Helping users stay focused through weekly guidance, planning, and personalized support.",
  },
];

export default function MentorsPage() {
  return (
    <main className="min-h-screen bg-[#1A1D24]">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Meet Our Mentors
          </h1>

          <p className="mt-5 text-[#A0AABF] text-lg">
            Behind every successful journey is someone who keeps you accountable.
            Meet the team dedicated to helping you stay on track.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {mentors.map((mentor) => (
            <div
              key={mentor.name}
              className="bg-[#222630] border border-white/10 rounded-xl p-6 text-center hover:border-[#20E296] hover:bg-[#262B36] transition-all duration-300"
            >
              <div className="w-24 h-24 rounded-full bg-[#20E296]/10 border border-[#20E296]/20 flex items-center justify-center mx-auto mb-5">
                <span className="text-3xl font-bold text-[#20E296]">
                  {mentor.name.charAt(0)}
                </span>
              </div>

              <h2 className="text-xl font-semibold text-white">
                {mentor.name}
              </h2>

              <p className="text-[#20E296] mt-1">
                {mentor.role}
              </p>

              <p className="text-[#A0AABF] text-sm leading-6 mt-4">
                {mentor.bio}
              </p>

              <div className="flex justify-center gap-4 mt-6">
                <a
                  href="#"
                  className="text-[#A0AABF] hover:text-[#20E296] transition-colors"
                >
                  <Github size={20} />
                </a>

                <a
                  href="#"
                  className="text-[#A0AABF] hover:text-[#20E296] transition-colors"
                >
                  <Linkedin size={20} />
                </a>

                <a
                  href="#"
                  className="text-[#A0AABF] hover:text-[#20E296] transition-colors"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}