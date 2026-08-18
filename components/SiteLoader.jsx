"use client";

import { useEffect, useRef, useState } from "react";
import BrandMark from "@/components/BrandMark";

const STORAGE_KEY = "sevenstar:splash-shown";
const MIN_VISIBLE_MS = 2300;
const LEAVE_MS = 500;

export default function SiteLoader() {
  const [state, setState] = useState("hidden");
  const shouldShowRef = useRef(null);

  useEffect(() => {
    // Cache the decision in a ref: React's dev-mode Strict effect double-invoke (mount → cleanup →
    // mount) would otherwise re-read sessionStorage on the second mount, see the key the first
    // (throwaway) mount already wrote, and bail out without re-attaching the "load" listener —
    // leaving the splash stuck forever with scroll locked.
    if (shouldShowRef.current === null) {
      shouldShowRef.current = !(
        window.matchMedia("(prefers-reduced-motion: reduce)").matches || sessionStorage.getItem(STORAGE_KEY)
      );
      if (shouldShowRef.current) sessionStorage.setItem(STORAGE_KEY, "1");
    }
    if (!shouldShowRef.current) return;

    setState("visible");
    document.body.style.overflow = "hidden";

    const start = Date.now();
    const finish = () => {
      const elapsed = Date.now() - start;
      window.setTimeout(() => {
        setState("leaving");
        window.setTimeout(() => {
          setState("hidden");
          document.body.style.overflow = "";
        }, LEAVE_MS);
      }, Math.max(0, MIN_VISIBLE_MS - elapsed));
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    return () => {
      window.removeEventListener("load", finish);
      document.body.style.overflow = "";
    };
  }, []);

  if (state === "hidden") return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="7 Star Properties is loading"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy transition-opacity duration-500"
      style={{ opacity: state !== "leaving" ? 1 : 0 }}
    >
      <BrandMark size={128} />
      <p className="mt-8 font-display text-2xl text-white animate-brand-fade-in-up" style={{ animationDelay: "1.3s" }}>
        7 Star Properties
      </p>
      <p
        className="mt-2 text-[0.6875rem] font-semibold uppercase tracking-[0.32em] text-gold-soft animate-brand-fade-in-up"
        style={{ animationDelay: "1.5s" }}
      >
        Rent · Buy · Sell · Manage
      </p>
      <div className="mt-9 h-px w-40 overflow-hidden bg-white/15">
        <div
          className="h-full w-full origin-left bg-gradient-to-r from-gold to-gold-soft"
          style={{ animation: `brand-sweep ${MIN_VISIBLE_MS}ms linear forwards` }}
        />
      </div>
    </div>
  );
}
