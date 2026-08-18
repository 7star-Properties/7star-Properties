"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { listingLabel } from "@/lib/format";

const VARIANT_CLASSES = {
  gold: "bg-gold text-navy",
  navy: "bg-navy text-white",
  outline: "border border-line bg-white/90 text-navy",
  sale: "bg-navy text-white",
  rent: "bg-white text-navy",
};

function Badge({ children, variant = "gold", className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

export default function PropertyGallery({ property }) {
  const [index, setIndex] = useState(0);
  const images = property.images;
  const count = images.length;
  const move = useCallback((delta) => setIndex((i) => (i + delta + count) % count), [count]);

  return (
    <div>
      <div className="relative aspect-16/10 overflow-hidden rounded-lg bg-line">
        <Image
          src={images[index].src}
          alt={images[index].alt}
          fill
          priority
          sizes="(min-width: 1024px) 66vw, 100vw"
          className="object-cover"
        />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <Badge variant={property.listingType === "rent" ? "rent" : "sale"}>{listingLabel(property.listingType)}</Badge>
          {property.badges?.includes("verified") ? <Badge variant="gold">Verified</Badge> : null}
        </div>
        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-navy shadow-md transition-colors hover:bg-white"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-navy shadow-md transition-colors hover:bg-white"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
            <p className="absolute bottom-4 right-4 rounded-full bg-navy/80 px-3.5 py-1.5 text-xs font-medium text-white">
              {index + 1} / {count}
            </p>
          </>
        )}
      </div>
      {count > 1 && (
        <ul className="mt-3 grid grid-cols-4 gap-3 sm:grid-cols-5 lg:grid-cols-6">
          {images.map((img, i) => (
            <li key={img.src + i}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show photo ${i + 1}: ${img.alt}`}
                aria-current={i === index ? "true" : undefined}
                className={`relative block aspect-4/3 w-full overflow-hidden rounded-md transition-all duration-200 ${
                  i === index ? "ring-2 ring-gold ring-offset-2 ring-offset-cream" : "opacity-70 hover:opacity-100"
                }`}
              >
                <Image src={img.src} alt="" fill sizes="140px" className="object-cover" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
