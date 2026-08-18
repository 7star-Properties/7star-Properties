import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  ArrowRight,
  Phone,
  KeyRound,
  Home as HouseIcon,
  Tag,
  Building2,
  MessageCircle,
} from "lucide-react";
import HeroSearchForm from "@/components/HeroSearchForm";
import PropertyCard from "@/components/PropertyCard";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactInfoPanel from "@/components/ContactInfoPanel";
import EnquiryForm from "@/components/EnquiryForm";
import { properties } from "@/lib/properties";
import { WHY_US, STATS } from "@/lib/content";

const SERVICES = [
  {
    icon: KeyRound,
    title: "Rent",
    description: "Verified rental homes across South Delhi, shown by someone who has actually seen them.",
    cta: "View rent listings",
    href: "/properties?listing=rent",
  },
  {
    icon: HouseIcon,
    title: "Buy",
    description: "Builder floors, apartments and independent houses with title and approvals verified first.",
    cta: "View buy listings",
    href: "/properties?listing=sale",
  },
  {
    icon: Tag,
    title: "Sell",
    description: "Realistic pricing, proper photography and buyers who are already qualified.",
    cta: "Talk to us",
    href: "/contact?interest=Selling%20a%20property",
  },
  {
    icon: Building2,
    title: "Manage",
    description: "Full property management for owners living outside Delhi or abroad.",
    cta: "Talk to us",
    href: "/contact?interest=Property%20management",
  },
];

const featuredProperties = properties.filter((p) => p.featured);

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy">
        <Image
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-45"
          src="/properties/exterior-dusk-premium.jpg"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-navy-deep/85 via-navy/75 to-navy/92" />
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 relative">
          <div className="py-20 sm:py-24 lg:py-32">
            <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-gold-soft">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              Rent · Buy · Sell · Manage
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Find your next home in <span className="text-gold-soft">South Delhi</span> — from people who actually
              know the street.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              Verified homes, floors and offices across Hauz Khas, Green Park, Safdarjung Enclave and the colonies
              around them. Every listing seen in person. Every price told to you straight.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-gold-soft"
                href="/properties"
              >
                Browse all properties
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="tel:+919999239650"
                className="inline-flex items-center gap-2.5 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-gold hover:text-gold-soft"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                +91 99992 39650
              </a>
            </div>
            <div className="mt-12 lg:mt-16">
              <HeroSearchForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28" aria-labelledby="services-heading">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">What we do</p>
            <h2 className="mt-3 text-3xl leading-[1.15] sm:text-4xl lg:text-[2.75rem] text-navy">
              <span id="services-heading">Four things, done properly</span>
            </h2>
            <span className="gold-rule mt-5 mx-auto" />
            <p className="mt-5 text-base leading-relaxed text-muted">
              We are a small brokerage with a deliberately narrow focus. Whatever you need, the same person handles
              it from the first call to the last signature.
            </p>
          </div>
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <li key={service.title}>
                <Link
                  className="group flex h-full flex-col rounded-lg border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-xl hover:shadow-navy/10"
                  href={service.href}
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-navy text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
                    <service.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-xl text-navy">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{service.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-dark">
                    {service.cta}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-line bg-white py-20 lg:py-28" aria-labelledby="featured-heading">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="eyebrow">Current inventory</p>
              <h2 className="mt-3 text-3xl leading-[1.15] sm:text-4xl lg:text-[2.75rem] text-navy">
                <span id="featured-heading">Featured properties</span>
              </h2>
              <span className="gold-rule mt-5" />
              <p className="mt-5 text-base leading-relaxed text-muted">
                A snapshot of what we are showing this week. Every one of these has been visited by our team, and
                the price you see is the price we quote.
              </p>
            </div>
            <Link
              className="group inline-flex items-center gap-2 rounded-full border border-navy px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
              href="/properties"
            >
              View all properties
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.slug} property={property} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-navy py-20 lg:py-28" aria-labelledby="why-heading">
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 relative">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow" style={{ color: "var(--color-gold-soft)" }}>Why clients stay with us</p>
            <h2 className="mt-3 text-3xl leading-[1.15] sm:text-4xl lg:text-[2.75rem] text-white">
              <span id="why-heading">Trust, earned one deal at a time</span>
            </h2>
            <span className="gold-rule mt-5 mx-auto" />
            <p className="mt-5 text-base leading-relaxed text-white/70">
              Most of our business arrives by referral. That only works if the last person we dealt with would
              happily give us their neighbour&apos;s number.
            </p>
          </div>
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_US.map((item) => (
              <li key={item.title} className="rounded-lg border border-white/10 bg-white/5 p-7 transition-colors duration-300 hover:border-gold/40">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-gold-soft">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{item.description}</p>
              </li>
            ))}
            <li className="rounded-lg border border-gold/30 bg-gold/10 p-7">
              <dl className="grid h-full grid-cols-2 gap-x-4 gap-y-6 content-center">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      <span className="block font-display text-3xl text-gold-soft">{stat.value}</span>
                      <span className="mt-1 block text-xs leading-snug text-white/60">{stat.label}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </li>
          </ul>
        </div>
      </section>

      <TestimonialsSection />

      <section className="relative isolate overflow-hidden bg-navy-deep">
        <Image
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover opacity-25"
          src="/properties/exterior-white-modern.jpg"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy/70" />
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 relative">
          <div className="flex flex-col items-start gap-8 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
            <div className="max-w-2xl">
              <p className="eyebrow" style={{ color: "var(--color-gold-soft)" }}>Thinking of selling or letting?</p>
              <h2 className="mt-3 text-3xl leading-tight text-white sm:text-4xl">Find out what your property is really worth.</h2>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                We will give you an honest valuation based on what has actually transacted on your street — not a
                flattering number to win the listing. No charge, and no obligation to list with us.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col xl:flex-row">
              <a
                href="tel:+919999239650"
                className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-gold-soft"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                +91 99992 39650
              </a>
              <a
                href="https://wa.me/919999239650?text=Hi%207%20Star%20Properties%2C%20I'd%20like%20a%20valuation%20for%20my%20property.%20Could%20you%20help%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-gold hover:text-gold-soft"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Request a valuation
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-line bg-cream py-20 lg:py-28" aria-labelledby="contact-heading">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Get in touch</p>
            <h2 className="mt-3 text-3xl leading-[1.15] sm:text-4xl lg:text-[2.75rem] text-navy">
              <span id="contact-heading">Come and see us in Hauz Khas</span>
            </h2>
            <span className="gold-rule mt-5 mx-auto" />
            <p className="mt-5 text-base leading-relaxed text-muted">
              Our office is on Kalu Sarai, opposite Sarvapriya Vihar. Walk in during working hours, or call ahead and
              we will have a shortlist ready when you arrive.
            </p>
          </div>
          <div className="mt-14 grid gap-8 lg:gap-12 lg:grid-cols-2">
            <ContactInfoPanel />
            <div className="rounded-lg border border-line bg-white p-7 sm:p-9">
              <h3 className="text-2xl text-navy">Send us an enquiry</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                Tell us what you are looking for and we will come back the same working day, usually within a couple
                of hours.
              </p>
              <div className="mt-7">
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
