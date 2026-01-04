import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
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
import { Link } from "react-router-dom";
import { ROUTES, getSellerProductsUrl } from "../routes";

const StarRating = ({ value = 5 }) => {
  const { t } = useTranslation();
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  return (
    <div className="flex items-center justify-start gap-1" aria-label={`${t("productDetails.rating")} ${value} ${t("common.of")} 5`}>
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
  const { t, i18n } = useTranslation();
  const currentDir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  
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
    <div dir={currentDir} className="min-h-screen bg-white text-slate-900">
      <div className="w-full pt-25 sm:pt-30 md:pt-30 lg:pt-55 xl:pt-55 2xl:pt-55">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
            {/* RIGHT: Gallery */}
            <div className="space-y-3 sm:space-y-4">
              {/* Breadcrumbs */}
              <div className={`flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-500 ${currentDir === 'rtl' ? 'justify-start' : 'justify-end'}`}>
                <span>{t("productDetails.home")}</span>
                <ChevronLeft className={`h-3 w-3 sm:h-4 sm:w-4 ${currentDir === 'ltr' ? 'rotate-180' : ''}`} />
                <span>{t("productDetails.products")}</span>
                <ChevronLeft className={`h-3 w-3 sm:h-4 sm:w-4 ${currentDir === 'ltr' ? 'rotate-180' : ''}`} />
                <span className="text-slate-700">{t("productDetails.productDetails")}</span>
              </div>

              {/* Main image */}
              <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-slate-50 shadow-sm">
                <img
                  src={activeImage.src}
                  alt={activeImage.alt}
                  className="h-[240px] sm:h-[320px] w-full object-cover"
                />

                {/* Floating actions (left side inside image) */}
                <div className={`absolute top-2 sm:top-3 flex flex-col gap-1.5 sm:gap-2 ${currentDir === 'rtl' ? 'left-2 sm:left-3' : 'right-2 sm:right-3'}`}>
                  <button
                    onClick={() => setLiked((v) => !v)}
                    className="inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white/90 shadow-sm ring-1 ring-slate-200 backdrop-blur hover:bg-white transition"
                    aria-label={liked ? t("productDetails.removeFromFavorites") : t("productDetails.addToFavorites")}
                  >
                    <Heart
                      className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${liked ? "fill-current text-red-500" : ""}`}
                    />
                  </button>
                  <button
                    onClick={() => {
                      try {
                        navigator.clipboard?.writeText(window.location.href);
                      } catch {
                        // empty
                      }
                    }}
                    className="inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white/90 shadow-sm ring-1 ring-slate-200 backdrop-blur hover:bg-white transition"
                    aria-label={t("productDetails.share")}
                  >
                    <Share2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </button>
                </div>

                {/* Left arrow */}
                <button
                  onClick={() => {
                    const idx = images.findIndex((i) => i.id === activeImageId);
                    const next = (idx - 1 + images.length) % images.length;
                    setActiveImageId(images[next].id);
                  }}
                  className={`absolute top-1/2 -translate-y-1/2 inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/90 shadow-sm ring-1 ring-slate-200 backdrop-blur hover:bg-white transition ${currentDir === 'rtl' ? 'left-2 sm:left-3' : 'right-2 sm:right-3'}`}
                  aria-label={t("productDetails.previousImage")}
                >
                  <ChevronLeft className={`h-4 w-4 sm:h-5 sm:w-5 ${currentDir === 'ltr' ? 'rotate-180' : ''}`} />
                </button>

                {/* Right arrow */}
                <button
                  onClick={() => {
                    const idx = images.findIndex((i) => i.id === activeImageId);
                    const next = (idx + 1) % images.length;
                    setActiveImageId(images[next].id);
                  }}
                  className={`absolute top-1/2 -translate-y-1/2 inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/90 shadow-sm ring-1 ring-slate-200 backdrop-blur hover:bg-white transition ${currentDir === 'rtl' ? 'right-2 sm:right-3' : 'left-2 sm:left-3'}`}
                  aria-label={t("productDetails.nextImage")}
                >
                  <ChevronRight className={`h-4 w-4 sm:h-5 sm:w-5 ${currentDir === 'ltr' ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Thumbnails */}
              <div className="flex items-center justify-start gap-1.5 sm:gap-2 overflow-x-auto pb-2">
                {images.slice(1).map((img) => {
                  const active = img.id === activeImageId;
                  return (
                    <button
                      key={img.id}
                      onClick={() => setActiveImageId(img.id)}
                      className={`relative overflow-hidden rounded-md border bg-white shadow-sm transition flex-shrink-0 ${
                        active
                          ? "border-slate-900 ring-2 ring-slate-900"
                          : "border-slate-200 hover:border-slate-400"
                      }`}
                      aria-label={`${t("productDetails.selectImage")}: ${img.alt}`}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="h-14 w-20 sm:h-16 sm:w-24 object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* LEFT: Info */}
            <div className="space-y-4 sm:space-y-6">
              <div className={currentDir === 'rtl' ? 'text-right' : 'text-left'}>
                <div className={`flex items-center gap-2 sm:gap-3 ${currentDir === 'rtl' ? 'justify-start' : 'justify-end'}`}>
                  <span className="text-lg sm:text-xl" aria-hidden>
                    🇨🇳
                  </span>
                  <h1 className="text-base sm:text-lg font-semibold tracking-tight">
                    {i18n.language === 'ar' ? 'هاتف' : 'Phone'} <span className="font-bold">IPHONE</span>
                  </h1>
                </div>
                <div>
                  <div className="my-3 sm:my-4 text-amber-500">
                    <StarRating value={5} />
                  </div>
                  <p className="text-xs sm:text-sm leading-5 sm:leading-6 text-slate-600">
                    {i18n.language === 'ar' 
                      ? 'مجموعة هواتف أبل العصرية، متميزة في الأداء والكاميرا والاستخدام اليومي، وتتميز بجودة تصنيع عالية وكفاءة أداء تدوم طويلاً. بيع بالجملة فقط.'
                      : 'A collection of modern Apple phones, distinguished by performance, camera, and daily use, and characterized by high manufacturing quality and long-lasting performance. Wholesale only.'}
                  </p>
                </div>
              </div>

              <Link
                to={getSellerProductsUrl("x")}
                className="block w-full rounded-md bg-blue-900 px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
              >
                {t("seller.viewProducts")}
              </Link>

              <div className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-slate-700 justify-start">
                  <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span className="break-words">{i18n.language === 'ar' ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Kingdom of Saudi Arabia'}</span>
                </div>

                <div className="text-right">
                  <div className="text-slate-500">{t("products.price")}</div>
                  <div className="text-sm sm:text-base font-semibold">
                    35,245.51 <span className="text-xs font-medium">SAR</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-slate-700 justify-start">
                  <Building2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span className="break-words">{t("productDetails.sellerLabel")} {i18n.language === 'ar' ? 'شركة أحمد' : 'Ahmed Company'}</span>
                </div>

                <div className="flex items-center gap-2 text-slate-700 justify-start">
                  <BadgeCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0 text-green-600" />
                  <span>{t("products.available")}</span>
                </div>
              </div>

              {/* Company card */}
              <Link to={ROUTES.COMPANY_PROFILE} className="block">
                <div className="w-full rounded-md border border-slate-200 bg-slate-50 p-3 sm:p-4 hover:bg-slate-100 transition cursor-pointer">
                  <div className="flex items-start justify-between gap-3">
                    <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-slate-200 flex-shrink-0" aria-hidden />

                    <div className="text-center flex-1 min-w-0">
                      <div className="text-xs sm:text-sm font-semibold tracking-wide text-slate-900 truncate">
                        COMPANY NAME
                      </div>
                      <div className="mt-1.5 sm:mt-2 flex items-center justify-center gap-1 text-amber-500">
                        <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current" />
                        <span className="text-xs text-slate-700">5.0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Tabs */}
          <div className="pt-2 sm:pt-4">
            <div className={`flex items-center gap-4 sm:gap-6 border-b border-slate-200 overflow-x-auto ${currentDir === 'rtl' ? 'justify-start' : 'justify-end'}`}>
              <button
                onClick={() => setTab("company")}
                className={`py-2.5 sm:py-3 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition ${
                  tab === "company"
                    ? "text-slate-900 border-amber-400"
                    : "text-slate-500 border-transparent hover:text-slate-700"
                }`}
              >
                {t("productDetails.companyProfile")}
              </button>

              <button
                onClick={() => setTab("desc")}
                className={`py-2.5 sm:py-3 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition ${
                  tab === "desc"
                    ? "text-slate-900 border-amber-400"
                    : "text-slate-500 border-transparent hover:text-slate-700"
                }`}
              >
                {t("productDetails.goodsDescription")}
              </button>
            </div>

            {/* Content */}
            <div className="mt-3 sm:mt-4 rounded-md border border-slate-200 bg-white overflow-hidden">
              {tab === "company" ? (
                <div className="flex flex-col md:flex-row">
                  {/* Logo block */}
                  <div className="md:w-44 flex items-center justify-center p-4 sm:p-6 border-b md:border-b-0 md:border-l border-slate-200">
                    <div className="h-24 w-24 sm:h-35 sm:w-35">
                      <img src={Rectangle1} alt="Rectangle1" className="w-full h-full object-contain" />
                    </div>
                  </div>

                  {/* Table */}
                  <div className="flex-1 divide-y divide-slate-200">
                    <div className="grid grid-cols-[1fr_1.5fr] sm:grid-cols-[1fr_2fr]">
                      <div className={`px-3 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm font-semibold bg-slate-50 border-slate-200 ${currentDir === 'rtl' ? 'border-l' : 'border-r'}`}>
                        {t("productDetails.verificationNumber")}
                      </div>
                      <div className="px-3 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-slate-700 break-words">54364#</div>
                    </div>

                    <div className="grid grid-cols-[1fr_1.5fr] sm:grid-cols-[1fr_2fr]">
                      <div className={`px-3 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm font-semibold bg-slate-50 border-slate-200 ${currentDir === 'rtl' ? 'border-l' : 'border-r'}`}>
                        {t("productDetails.paymentTerms")}
                      </div>
                      <div className="px-3 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-slate-700 break-words">
                        LC, T/T, D/P, PayPal, Western Union
                      </div>
                    </div>

                    <div className="grid grid-cols-[1fr_1.5fr] sm:grid-cols-[1fr_2fr]">
                      <div className={`px-3 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm font-semibold bg-slate-50 border-slate-200 ${currentDir === 'rtl' ? 'border-l' : 'border-r'}`}>
                        {t("productDetails.companyRating")}
                      </div>
                      <div className="px-3 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-slate-700">
                        <div className={`flex items-center gap-1.5 sm:gap-2 text-amber-500 ${currentDir === 'rtl' ? 'justify-start' : 'justify-end'}`}>
                          <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current" />
                          <span className="text-slate-700 text-xs sm:text-sm">5.0</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-[1fr_1.5fr] sm:grid-cols-[1fr_2fr]">
                      <div className={`px-3 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm font-semibold bg-slate-50 border-slate-200 ${currentDir === 'rtl' ? 'border-l' : 'border-r'}`}>
                        {t("productDetails.mainGoods")}
                      </div>
                      <div className="px-3 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-slate-700 break-words">
                        {i18n.language === 'ar' ? 'هواتف والإلكترونيات' : 'Phones and Electronics'}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-3 sm:p-4">
                  <p className="text-xs sm:text-sm leading-6 sm:leading-7 text-slate-700">
                    {t("productDetails.goodsDescriptionPlaceholder")}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Subtle footer spacing */}
          <div className="h-10" />
        </div>
      </div>
    </div>
  );
}
