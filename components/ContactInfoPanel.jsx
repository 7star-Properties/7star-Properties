import { MapPin, Phone, Mail, Clock, MessageCircle, ExternalLink } from "lucide-react";

export default function ContactInfoPanel({ className = "space-y-6" }) {
  return (
    <div className={className}>
      <ul className="space-y-5 rounded-lg border border-line bg-white p-7">
        <li className="flex gap-4">
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-gold">
            <MapPin className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-navy">Office address</h3>
            <address className="mt-1.5 text-sm not-italic leading-relaxed text-muted">
              59/A2, Kalu Sarai, opp. Sarv Priya Vihar,<br />
              Hauz Khas, New Delhi, Delhi 110016
            </address>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=59%2FA2%2C%20Kalu%20Sarai%2C%20opp.%20Sarv%20Priya%20Vihar%2C%20Hauz%20Khas%2C%20New%20Delhi%2C%20Delhi%20110016"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2.5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-dark hover:text-navy"
            >
              Get directions
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </li>
        <li className="flex gap-4 border-t border-line pt-5">
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-gold">
            <Phone className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-navy">Phone</h3>
            <a href="tel:+919999239650" className="mt-1.5 block font-display text-xl text-navy transition-colors hover:text-gold-dark">
              +91 99992 39650
            </a>
            <a href="tel:+919310437699" className="mt-0.5 block text-sm text-muted transition-colors hover:text-gold-dark">
              +91 93104 37699
            </a>
            <a
              href="https://wa.me/919999239650?text=Hi%207%20Star%20Properties%2C%20I'd%20like%20to%20speak%20to%20someone%20about%20a%20property."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2.5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#128C7E] hover:text-navy"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Message us on WhatsApp
            </a>
          </div>
        </li>
        <li className="flex gap-4 border-t border-line pt-5">
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-gold">
            <Mail className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-navy">Email</h3>
            <a href="mailto:Salimkhan3768@gmail.com" className="mt-1.5 block text-sm text-muted transition-colors hover:text-gold-dark">
              Salimkhan3768@gmail.com
            </a>
          </div>
        </li>
        <li className="flex gap-4 border-t border-line pt-5">
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-gold">
            <Clock className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="flex-1">
            <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-navy">Working hours</h3>
            <dl className="mt-1.5 space-y-1 text-sm text-muted">
              <div className="flex flex-wrap gap-x-2">
                <dt>Monday – Saturday:</dt>
                <dd className="font-medium text-ink">9:30 AM – 7:30 PM</dd>
              </div>
              <div className="flex flex-wrap gap-x-2">
                <dt>Sunday:</dt>
                <dd className="font-medium text-ink">By appointment</dd>
              </div>
            </dl>
          </div>
        </li>
      </ul>
      <div className="overflow-hidden rounded-lg border border-line bg-white">
        <iframe
          src="https://www.google.com/maps?q=7%20Star%20Properties%2C%2059%2FA2%2C%20Kalu%20Sarai%2C%20opp.%20Sarv%20Priya%20Vihar%2C%20Hauz%20Khas%2C%20New%20Delhi%2C%20Delhi%20110016&output=embed"
          title="Map showing 7 Star Properties at 59/A2, Kalu Sarai, opp. Sarv Priya Vihar, Hauz Khas, New Delhi, Delhi 110016"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="block h-80 w-full border-0"
        />
      </div>
    </div>
  );
}
