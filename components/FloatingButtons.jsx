"use client";

import { useEffect, useState } from "react";

const CIRCUMFERENCE = 163.36281798666926;

export default function FloatingButtons() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      setProgress(ratio);
      setVisible(scrollTop > 400);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dashOffset = CIRCUMFERENCE * (1 - progress);

  return (
    <>
      <div className="fixed bottom-5 right-5 z-40 block">
        <div className="relative">
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-[#25D366] animate-brand-pulse-ring"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-[#25D366] animate-brand-pulse-ring"
            style={{ animationDelay: "1.1s" }}
          />
          <a
            href="https://wa.me/919999239650?text=Hi%207%20Star%20Properties%2C%20I'd%20like%20to%20speak%20to%20someone%20about%20a%20property."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex h-16 items-center gap-3 rounded-full bg-[#25D366] pl-4 pr-4 text-white shadow-xl shadow-[#25D366]/40 ring-4 ring-white/70 transition-all duration-300 hover:bg-[#1FBE59] hover:shadow-2xl sm:pr-6"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-8 w-8 shrink-0 transition-transform duration-300 group-hover:scale-110"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 016.988 2.896 9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.142 1.595 5.945L0 24l6.335-1.652a12.06 12.06 0 005.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411" />
            </svg>
            <span className="hidden text-left leading-tight sm:block">
              <span className="block text-sm font-bold">Chat on WhatsApp</span>
              <span className="flex items-center gap-1.5 text-[0.6875rem] font-medium text-white/85">
                <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
                We usually reply in minutes
              </span>
            </span>
            <span className="sr-only sm:hidden">Chat with 7 Star Properties on WhatsApp</span>
          </a>
        </div>
      </div>

      <button
        type="button"
        aria-label="Back to top"
        tabIndex={visible ? 0 : -1}
        aria-hidden={!visible}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`group fixed bottom-5 left-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-navy shadow-lg shadow-navy/30 transition-all duration-300 hover:bg-navy-light ${
          visible ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <svg aria-hidden="true" viewBox="0 0 56 56" className="absolute inset-0 h-full w-full -rotate-90">
          <circle cx="28" cy="28" r="26" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/15" />
          <circle
            cx="28"
            cy="28"
            r="26"
            fill="none"
            stroke="var(--color-gold)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={dashOffset}
            className="transition-[stroke-dashoffset] duration-150 ease-linear"
          />
        </svg>
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="relative h-6 w-6">
          <path d="M4 8.5 L12 3 L20 8.5" stroke="var(--color-gold-soft)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="9" y="9.5" width="6" height="11.5" rx="1" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="1.3" />
          <rect
            x="10.4"
            y="12.5"
            width="3.2"
            height="4"
            rx="0.6"
            fill="var(--color-gold)"
            className="animate-brand-lift transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:[animation:none] group-hover:-translate-y-[3px]"
          />
          <path d="M5 21 H19" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      </button>
    </>
  );
}
