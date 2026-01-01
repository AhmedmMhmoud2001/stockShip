import React, { useMemo, useState } from "react";
import { Star, Heart, LayoutGrid, List } from "lucide-react";

const StarRating = ({ value = 5 }) => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  return (
    <div className="flex items-center gap-1 text-amber-500">
      {stars.map((s) => (
        <Star
          key={s}
          className={`h-4 w-4 ${s <= value ? "fill-current" : ""}`}
        />
      ))}
      <span className="ms-2 text-xs text-slate-500">({value})</span>
    </div>
  );
};

export default function ProductsListComponent() {
  const products = useMemo(
    () => [
      {
        id: "p1",
        title: "هاتف IPHONE",
        seller: "شركة أبو أيوب",
        rating: 5,
        reviews: 65,
        desc:
          "لوريم إيبسوم نص تجريبي يمكن استبداله بوصف المنتج الحقيقي. تفاصيل مختصرة عن المنتج ومواصفاته. لوريم إيبسوم نص تجريبي يمكن استبداله بوصف المنتج الحقيقي.",
        mainImg:
          "https://images.unsplash.com/photo-1580913428735-bd3c269d6a82?auto=format&fit=crop&w=900&q=80",
        thumbs: [
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=240&q=80",
          "https://images.unsplash.com/photo-1512499617640-c2f999018b72?auto=format&fit=crop&w=240&q=80",
          "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=240&q=80",
          "https://images.unsplash.com/photo-1565843708714-52ecf69c36b1?auto=format&fit=crop&w=240&q=80",
        ],
      },
      {
        id: "p2",
        title: "هاتف IPHONE",
        seller: "شركة أبو أيوب",
        rating: 5,
        reviews: 65,
        desc:
          "لوريم إيبسوم نص تجريبي يمكن استبداله بوصف المنتج الحقيقي. تفاصيل مختصرة عن المنتج ومواصفاته. لوريم إيبسوم نص تجريبي يمكن استبداله بوصف المنتج الحقيقي.",
        mainImg:
          "https://images.unsplash.com/photo-1565843708714-52ecf69c36b1?auto=format&fit=crop&w=900&q=80",
        thumbs: [
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=240&q=80",
          "https://images.unsplash.com/photo-1512499617640-c2f999018b72?auto=format&fit=crop&w=240&q=80",
          "https://images.unsplash.com/photo-1580913428735-bd3c269d6a82?auto=format&fit=crop&w=240&q=80",
          "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=240&q=80",
        ],
      },
    ],
    []
  );

  const [liked, setLiked] = useState(() =>
    Object.fromEntries(products.map((p) => [p.id, false]))
  );
  const [selectedImages, setSelectedImages] = useState(() =>
    Object.fromEntries(products.map((p) => [p.id, p.mainImg]))
  );

  const toggleLike = (id) =>
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));

  const setSelectedFor = (id, img) =>
    setSelectedImages((prev) => ({ ...prev, [id]: img }));

  const [view, setView] = useState("list");

  return (
    <div  className="min-h-screen bg-white pt-50">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-8 py-6">
        <div className="flex items-center  gap-3">

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
            >
              ترتيب حسب
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setView("list")}
              className={`inline-flex h-9 w-9 items-center justify-center rounded-md border ${
                view === "list"
                  ? "border-blue-900 bg-blue-50 text-blue-900"
                  : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
              }`}
              aria-label="List view"
            >
              <List className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => setView("grid")}
              className={`inline-flex h-9 w-9 items-center justify-center rounded-md border ${
                view === "grid"
                  ? "border-blue-900 bg-blue-50 text-blue-900"
                  : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
              }`}
              aria-label="Grid view"
            >
              <LayoutGrid className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-6 space-y-8">
          {products.map((p) => {
            const activeImg = selectedImages[p.id] || p.mainImg;
            const isLiked = liked[p.id];

            return (
              <div
                key={p.id}
                className="rounded-md bg-white  p-4 sm:p-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-6">
                  <div dir="rtl" className="flex flex-col justify-between gap-4">
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="text-lg font-bold text-slate-900">
                            {p.title}
                          </div>
                          <div className="text-xs text-slate-500 py-5">
                          البائع:{" "}
                          <span className="font-semibold text-slate-700">
                            {p.seller}
                          </span>
                        </div>

                          <div className="mt-1 flex items-center gap-2">
                            <StarRating value={p.rating} />
                            <span className="text-xs text-slate-500">
                              ({p.reviews})
                            </span>
                          </div>
                        </div>

                        
                      </div>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {p.desc}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => toggleLike(p.id)}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                        aria-label="Like"
                      >
                        <Heart
                          className={`h-5 w-5 ${
                            isLiked ? "fill-current text-blue-900" : ""
                          }`}
                        />
                      </button>

                      <button
                        type="button"
                        className="flex-1 rounded-md border border-blue-900 bg-white px-4 py-2.5 text-sm font-semibold text-blue-900 hover:bg-blue-50"
                      >
                        عرض التفاصيل
                      </button>
                    </div>
                  </div>

                  <div>
                    <div className="relative overflow-hidden rounded-md  bg-slate-50">
                      <img
                        src={activeImg}
                        alt={p.title}
                        className="h-44 sm:h-52 w-full object-cover"
                      />
                      <span className="absolute top-2 right-2 rounded bg-red-600 px-2 py-0.5 text-[10px] font-bold text-white">
                        SALE
                      </span>
                    </div>

                    <div className="mt-2 grid grid-cols-5 gap-1">
                      {p.thumbs.slice(0, 4).map((t, i) => {
                        const active = activeImg === t;
                        return (
                          <button
                            key={i}
                            type="button"
                            onClick={() => setSelectedFor(p.id, t)}
                            className={`h-10 overflow-hidden rounded border bg-white transition ${
                              active
                                ? "border-blue-900 ring-2 ring-blue-200"
                                : "border-slate-200 hover:border-slate-400"
                            }`}
                          >
                            <img
                              src={t}
                              alt=""
                              className="h-full w-full object-cover"
                            />
                          </button>
                        );
                      })}

                      <button
                        type="button"
                        onClick={() => setSelectedFor(p.id, p.mainImg)}
                        className="h-10 rounded border border-slate-200 bg-white text-slate-500 hover:bg-slate-50"
                        aria-label="reset"
                      >
                        ▶
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
