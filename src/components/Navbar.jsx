// Navbar.jsx
import { Link } from "react-router-dom";
import logo from "../assets/imgs/Group20.png";
import camera from "../assets/imgs/camera.png";
import { useEffect, useMemo, useRef, useState } from "react";

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

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [openDropdown, setOpenDropdown] = useState(null);

  const rootRef = useRef(null);

  const menuItems = useMemo(
    () => [
      {
        key: "lang",
        label: "اللغة",
        icon: translate,
        arrow: dropdown,
        children: [
          { label: "العربية", to: "/" },
          { label: "English", to: "/" },
        ],
      },
      { key: "noti", label: "الإشعارات", icon: hugeicons, to: "/Notification" },
      { key: "orders", label: "طلباتي", icon: lucide_box, to: "/OrdersPage" },
    ],
    []
  );

  const categories = useMemo(
    () => [
      {
        key: "beds",
        label: "مفروشات",
        icon: Vector,
        arrow: dropdown,
        children: [
          { label: "غرف نوم", to: "/ProductsListPage" },
          { label: "مفروشات أطفال", to: "/ProductsListPage" },
        ],
      },
      {
        key: "decor",
        label: "ديكورات",
        icon: lamp,
        arrow: dropdown,
        children: [
          { label: "إضاءة", to: "/ProductsListPage" },
          { label: "لوحات", to: "/ProductsListPage" },
        ],
      },
      {
        key: "electronics",
        label: "إلكترونيات",
        icon: smartphone,
        arrow: dropdown,
        children: [
          { label: "موبايلات", to: "/ProductsListPage" },
          { label: "سماعات", to: "/ProductsListPage" },
          { label: "إكسسوارات", to: "/ProductsListPage" },
        ],
      },
      {
        key: "shoes",
        label: "أحذية",
        icon: shoes,
        arrow: dropdown,
        children: [
          { label: "رجالي", to: "/ProductsListPage" },
          { label: "نسائي", to: "/ProductsListPage" },
        ],
      },
      {
        key: "clothes",
        label: "ملابس",
        icon: shirt,
        arrow: dropdown,
        children: [
          { label: "رجالي", to: "/ProductsListPage" },
          { label: "نسائي", to: "/ProductsListPage" },
        ],
      },
      {
        key: "all",
        label: "جميع الفئات",
        icon: textalign,
        arrow: dropdown,
        children: [
          { label: "الكل", to: "/ProductsListPage" },
          { label: "الأحدث", to: "/ProductsListPage" },
          { label: "الأكثر مبيعاً", to: "/ProductsListPage" },
        ],
      },
    ],
    []
  );

  useEffect(() => {
    const onDown = (e) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target)) setOpenDropdown(null);
    };

    const onEsc = (e) => {
      if (e.key === "Escape") setOpenDropdown(null);
    };

    window.addEventListener("mousedown", onDown);
    window.addEventListener("keydown", onEsc);

    return () => {
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("keydown", onEsc);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header dir="rtl" className="w-full" ref={rootRef}>
      <nav
        className="
          w-full font-[Cairo] bg-(--nav-bg)
          flex items-center justify-between
          px-3 sm:px-4 md:px-10 lg:px-20
          py-2 sm:py-3 md:py-4
          gap-3
        "
      >
        <Link to="/" className="flex items-center justify-end shrink-0">
          <img src={logo} alt="logo" className="h-8 sm:h-9 md:h-10 w-auto" />
        </Link>

        <div className="hidden lg:flex w-130 lg:w-180.5 h-11 md:h-13 items-center justify-between gap-3 bg-(--white) rounded-[5px] px-3 md:px-4">
          <img src={camera} alt="camera" className="h-5 w-5 md:h-6 md:w-6 shrink-0" />
          <input
            type="text"
            placeholder="بحث"
            className="w-full h-8 direction-rtl text-right outline-none border-0 bg-transparent"
          />
        </div>

        <div className="hidden lg:flex items-center gap-2 sm:gap-3 shrink-0">
          <button className="h-10 sm:h-11 md:h-13 px-3 sm:px-5 md:px-6 rounded-[5px] bg-(--accent) flex items-center justify-center">
            <span className="text-(--primary) font-bold text-[12px] sm:text-[13px] md:text-[14px] leading-[150%]">
              كن بائعاً
            </span>
          </button>

          <Link to="/login">
            <button className="h-10 sm:h-11 md:h-13 px-3 sm:px-5 md:px-6 rounded-[5px] bg-(--white) border border-(--primary) flex items-center justify-center">
              <span className="text-(--primary) font-bold text-[12px] sm:text-[13px] md:text-[14px] leading-[150%]">
                تسجيل دخول
              </span>
            </button>
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsSidebarOpen(true)}
          className="
            lg:hidden
            inline-flex h-10 w-10 items-center justify-center
            rounded-md border border-white/30
            bg-black/20 backdrop-blur-md text-white
          "
          aria-label="Open menu"
        >
          <span className="text-xl leading-none">☰</span>
        </button>
      </nav>

      {isSidebarOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" onClick={closeSidebar} />

          <aside
            dir="rtl"
            className="
              absolute top-0 right-0
              h-[100dvh] w-[85%] max-w-sm
              bg-white shadow-2xl
              flex flex-col
            "
          >
            <div className="flex items-center justify-between px-4 py-4 border-b shrink-0 bg-blue-900">
              <div className="font-['Almarai'] font-bold text-lg">القائمة</div>

              <button
                onClick={closeSidebar}
                className="w-10 h-10 rounded-full grid place-items-center hover:bg-black/5"
                aria-label="Close sidebar"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-6">
              <div className="grid gap-2">
                <Link
                  to="/seller"
                  onClick={closeSidebar}
                  className="w-full rounded-xl bg-(--accent) px-4 py-3 text-center font-['Almarai'] font-bold text-(--primary) block"
                >
                  كن بائعاً
                </Link>

                <Link
                  to="/login"
                  onClick={closeSidebar}
                  className="w-full rounded-xl border border-(--primary) bg-white px-4 py-3 text-center font-['Almarai'] font-bold text-(--primary) block"
                >
                  تسجيل دخول
                </Link>

                <div className="mt-1 w-full h-11 flex items-center justify-between gap-3 bg-(--white) rounded-[5px] px-3 ring-1 ring-slate-200">
                  <img src={camera} alt="camera" className="h-5 w-5 shrink-0" />
                  <input
                    type="text"
                    placeholder="بحث"
                    className="w-full h-8 direction-rtl text-right outline-none border-0 bg-transparent"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-['Almarai'] font-bold text-sm opacity-70">اختصارات</div>

                <div className="grid gap-2">
                  {menuItems.map((item) => (
                    <div key={item.key} className="w-full">
                      {item.children ? (
                        <button
                          type="button"
                          onClick={() => toggleDropdown(item.key)}
                          className="w-full flex items-center justify-between gap-3 p-3 rounded-xl hover:bg-black/5"
                        >
                          <div className="flex items-center gap-3">
                            <img src={item.icon} alt={item.label} className="w-6 h-6 object-contain" />
                            <span className="font-['Almarai'] font-bold">{item.label}</span>
                          </div>
                          <img
                            src={dropdown}
                            alt="arrow"
                            className={`w-5 h-5 object-contain opacity-70 transition ${
                              openDropdown === item.key ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      ) : (
                        <Link to={item.to || "#"} className="block" onClick={closeSidebar}>
                          <div className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-black/5">
                            <img src={item.icon} alt={item.label} className="w-6 h-6 object-contain" />
                            <span className="font-['Almarai'] font-bold">{item.label}</span>
                          </div>
                        </Link>
                      )}

                      {item.children && openDropdown === item.key && (
                        <div className="mt-1 ms-3 rounded-xl border border-slate-100 bg-slate-50 overflow-hidden">
                          {item.children.map((c, i) => (
                            <Link
                              key={i}
                              to={c.to}
                              className="block px-4 py-3 text-sm text-slate-700 hover:bg-white"
                              onClick={closeSidebar}
                            >
                              {c.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-['Almarai'] font-bold text-sm opacity-70">الأقسام</div>

                <div className="grid gap-2">
                  {categories.map((item) => (
                    <div key={item.key} className="w-full">
                      <button
                        type="button"
                        onClick={() => toggleDropdown(item.key)}
                        className="w-full flex items-center justify-between gap-3 p-3 rounded-xl hover:bg-black/5"
                      >
                        <div className="flex items-center gap-3">
                          <img src={item.icon} alt={item.label} className="w-6 h-6 object-contain" />
                          <span className="font-['Almarai'] font-bold">{item.label}</span>
                        </div>
                        <img
                          src={dropdown}
                          alt="arrow"
                          className={`w-5 h-5 object-contain opacity-70 transition ${
                            openDropdown === item.key ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {item.children && openDropdown === item.key && (
                        <div className="mt-1 ms-3 rounded-xl border border-slate-100 bg-slate-50 overflow-hidden">
                          {item.children.map((c, i) => (
                            <Link
                              key={i}
                              to={c.to}
                              className="block px-4 py-3 text-sm text-slate-700 hover:bg-white"
                              onClick={closeSidebar}
                            >
                              {c.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-6" />
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
