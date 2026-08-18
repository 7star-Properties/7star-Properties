import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link aria-label="7 Star Properties — home" className="inline-block" href="/">
              <Image
                alt="7 Star Properties — Rent | Buy | Sell | Manage"
                width={1309}
                height={417}
                className="h-14 w-auto"
                src="/brand/logo-lockup.png"
              />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed">
              A South Delhi brokerage working a tight radius around Hauz Khas — renting, selling and managing
              property for people who would rather be told the truth than be sold to.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:+919999239650"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-navy transition-colors hover:bg-gold-soft"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call us
              </a>
              <a
                href="https://wa.me/919999239650?text=Hi%207%20Star%20Properties%2C%20I'd%20like%20to%20speak%20to%20someone%20about%20a%20property."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-gold hover:text-gold"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </div>

          <nav aria-labelledby="footer-explore" className="lg:col-span-2">
            <h2 id="footer-explore" className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
              Explore
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link className="transition-colors hover:text-gold" href="/">Home</Link></li>
              <li><Link className="transition-colors hover:text-gold" href="/properties">Properties</Link></li>
              <li><Link className="transition-colors hover:text-gold" href="/services">Services</Link></li>
              <li><Link className="transition-colors hover:text-gold" href="/about">About</Link></li>
              <li><Link className="transition-colors hover:text-gold" href="/contact">Contact</Link></li>
            </ul>
          </nav>

          <nav aria-labelledby="footer-services" className="lg:col-span-3">
            <h2 id="footer-services" className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
              What we do
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link className="transition-colors hover:text-gold" href="/properties?listing=rent">Rent — Move in without the runaround</Link></li>
              <li><Link className="transition-colors hover:text-gold" href="/properties?listing=sale">Buy — Buy with the paperwork checked</Link></li>
              <li><Link className="transition-colors hover:text-gold" href="/contact?interest=Selling%20a%20property">Sell — Priced right, sold cleanly</Link></li>
              <li><Link className="transition-colors hover:text-gold" href="/contact?interest=Property%20management">Manage — Own it from anywhere</Link></li>
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">Visit us</h2>
            <address className="mt-5 space-y-4 text-sm not-italic">
              <p className="flex items-start gap-3 leading-relaxed">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span>
                  59/A2, Kalu Sarai, opp. Sarv Priya Vihar,<br />
                  Hauz Khas, New Delhi,<br />
                  Delhi 110016
                </span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a href="tel:+919999239650" className="transition-colors hover:text-gold">+91 99992 39650</a>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a href="tel:+919310437699" className="transition-colors hover:text-gold">+91 93104 37699</a>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a href="mailto:Salimkhan3768@gmail.com" className="transition-colors hover:text-gold">Salimkhan3768@gmail.com</a>
              </p>
            </address>
            <dl className="mt-6 space-y-1 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-white/50">Monday – Saturday</dt>
                <dd>9:30 AM – 7:30 PM</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-white/50">Sunday</dt>
                <dd>By appointment</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pb-24 pt-7 text-xs sm:flex-row sm:pb-7">
          <p>© 2026 7 Star Properties. All rights reserved.</p>
          <p className="tracking-[0.2em] text-white/50 uppercase">Rent | Buy | Sell | Manage</p>
        </div>
      </div>
    </footer>
  );
}
