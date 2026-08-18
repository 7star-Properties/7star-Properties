"use client";

import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { LOCALITIES } from "@/lib/properties";

const INTEREST_OPTIONS = [
  "Renting a property",
  "Buying a property",
  "Selling a property",
  "Property management",
  "Commercial space",
  "Something else",
];

const PROPERTY_TYPES = ["Apartment", "Builder Floor", "Independent House", "Studio", "Office Space", "Retail / Shop", "Not sure yet"];
const CONFIGURATIONS = ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5+ BHK", "Not applicable"];
const BUDGETS = [
  "Under ₹40,000 / month",
  "₹40,000 – ₹75,000 / month",
  "₹75,000 – ₹1.25 L / month",
  "₹1.25 L – ₹2 L / month",
  "Above ₹2 L / month",
];
const TIMELINES = ["Immediately", "Within 1 month", "1 – 3 months", "3 – 6 months", "Just exploring for now"];
const CONTACT_METHODS = ["WhatsApp", "Phone call", "Email"];
const BEST_TIMES = ["Morning (9:30 AM – 12 PM)", "Afternoon (12 PM – 4 PM)", "Evening (4 PM – 7:30 PM)", "Any time"];

export default function DetailedContactForm({ initialInterest = "Renting a property" }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState(
    INTEREST_OPTIONS.includes(initialInterest) ? initialInterest : INTEREST_OPTIONS[0]
  );
  const [propertyType, setPropertyType] = useState("");
  const [configuration, setConfiguration] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [areas, setAreas] = useState([]);
  const [contactMethod, setContactMethod] = useState("WhatsApp");
  const [bestTime, setBestTime] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);

  function toggleArea(area) {
    setAreas((prev) => (prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]));
  }

  function buildMessage() {
    const lines = [`Hi 7 Star Properties, I'd like to get in touch.`, ``, `Name: ${name}`, `Phone: ${phone}`];
    if (email) lines.push(`Email: ${email}`);
    lines.push(`Interested in: ${interest}`);
    if (propertyType) lines.push(`Property type: ${propertyType}`);
    if (configuration) lines.push(`Configuration: ${configuration}`);
    if (budget) lines.push(`Budget: ${budget}`);
    if (timeline) lines.push(`Timeline: ${timeline}`);
    if (areas.length) lines.push(`Preferred areas: ${areas.join(", ")}`);
    lines.push(`Preferred contact method: ${contactMethod}`);
    if (bestTime) lines.push(`Best time to reach: ${bestTime}`);
    if (message.trim()) lines.push(`Message: ${message.trim()}`);
    return lines.join("\n");
  }

  function handleSubmit(e) {
    e.preventDefault();
    const text = buildMessage();
    window.open(`https://wa.me/919999239650?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="space-y-9" onSubmit={handleSubmit}>
      <fieldset>
        <legend className="text-sm font-semibold uppercase tracking-[0.12em] text-navy">
          <span className="mr-2 text-gold-dark">01</span> Your details
        </legend>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="dc-name" className="block text-sm font-medium text-navy">
              Full name<span className="text-gold-dark"> *</span>
            </label>
            <input
              id="dc-name"
              required
              autoComplete="name"
              placeholder="e.g. Ananya Mehra"
              className="mt-2 w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-gold"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="dc-phone" className="block text-sm font-medium text-navy">
              Phone number<span className="text-gold-dark"> *</span>
            </label>
            <input
              id="dc-phone"
              required
              autoComplete="tel"
              inputMode="tel"
              pattern="[0-9+\s\-()]{10,18}"
              placeholder="e.g. +91 98765 43210"
              className="mt-2 w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-gold"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="dc-email" className="block text-sm font-medium text-navy">
              Email <span className="font-normal text-muted">(optional)</span>
            </label>
            <input
              id="dc-email"
              autoComplete="email"
              placeholder="e.g. ananya@example.com"
              className="mt-2 w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-gold"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
      </fieldset>

      <fieldset className="border-t border-line pt-8">
        <legend className="text-sm font-semibold uppercase tracking-[0.12em] text-navy">
          <span className="mr-2 text-gold-dark">02</span> What you need
        </legend>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="dc-interest" className="block text-sm font-medium text-navy">
              I am interested in<span className="text-gold-dark"> *</span>
            </label>
            <select
              id="dc-interest"
              required
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
            <label htmlFor="dc-type" className="block text-sm font-medium text-navy">Property type</label>
            <select
              id="dc-type"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="mt-2 w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-gold"
            >
              <option value="">Select a type</option>
              {PROPERTY_TYPES.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="dc-config" className="block text-sm font-medium text-navy">Configuration</label>
            <select
              id="dc-config"
              value={configuration}
              onChange={(e) => setConfiguration(e.target.value)}
              className="mt-2 w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-gold"
            >
              <option value="">Select a configuration</option>
              {CONFIGURATIONS.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="dc-budget" className="block text-sm font-medium text-navy">Budget</label>
            <select
              id="dc-budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="mt-2 w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-gold"
            >
              <option value="">Select a budget</option>
              {BUDGETS.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="dc-timeline" className="block text-sm font-medium text-navy">How soon do you need it?</label>
            <select
              id="dc-timeline"
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
              className="mt-2 w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-gold"
            >
              <option value="">Select a timeline</option>
              {TIMELINES.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-6">
          <span className="block text-sm font-medium text-navy">
            Preferred areas <span className="font-normal text-muted">(choose any that apply)</span>
          </span>
          <ul className="mt-3 flex flex-wrap gap-2">
            {LOCALITIES.map((area) => {
              const checked = areas.includes(area);
              return (
                <li key={area}>
                  <label
                    className={`inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors ${
                      checked ? "border-gold bg-gold/10 text-navy" : "border-line bg-white text-muted hover:border-gold/50"
                    }`}
                  >
                    <input
                      className="h-3.5 w-3.5 accent-[#C0972E]"
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleArea(area)}
                    />
                    {area}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      </fieldset>

      <fieldset className="border-t border-line pt-8">
        <legend className="text-sm font-semibold uppercase tracking-[0.12em] text-navy">
          <span className="mr-2 text-gold-dark">03</span> How should we reach you?
        </legend>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <span className="block text-sm font-medium text-navy">Preferred contact method</span>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {CONTACT_METHODS.map((method) => {
                const checked = contactMethod === method;
                return (
                  <label
                    key={method}
                    className={`inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2.5 text-sm transition-colors ${
                      checked ? "border-navy bg-navy font-medium text-white" : "border-line bg-white text-muted hover:border-gold/50"
                    }`}
                  >
                    <input
                      className="sr-only"
                      type="radio"
                      value={method}
                      checked={checked}
                      onChange={() => setContactMethod(method)}
                      name="contactMethod"
                    />
                    {method}
                  </label>
                );
              })}
            </div>
          </div>
          <div>
            <label htmlFor="dc-time" className="block text-sm font-medium text-navy">Best time to reach you</label>
            <select
              id="dc-time"
              value={bestTime}
              onChange={(e) => setBestTime(e.target.value)}
              className="mt-2 w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-gold"
            >
              <option value="">Select a time</option>
              {BEST_TIMES.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-5">
          <label htmlFor="dc-message" className="block text-sm font-medium text-navy">
            Anything else we should know? <span className="font-normal text-muted">(optional)</span>
          </label>
          <textarea
            id="dc-message"
            rows={4}
            placeholder="Floor preference, parking, pets, furnishing, proximity to a school or office — the more you tell us, the tighter the shortlist."
            className="mt-2 resize-y w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-gold"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </fieldset>

      <div className="border-t border-line pt-8">
        <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-muted">
          <input
            required
            className="mt-1 h-4 w-4 shrink-0 accent-[#C0972E]"
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
          />
          <span>
            I agree to be contacted by 7 Star Properties about this enquiry.<span className="text-gold-dark"> *</span>
          </span>
        </label>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#25D366]/30 transition-all hover:bg-[#1FBE59] hover:shadow-xl"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Send enquiry on WhatsApp
          </button>
          <a
            href="tel:+919999239650"
            className="inline-flex items-center justify-center gap-2.5 rounded-full border border-navy px-7 py-4 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            Or call +91 99992 39650
          </a>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-muted">
          Your enquiry opens in WhatsApp with every detail filled in, so nothing gets lost in translation. We never
          share your number, and there is no payment or booking taken online.
        </p>
      </div>
    </form>
  );
}
