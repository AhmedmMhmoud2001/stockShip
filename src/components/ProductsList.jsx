import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ProductCard from "./ProductCard";

export default function ProductsCarousel({title}) {
  const products = [
    { id: 1, category: "هواتف ذكية", title: "iPhone 14 Pro", image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=1200&q=80&auto=format&fit=crop", rating: 5, reviews: 65, subtitle: "لوريم إيبسوم دولور سيت أم", badgeText: "FOR SALE" },
    { id: 2, category: "هواتف ذكية", title: "iPhone 14 Pro", image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=1200&q=80&auto=format&fit=crop", rating: 5, reviews: 65, subtitle: "لوريم إيبسوم دولور سيت أم", badgeText: "FOR SALE" },
    { id: 3, category: "هواتف ذكية", title: "iPhone 14 Pro", image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=1200&q=80&auto=format&fit=crop", rating: 5, reviews: 65, subtitle: "لوريم إيبسوم دولور سيت أم", badgeText: "FOR SALE" },
    { id: 4, category: "هواتف ذكية", title: "iPhone 14 Pro", image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=1200&q=80&auto=format&fit=crop", rating: 5, reviews: 65, subtitle: "لوريم إيبسوم دولور سيت أم", badgeText: "FOR SALE" },
    { id: 5, category: "هواتف ذكية", title: "iPhone 14 Pro", image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=1200&q=80&auto=format&fit=crop", rating: 5, reviews: 65, subtitle: "لوريم إيبسوم دولور سيت أم", badgeText: "FOR SALE" },
    { id: 6, category: "هواتف ذكية", title: "iPhone 14 Pro", image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=1200&q=80&auto=format&fit=crop", rating: 5, reviews: 65, subtitle: "لوريم إيبسوم دولور سيت أم", badgeText: "FOR SALE" },
  ];

  return (
    <section className="my-10" dir="rtl">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Title */}
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">{title}</h2>
          </div>
        </div>

      {/* Swiper */}
      <Swiper
        modules={[Autoplay, Pagination, Navigation, Keyboard]}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false, 
          pauseOnMouseEnter: true, 
        }}
        loop={true}
        speed={700}
        pagination={{ 
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          enabled: true,
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        spaceBetween={12}
        slidesPerView={1.2}
        breakpoints={{
          375: { slidesPerView: 1.3, spaceBetween: 12 },
          640: { slidesPerView: 2, spaceBetween: 16 },
          768: { slidesPerView: 2.5, spaceBetween: 16 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
          1280: { slidesPerView: 4, spaceBetween: 24 },
          1536: { slidesPerView: 4, spaceBetween: 24 },
        }}
        grabCursor={true}
        keyboard={{ enabled: true }}
      >
        {products.map((p) => (
          <SwiperSlide key={p.id}>
            <ProductCard
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
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </section>
  );
}
