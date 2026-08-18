"use client";

import { useMemo, useState } from "react";
import { flushSync } from "react-dom";
import { SlidersHorizontal } from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
import { properties, LOCALITIES, CATEGORIES, RENT_BUDGETS, SALE_BUDGETS } from "@/lib/properties";

const LISTING_OPTIONS = [
  { value: "all", label: "All" },
  { value: "rent", label: "Rent" },
  { value: "sale", label: "Buy" },
];

function withViewTransition(update) {
  const reduceMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion && typeof document !== "undefined" && document.startViewTransition) {
    document.startViewTransition(() => flushSync(update));
  } else {
    update();
  }
}

export default function PropertiesBrowser({
  initialListing = "all",
  initialLocality = "",
  initialCategory = "",
  initialBudget = "",
}) {
  const [listing, setListing] = useState(initialListing);
  const [locality, setLocality] = useState(initialLocality);
  const [category, setCategory] = useState(initialCategory);
  const [bhk, setBhk] = useState("");
  const [budget, setBudget] = useState(initialBudget);
  const [sort, setSort] = useState("newest");

  const budgetOptions = listing === "rent" ? RENT_BUDGETS : listing === "sale" ? SALE_BUDGETS : [];

  function handleListingChange(value) {
    withViewTransition(() => {
      setListing(value);
      setBudget("");
    });
  }

  const results = useMemo(() => {
    let list = properties.filter((p) => {
      if (listing !== "all" && p.listingType !== listing) return false;
      if (locality && p.locality !== locality) return false;
      if (category && p.category !== category) return false;
      if (bhk) {
        if (bhk === "4") {
          if (!p.bedrooms || p.bedrooms < 4) return false;
        } else if (p.bedrooms !== Number(bhk)) {
          return false;
        }
      }
      if (budget && listing !== "all") {
        const [minStr, maxStr] = budget.split("-");
        const min = Number(minStr) || 0;
        const max = maxStr ? Number(maxStr) : Infinity;
        if (p.price < min || p.price > max) return false;
      }
      return true;
    });

    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    else if (sort === "area-desc") list = [...list].sort((a, b) => b.areaSqft - a.areaSqft);
    else list = [...list].sort((a, b) => new Date(b.postedOn) - new Date(a.postedOn));

    return list;
  }, [listing, locality, category, bhk, budget, sort]);

  return (
    <>
      <div className="rounded-lg border border-line bg-white p-5 sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.12em] text-navy">
            <SlidersHorizontal className="h-4 w-4 text-gold" aria-hidden="true" />
            Filter listings
          </h2>
        </div>

        <div role="radiogroup" aria-label="Listing type" className="mt-5 inline-flex rounded-full bg-cream p-1">
          {LISTING_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              role="radio"
              aria-checked={listing === opt.value}
              onClick={() => handleListingChange(opt.value)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                listing === opt.value ? "bg-navy text-white" : "text-muted hover:text-navy"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <label htmlFor="filter-locality" className="block text-xs font-semibold uppercase tracking-[0.1em] text-muted">
              Location
            </label>
            <select
              id="filter-locality"
              value={locality}
              onChange={(e) => withViewTransition(() => setLocality(e.target.value))}
              className="mt-2 h-11 w-full rounded-md border border-line bg-white px-3 text-sm text-ink transition-colors focus:border-gold"
            >
              <option value="">All locations</option>
              {LOCALITIES.map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="filter-category" className="block text-xs font-semibold uppercase tracking-[0.1em] text-muted">
              Property type
            </label>
            <select
              id="filter-category"
              value={category}
              onChange={(e) => withViewTransition(() => setCategory(e.target.value))}
              className="mt-2 h-11 w-full rounded-md border border-line bg-white px-3 text-sm text-ink transition-colors focus:border-gold"
            >
              <option value="">Any type</option>
              {CATEGORIES.map((c) => (
                <option key={c.value} value={c.value}>{c.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="filter-bhk" className="block text-xs font-semibold uppercase tracking-[0.1em] text-muted">
              Configuration
            </label>
            <select
              id="filter-bhk"
              value={bhk}
              onChange={(e) => withViewTransition(() => setBhk(e.target.value))}
              className="mt-2 h-11 w-full rounded-md border border-line bg-white px-3 text-sm text-ink transition-colors focus:border-gold"
            >
              <option value="">Any BHK</option>
              <option value="1">1 BHK</option>
              <option value="2">2 BHK</option>
              <option value="3">3 BHK</option>
              <option value="4">4+ BHK</option>
            </select>
          </div>
          <div>
            <label htmlFor="filter-budget" className="block text-xs font-semibold uppercase tracking-[0.1em] text-muted">
              Budget
            </label>
            <select
              id="filter-budget"
              value={budget}
              onChange={(e) => withViewTransition(() => setBudget(e.target.value))}
              disabled={listing === "all"}
              className="mt-2 h-11 w-full rounded-md border border-line bg-white px-3 text-sm text-ink transition-colors focus:border-gold disabled:cursor-not-allowed disabled:bg-cream disabled:text-muted"
            >
              <option value="">Any budget</option>
              {budgetOptions.map((b) => (
                <option key={b.value} value={b.value}>{b.label}</option>
              ))}
            </select>
            {listing === "all" && <p className="mt-1.5 text-xs text-muted">Choose Rent or Buy to set a budget.</p>}
          </div>
          <div>
            <label htmlFor="filter-sort" className="block text-xs font-semibold uppercase tracking-[0.1em] text-muted">
              Sort by
            </label>
            <select
              id="filter-sort"
              value={sort}
              onChange={(e) => withViewTransition(() => setSort(e.target.value))}
              className="mt-2 h-11 w-full rounded-md border border-line bg-white px-3 text-sm text-ink transition-colors focus:border-gold"
            >
              <option value="newest">Newest first</option>
              <option value="price-asc">Price: low to high</option>
              <option value="price-desc">Price: high to low</option>
              <option value="area-desc">Largest area first</option>
            </select>
          </div>
        </div>

        <p aria-live="polite" className="mt-5 text-sm text-muted">
          Showing <span className="font-semibold text-navy">{results.length}</span> properties.
        </p>
      </div>

      <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((property) => (
          <PropertyCard key={property.slug} property={property} />
        ))}
      </div>
    </>
  );
}
