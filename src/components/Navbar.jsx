// Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ROUTES } from "../routes";
import logo from "../assets/imgs/Group20.png";
import camera from "../assets/imgs/camera.png";
import { useEffect, useMemo, useRef, useState } from "react";

import hugeicons from "../assets/imgs/hugeicons_notification-01.png";
import lucide_box from "../assets/imgs/lucide_box.png";
import LanguageSwitcher from "./LanguageSwitcher";
import translate from "../assets/imgs/translate.png";

import Vector from "../assets/imgs/Vector.png";
import lamp from "../assets/imgs/lamp.png";
import smartphone from "../assets/imgs/smart-phone-01.png";
import shoes from "../assets/imgs/running-shoes.png";
import shirt from "../assets/imgs/shirt-01.png";
import textalign from "../assets/imgs/textalign-left.png";
import dropdown from "../assets/imgs/arrow-down.png";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const rootRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`${ROUTES.PRODUCTS_LIST}?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  const menuItems = useMemo(
    () => [
      {
        key: "lang",
        label: t("nav.language"),
        icon: translate,
        isLanguage: true,
      },
      { key: "noti", label: t("nav.notifications"), icon: hugeicons, to: ROUTES.NOTIFICATION },
      { key: "orders", label: t("nav.orders"), icon: lucide_box, to: ROUTES.ORDERS },
    ],
    [t]
  );

  const categories = useMemo(
    () => [
      {
        key: "beds",
        label: t("categories.furniture"),
        icon: Vector,
        arrow: dropdown,
        children: [
          { label: t("categories.bedrooms"), to: ROUTES.PRODUCTS_LIST },
          { label: t("categories.kidsFurniture"), to: ROUTES.PRODUCTS_LIST },
        ],
      },
      {
        key: "decor",
        label: t("categories.decor"),
        icon: lamp,
        arrow: dropdown,
        children: [
          { label: t("categories.lighting"), to: ROUTES.PRODUCTS_LIST },
          { label: t("categories.paintings"), to: ROUTES.PRODUCTS_LIST },
        ],
      },
      {
        key: "electronics",
        label: t("categories.electronics"),
        icon: smartphone,
        arrow: dropdown,
        children: [
          { label: t("categories.mobiles"), to: ROUTES.PRODUCTS_LIST },
          { label: t("categories.headphones"), to: ROUTES.PRODUCTS_LIST },
          { label: t("categories.accessories"), to: ROUTES.PRODUCTS_LIST },
        ],
      },
      {
        key: "shoes",
        label: t("categories.shoes"),
        icon: shoes,
        arrow: dropdown,
        children: [
          { label: t("categories.menShoes"), to: ROUTES.PRODUCTS_LIST },
          { label: t("categories.womenShoes"), to: ROUTES.PRODUCTS_LIST },
        ],
      },
      {
        key: "clothes",
        label: t("categories.clothes"),
        icon: shirt,
        arrow: dropdown,
        children: [
          { label: t("categories.menClothes"), to: ROUTES.PRODUCTS_LIST },
          { label: t("categories.womenClothes"), to: ROUTES.PRODUCTS_LIST },
        ],
      },
      {
        key: "all",
        label: t("categories.allCategories"),
        icon: textalign,
        arrow: dropdown,
        children: [
          { label: t("categories.all"), to: ROUTES.PRODUCTS_LIST },
          { label: t("categories.latest"), to: ROUTES.PRODUCTS_LIST },
          { label: t("categories.bestseller"), to: ROUTES.PRODUCTS_LIST },
        ],
      },
    ],
    [t]
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

  const currentDir = i18n.language === 'ar' ? 'rtl' : 'ltr';

  return (
    <header dir={currentDir} className="w-full" ref={rootRef}>
      <nav
        className="
          w-full bg-(--nav-bg)
          flex items-center justify-between
          px-3 sm:px-4 md:px-6 lg:px-10 xl:px-20
          py-2 sm:py-3 md:py-4
          gap-2 sm:gap-3
        "
      >
        <Link to={ROUTES.HOME} className="flex items-center justify-end shrink-0">
          <img src={logo} alt="logo" className="h-7 sm:h-8 md:h-9 lg:h-10 w-auto" />
        </Link>

        <form
          onSubmit={handleSearch}
          className="hidden lg:flex flex-1 max-w-md lg:max-w-lg xl:max-w-xl mx-2 lg:mx-4 h-10 sm:h-11 md:h-12 lg:h-13 items-center justify-between gap-2 sm:gap-3 bg-(--white) rounded-[5px] px-2 sm:px-3 md:px-4"
        >
          <img src={camera} alt="camera" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t("nav.search")}
            className="w-full h-8 direction-rtl text-right outline-none border-0 bg-transparent text-sm sm:text-base"
          />
        </form>

        <div className="hidden lg:flex items-center gap-2 sm:gap-3 shrink-0">
          <Link to={ROUTES.SIGNUP_BANK_INFO}>
            <button className="h-9 sm:h-10 md:h-11 lg:h-13 px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 rounded-[5px] bg-(--accent) flex items-center justify-center">
              <span className="text-(--primary) font-bold text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] leading-[150%] whitespace-nowrap">
                {t("nav.beSeller")}
              </span>
            </button>
          </Link>

          <Link to={ROUTES.LOGIN}>
            <button className="h-9 sm:h-10 md:h-11 lg:h-13 px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 rounded-[5px] bg-(--white) border border-(--primary) flex items-center justify-center">
              <span className="text-(--primary) font-bold text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] leading-[150%] whitespace-nowrap">
                {t("nav.login")}
              </span>
            </button>
          </Link>
        </div>

        {/* Language switcher for mobile/tablet */}
        <div className="md:hidden">
          <LanguageSwitcher className="h-8 sm:h-9 px-2 sm:px-3" />
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
            dir={currentDir}
            className={`
              absolute ${currentDir === 'rtl' ? 'right-0' : 'left-0'}
                  h-dvh w-[85%] max-w-sm
              bg-white shadow-2xl
              flex flex-col
            `}
          >
            <div className="flex items-center justify-between px-4 py-4 border-b shrink-0 bg-blue-900">
              <div className="font-['Tajawal'] font-bold text-lg">{t("nav.menu")}</div>

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
                  to={ROUTES.SIGNUP_BANK_INFO}
                  onClick={closeSidebar}
                  className="w-full rounded-xl bg-(--accent) px-4 py-3 text-center font-['Tajawal'] font-bold text-(--primary) block"
                >
                  {t("nav.beSeller")}
                </Link>

                <Link
                  to={ROUTES.LOGIN}
                  onClick={closeSidebar}
                  className="w-full rounded-xl border border-(--primary) bg-white px-4 py-3 text-center font-['Tajawal'] font-bold text-(--primary) block"
                >
                  {t("nav.login")}
                </Link>

                <form
                  onSubmit={handleSearch}
                  className="mt-1 w-full h-11 flex items-center justify-between gap-3 bg-(--white) rounded-[5px] px-3 ring-1 ring-slate-200"
                >
                  <img src={camera} alt="camera" className="h-5 w-5 shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t("nav.search")}
                    className="w-full h-8 direction-rtl text-right outline-none border-0 bg-transparent"
                  />
                </form>
              </div>

              <div className="space-y-2">
                <div className="font-['Tajawal'] font-bold text-sm opacity-70">{t("categories.shortcuts")}</div>

                <div className="grid gap-2">
                  {menuItems.map((item) => (
                    <div key={item.key} className="w-full">
                      {item.isLanguage ? (
                        <>
                          <button
                            type="button"
                            onClick={() => toggleDropdown(item.key)}
                            className="w-full flex items-center justify-between gap-3 p-3 rounded-xl hover:bg-black/5"
                          >
                            <div className="flex items-center gap-3">
                              <img src={item.icon} alt={item.label} className="w-6 h-6 object-contain" />
                              <span className="font-['Tajawal'] font-bold">{item.label}</span>
                            </div>
                            <img
                              src={dropdown}
                              alt="arrow"
                              className={`w-5 h-5 object-contain opacity-70 transition ${
                                openDropdown === item.key ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          {openDropdown === item.key && (
                            <div className="mt-1 ms-3 rounded-xl border border-slate-100 bg-slate-50 overflow-hidden">
                              <LanguageSwitcher variant="dropdown" />
                            </div>
                          )}
                        </>
                      ) : (
                        <Link to={item.to || "#"} className="block" onClick={closeSidebar}>
                          <div className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-black/5">
                            <img src={item.icon} alt={item.label} className="w-6 h-6 object-contain" />
                            <span className="font-['Tajawal'] font-bold">{item.label}</span>
                          </div>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-['Tajawal'] font-bold text-sm opacity-70">{t("categories.sections")}</div>

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
                          <span className="font-['Tajawal'] font-bold">{item.label}</span>
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
