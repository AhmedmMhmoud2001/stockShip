import { useEffect, useState } from "react";
import translate from "../assets/imgs/translate.png";
import hugeicons from "../assets/imgs/hugeicons_notification-01.png";
import lucide_box from "../assets/imgs/lucide_box.png";
import Vector from "../assets/imgs/Vector.png";
import lamp from "../assets/imgs/lamp.png";
import smartphone from "../assets/imgs/smart-phone-01.png";
import shoes from "../assets/imgs/running-shoes.png";
import shirt from "../assets/imgs/shirt-01.png";
import textalign from "../assets/imgs/textalign-left.png";
import dropdown from "../assets/imgs/arrow-down.png";
import { Link } from "react-router-dom";
export default function NavbarBottom() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { label: "اللغة", icon: translate },
    { label: "الإشعارات", icon: hugeicons ,link:"/Notification"},
    { label: "طلباتي", icon: lucide_box  },
  ];

  const rightItems = [
    { label: "المفروشات", icon: Vector, arrow: dropdown },
    { label: "الديكورات", icon: lamp, arrow: dropdown },
    { label: "إلكترونيات", icon: smartphone, arrow: dropdown },
    { label: "احذيه", icon: shoes, arrow: dropdown },
    { label: "ملابس", icon: shirt, arrow: dropdown },
    { label: "جميع الملفات", icon: textalign, arrow: dropdown },
  ];

  // (اختياري) قفل الاسكرول وقت فتح السايدبار
  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  return (
    <div className="w-full" >
      {/* ===== Sidebar Overlay ===== */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity ${
          isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* ===== Sidebar ===== */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm
        bg-white shadow-2xl transition-transform duration-300
        ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}
        aria-hidden={!isSidebarOpen}
      >
        {/* Header */}
        <div className=" items-center justify-between  border-b">
          <div className="font-['Almarai'] font-bold text-lg">القائمة</div>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="w-10 h-10 rounded-full grid place-items-center hover:bg-black/5"
            aria-label="Close sidebar"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-6">
          {/* Top quick items */}
          <div className="space-y-2">
            <div className="font-['Almarai'] font-bold text-sm opacity-70">اختصارات</div>
            <div className="grid gap-2">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-black/5"
                >
                  <img src={item.icon} alt={item.label} className="w-6 h-6 object-contain" />
                  <span className="font-['Almarai'] font-bold">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-2">
            <div className="font-['Almarai'] font-bold text-sm opacity-70">الأقسام</div>
            <div className="grid gap-2">
              {rightItems.map((item, index) => (
                <button
                  key={index}
                  className="items-center justify-between gap-3 w-full p-3 rounded-xl hover:bg-black/5"
                >
                  <div className="flex items-center gap-3">
                    <img src={item.icon} alt={item.label} className="w-6 h-6 object-contain" />
                    <span className="font-['Almarai'] font-bold">{item.label}</span>
                  </div>
                  <img src={item.arrow} alt="arrow" className="w-5 h-5 object-contain opacity-70" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* ===== Bottom Navbar (Mobile: transparent + only icon) ===== */}
      <div className=" bottom-4  z-30 ">
        <div
          className="
            w-full 
            flex items-center justify-between
            rounded-t-lg rounded-b-[50px]
            shadow-[0_-8px_24px_rgba(0,0,0,0.10)]
            overflow-x-auto
            bg-transparent py-0
            lg:bg-(--bottom-bg) lg:py-4
            px-20
          "
        >
          {/* Left group (Desktop only) */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            {menuItems.map((item, index) => (
              <Link to={item.link}>
                <img src={item.icon} alt={item.label} className="w-6 h-6 object-contain" />
               <div
                key={index}
                className="
                  flex items-center gap-3
                  h-15
                  border-r-[0.5px] border-(--bottom-divider)
                  px-1
                "
              >
                <span className="font-['Almarai'] font-bold text-[16px] leading-5.25 whitespace-nowrap">
                  {item.label}
                </span>
              </div>
              </Link>
            ))}
          </div>

          {/* Sidebar button (Mobile only) */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="
              lg:hidden
              ms-auto
              w-12 h-12
              rounded-full
              grid place-items-center
              bg-black/30 backdrop-blur-md
              text-white
              shadow-lg
            "
            aria-label="Open sidebar"
          >
            <span className="text-2xl leading-none">☰</span>
          </button>

          {/* Right group (Desktop only) */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            {rightItems.map((item, index) => (
              <div
                key={index}
                className="
                  flex items-center justify-between gap-4
                  h-15
                  border-r-[0.5px] border-(--bottom-divider)
                  px-1
                "
              >
                <img src={item.arrow} alt="arrow" className="w-6 h-6 object-contain opacity-80" />
                <span className="font-['Almarai'] font-bold text-[18px] leading-5.25 whitespace-nowrap">
                  {item.label}
                </span>
                <img src={item.icon} alt={item.label} className="w-6 h-6 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
