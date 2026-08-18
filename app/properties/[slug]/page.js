import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  BedDouble,
  Bath,
  Maximize,
  Building,
  Layers,
  Sofa,
  Compass,
  Car,
  CalendarDays,
  Check,
  Phone,
  MessageCircle,
  ArrowLeft,
} from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
import PropertyGallery from "@/components/PropertyGallery";
import EnquiryPanel from "@/components/EnquiryPanel";
import { properties } from "@/lib/properties";
import { formatPrice, formatRupees, listingLabel, badgeLabel } from "@/lib/format";
import { propertyWhatsappHref } from "@/lib/whatsapp";

const FURNISHING_LABELS = {
  "fully-furnished": "Fully furnished",
  "semi-furnished": "Semi-furnished",
  unfurnished: "Unfurnished",
};

const SITE_URL = "https://www.7starproperties.in";

export function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
}

// All slugs are known at build time — 404 unknown ones at the routing layer instead of
// rendering this segment (which sits under app/properties/loading.js's Suspense boundary,
// where a 200 status would already be streamed before notFound() could change it).
export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const property = properties.find((p) => p.slug === slug);
  if (!property) return {};

  const categoryLabel = property.bedrooms > 0 ? `${property.bedrooms} BHK ${property.category.replace("-", " ")}` : "Office space";
  const listingVerb = property.listingType === "sale" ? "for sale" : "for rent";
  const furnishing = FURNISHING_LABELS[property.furnishing].toLowerCase();

  return {
    title: `${property.title} — ${formatPrice(property)}`,
    description: `${categoryLabel} ${listingVerb} in ${property.locality}, New Delhi. ${property.areaSqft.toLocaleString("en-IN")} sq ft, ${furnishing}, ${property.floor} floor. ${formatPrice(property)}. Call +91 99992 39650 or enquire on WhatsApp.`,
    openGraph: {
      images: property.images.slice(0, 3).map((img) => ({ url: `${SITE_URL}${img.src}`, alt: img.alt })),
    },
  };
}

function pricePerSqft(property) {
  const value = Math.round(property.price / property.areaSqft);
  return `${formatRupees(value)} per sq ft${property.listingType === "rent" ? " / month" : ""}`;
}

function getSimilarProperties(property) {
  const sameLocality = properties.filter((p) => p.slug !== property.slug && p.locality === property.locality);
  const sameCategory = properties.filter(
    (p) => p.slug !== property.slug && p.category === property.category && p.locality !== property.locality
  );
  return [...sameLocality, ...sameCategory].slice(0, 3);
}

export default async function PropertyDetailPage({ params }) {
  const { slug } = await params;
  const property = properties.find((p) => p.slug === slug);
  if (!property) notFound();

  const {
    title,
    listingType,
    category,
    locality,
    city,
    addressLine,
    bedrooms,
    bathrooms,
    balconies,
    areaSqft,
    carpetAreaSqft,
    floor,
    totalFloors,
    facing,
    furnishing,
    ageYears,
    parking,
    availableFrom,
    preferredTenants,
    amenities,
    highlights,
    description,
    images,
    badges,
    postedOn,
  } = property;

  const heroBadges = (badges ?? []).filter((b) => b === "featured" || b === "new");
  const similarProperties = getSimilarProperties(property);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Residence", "Product"],
    name: title,
    description: description[0],
    url: `${SITE_URL}/properties/${slug}`,
    image: images.map((img) => `${SITE_URL}${img.src}`),
    address: {
      "@type": "PostalAddress",
      streetAddress: addressLine,
      addressLocality: `${locality}, ${city}`,
      addressRegion: "Delhi",
      addressCountry: "IN",
    },
    numberOfRooms: bedrooms,
    floorSize: { "@type": "QuantitativeValue", value: areaSqft, unitCode: "FTK" },
    offers: {
      "@type": "Offer",
      price: property.price,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/properties/${slug}`,
      seller: { "@type": "RealEstateAgent", name: "7 Star Properties" },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-navy/97 px-4 py-3 backdrop-blur-sm lg:hidden">
        <div className="flex items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="truncate font-display text-lg leading-tight text-gold-soft">{formatPrice(property)}</p>
            <p className="truncate text-[0.6875rem] text-white/55">{locality}</p>
          </div>
          <a href="tel:+919999239650" className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call
          </a>
          <a
            href={propertyWhatsappHref(property)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only sm:not-sr-only">WhatsApp</span>
          </a>
        </div>
      </div>

      <section className="border-b border-line bg-navy py-10 lg:py-14">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <nav aria-label="Breadcrumb" className="text-xs text-white/50">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link className="transition-colors hover:text-gold" href="/">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link className="transition-colors hover:text-gold" href="/properties">Properties</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white/80">{locality}</li>
            </ol>
          </nav>
          <div className="mt-5 flex flex-wrap items-center gap-2.5">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] ${
                listingType === "sale" ? "bg-navy text-white" : "bg-white text-navy"
              }`}
            >
              {listingLabel(listingType)}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white/90 px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-navy">
              {CATEGORY_LABELS[category]}
            </span>
            {heroBadges.map((badge) => (
              <span key={badge} className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-navy">
                {badgeLabel(badge)}
              </span>
            ))}
          </div>
          <h1 className="mt-4 max-w-4xl text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">{title}</h1>
          <p className="mt-4 flex items-center gap-2 text-sm text-white/70">
            <MapPin className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
            {addressLine}, {locality}, {city}
          </p>
          <p className="mt-6 font-display text-3xl text-gold-soft sm:text-4xl">
            {formatPrice(property)}
            <span className="ml-3 align-middle font-sans text-sm font-normal text-white/70">{pricePerSqft(property)}</span>
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.9fr_1fr] lg:gap-12">
            <div>
              <PropertyGallery property={property} />

              <div className="mt-12">
                <h2 className="text-2xl text-navy">Key details</h2>
                <span className="gold-rule mt-4" />
                <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-3">
                  <Spec icon={Maximize} label="Super area" value={`${areaSqft.toLocaleString("en-IN")} sq ft`} />
                  {carpetAreaSqft && <Spec icon={Maximize} label="Carpet area" value={`${carpetAreaSqft.toLocaleString("en-IN")} sq ft`} />}
                  {bedrooms > 0 && <Spec icon={BedDouble} label="Configuration" value={`${bedrooms} BHK`} />}
                  <Spec icon={Bath} label="Bathrooms" value={bathrooms} />
                  {balconies != null && <Spec icon={Building} label="Balconies" value={balconies} />}
                  <Spec icon={Layers} label="Floor" value={floor} />
                  <Spec icon={Sofa} label="Furnishing" value={FURNISHING_LABELS[furnishing]} />
                  <Spec icon={Compass} label="Facing" value={facing} />
                  <Spec icon={Car} label="Parking" value={parking} />
                  <Spec icon={CalendarDays} label="Age" value={`${ageYears} years old`} />
                </dl>
              </div>

              {highlights?.length > 0 && (
                <div className="mt-12 rounded-lg border border-gold/30 bg-gold/8 p-7">
                  <h2 className="text-lg text-navy">Why this one stands out</h2>
                  <ul className="mt-4 space-y-3">
                    {highlights.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-12">
                <h2 className="text-2xl text-navy">About this property</h2>
                <span className="gold-rule mt-4" />
                <div className="mt-6 space-y-5">
                  {description.map((p, i) => (
                    <p key={i} className="text-[0.9375rem] leading-relaxed text-ink/85">{p}</p>
                  ))}
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl text-navy">Amenities &amp; features</h2>
                <span className="gold-rule mt-4" />
                <ul className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {amenities.map((amenity) => (
                    <li key={amenity} className="flex items-start gap-2.5 text-sm text-ink">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" aria-hidden="true" />
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12 rounded-lg border border-line bg-white p-7">
                <h2 className="text-lg text-navy">Good to know</h2>
                <dl className="mt-5 grid gap-x-8 gap-y-4 text-sm sm:grid-cols-2">
                  <GoodToKnowRow label="Available from" value={availableFrom} />
                  {preferredTenants && <GoodToKnowRow label="Preferred tenants" value={preferredTenants} align="right" />}
                  <GoodToKnowRow label="Total floors" value={totalFloors} />
                  <GoodToKnowRow label="Listed on" value={formatListedDate(postedOn)} />
                </dl>
                <p className="mt-5 text-xs leading-relaxed text-muted">
                  Details are provided by the owner and verified by our team at the time of listing. Please confirm
                  dimensions, charges and documentation before entering into any agreement.
                </p>
              </div>
            </div>

            <aside className="lg:sticky lg:top-32 lg:self-start">
              <EnquiryPanel property={property} />
            </aside>
          </div>
        </div>
      </section>

      {similarProperties.length > 0 && (
        <section className="border-t border-line bg-white py-16 lg:py-20" aria-labelledby="related-heading">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 id="related-heading" className="text-2xl text-navy sm:text-3xl">You may also like</h2>
                <span className="gold-rule mt-4" />
              </div>
              <Link
                className="inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-gold-dark"
                href="/properties"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back to all properties
              </Link>
            </div>
            <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {similarProperties.map((p) => (
                <PropertyCard key={p.slug} property={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function Spec({ icon: Icon, label, value }) {
  return (
    <div className="flex gap-3.5">
      <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cream text-navy-light">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </span>
      <div>
        <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">{label}</dt>
        <dd className="mt-1 text-sm font-medium text-ink">{value}</dd>
      </div>
    </div>
  );
}

function GoodToKnowRow({ label, value, align }) {
  return (
    <div className="flex justify-between gap-4 border-b border-line pb-3">
      <dt className="text-muted">{label}</dt>
      <dd className={`font-medium text-ink ${align === "right" ? "text-right" : ""}`}>{value}</dd>
    </div>
  );
}

function formatListedDate(iso) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

const CATEGORY_LABELS = {
  apartment: "Apartment",
  "builder-floor": "Builder Floor",
  "independent-house": "Independent House",
  studio: "Studio",
  office: "Office Space",
};
