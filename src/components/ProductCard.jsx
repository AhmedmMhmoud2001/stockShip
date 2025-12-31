import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function ProductCard({
  category = "هواتف ذكية",
  title = "هاتف iPhone",
  image,
  rating = 5,
  reviews = 65,
  subtitle = "لوريم إيبسوم دولور سيت أم",
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border-0 p-3 py-5 bg-[#F0F2F5] shadow-sm">
      {/* Image */}
      <div className="relative">
        <img
          src={
            image ??
            "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=1200&q=80&auto=format&fit=crop"
          }
          alt={title}
          className="h-56 w-full rounded-2xl object-cover "
          loading="lazy"
        />

        {/* Badge
        {badgeText ? (
          <span className="absolute right-3 top-3 rounded-xl bg-white px-3 py-2 text-sm font-extrabold tracking-wide text-red-600 shadow">
            {badgeText}
          </span>
        ) : null} */}
      </div>

      {/* Content */}
      <div className="p-4 text-right">
        <div className="text-sm text-slate-500">{category}</div>

        <div className="mt-1 text-lg font-bold text-slate-900">{title}</div>

        {/* Rating */}
        <div className="mt-2 flex items-center  gap-2">
          <Stars value={rating} />
          <span className="text-sm text-slate-500">({reviews})</span>
        </div>

        <div className="mt-2 text-sm text-slate-600 line-clamp-1">
          {subtitle}
        </div>
        {/* Buttons */}
        <div className="mt-6 flex items-center justify-between gap-2">
          <Link to={`/ProductDetails/:id`} className="w-full">
            <div className=" w-[60%] rounded-xl border border-slate-300 bg-white py-2.5 px-1 text-sm font-semibold text-slate-800 hover:bg-slate-50">
              
              عرض التفاصيل
            </div>
          </Link>

          {/* Favorite */}
          <button
            type="button"
            onClick={() => setIsFavorite((v) => !v)}
            className=" grid h-10 w-10  place-items-center rounded-full bg-white/90 shadow hover:bg-white"
            aria-label="مفضلة"
            title="مفضلة"
          >
            <HeartIcon filled={isFavorite} />
          </button>
        </div>
      </div>
    </div>
  );
}

function Stars({ value = 0, max = 5 }) {
  return (
    <div
      className="flex items-center gap-1"
      aria-label={`التقييم ${value} من ${max}`}
    >
      {Array.from({ length: max }).map((_, i) => (
        <StarIcon key={i} filled={i < value} />
      ))}
    </div>
  );
}

function StarIcon({ filled }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      className={filled ? "fill-yellow-400" : "fill-slate-200"}
    >
      <path d="M12 17.27l-5.18 3.05 1.39-5.81-4.5-3.89 5.92-.5L12 4.5l2.37 5.62 5.92.5-4.5 3.89 1.39 5.81z" />
    </svg>
  );
}

function HeartIcon({ filled }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      className={filled ? "fill-rose-500" : "fill-slate-300"}
    >
      <path d="M12 21s-7.1-4.4-9.3-8.7C.7 8.4 3.1 5.5 6.4 5.5c1.7 0 3.3.8 4.3 2 1-1.2 2.6-2 4.3-2 3.3 0 5.7 2.9 3.7 6.8C19.1 16.6 12 21 12 21z" />
    </svg>
  );
}
