"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const INTEREST_OPTIONS = [
  "Renting a property",
  "Buying a property",
  "Selling a property",
  "Property management",
  "Something else",
];

export default function EnquiryForm({ initialInterest = "Renting a property" }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState(
    INTEREST_OPTIONS.includes(initialInterest) ? initialInterest : INTEREST_OPTIONS[0]
  );
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const lines = [
      `Hi 7 Star Properties, I'd like to get in touch.`,
      ``,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Interested in: ${interest}`,
    ];
    if (message.trim()) lines.push(`Message: ${message.trim()}`);
    const text = lines.join("\n");
    window.open(`https://wa.me/919999239650?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-navy">Your name</label>
          <input
            id="contact-name"
            required
            autoComplete="name"
            placeholder="e.g. Ananya Mehra"
            className="mt-2 w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-gold"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="block text-sm font-medium text-navy">Phone number</label>
          <input
            id="contact-phone"
            required
            autoComplete="tel"
            inputMode="tel"
            pattern="[0-9+\s\-()]{10,18}"
            placeholder="e.g. +91 98765 43210"
            className="mt-2 w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-gold"
            type="tel"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-interest" className="block text-sm font-medium text-navy">I am interested in</label>
        <select
          id="contact-interest"
          name="interest"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className="mt-2 w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-gold"
        >
          {INTEREST_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-navy">
          Message <span className="font-normal text-muted">(optional)</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          placeholder="Tell us the area, budget and when you need to move — the more you share, the better we can shortlist."
          className="mt-2 resize-y w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-gold"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-gold-soft sm:w-auto"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        Send enquiry via WhatsApp
      </button>
      <p className="text-xs leading-relaxed text-muted">
        Your enquiry opens in WhatsApp with these details filled in, so it reaches us instantly. Prefer to talk?
        Call us directly — we answer between 9:30 AM and 7:30 PM, Monday to Saturday.
      </p>
    </form>
  );
}
