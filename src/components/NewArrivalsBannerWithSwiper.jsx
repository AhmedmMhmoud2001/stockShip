
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function NewArrivalsBannerWithSwiper() {
  const slides = [
    {
      id: 1,
      badge: "منتجات جديدة مع توصيل سريع!",
      title1: "اكتشف أحدث",
      title2: "مجموعاتنا من اليوم!",
      primary: "تسوق الآن",
      secondary: "توصيل سريع",
      image:
        "https://images.unsplash.com/photo-1607082349566-1870e3fdc793?w=1200&q=80&auto=format&fit=crop",
      // ألوان خلفية (اختياري)
      gradient: "from-[#6D2AA8] via-[#5B2A9F] to-[#3E1F86]",
    },
    {
      id: 2,
      badge: "عروض قوية لفترة محدودة!",
      title1: "وفر أكثر",
      title2: "على منتجات العناية",
      primary: "شاهد العروض",
      secondary: "توصيل سريع",
      image:
        "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=1200&q=80&auto=format&fit=crop",
      gradient: "from-[#2A63A8] via-[#245AA0] to-[#183A7A]",
    },
    {
      id: 3,
      badge: "وصل حديثًا",
      title1: "منتجات مختارة",
      title2: "بعناية لك!",
      primary: "تسوق الآن",
      secondary: "الدفع عند الاستلام",
      image:
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1200&q=80&auto=format&fit=crop",
      gradient: "from-[#A82A6B] via-[#9F2A5B] to-[#861F3E]",
    },
  ];

  return (
    <section dir="rtl" className="w-full px-4">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={900}
        pagination={{ clickable: true }}
        className="w-full"
      >
        {slides.map((s) => (
          <SwiperSlide key={s.id}>
            <BannerSlide slide={s} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

function BannerSlide({ slide }) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl bg-gradient-to-r ${slide.gradient}`}
    >
      {/* ديكور */}
      <div className="relative flex flex-row-reverse items-center justify-between gap-6 p-6 md:flex-row-reverse md:p-10">
        {/* يسار: صورة */}
        <div className=" w-full  md:w-[48%]">
          <img
            src={slide.image}
            alt="banner"
            className="h-[180px] w-full rounded-2xl object-cover md:h-[240px]"
            draggable="false"
          />
        </div>

        {/* يمين: نصوص + أزرار */}
        <div className=" w-full text-right text-white  md:w-[52%]">
          <div className="inline-flex items-center rounded-lg bg-[#2B135F]/70 px-4 py-2 text-sm font-semibold">
            {slide.badge}
          </div>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
            {slide.title1} <br />
            {slide.title2}
          </h2>

          <div className="mt-6 flex flex-wrap items-center justify- gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl bg-[#0F2D3A]/80 px-4 py-3 text-sm font-bold hover:bg-[#0F2D3A] transition"
            >
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-orange-500">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M12 6v6l4 2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </span>
              {slide.secondary}
            </button>

            <button
              type="button"
              className="rounded-xl bg-orange-500 px-7 py-3 text-sm font-extrabold text-white hover:bg-orange-600 transition"
            >
              {slide.primary}
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
}
