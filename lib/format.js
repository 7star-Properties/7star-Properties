const rupeeFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export function formatRupees(value) {
  return rupeeFormatter.format(value);
}

function trimDecimals(value) {
  return value.toFixed(2).replace(/\.?0+$/, "");
}

export function formatPrice(property) {
  const { price, listingType } = property;
  const short =
    price >= 1e7 ? `₹${trimDecimals(price / 1e7)} Cr` : price >= 1e5 ? `₹${trimDecimals(price / 1e5)} L` : formatRupees(price);
  return listingType === "rent" ? `${short}/month` : short;
}

export function formatExactPrice(property) {
  const exact = formatRupees(property.price);
  return property.listingType === "rent" ? `${exact} per month` : exact;
}

export function listingLabel(listingType) {
  return listingType === "rent" ? "For Rent" : "For Sale";
}

const BADGE_LABELS = {
  featured: "Featured",
  new: "New Listing",
};

export function badgeLabel(badge) {
  return BADGE_LABELS[badge] ?? badge;
}
