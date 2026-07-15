// src/components/layout/Footer.tsx

import Link from "next/link";

const productLinks = [
  { label: "What we provide", href: "#what-we-provide" },
  { label: "Mentors", href: "#mentors" },
  { label: "Science", href: "#science" },
  { label: "Assistant", href: "#assistant" },
];

const companyLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#1A1D24]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-white">
              did<span className="text-[#20E296]">yet</span>
            </h2>

            <p className="max-w-sm text-sm leading-7 text-[#A0AABF]">
              Helping you build better habits with science-backed guidance,
              expert mentors, and an AI assistant—all in one place.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Product
            </h3>

            <ul className="space-y-3">
              {productLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#A0AABF] transition-colors hover:text-[#20E296]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>

            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#A0AABF] transition-colors hover:text-[#20E296]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
          <p className="text-[#A0AABF]">
            © {new Date().getFullYear()} didyet. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="https://twitter.com"
              className="text-[#A0AABF] transition-colors hover:text-[#20E296]"
            >
              X
            </Link>

            <Link
              href="https://linkedin.com"
              className="text-[#A0AABF] transition-colors hover:text-[#20E296]"
            >
              LinkedIn
            </Link>

            <Link
              href="https://github.com"
              className="text-[#A0AABF] transition-colors hover:text-[#20E296]"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}