import React, { useMemo, useState } from "react";
import Rectangle1 from "../assets/imgs/Rectangle1.png";
import {
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Building2,
  BadgeCheck,
  Star,
} from "lucide-react";

const StarRating = ({ value = 5 }) => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  return (
    <div className="flex items-center justify-start gap-1" aria-label={`التقييم ${value} من 5`}>
      {stars.map((s) => (
        <Star
          key={s}
          className={`h-4 w-4 ${s <= value ? "fill-current" : ""}`}
        />
      ))}
      <span className="ms-2 text-xs text-slate-500">({value.toFixed(1)})</span>
    </div>
  );
};

export default function ProductDetailsComponent() {
  const images = useMemo(
    () => [
      {
        id: "main",
        src: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1600&q=80",
        alt: "هاتف ذكي",
      },
      {
        id: "t1",
        src: "https://images.unsplash.com/photo-1580913428735-bd3c269d6a82?auto=format&fit=crop&w=900&q=80",
        alt: "هاتف من الخلف",
      },
      {
        id: "t2",
        src: "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=900&q=80",
        alt: "هواتف متعددة",
      },
      {
        id: "t3",
        src: "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=900&q=80",
        alt: "واجهة الهاتف",
      },
      {
        id: "t4",
        src: "https://images.unsplash.com/photo-1580913428735-bd3c269d6a82?auto=format&fit=crop&w=900&q=80",
        alt: "هاتف على طاولة",
      },
    ],
    []
  );

  const [activeImageId, setActiveImageId] = useState(images[0].id);
  const [liked, setLiked] = useState(false);
  const [tab, setTab] = useState("company");

  const activeImage = images.find((i) => i.id === activeImageId) ?? images[0];

  return (
    <div dir="rtl" className="min-h-screen bg-white text-slate-900">
      <div className="w-full  pt-25 sm:pt-30 md:pt-30 lg:pt-55 xl:pt-55 2xl:pt-55 px-2 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-25">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
         

          {/* RIGHT: Gallery */}
          <div className="space-y-4">
            {/* Breadcrumbs */}
            <div className="flex items-center justify-start gap-2 text-xs text-slate-500">
              <span>الرئيسية</span>
              <ChevronLeft className="h-4 w-4" />
              <span>البضائع</span>
              <ChevronLeft className="h-4 w-4" />
              <span className="text-slate-700">تفاصيل المنتج</span>
            </div>

            {/* Main image */}
            <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-slate-50 shadow-sm">
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className="h-[320px] w-full object-cover"
              />

              {/* Floating actions (left side inside image) */}
              <div className="absolute left-3 top-3 flex flex-col gap-2">
                <button
                  onClick={() => setLiked((v) => !v)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-sm ring-1 ring-slate-200 backdrop-blur hover:bg-white"
                  aria-label={liked ? "إزالة من المفضلة" : "إضافة إلى المفضلة"}
                >
                  <Heart
                    className={`h-4 w-4 ${liked ? "fill-current" : ""}`}
                  />
                </button>
                <button
                  onClick={() => {
                    try {
                      navigator.clipboard?.writeText(window.location.href);
                    } catch { /* empty */ }
                  }}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-sm ring-1 ring-slate-200 backdrop-blur hover:bg-white"
                  aria-label="مشاركة"
                >
                  <Share2 className="h-4 w-4" />
                </button>
              </div>

              {/* Left arrow */}
              <button
                onClick={() => {
                  const idx = images.findIndex((i) => i.id === activeImageId);
                  const next = (idx - 1 + images.length) % images.length;
                  setActiveImageId(images[next].id);
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-sm ring-1 ring-slate-200 backdrop-blur hover:bg-white"
                aria-label="الصورة السابقة"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Right arrow */}
              <button
                onClick={() => {
                  const idx = images.findIndex((i) => i.id === activeImageId);
                  const next = (idx + 1) % images.length;
                  setActiveImageId(images[next].id);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-sm ring-1 ring-slate-200 backdrop-blur hover:bg-white"
                aria-label="الصورة التالية"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex items-center justify-start gap-2">
              {images.slice(1).map((img) => {
                const active = img.id === activeImageId;
                return (
                  <button
                    key={img.id}
                    onClick={() => setActiveImageId(img.id)}
                    className={`relative overflow-hidden rounded-md border bg-white shadow-sm transition ${
                      active
                        ? "border-slate-900"
                        : "border-slate-200 hover:border-slate-400"
                    }`}
                    aria-label={`اختيار: ${img.alt}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-16 w-24 object-cover"
                    />
                  </button>
                );
              })}
            </div>

       

          </div>
            {/* LEFT: Info */}
          <div className="space-y-6">
            <div className="text-right">
              <div className="flex items-center justify-start gap-3">
                <span className="text-xl" aria-hidden>
                  🇨🇳
                </span>
                <h1 className="text-lg font-semibold tracking-tight">
                  هاتف <span className="font-bold">IPHONE</span>
                </h1>
              </div>
              <div>
                <div className="my-4 text-amber-500">
                    <StarRating value={5} />
                </div>
                <p className=" text-sm leading-6 text-slate-600">
                    مجموعة هواتف أبل العصرية، متميزة في الأداء والكاميرا
                    والاستخدام اليومي، وتتميز بجودة تصنيع عالية وكفاءة أداء تدوم
                    طويلاً. بيع بالجملة فقط.
                </p>
              </div>
              
            </div>

            <button className="w-full rounded-md bg-blue-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
              عرض قائمة البضائع
            </button>

            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-start gap-2 text-slate-700">
                <MapPin className="h-4 w-4" />
                <span>الرياض، المملكة العربية السعودية</span>
              </div>

              <div className="text-right">
                <div className="text-slate-500">السعر</div>
                <div className="text-base font-semibold">
                  35,245.51 <span className="text-xs font-medium">SAR</span>
                </div>
              </div>

              <div className="flex items-center justify-start gap-2 text-slate-700">
                <Building2 className="h-4 w-4" />
                <span>البائع: شركة أحمد</span>
              </div>

              <div className="flex items-center justify-start gap-2 text-slate-700">
                <BadgeCheck className="h-4 w-4" />
                <span>متوفرة</span>
              </div>
            </div>

            {/* Company card */}
            <div className="w-full  rounded-md border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-start justify-between">
                <div className="h-10 w-10 rounded-full bg-slate-200" aria-hidden />

                <div className="text-center flex-1">
                  <div className="text-xs font-semibold tracking-wide text-slate-900">
                    COMPANY NAME
                  </div>
                  <div className="mt-2 flex items-center justify-center gap-1 text-amber-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-xs text-slate-700">5.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
             {/* Tabs */}
            {/* Tabs */}
<div className="pt-2">
  <div className="flex items-center justify-start gap-6 border-b border-slate-200">
    <button
      onClick={() => setTab("company")}
      className={`py-3 text-sm font-semibold border-b-2 ${
        tab === "company"
          ? "text-slate-900 border-amber-400"
          : "text-slate-500 border-transparent hover:text-slate-700"
      }`}
    >
      ملف تعريف الشركة
    </button>

    <button
      onClick={() => setTab("desc")}
      className={`py-3 text-sm font-semibold border-b-2 ${
        tab === "desc"
          ? "text-slate-900 border-amber-400"
          : "text-slate-500 border-transparent hover:text-slate-700"
      }`}
    >
      وصف البضائع
    </button>
  </div>

  {/* Content */}
  <div className="mt-3 rounded-md border border-slate-200 bg-white overflow-hidden">
    {tab === "company" ? (
      <div className="flex flex-col md:flex-row">
        {/* Logo block (يمين على الشاشات الكبيرة) */}
        <div className="md:w-44  flex items-center justify-center p-6 border-b md:border-b-0 md:border-l border-slate-200">
          <div className="h-35 w-35 ">
            <img src={Rectangle1} alt="Rectangle1" />
          </div>
        </div>

        {/* Table */}
        <div className="flex-1 divide-y divide-slate-200">
          <div className="grid grid-cols-[1fr_80%]">
            
            <div className="px-4 py-3 text-sm font-semibold bg-slate-50 border-l border-slate-200">
              رقم التحقق
            </div>
            <div className="px-4 py-3 text-sm text-slate-700">54364#</div>
          </div>

          <div className="grid grid-cols-[1fr_80%]">
            
            <div className="px-4 py-3 text-sm font-semibold bg-slate-50 border-l border-slate-200">
              شروط الدفع
            </div>
            <div className="px-4 py-3 text-sm text-slate-700">
              LC, T/T, D/P, PayPal, Western Union
            </div>
          </div>

          <div className="grid grid-cols-[1fr_80%]">
            
            <div className="px-4 py-3 text-sm font-semibold bg-slate-50 border-l border-slate-200">
              تقييم الشركة
            </div>
            <div className="px-4 py-3 text-sm text-slate-700">
              <div className="flex items-center justify-start gap-2 text-amber-500">
                <Star className="h-4 w-4 fill-current" />
                <span className="text-slate-700 text-sm">5.0</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-[1fr_80%]">
            
            <div className="px-4 py-3 text-sm font-semibold bg-slate-50 border-l border-slate-200">
              البضائع الرئيسية
            </div>
            <div className="px-4 py-3 text-sm text-slate-700">
              هواتف والإلكترونيات
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="p-4">
        <p className="text-sm leading-7 text-slate-700">
          اكتب هنا وصف البضائع… (نفس فكرة الباراجراف الطويل اللي عندك).
        </p>
      </div>
    )}
  </div>
</div>
      </div>

      {/* Subtle footer spacing */}
      <div className="h-10" />
    </div>
  );
}
