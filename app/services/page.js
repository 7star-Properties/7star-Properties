import Image from "next/image";
import Link from "next/link";
import { KeyRound, Home as HouseIcon, Tag, Building2, ArrowRight, Phone, Check } from "lucide-react";

export const metadata = {
  title: "Services",
  description:
    "Rent, buy, sell, manage — handled by the same people, start to finish. Whoever picks up the phone stays with your file until the keys change hands.",
};

const SERVICE_SECTIONS = [
  {
    id: "rent",
    icon: KeyRound,
    eyebrow: "01 — Move in without the runaround",
    title: "Rent",
    paragraphs: [
      "We keep a live list of what is genuinely available to rent in Hauz Khas, Green Park, Safdarjung Enclave, Sarvapriya Vihar and the colonies around them — not a stale database of listings that went a month ago.",
      "Before you see anything, we confirm the rent, the deposit, the maintenance and what the landlord will and will not accept. You are told the real numbers up front, so no viewing is a wasted afternoon.",
    ],
    ctaLabel: "Browse rent listings",
    ctaHref: "/properties?listing=rent",
    features: [
      "Shortlists built around your budget, commute and move-in date",
      "Every property physically verified before it is shown",
      "Rent, deposit and maintenance confirmed in writing before viewing",
      "Rent agreement drafting, police verification and registration handled",
      "Company leases and GST invoicing supported",
    ],
    reversed: false,
    listBg: "bg-white",
    sectionClass: "py-16 lg:py-24",
  },
  {
    id: "buy",
    icon: HouseIcon,
    eyebrow: "02 — Buy with the paperwork checked",
    title: "Buy",
    paragraphs: [
      "Buying in South Delhi is as much a paperwork exercise as a property search. We work through the chain of title, the sanctioned plan, the completion certificate and the dues position before you commit to anything.",
      "We will also tell you plainly when a property is not worth what is being asked, or when a colony has an issue you should know about. That conversation is the reason most of our buyers came to us on a referral.",
    ],
    ctaLabel: "Browse buy listings",
    ctaHref: "/properties?listing=sale",
    features: [
      "Freehold and leasehold title verified before you pay a token",
      "Sanctioned plans, completion certificates and dues checked",
      "Honest guidance on fair value, colony by colony",
      "Home loan introductions to lenders who actually fund South Delhi resale",
      "Registry, stamp duty and mutation coordinated end to end",
    ],
    reversed: true,
    listBg: "bg-cream",
    sectionClass: "py-16 lg:py-24 border-y border-line bg-white",
  },
  {
    id: "sell",
    icon: Tag,
    eyebrow: "03 — Priced right, sold cleanly",
    title: "Sell",
    paragraphs: [
      "We price from what has actually transacted on your street in the last year, not from asking prices on portals. An honest number at the start is what gets a property sold in weeks rather than quarters.",
      "Your listing is photographed properly, written up honestly and taken to buyers we already know are funded and looking in your pocket of South Delhi.",
    ],
    ctaLabel: "Talk to us",
    ctaHref: "/contact?interest=Selling%20a%20property",
    features: [
      "Valuation based on recorded transactions, not portal asking prices",
      "Professional photography and a written listing, at our cost",
      "Only pre-qualified, funded buyers brought to your door",
      "Viewings accompanied — your property is never shown unattended",
      "Negotiation, agreement to sell and registry handled through to mutation",
    ],
    reversed: false,
    listBg: "bg-white",
    sectionClass: "py-16 lg:py-24",
  },
  {
    id: "manage",
    icon: Building2,
    eyebrow: "04 — Own it from anywhere",
    title: "Manage",
    paragraphs: [
      "For owners who live elsewhere in India or abroad, we run the property as if it were our own: finding and vetting tenants, collecting rent, handling repairs and keeping the paperwork current.",
      "You get a single point of contact and a monthly statement. Nothing gets spent above an agreed limit without your approval, and there are no commissions hidden in the repair bills.",
    ],
    ctaLabel: "Talk to us",
    ctaHref: "/contact?interest=Property%20management",
    features: [
      "Tenant sourcing, background checks and police verification",
      "Rent collection with a monthly statement to your account",
      "Repairs and maintenance coordinated, billed at actuals",
      "Utility bills, society dues and property tax tracked and paid",
      "Periodic inspections with dated photographs sent to you",
      "Renewals, escalations and exit settlements handled",
    ],
    reversed: true,
    listBg: "bg-cream",
    sectionClass: "py-16 lg:py-24 border-y border-line bg-white",
  },
];

const FEES = [
  {
    label: "Renting",
    amount: "One month's rent",
    note: "Payable on possession, split as agreed between owner and tenant.",
  },
  {
    label: "Buying or selling",
    amount: "1% of transaction value",
    note: "Payable at registry. Nothing is due if the deal does not close.",
  },
  {
    label: "Management",
    amount: "5% of monthly rent",
    note: "Billed monthly against your statement. Repairs at actuals, no markup.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-line bg-navy py-16 lg:py-24">
        <Image
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
          src="/properties/concept-keys.jpg"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-navy via-navy/92 to-navy/70" />
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 relative">
          <nav aria-label="Breadcrumb" className="text-xs text-white/50">
            <ol className="flex items-center gap-2">
              <li>
                <Link className="transition-colors hover:text-gold" href="/">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white/80">Services</li>
            </ol>
          </nav>
          <h1 className="mt-5 max-w-3xl text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
            Rent, buy, sell, manage — handled by the same people, start to finish.
          </h1>
          <span className="gold-rule mt-6" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70">
            You will not be passed between departments here. Whoever picks up the phone stays with your file until
            the keys change hands, and is still the person you call two years later.
          </p>
        </div>
      </section>

      {SERVICE_SECTIONS.map((section) => (
        <section key={section.id} id={section.id} className={section.sectionClass} aria-labelledby={`service-${section.id}`}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div className={section.reversed ? "lg:order-2" : ""}>
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-navy text-gold">
                  <section.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="eyebrow mt-6">{section.eyebrow}</p>
                <h2 id={`service-${section.id}`} className="mt-3 text-3xl text-navy sm:text-4xl">{section.title}</h2>
                <span className="gold-rule mt-5" />
                <div className="mt-6 space-y-4">
                  {section.paragraphs.map((p, i) => (
                    <p key={i} className="text-[0.9375rem] leading-relaxed text-ink/85">{p}</p>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold-soft"
                    href={section.ctaHref}
                  >
                    {section.ctaLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <a
                    href="tel:+919999239650"
                    className="inline-flex items-center gap-2.5 rounded-full border border-line px-6 py-3 text-sm font-semibold text-navy transition-colors hover:border-gold"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    +91 99992 39650
                  </a>
                </div>
              </div>
              <div className={section.reversed ? "lg:order-1" : ""}>
                <ul className={`space-y-4 rounded-lg border p-8 border-line ${section.listBg}`}>
                  <li className="text-sm font-semibold uppercase tracking-[0.12em] text-navy">What is included</li>
                  {section.features.map((feature) => (
                    <li key={feature} className="flex gap-3 border-t border-line pt-4 text-sm leading-relaxed text-ink">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Our fees</p>
            <h2 className="mt-3 text-3xl leading-[1.15] sm:text-4xl lg:text-[2.75rem] text-navy">What we charge, stated plainly</h2>
            <span className="gold-rule mt-5 mx-auto" />
            <p className="mt-5 text-base leading-relaxed text-muted">
              Brokerage is agreed in writing before you view anything, and it does not move afterwards. There are no
              file charges, processing fees or documentation charges on top.
            </p>
          </div>
          <ul className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
            {FEES.map((fee) => (
              <li key={fee.label} className="rounded-lg border border-line bg-white p-7 text-center">
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-muted">{fee.label}</h3>
                <p className="mt-3 font-display text-2xl text-navy">{fee.amount}</p>
                <p className="mt-3 text-xs leading-relaxed text-muted">{fee.note}</p>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-muted">
            Indicative rates. Final terms are confirmed in writing before any engagement begins, and GST applies
            where relevant.
          </p>
        </div>
      </section>

      <section className="border-t border-line bg-white py-16">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center gap-6 text-center">
            <h2 className="max-w-2xl text-2xl text-navy sm:text-3xl">
              Not sure where to start? Call us and describe what you need.
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-muted">
              One conversation is usually enough for us to tell you what is realistic in your budget, and what is
              not. No pressure and no registration required.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="tel:+919999239650"
                className="inline-flex items-center gap-2.5 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                +91 99992 39650
              </a>
              <Link
                className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:border-gold hover:bg-gold hover:text-navy"
                href="/contact"
              >
                Send an enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
