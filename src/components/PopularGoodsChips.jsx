import React from "react";

export default function PopularGoodsChips({
  title = "البضائع الشائعة",
  items = [
    "أثاث المنزلية",
    "المدرسة و لوازم الطلبة",
    "قطع غيار السيارات و قطع الغيار",
    "بطاقات الكمبيوتر",
    "الألات و المعدات",
    "أجهزة",
    "لوازم المنزلية",
    "المواد النقل و الشحن",
    "بطاقات المستودعات",
    "أثاث المنزلية",
    "المدرسة و لوازم الطلبة",
    "قطع غيار السيارات و قطع الغيار",
    "بطاقات الكمبيوتر",
    "الألات و المعدات",
    "أثاث المنزلية",
    "أدوات كهربائية",
  ],
  onSelect,
}) {
  return (
    <section dir="rtl" className="w-full py-10  bg-white">
      <div className="mx-2 sm:mx-6 md:mx-10 lg:mx-16 xl:mx-24 2xl:mx-25  px-4 py-8">
        <h3 className="text-right text-base font-semibold text-slate-800 md:text-xl">
          {title}
        </h3>

        <div className="mt-4 flex flex-wrap justify-start gap-3">
          {items.map((label, i) => (
            <button
              key={`${label}-${i}`}
              type="button"
              onClick={() => onSelect?.(label)}
              className="rounded-md border border-slate-200 bg-white px-4 py-2 text-xs text-slate-700 shadow-[0_1px_0_rgba(15,23,42,0.02)] transition hover:bg-slate-50 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-200 md:text-sm"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

    </section>
  );
}
