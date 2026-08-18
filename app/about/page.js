import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, MapPin } from "lucide-react";
import TestimonialsSection from "@/components/TestimonialsSection";
import { WHY_US, STATS, COVERAGE_AREAS } from "@/lib/content";

export const metadata = {
  title: "About",
  description:
    "7 Star Properties is a brokerage on Kalu Sarai, opposite Sarvapriya Vihar. A local firm working a tight radius around Hauz Khas, not a portal.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-line bg-navy py-16 lg:py-24">
        <Image
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
          src="/properties/delhi-india-gate.jpg"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/65" />
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 relative">
          <nav aria-label="Breadcrumb" className="text-xs text-white/50">
            <ol className="flex items-center gap-2">
              <li>
                <Link className="transition-colors hover:text-gold" href="/">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white/80">About</li>
            </ol>
          </nav>
          <h1 className="mt-5 max-w-3xl text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
            We work one part of Delhi, and we work it properly.
          </h1>
          <span className="gold-rule mt-6" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70">
            7 Star Properties is a brokerage on Kalu Sarai, opposite Sarvapriya Vihar. You can walk into our office,
            and most of our clients do.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <div>
              <div className="max-w-2xl">
                <p className="eyebrow">Who we are</p>
                <h2 className="mt-3 text-3xl leading-[1.15] sm:text-4xl lg:text-[2.75rem] text-navy">A local firm, not a portal</h2>
                <span className="gold-rule mt-5" />
              </div>
              <div className="mt-7 space-y-5 text-[0.9375rem] leading-relaxed text-ink/85">
                <p>
                  There is no shortage of places to look at property in Delhi. What is harder to find is someone who
                  has actually stood in the flat you are about to rent, knows whether the lift works in July, and
                  will tell you when the asking price is optimistic.
                </p>
                <p>
                  We have been doing this in and around Hauz Khas for over a decade. In that time we have
                  deliberately stayed small and stayed local — a handful of colonies within a few kilometres of our
                  office, rather than a map pin anywhere someone will pay us a commission.
                </p>
                <p>
                  That narrowness is the whole point. It means we know which builder floors were finished well and
                  which were rushed, which streets have parking and which do not, and roughly what your
                  neighbour&apos;s floor actually sold for — not what it was listed at.
                </p>
                <p>
                  Most of our work now comes from people we have already dealt with, or from someone they sent. That
                  is a fragile way to run a business, and it keeps us honest in a way that advertising never would.
                </p>
              </div>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
                  href="/properties"
                >
                  See what we are showing
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
            <div className="space-y-6">
              <div className="overflow-hidden rounded-lg border border-line">
                <div className="relative aspect-4/3">
                  <Image
                    alt="A South Delhi residential property of the kind 7 Star Properties represents"
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                    src="/properties/exterior-mansion.jpg"
                  />
                </div>
              </div>
              <dl className="grid grid-cols-2 gap-4">
                {STATS.map((stat) => (
                  <div key={stat.label} className="rounded-lg border border-line bg-white p-6">
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      <span className="block font-display text-3xl text-navy">{stat.value}</span>
                      <span className="mt-1.5 block text-xs leading-snug text-muted">{stat.label}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white py-16 lg:py-24" aria-labelledby="coverage-heading">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Where we work</p>
            <h2 className="mt-3 text-3xl leading-[1.15] sm:text-4xl lg:text-[2.75rem] text-navy">
              <span id="coverage-heading">Our patch of South Delhi</span>
            </h2>
            <span className="gold-rule mt-5 mx-auto" />
            <p className="mt-5 text-base leading-relaxed text-muted">
              If a property is outside this radius, we will usually tell you so and point you to someone who knows
              that area better. We would rather send you elsewhere than guess.
            </p>
          </div>
          <ul className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3">
            {COVERAGE_AREAS.map((area) => (
              <li key={area}>
                <span className="inline-flex items-center gap-2 rounded-full border border-line bg-cream px-5 py-2.5 text-sm font-medium text-navy">
                  <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                  {area}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 lg:py-24" aria-labelledby="principles-heading">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">How we work</p>
            <h2 className="mt-3 text-3xl leading-[1.15] sm:text-4xl lg:text-[2.75rem] text-navy">
              <span id="principles-heading">The rules we hold ourselves to</span>
            </h2>
            <span className="gold-rule mt-5 mx-auto" />
          </div>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_US.map((item) => (
              <li key={item.title} className="rounded-lg border border-line bg-white p-7">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream text-navy">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <TestimonialsSection />

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
