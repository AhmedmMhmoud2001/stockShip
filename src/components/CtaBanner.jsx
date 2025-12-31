import React from "react";


export default function CtaBanner({
  title = "هل أنت تاجر أو مصنع؟ انضم لسوقك الآن!",
  description =
    "ابدأ بيع بضائعك بالجملة ووصل إلى شبكة واسعة من التجار بسهولة وأمان. مع سوقك، تقدر تتفاوض مباشرة مع المشترين ونضمن لك حماية كاملة لكل صفقة.",
  ctaLabel = "انضم لنا",
  onClick,
}) {
  return (
    <section
      dir="rtl"
      className="relative w-full overflow-hidden bg-[#1E4E8F] "
      aria-label="Call to action"
    >
      {/* Watermark cart */}
      {/* <div className="pointer-events-none absolute -right-10 -top-10 opacity-25">
        <ShoppingCart
          size={420}
          className="text-[#6E89B1] rotate-12"
          strokeWidth={1.2}
        />
      </div> */}

      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-14 text-center sm:py-16">
        <h2 className="text-balance text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
          {title}
        </h2>

        <p className="mt-6 max-w-4xl text-pretty text-base leading-relaxed text-white/95 sm:text-lg">
          {description}
        </p>

        <button
          type="button"
          onClick={onClick}
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-[#F2B313] px-10 py-3 text-base font-bold text-[#1E4E8F] shadow-sm transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-[#1E4E8F]"
        >
          {ctaLabel}
        </button>
      </div>
    </section>
  );
}
