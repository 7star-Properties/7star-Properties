import BrandMark from "@/components/BrandMark";

export default function RouteLoader({ message }) {
  return (
    <div role="status" aria-live="polite" className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-24 text-center">
      <div className="rounded-full bg-navy p-8 animate-brand-breathe">
        <BrandMark size={80} />
      </div>
      <p className="mt-7 font-display text-xl text-navy">{message}</p>
      <div className="mt-5 h-px w-32 overflow-hidden bg-line">
        <div
          className="h-full w-full origin-left bg-gradient-to-r from-gold to-gold-soft"
          style={{ animation: "brand-sweep 1.2s var(--ease-out-soft) infinite" }}
        />
      </div>
      <span className="sr-only">{message}, please wait.</span>
    </div>
  );
}
