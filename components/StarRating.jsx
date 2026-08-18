import { Star } from "lucide-react";

export default function StarRating({ rating = 5, max = 5 }) {
  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={`Rated ${rating} out of ${max}`}>
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-gold text-gold" : "fill-line text-line"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
