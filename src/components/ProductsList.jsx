import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

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
    <section className=" my-10 mx-2 sm:mx-6 md:mx-10 lg:mx-16 xl:mx-24 2xl:mx-25" dir="rtl">
      {/* Title */}
      <div className="mb-4 flex items-center justify-between ">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
        </div>

       
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 1000, 
          disableOnInteraction: false, 
          pauseOnMouseEnter: true, 
        }}
        loop={true}
        speed={700}
        pagination={{ clickable: true }}
        spaceBetween={16}
        slidesPerView={1.1}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 16 },
          1024: { slidesPerView: 3, spaceBetween: 16 },
          1280: { slidesPerView: 5, spaceBetween: 16 }, 
        }}
      >
        {products.map((p) => (
          <SwiperSlide key={p.id}>
            <ProductCard
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
    </section>
  );
}
