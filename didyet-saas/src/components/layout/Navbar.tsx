

import Link from "next/link";

const navLinks = [
  { label: "What we provide", href: "#what-we-provide" },
  { label: "Mentors", href: "#mentors" },
  { label: "Science", href: "#science" },
  { label: "Assistant", href: "#assistant" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#1A1D24]/90 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/assets/logo.png"
            alt="didyet Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white transition-colors duration-200 hover:text-[#20E296]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="rounded-xl px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="rounded-xl bg-[#20E296] px-5 py-2.5 text-sm font-semibold text-black transition hover:opacity-90"
          >
            Try for free
          </Link>
        </div>
      </nav>
    </header>
  );
}