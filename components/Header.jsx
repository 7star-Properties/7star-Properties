"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MapPin, Phone, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Properties" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentPath = usePathname();

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-navy-deep text-white/70 lg:block">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex h-9 items-center justify-between text-xs">
            <p className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              59/A2, Kalu Sarai, opp. Sarv Priya Vihar, Hauz Khas, New Delhi 110016
              <span className="mx-1 text-white/25">|</span>
              <a href="tel:+919310437699" className="transition-colors hover:text-gold">+91 93104 37699</a>
            </p>
            <p>
              <span className="text-white/50">Mon–Sat</span> 9:30 AM – 7:30 PM
              <span className="mx-3 text-white/25">|</span>
              <span className="text-white/50">Sun</span> By appointment
            </p>
          </div>
        </div>
      </div>

      <div className="border-b border-white/10 bg-navy transition-shadow duration-300">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between gap-6 transition-[height] duration-300 h-[4.5rem] lg:h-24">
            <Link className="flex shrink-0 items-center" aria-label="7 Star Properties — home" href="/">
              <Image
                alt="7 Star Properties — Rent | Buy | Sell | Manage"
                width={1309}
                height={417}
                className="w-auto transition-[height] duration-300 h-11 lg:h-14"
                src="/brand/logo-lockup.png"
                priority
              />
            </Link>

            <nav aria-label="Primary" className="hidden lg:block">
              <ul className="flex items-center gap-8">
                {NAV_LINKS.map((link) => {
                  const active = currentPath === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        className={`relative py-2 text-sm font-medium tracking-wide transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-gold after:transition-all after:duration-300 hover:text-gold-soft ${
                          active ? "text-gold-soft after:w-full" : "text-white/85 after:w-0 hover:after:w-full"
                        }`}
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="tel:+919999239650"
                className="hidden items-center gap-2.5 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-gold-soft sm:inline-flex"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>+91 99992 39650</span>
              </a>
              <a
                href="tel:+919999239650"
                aria-label="Call 7 Star Properties on +91 99992 39650"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold text-navy sm:hidden"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
              </a>
              <button
                type="button"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMenuOpen((open) => !open)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-gold hover:text-gold lg:hidden"
              >
                {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="mobile-menu" hidden={!menuOpen} className="border-b border-white/10 bg-navy lg:hidden">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <nav aria-label="Mobile" className="py-4">
            <ul className="divide-y divide-white/10">
              {NAV_LINKS.map((link) => {
                const active = currentPath === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      className={`block py-3.5 text-base font-medium ${active ? "text-gold-soft" : "text-white/90"}`}
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <a
              href="tel:+919999239650"
              className="mt-5 flex items-center justify-center gap-2.5 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-navy"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call +91 99992 39650
            </a>
            <a
              href="tel:+919310437699"
              className="mt-2.5 flex items-center justify-center gap-2.5 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Or call +91 93104 37699
            </a>
            <p className="mt-4 flex items-start gap-2 pb-2 text-xs leading-relaxed text-white/60">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              59/A2, Kalu Sarai, opp. Sarv Priya Vihar, Hauz Khas, New Delhi, Delhi 110016
            </p>
          </nav>
        </div>
      </div>
    </header>
  );
}
