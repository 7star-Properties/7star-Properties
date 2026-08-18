import Link from "next/link";
import ContactInfoPanel from "@/components/ContactInfoPanel";
import DetailedContactForm from "@/components/DetailedContactForm";

export const metadata = {
  title: "Contact",
  description:
    "Call us, message us on WhatsApp, or walk into the office on Kalu Sarai. Whichever you choose, you will reach a person rather than a call centre — usually within the hour.",
};

export default async function ContactPage({ searchParams }) {
  const params = await searchParams;
  const initialInterest = typeof params?.interest === "string" ? params.interest : undefined;

  return (
    <>
      <section className="border-b border-line bg-navy py-14 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <nav aria-label="Breadcrumb" className="text-xs text-white/50">
            <ol className="flex items-center gap-2">
              <li>
                <Link className="transition-colors hover:text-gold" href="/">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white/80">Contact</li>
            </ol>
          </nav>
          <h1 className="mt-5 max-w-3xl text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
            Talk to someone who knows the street.
          </h1>
          <span className="gold-rule mt-6" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70">
            Call us, message us on WhatsApp, or walk into the office on Kalu Sarai. Whichever you choose, you will
            reach a person rather than a call centre — usually within the hour.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="tel:+919999239650"
              className="inline-flex items-center gap-3 rounded-full bg-gold px-7 py-3.5 font-display text-lg font-semibold text-navy transition-colors hover:bg-gold-soft"
            >
              +91 99992 39650
            </a>
            <a
              href="tel:+919310437699"
              className="inline-flex items-center gap-3 rounded-full border border-white/30 px-7 py-3.5 font-display text-lg font-semibold text-white transition-colors hover:border-gold hover:text-gold-soft"
            >
              +91 93104 37699
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-line bg-cream py-20 lg:py-28" aria-labelledby="contact-page-heading">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Get in touch</p>
            <h2 className="mt-3 text-3xl leading-[1.15] sm:text-4xl lg:text-[2.75rem] text-navy">
              <span id="contact-page-heading">Come and see us in Hauz Khas</span>
            </h2>
            <span className="gold-rule mt-5 mx-auto" />
            <p className="mt-5 text-base leading-relaxed text-muted">
              Our office is on Kalu Sarai, opposite Sarvapriya Vihar. Walk in during working hours, or call ahead and
              we will have a shortlist ready when you arrive.
            </p>
          </div>
          <div className="mt-14 grid gap-8 lg:gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <ContactInfoPanel className="space-y-6 lg:sticky lg:top-32 lg:self-start" />
            <div className="rounded-lg border border-line bg-white p-7 sm:p-9">
              <h3 className="text-2xl text-navy">Tell us what you need</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                The more you tell us here, the tighter the shortlist we can put together before you spend a Saturday
                on viewings. Only your name and number are required.
              </p>
              <div className="mt-7">
                <DetailedContactForm initialInterest={initialInterest} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
