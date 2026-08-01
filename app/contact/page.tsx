"use client";

import React, { useState } from "react";
import {
  Mail,
  MessageSquare,
  Building2,
  HelpCircle,
  ArrowRight,
  CheckCircle2,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "general",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO:
    // Replace this with API integration later
    console.log(formData);

    setSubmitted(true);
  };

  const companyInfo = {
    company: "DidYet",

    email: "contact@didyet.ai",
    supportEmail: "support@didyet.ai",
    enterpriseEmail: "enterprise@didyet.ai",

    phone: "+91 98765 43210",
    whatsapp: "+91 98765 43210",

    website: "https://didyet.ai",

    address: `8th Floor,
Innovation Hub,
Bengaluru, Karnataka 560001
India`,

    socials: {
      facebook: "https://facebook.com/didyet",
      instagram: "https://instagram.com/didyet",
      twitter: "https://x.com/didyet",
      linkedin: "https://linkedin.com/company/didyet",
      youtube: "https://youtube.com/@didyet",
      github: "https://github.com/didyet",
    },
  };

  const contactMethods = [
    {
      icon: <MessageSquare size={18} />,
      title: "General Inquiries",
      description:
        "For questions regarding platform capabilities, onboarding, account management, roadmap updates, or ecosystem features.",
      linkText: "Read documentation",
      href: "#docs",
    },
    {
      icon: <Building2 size={18} />,
      title: "Enterprise Solutions",
      description:
        "Connect directly with our engineering architects to discuss enterprise deployment, scaling infrastructure, security, and custom integrations.",
      linkText: "View pricing scale",
      href: "/pricing",
    },
    {
      icon: <HelpCircle size={18} />,
      title: "Developer Helpdesk",
      description:
        "Need help integrating APIs, debugging deployments, authentication flows, SDKs, or operational pipelines? Our engineering support team is here.",
      linkText: "Open ticket profile",
      href: "#faqs",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto py-12 md:py-20 relative z-10">
      {/* Header */}

      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#22E3A9]/20 bg-[#22E3A9]/5 text-[#22E3A9] text-xs font-medium mb-5">
          <Mail size={12} />
          Communication Channels
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
          Connect with our
          <br />

          <span className="bg-gradient-to-r from-[#22E3A9] to-[#14D9C4] bg-clip-text text-transparent">
            engineering desk.
          </span>
        </h1>

        <p className="text-base md:text-lg text-slate-400 max-w-xl mx-auto">
          Have an architectural question or exploring enterprise deployment
          tracks? Our engineering team typically responds within one business
          day.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
        {/* LEFT PANEL */}

        <div className="lg:col-span-2 flex flex-col gap-6">
          <h2 className="text-xl font-bold tracking-tight text-white mb-2">
            Dedicated Desks
          </h2>

          {contactMethods.map((method, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-white/5 bg-[#111827]/30 backdrop-blur-xl group hover:border-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-9 w-9 rounded-xl bg-[#22E3A9]/10 text-[#22E3A9] flex items-center justify-center shrink-0">
                  {method.icon}
                </div>

                <h3 className="text-base font-semibold text-white">
                  {method.title}
                </h3>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {method.description}
              </p>

              <a
                href={method.href}
                className="inline-flex items-center gap-1 text-xs font-medium text-[#14D9C4] hover:text-[#22E3A9] transition-colors"
              >
                {method.linkText}

                <ArrowRight
                  size={12}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </a>
            </div>
          ))}

          {/* CONTACT INFORMATION */}

          <div className="p-6 rounded-2xl border border-white/5 bg-[#111827]/30 backdrop-blur-xl">
            <h3 className="text-white text-base font-semibold mb-6">
              Direct Communication
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <Mail
                  className="text-[#22E3A9] mt-1"
                  size={18}
                />

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    Email
                  </p>

                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="text-white hover:text-[#22E3A9]"
                  >
                    {companyInfo.email}
                  </a>

                  <br />

                  <a
                    href={`mailto:${companyInfo.supportEmail}`}
                    className="text-slate-400 hover:text-[#22E3A9] text-sm"
                  >
                    {companyInfo.supportEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone
                  className="text-[#22E3A9] mt-1"
                  size={18}
                />

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    Phone
                  </p>

                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="text-white hover:text-[#22E3A9]"
                  >
                    {companyInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Globe
                  className="text-[#22E3A9] mt-1"
                  size={18}
                />

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    Website
                  </p>

                  <a
                    href={companyInfo.website}
                    target="_blank"
                    className="text-white hover:text-[#22E3A9]"
                  >
                    {companyInfo.website}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  className="text-[#22E3A9] mt-1"
                  size={18}
                />

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    Headquarters
                  </p>

                  <p className="text-white whitespace-pre-line">
                    {companyInfo.address}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7 border-t border-white/10 pt-6">
              <p className="text-xs uppercase tracking-wider text-slate-400 mb-4">
                Follow Our Ecosystem
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={companyInfo.socials.facebook}
                  target="_blank"
                  className="w-10 h-10 rounded-xl bg-[#22E3A9]/10 hover:bg-[#22E3A9]/20 flex items-center justify-center text-[#22E3A9] transition"
                >
                  <FaFacebookF size={18} />
                </a>

                <a
                  href={companyInfo.socials.instagram}
                  target="_blank"
                  className="w-10 h-10 rounded-xl bg-[#22E3A9]/10 hover:bg-[#22E3A9]/20 flex items-center justify-center text-[#22E3A9]"
                >
                  <FaInstagram size={18} />
                </a>

                <a
                  href={companyInfo.socials.twitter}
                  target="_blank"
                  className="w-10 h-10 rounded-xl bg-[#22E3A9]/10 hover:bg-[#22E3A9]/20 flex items-center justify-center text-[#22E3A9]"
                >
                  <FaXTwitter size={18} />
                </a>

                <a
                  href={companyInfo.socials.linkedin}
                  target="_blank"
                  className="w-10 h-10 rounded-xl bg-[#22E3A9]/10 hover:bg-[#22E3A9]/20 flex items-center justify-center text-[#22E3A9]"
                >
                  <FaLinkedinIn size={18} />
                </a>

                <a
                  href={companyInfo.socials.youtube}
                  target="_blank"
                  className="w-10 h-10 rounded-xl bg-[#22E3A9]/10 hover:bg-[#22E3A9]/20 flex items-center justify-center text-[#22E3A9]"
                >
                  <FaYoutube size={18} />
                </a>

                <a
                  href={companyInfo.socials.github}
                  target="_blank"
                  className="w-10 h-10 rounded-xl bg-[#22E3A9]/10 hover:bg-[#22E3A9]/20 flex items-center justify-center text-[#22E3A9]"
                >
                  < FaGithub size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ===========================
             RIGHT PANEL STARTS HERE
           =========================== */}

        <div className="lg:col-span-3">
          <div className="p-8 md:p-10 rounded-2xl border border-white/5 bg-[#111827]/50 backdrop-blur-xl relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-1/4 w-[220px] h-[220px] bg-[#14D9C4]/5 rounded-full blur-3xl pointer-events-none" />

            {submitted ? (
              <div className="py-16 flex flex-col items-center text-center gap-5">
                <div className="h-14 w-14 rounded-full bg-[#22E3A9]/10 text-[#22E3A9] flex items-center justify-center animate-pulse">
                  <CheckCircle2 size={28} />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Transmission Successful
                  </h3>

                  <p className="text-sm text-slate-400 max-w-md mt-2 mx-auto leading-relaxed">
                    Your transmission payload has been securely routed to our
                    engineering operations team. A dedicated specialist will
                    review your request and initiate a response through your
                    preferred communication channel within one business day.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      company: "",
                      inquiryType: "general",
                      message: "",
                    });
                  }}
                  className="mt-4 px-6 h-11 rounded-xl bg-gradient-to-r from-[#22E3A9] to-[#14D9C4] text-[#0F172A] font-semibold hover:opacity-95 transition"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Alex Morgan"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: e.target.value,
                        })
                      }
                      className="w-full h-11 px-4 text-sm rounded-xl bg-[#0F172A]/80 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#22E3A9]/50 transition"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider"
                    >
                      Work Email
                    </label>

                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                      className="w-full h-11 px-4 text-sm rounded-xl bg-[#0F172A]/80 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#22E3A9]/50 transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider"
                    >
                      Company / Organization
                    </label>

                    <input
                      id="company"
                      type="text"
                      placeholder="Acme Technologies"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          company: e.target.value,
                        })
                      }
                      className="w-full h-11 px-4 text-sm rounded-xl bg-[#0F172A]/80 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#22E3A9]/50 transition"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="inquiryType"
                      className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider"
                    >
                      Inquiry Target
                    </label>

                    <select
                      id="inquiryType"
                      value={formData.inquiryType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          inquiryType: e.target.value,
                        })
                      }
                      className="w-full h-11 px-4 text-sm rounded-xl bg-[#0F172A]/80 border border-white/10 text-slate-300 focus:outline-none focus:border-[#22E3A9]/50 cursor-pointer transition"
                    >
                      <option value="general">
                        General Support / FAQ
                      </option>

                      <option value="enterprise">
                        Enterprise Scaling Solutions
                      </option>

                      <option value="developer">
                        Developer Helpdesk
                      </option>

                      <option value="security">
                        Security & Integration Audits
                      </option>

                      <option value="billing">
                        Billing Operations
                      </option>

                      <option value="partnership">
                        Partnerships & Collaborations
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider"
                  >
                    Message Details
                  </label>

                  <textarea
                    id="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    placeholder="Tell us about your deployment objectives, API integration requirements, infrastructure profile, feature requests, or any operational challenges your organization is facing..."
                    className="w-full p-4 text-sm rounded-xl bg-[#0F172A]/80 border border-white/10 text-white placeholder-slate-600 resize-none leading-relaxed focus:outline-none focus:border-[#22E3A9]/50 transition"
                  />

                  <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                    Our engineering team carefully reviews every submission.
                    Include as much technical detail as possible to help us
                    provide the most accurate response.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full h-12 mt-2 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#22E3A9] to-[#14D9C4] text-[#0F172A] shadow-[0_4px_20px_rgba(34,227,169,0.18)] hover:shadow-[0_6px_30px_rgba(34,227,169,0.28)] hover:opacity-95 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Send Payload
                  <ArrowRight size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}