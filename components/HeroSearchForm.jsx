"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { LOCALITIES, CATEGORIES, RENT_BUDGETS } from "@/lib/properties";

export default function HeroSearchForm() {
  const router = useRouter();
  const [listing, setListing] = useState("rent");
  const [locality, setLocality] = useState("");
  const [category, setCategory] = useState("");
  const [budget, setBudget] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const params = new URLSearchParams();
    params.set("listing", listing);
    if (locality) params.set("locality", locality);
    if (category) params.set("category", category);
    if (budget) params.set("budget", budget);
    router.push(`/properties?${params.toString()}`);
  }

  return (
    <form
      className="rounded-xl bg-white/95 p-4 shadow-2xl shadow-black/25 backdrop-blur-sm sm:p-5"
      aria-label="Search properties"
      onSubmit={handleSubmit}
    >
      <div role="radiogroup" aria-label="Looking to" className="mb-4 inline-flex rounded-full bg-cream p-1">
        <button
          type="button"
          role="radio"
          aria-checked={listing === "rent"}
          onClick={() => setListing("rent")}
          className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
            listing === "rent" ? "bg-navy text-white" : "text-muted hover:text-navy"
          }`}
        >
          Rent
        </button>
        <button
          type="button"
          role="radio"
          aria-checked={listing === "sale"}
          onClick={() => setListing("sale")}
          className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
            listing === "sale" ? "bg-navy text-white" : "text-muted hover:text-navy"
          }`}
        >
          Buy
        </button>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1.2fr_auto]">
        <div>
          <label htmlFor="search-locality" className="sr-only">Location</label>
          <select
            id="search-locality"
            value={locality}
            onChange={(e) => setLocality(e.target.value)}
            className="h-12 w-full rounded-md border border-line bg-white px-3.5 text-sm text-ink transition-colors focus:border-gold"
          >
            <option value="">All locations</option>
            {LOCALITIES.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="search-category" className="sr-only">Property type</label>
          <select
            id="search-category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="h-12 w-full rounded-md border border-line bg-white px-3.5 text-sm text-ink transition-colors focus:border-gold"
          >
            <option value="">Any type</option>
            {CATEGORIES.map((c) => (
              <option key={c.value} value={c.value}>{c.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="search-budget" className="sr-only">Budget</label>
          <select
            id="search-budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            disabled={listing !== "rent"}
            className="h-12 w-full rounded-md border border-line bg-white px-3.5 text-sm text-ink transition-colors focus:border-gold disabled:cursor-not-allowed disabled:bg-cream disabled:text-muted"
          >
            <option value="">Any budget</option>
            {RENT_BUDGETS.map((b) => (
              <option key={b.value} value={b.value}>{b.label}</option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-gold px-7 text-sm font-semibold text-navy transition-colors hover:bg-gold-soft"
        >
          <Search className="h-4 w-4" aria-hidden="true" />
          Search Properties
        </button>
      </div>
    </form>
  );
}
