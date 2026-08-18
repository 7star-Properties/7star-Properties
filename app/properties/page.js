import Link from "next/link";
import PropertiesBrowser from "@/components/PropertiesBrowser";

export const metadata = {
  title: "Properties in South Delhi",
  description:
    "Everything we are currently showing across Hauz Khas, Kalu Sarai, Green Park, Safdarjung Enclave and the colonies around them. Each listing has been visited in person before it appears here.",
};

export default async function PropertiesPage({ searchParams }) {
  const params = await searchParams;
  const listingParam = params?.listing === "sale" ? "sale" : params?.listing === "rent" ? "rent" : "all";
  const localityParam = typeof params?.locality === "string" ? params.locality : "";
  const categoryParam = typeof params?.category === "string" ? params.category : "";
  const budgetParam = typeof params?.budget === "string" ? params.budget : "";

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
              <li aria-current="page" className="text-white/80">Properties</li>
            </ol>
          </nav>
          <h1 className="mt-5 text-3xl text-white sm:text-4xl lg:text-5xl">Properties in South Delhi</h1>
          <span className="gold-rule mt-5" />
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70">
            Everything we are currently showing across Hauz Khas, Kalu Sarai, Green Park, Safdarjung Enclave and the
            colonies around them. Each listing has been visited in person before it appears here.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16" aria-label="Property results">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <PropertiesBrowser
            initialListing={listingParam}
            initialLocality={localityParam}
            initialCategory={categoryParam}
            initialBudget={budgetParam}
          />
        </div>
      </section>
    </>
  );
}
