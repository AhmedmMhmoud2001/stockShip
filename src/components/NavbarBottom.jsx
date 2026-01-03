// NavbarBottom.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

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

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function DesktopDropdownPortal({ open, rect, items, onClose, dropdownRef }) {
  if (!open || !rect) return null;

  const gap = 8;
  const padding = 12;

  const top = Math.round(rect.bottom + gap);
  const minWidth = Math.max(220, Math.round(rect.width));

  // RTL: anchor to button right edge
  const right = Math.round(window.innerWidth - rect.right);

  // keep inside viewport
  const safeRight = clamp(right, padding, window.innerWidth - padding - minWidth);

  const maxHeight = `calc(100vh - ${top + padding}px)`;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999]"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dropdownRef}
        dir="rtl"
        className="fixed rounded-xl border border-slate-100 bg-white shadow-2xl overflow-hidden"
        style={{ top, right: safeRight, minWidth, maxHeight }}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="max-h-full overflow-y-auto">
          {items.map((c, i) => (
            <Link
              key={i}
              to={c.to}
              className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50"
              onClick={onClose}
            >
              {c.label}
            </Link>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
}

export default function NavbarBottom() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const rootRef = useRef(null);
  const dropdownRef = useRef(null);

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
      const inRoot = rootRef.current?.contains(e.target);
      const inDrop = dropdownRef.current?.contains(e.target);
      if (!inRoot && !inDrop) setOpenDropdown(null);
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
    const onResizeOrScroll = () => {
      if (!openDropdown?.rect || !openDropdown?.key) return;
      setOpenDropdown(null);
    };

    window.addEventListener("resize", onResizeOrScroll);
    window.addEventListener("scroll", onResizeOrScroll, true);

    return () => {
      window.removeEventListener("resize", onResizeOrScroll);
      window.removeEventListener("scroll", onResizeOrScroll, true);
    };
  }, [openDropdown]);

  const openPortalDropdown = (e, item) => {
    if (!item.children) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setOpenDropdown((prev) => {
      if (prev?.key === item.key) return null;
      return { key: item.key, rect, items: item.children };
    });
  };

  return (
    <div ref={rootRef} className="hidden lg:block w-full">
      <div className="w-full rounded-b-[50px] shadow-[0_-8px_24px_rgba(0,0,0,0.10)] bg-(--bottom-bg)">
        <div className="px-2 sm:px-6 lg:px-20 py-3 lg:py-4">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-2 shrink-0">
              {menuItems.map((item) => (
                <div key={item.key} className="shrink-0">
                  {item.children ? (
                    <button
                      type="button"
                      onClick={(e) => openPortalDropdown(e, item)}
                      className="flex items-center gap-0 h-12 border-r-[0.5px] border-(--bottom-divider) pe-4 ps-4"
                    >
                      <img
                        src={dropdown}
                        alt="arrow"
                        className={`w-5 h-5 object-contain opacity-70 transition ${
                          openDropdown?.key === item.key ? "rotate-180" : ""
                        }`}
                      />
                     
                      <span className="font-['Almarai'] font-bold text-[12px] sm:text-[12px] md:text-[12px] lg:text-[14px] xl:text-[16px] whitespace-nowrap">
                        {item.label}
                      </span>

                       <img src={item.icon} alt={item.label} className="w-5 h-5 object-contain" />
                      
                    </button>
                  ) : (
                    <Link
                      to={item.to || "#"}
                      className="flex items-center gap-2 h-12 border-r-[0.5px] border-(--bottom-divider) pe-4 ps-4"
                    >
                      <span className="font-['Almarai'] font-bold text-[12px] sm:text-[12px] md:text-[12px] lg:text-[14px] xl:text-[16px] whitespace-nowrap">
                        {item.label}
                      </span>
                      <img src={item.icon} alt={item.label} className="w-5 h-5 object-contain" />
                      
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-0 flex-1 justify-end overflow-x-auto">
              {categories.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={(e) => openPortalDropdown(e, item)}
                  className="shrink-0 flex items-center gap-3 h-12 border-r-[0.5px] border-(--bottom-divider) pe-4 ps-4"
                >
                  <img
                    src={dropdown}
                    alt="arrow"
                    className={`w-5 h-5 object-contain opacity-70 transition ${
                      openDropdown?.key === item.key ? "rotate-180" : ""
                    }`}
                  />
                  <span className="font-['Almarai'] font-bold text-[12px] sm:text-[12px] md:text-[12px] lg:text-[14px] xl:text-[16px] whitespace-nowrap">
                    {item.label}
                  </span>
                  <img src={item.icon} alt={item.label} className="w-5 h-5 object-contain" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <DesktopDropdownPortal
        open={!!openDropdown}
        rect={openDropdown?.rect}
        items={openDropdown?.items || []}
        onClose={() => setOpenDropdown(null)}
        dropdownRef={dropdownRef}
      />
    </div>
  );
}
