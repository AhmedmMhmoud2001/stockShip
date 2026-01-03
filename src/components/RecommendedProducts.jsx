// src/components/RecommendedProducts.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import ProductCard from "./ProductCard";

export default function RecommendedProducts() {
  const { t, i18n } = useTranslation();
  const currentDir = i18n.language === 'ar' ? 'rtl' : 'ltr';

  const products = [
    { id: 1, category: t("categories.smartphones"), title: "iPhone 14 Pro", rating: 5, reviews: 65, subtitle: t("recommended.shortDescription"), badgeText: "RECOMMENDED", image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=1200&q=80&auto=format&fit=crop" },
    { id: 2, category: t("categories.smartphones"), title: "Samsung S24", rating: 4, reviews: 40, subtitle: t("recommended.shortDescription"), badgeText: "RECOMMENDED", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&q=80&auto=format&fit=crop" },
    { id: 3, category: t("categories.headphones"), title: "AirPods Pro", rating: 5, reviews: 120, subtitle: t("recommended.shortDescription"), badgeText: "RECOMMENDED", image: "https://images.unsplash.com/photo-1585386959984-a41552231693?w=1200&q=80&auto=format&fit=crop" },
    { id: 4, category: t("categories.watches"), title: "Apple Watch", rating: 5, reviews: 32, subtitle: t("recommended.shortDescription"), badgeText: "RECOMMENDED", image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=1200&q=80&auto=format&fit=crop" },
    { id: 5, category: t("categories.laptops"), title: "MacBook Pro", rating: 5, reviews: 89, subtitle: t("recommended.shortDescription"), badgeText: "RECOMMENDED", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200&q=80&auto=format&fit=crop" },

    { id: 6, category: t("categories.tablets"), title: "iPad Pro", rating: 4, reviews: 53, subtitle: t("recommended.shortDescription"), badgeText: "RECOMMENDED", image: "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=1200&q=80&auto=format&fit=crop" },
    { id: 7, category: t("categories.accessories"), title: "Power Bank", rating: 4, reviews: 21, subtitle: t("recommended.shortDescription"), badgeText: "RECOMMENDED", image: "https://images.unsplash.com/photo-1619946794135-5bc917a27793?w=1200&q=80&auto=format&fit=crop" },
    { id: 8, category: t("categories.screens"), title: "Monitor 27\"", rating: 5, reviews: 18, subtitle: t("recommended.shortDescription"), badgeText: "RECOMMENDED", image: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=1200&q=80&auto=format&fit=crop" },
    { id: 9, category: t("categories.headphones"), title: "Headset Gaming", rating: 4, reviews: 76, subtitle: t("recommended.shortDescription"), badgeText: "RECOMMENDED", image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=1200&q=80&auto=format&fit=crop" },
    { id: 10, category: t("categories.accessories"), title: "Keyboard", rating: 5, reviews: 44, subtitle: t("recommended.shortDescription"), badgeText: "RECOMMENDED", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=1200&q=80&auto=format&fit=crop" },
  ];

  return (
    <section className="mt-10 mb-10" dir={currentDir}>
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Title */}
        <div className="mb-4">
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 ${currentDir === 'rtl' ? 'text-right' : 'text-left'}`}>
            {t("recommended.title")}
          </h2>
        </div>

        {/* Grid: 5 فوق + 5 تحت على الشاشات الكبيرة */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            id={p.id}
            category={p.category}
            title={p.title}
            image={p.image}
            rating={p.rating}
            reviews={p.reviews}
            subtitle={p.subtitle}
            badgeText={p.badgeText}
            onDetails={() => alert(p.title)}
          />
        ))}
        </div>
      </div>
    </section>
  );
}
