export default function BrandMark({ size = 96, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true" className={className}>
      <path
        d="M10 78 Q50 68 90 78"
        stroke="var(--color-gold-soft)"
        strokeWidth="2.5"
        strokeLinecap="round"
        style={{ strokeDasharray: 86, strokeDashoffset: 86, animation: "brand-draw 0.45s var(--ease-out-soft) 0.05s forwards" }}
      />
      <path
        d="M18 62 L50 32 L82 62"
        stroke="#ffffff"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ strokeDasharray: 92, strokeDashoffset: 92, animation: "brand-draw 0.55s var(--ease-out-soft) 0.32s forwards" }}
      />
      <path
        d="M27 62 V76 M73 62 V76"
        stroke="#ffffff"
        strokeWidth="3.5"
        strokeLinecap="round"
        style={{ strokeDasharray: 30, strokeDashoffset: 30, animation: "brand-draw 0.35s var(--ease-out-soft) 0.78s forwards" }}
      />
      <g
        style={{
          transformOrigin: "50px 66px",
          opacity: 0,
          animation: "brand-star-pop 0.45s var(--ease-out-soft) 1s forwards, brand-window-glow 2s ease-in-out 1.6s infinite",
        }}
      >
        <rect x="43" y="59" width="14" height="14" rx="1.5" fill="var(--color-gold)" />
        <path d="M50 59 V73 M43 66 H57" stroke="var(--color-navy)" strokeWidth="1.8" />
      </g>
      <path
        d="M50 6 L56.2 20.4 L71.8 21.9 L60 32.3 L63.4 47.6 L50 39.6 L36.6 47.6 L40 32.3 L28.2 21.9 L43.8 20.4 Z"
        fill="var(--color-gold)"
        style={{ transformOrigin: "50px 27px", opacity: 0, animation: "brand-star-pop 0.6s var(--ease-out-soft) 1.2s forwards" }}
      />
    </svg>
  );
}
