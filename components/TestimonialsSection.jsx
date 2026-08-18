import { Quote } from "lucide-react";
import StarRating from "@/components/StarRating";
import { TESTIMONIALS } from "@/lib/content";

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28" aria-labelledby="testimonials-heading">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Client stories</p>
          <h2 className="mt-3 text-3xl leading-[1.15] sm:text-4xl lg:text-[2.75rem] text-navy">
            <span id="testimonials-heading">What our clients say</span>
          </h2>
          <span className="gold-rule mt-5 mx-auto" />
          <p className="mt-5 text-base leading-relaxed text-muted">
            Tenants, buyers, sellers and owners who let us handle the whole thing.
          </p>
        </div>
        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <li key={t.name}>
              <figure className="relative flex h-full flex-col rounded-lg border border-line bg-white p-8">
                <Quote className="absolute right-7 top-7 h-9 w-9 text-gold-soft/35" aria-hidden="true" />
                <StarRating rating={t.rating} />
                <blockquote className="mt-5 flex-1">
                  <p className="text-[0.9375rem] leading-relaxed text-ink">&ldquo;{t.quote}&rdquo;</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3.5 border-t border-line pt-5">
                  <span aria-hidden="true" className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy font-display text-base text-gold-soft">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-navy">{t.name}</span>
                    <span className="block text-xs text-muted">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
