import { formatPrice } from "@/lib/format";

const SITE = {
  name: "7 Star Properties",
  url: "https://www.7starproperties.in",
  whatsapp: "919999239650",
};

export function whatsappHref(text) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function propertyWhatsappHref(property) {
  const url = `${SITE.url}/properties/${property.slug}`;
  return whatsappHref(
    `Hi ${SITE.name}, I'm interested in "${property.title}" (${formatPrice(property)}) in ${property.locality}. Is it still available?\n\n${url}`
  );
}

export function propertyEnquiryWhatsappHref(property, { name, phone, message }) {
  const url = `${SITE.url}/properties/${property.slug}`;
  const lines = [
    `Hi ${SITE.name}, I'm interested in "${property.title}" (${formatPrice(property)}) in ${property.locality}. Is it still available?`,
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
  ];
  if (message.trim()) lines.push(`Message: ${message.trim()}`);
  lines.push("", url);
  return whatsappHref(lines.join("\n"));
}

export function propertyVisitWhatsappHref(property) {
  return whatsappHref(
    `Hi ${SITE.name}, I'd like to schedule a site visit for "${property.title}" (${formatPrice(property)}) in ${property.locality}. When would suit you?\n\n${SITE.url}/properties/${property.slug}`
  );
}
