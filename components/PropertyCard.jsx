import Image from "next/image";
import Link from "next/link";
import { MapPin, BedDouble, Bath, Maximize, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { formatPrice, listingLabel, badgeLabel } from "@/lib/format";
import { propertyWhatsappHref } from "@/lib/whatsapp";

export default function PropertyCard({ property }) {
  const { slug, listingType, category, locality, city, title, bedrooms, bathrooms, areaSqft, images, badges } = property;
  const cover = images[0];
  const cardBadges = (badges ?? []).filter((b) => b === "featured" || b === "new");

  return (
    <article
      style={{ viewTransitionName: `property-card-${slug}` }}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-line bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-navy/10"
    >
      <div className="relative aspect-4/3 overflow-hidden bg-line">
        <Link tabIndex={-1} aria-hidden="true" href={`/properties/${slug}`} className="absolute inset-0 block">
          <Image
            alt={cover.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            src={cover.src}
          />
        </Link>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/65 to-transparent"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] ${
              listingType === "sale" ? "bg-navy text-white" : "bg-white text-navy"
            }`}
          >
            {listingLabel(listingType)}
          </span>
        </div>
        {cardBadges.length > 0 && (
          <div className="absolute right-3 top-3 flex flex-wrap justify-end gap-2">
            {cardBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] bg-gold text-navy"
              >
                {badgeLabel(badge)}
              </span>
            ))}
          </div>
        )}
        <p className="absolute bottom-3 left-3 font-display text-xl font-semibold text-gold-soft drop-shadow-sm">{formatPrice(property)}</p>
        <p className="absolute bottom-3.5 right-3 text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-white/85">
          {CATEGORY_LABELS[category] ?? category}
        </p>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg leading-snug text-navy">
          <Link
            className="transition-colors before:absolute before:inset-0 before:content-[''] hover:text-navy-light"
            href={`/properties/${slug}`}
          >
            {title}
          </Link>
        </h3>
        <p className="mb-4 mt-2 flex items-center gap-1.5 text-sm text-muted">
          <MapPin className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
          {locality}, {city}
        </p>
        <ul className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line pt-4 text-sm text-ink">
          {bedrooms > 0 && (
            <li className="flex items-center gap-1.5">
              <BedDouble className="h-4 w-4 text-navy-light" aria-hidden="true" />
              <span>
                {bedrooms} BHK<span className="sr-only"> configuration</span>
              </span>
            </li>
          )}
          <li className="flex items-center gap-1.5">
            <Bath className="h-4 w-4 text-navy-light" aria-hidden="true" />
            <span>
              {bathrooms}
              <span className="sr-only"> bathrooms</span>
              <span aria-hidden="true"> Bath</span>
            </span>
          </li>
          <li className="flex items-center gap-1.5">
            <Maximize className="h-4 w-4 text-navy-light" aria-hidden="true" />
            <span>{areaSqft.toLocaleString("en-IN")} sq ft</span>
          </li>
        </ul>
        <div className="mt-5 flex items-center gap-2 pt-1">
          <Link
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-navy px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
            href={`/properties/${slug}`}
          >
            View Details
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <a
            href="tel:+919999239650"
            aria-label={`Call +91 99992 39650 about ${title}`}
            className="relative z-10 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-navy transition-colors hover:border-gold hover:bg-gold hover:text-navy"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={propertyWhatsappHref(property)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enquire on WhatsApp about ${title}`}
            className="relative z-10 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md shadow-[#25D366]/30 transition-all hover:scale-105 hover:bg-[#1FBE59]"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <p className="mt-3 text-center text-xs text-muted">
          Call{" "}
          <a href="tel:+919999239650" className="relative z-10 font-semibold text-navy hover:text-gold-dark">
            +91 99992 39650
          </a>
        </p>
      </div>
    </article>
  );
}

const CATEGORY_LABELS = {
  apartment: "Apartment",
  "builder-floor": "Builder Floor",
  "independent-house": "Independent House",
  studio: "Studio",
  office: "Office Space",
};
