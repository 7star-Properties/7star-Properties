"use client";

import { useState } from "react";
import { Phone, MessageCircle, CalendarCheck, CircleCheck } from "lucide-react";
import { formatPrice, formatExactPrice, formatRupees } from "@/lib/format";
import { propertyWhatsappHref, propertyEnquiryWhatsappHref, propertyVisitWhatsappHref } from "@/lib/whatsapp";

const inputClass =
  "mt-1.5 w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-gold";
const labelClass = "block text-sm font-medium text-navy";

export default function EnquiryPanel({ property }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const formValues = { name, phone, message };
  const isRent = property.listingType === "rent";

  return (
    <div className="overflow-hidden rounded-lg border border-line bg-white">
      <div className="bg-navy px-6 py-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-soft">
          {isRent ? "Monthly rent" : "Asking price"}
        </p>
        <p className="mt-2 font-display text-3xl text-white">{formatPrice(property)}</p>
        <p className="mt-1 text-sm text-white/60">{formatExactPrice(property)}</p>
        <dl className="mt-4 space-y-1.5 border-t border-white/15 pt-4 text-sm text-white/70">
          {isRent ? (
            <>
              {property.securityDeposit ? (
                <div className="flex justify-between gap-4">
                  <dt>Security deposit</dt>
                  <dd className="font-medium text-white">{formatRupees(property.securityDeposit)}</dd>
                </div>
              ) : null}
              {property.maintenance ? (
                <div className="flex justify-between gap-4">
                  <dt>Maintenance</dt>
                  <dd className="font-medium text-white">{formatRupees(property.maintenance)}/mo</dd>
                </div>
              ) : null}
            </>
          ) : (
            <div className="flex justify-between gap-4">
              <dt>Price</dt>
              <dd className="font-medium text-white">{property.negotiable ? "Negotiable" : "Fixed"}</dd>
            </div>
          )}
          <div className="flex justify-between gap-4">
            <dt>Available</dt>
            <dd className="font-medium text-white">{property.availableFrom}</dd>
          </div>
        </dl>
      </div>

      <div className="space-y-3 border-b border-line p-6">
        <a
          href="tel:+919999239650"
          className="flex items-center justify-center gap-2.5 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-gold-soft"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call +91 99992 39650
        </a>
        <a
          href={propertyWhatsappHref(property)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Enquire on WhatsApp
        </a>
        <a
          href={propertyVisitWhatsappHref(property)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2.5 rounded-full border border-navy px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
        >
          <CalendarCheck className="h-4 w-4" aria-hidden="true" />
          Schedule a Visit
        </a>
      </div>

      <div className="p-6">
        {submitted ? (
          <div className="text-center">
            <CircleCheck className="mx-auto h-10 w-10 text-gold-dark" aria-hidden="true" />
            <h3 className="mt-3 text-lg text-navy">Enquiry ready to send</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              WhatsApp should have opened with your details and this property already filled in. If it did not open,
              use the button below.
            </p>
            <a
              href={propertyEnquiryWhatsappHref(property, formValues)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Open WhatsApp
            </a>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-3 block w-full text-xs font-semibold text-muted hover:text-navy"
            >
              Edit my details
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.open(propertyEnquiryWhatsappHref(property, formValues), "_blank", "noopener,noreferrer");
              setSubmitted(true);
            }}
            className="space-y-4"
          >
            <div>
              <h3 className="text-lg text-navy">Enquire about this property</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">
                We reply the same working day, usually within a couple of hours.
              </p>
            </div>
            <div>
              <label htmlFor="enquiry-name" className={labelClass}>Your name</label>
              <input
                id="enquiry-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Ananya Mehra"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="enquiry-phone" className={labelClass}>Phone number</label>
              <input
                id="enquiry-phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                inputMode="tel"
                pattern="[0-9+\s\-()]{10,18}"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. +91 98765 43210"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="enquiry-message" className={labelClass}>
                Message <span className="font-normal text-muted">(optional)</span>
              </label>
              <textarea
                id="enquiry-message"
                name="message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="When would you like to see it?"
                className={`resize-y ${inputClass}`}
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
            >
              Send enquiry
            </button>
            <p className="text-center text-xs leading-relaxed text-muted">
              No booking or payment is taken online. Your enquiry goes straight to our team on WhatsApp.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
