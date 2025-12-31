// import React from "react";
import contact from "../assets/imgs/contact.png";
import Frame4 from "../assets/imgs/Frame4.png";
import Clippathgroup from "../assets/imgs/Clippathgroup.png";
import chairs from "../assets/imgs/chairs.png";
import cleaner from "../assets/imgs/9819.png";
import phones from "../assets/imgs/phones.png";
import bags from "../assets/imgs/1773.png";
import screans from "../assets/imgs/screans.png";
import Group22 from "../assets/imgs/Group22.png";
import unsplash from "../assets/imgs/unsplash_fzc23K1F_b0.png";
import group18 from "../assets/imgs/Group18.png";

export default function FeaturedCategories() {
  const features = [
    {
      title: "التواصل",
      desc: "سرعة التواصل ومراقبة المفاوضات",
      icon: contact,
    },
    {
      title: "خدماتنا التجارية",
      desc: "عرض مختلف البضائع في جميع الفئات",
      icon: Frame4,
    },
    {
      title: "الأمان",
      desc: "التأكد من هوية المورد والمستخدم",
      icon: Clippathgroup,
    },
  ];

  const bigCard = {
    title: "أثاث منزلي ومكتبي",
    desc: "نوفر لك تصميم وطلب أثاث منزلي ومكتبي بأفضل جودة وبأسعار مناسبة للجميع.",
    image: chairs,
  };

  return (
    <section
      dir="rtl"
      className="w-full bg-slate-50 py-8 px-2 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-25"
    >
      <div className="w-full m-auto ">
        {/* Top features */}
        <div className="w-full flex flex-col md:flex-row justify-around items-start md:items-center gap-6 md:gap-7">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex items-center gap-3 w-full md:w-auto"
            >
              <img
                className="inline-flex items-center justify-center shrink-0"
                src={f.icon}
                alt={f.title}
              />
              <div className="text-right w-full md:w-[291.33px]">
                <div className="text-lg font-bold text-slate-800 w-full text-[24px]">
                  {f.title}
                </div>
                <div className="text-sm text-slate-700 font-bold">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="mt-8 flex flex-col gap-6 lg:flex-row h-auto lg:h-112.5">
          {/* right card */}
          <div className="w-full lg:w-[70%] h-auto lg:h-112.5 overflow-hidden mb-6">
            <div className="flex flex-col gap-6 lg:flex-row overflow-hidden mb-6 h-auto lg:h-[48%]">
              {/* one */}
              <div className="w-full lg:w-[40%] bg-[#373737] min-h-50 lg:min-h-0 lg:h-full group relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 p-6 text-white w-[80%]">
                  <h3 className="text-2xl font-bold">أجهزة منزلية</h3>
                  <p>
                    {" "}
                    لوريم ايبسوم دولار سيت أميت نو لوريم ايبسوم دولار سيت أميت
                    نو لوريم ايبسوم دولار سيت أميت نت أميت نوو
                  </p>
                </div>
                <div className="absolute inset-0 p-6 left-0 pr-40">
                  <img
                    src={cleaner}
                    alt="cleaner"
                    className="max-w-full h-auto"
                  />
                </div>
              </div>

              {/* two */}
              <div className="w-full lg:w-[60%] bg-[#202731] min-h-50 lg:min-h-0 lg:h-full group relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 p-6 pt-12 text-white w-[80%]">
                  <h3 className="text-2xl font-bold">هواتف ذكية </h3>
                  <p className="w-[250px]">
                    {" "}
                    لوريم ايبسوم دولار سيت أميت نو لوريم ايبسوم دولارت أميت نو
                    سيت أميت نو لوريم ايبسوم دولار سيت أميت نو
                  </p>
                </div>
                <div className="absolute inset-0 p-6 left-0 pr-70">
                  <img
                    src={phones}
                    alt="phones"
                    className="max-w-full h-auto"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 lg:flex-row overflow-hidden mb-6 h-auto lg:h-[48%]">
              {/* tree */}
              <div className="w-full lg:w-[60%] bg-[#0A0710] min-h-50 lg:min-h-0 lg:h-full group relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 p-6 pt-12 text-white w-[80%]">
                  <h3 className="text-2xl font-bold">شاشات إلكترونية</h3>
                  <p className="w-62.5">
                    {" "}
                    لوريم ايبسوم دولار سيت أميت نو لوريم ايبسوم دولارت أميت نو
                    سيت أميت نو لوريم ايبسوم دولار سيت أميت نو
                  </p>
                </div>
                <div className="absolute inset-0 p-6 left-0 pr-70">
                  <img
                    src={screans}
                    alt="screans"
                    className="max-w-full h-auto"
                  />
                </div>
              </div>

              {/* four */}
              <div className="w-full lg:w-[40%] bg-[#1A181D] min-h-50 lg:min-h-0 lg:h-full group relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 p-6 text-white w-full">
                  <h3 className="text-2xl font-bold">
                    حقائب و كل المنتجات النسائية
                  </h3>
                  <p className="w-[70%]">
                    {" "}
                    لوريم ايبسوم دولار سيت أميت نو لوريم ايبسوم دولار سيت أميت
                    نو لوريم ايبسوم
                  </p>
                </div>
                <div className="absolute inset-0 pr-45 pt-15 bottom-0">
                  <img src={bags} alt="bags" className="max-w-full h-auto" />
                </div>
              </div>
            </div>
          </div>

          {/* lift grid of big cards */}
          <div className="w-full lg:w-[30%] h-auto lg:h-112.5">
            <div className="h-auto lg:h-112.5 min-h-80 group relative overflow-hidden rounded-2xl bg-[#504343] text-white shadow-sm">
              <img
                src={bigCard.image}
                alt={bigCard.title}
                className="h-65 sm:h-80 lg:h-90 w-full object-cover opacity-90 transition duration-300 group-hover:scale-[1.02] mt-0 lg:mt-25"
              />

              {/* content */}
              <div className="absolute inset-0 p-6">
                <h3 className="text-2xl font-extrabold">{bigCard.title}</h3>
                <p className="mt-3 max-w-[90%] text-sm leading-6 text-white/85">
                  {bigCard.desc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom promos */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Promo 1 */}
          <div className="relative overflow-hidden rounded-2xl bg-(--nav-bg) text-white shadow-sm h-auto md:h-42">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 relative overflow-hidden">
              <div className="text-right">
                <div className="text-2xl font-extrabold pb-4">
                  أعلى مرتبة بضائع
                </div>
                <button className="rounded-md bg-white px-5 py-2 text-sm font-bold text-blue-700 hover:bg-white">
                  تصفح ←
                </button>
              </div>

              <div className="flex items-center gap-4 self-end sm:self-auto">
                <div className="text-4xl w-30 sm:w-37.5">
                  <img
                    src={unsplash}
                    alt="hugeicons"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              <img className="absolute" src={group18} alt="group18" />
            </div>
            <div className="pointer-events-none absolute -left-10 top-0 h-full w-40 rotate-12 bg-white/10 blur-2xl" />
          </div>

          {/* Promo 2 */}
          <div className="relative overflow-hidden rounded-2xl bg-(--nav-bg) text-white shadow-sm h-auto md:h-42">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 relative overflow-hidden">
              <div className="text-right">
                <div className="text-2xl font-extrabold pb-4">
                  أفضل البائعيين
                </div>
                <button className="rounded-md bg-white px-5 py-2 text-sm font-bold text-blue-700 hover:bg-white">
                  تصفح ←
                </button>
              </div>

              <div className="flex items-center gap-4 self-end sm:self-auto">
                <div className="text-4xl w-30 sm:w-37.5">
                  <img src={Group22} alt="Group22" className="w-full h-auto" />
                </div>
              </div>

              <img className="absolute" src={group18} alt="group18" />
            </div>
            <div className="pointer-events-none absolute -left-10 top-0 h-full w-40 rotate-12 bg-white/10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
