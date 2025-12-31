// 
import React from "react";
import logo from "../assets/imgs/Group20.png";
import camera from "../assets/imgs/camera.png";

export default function Navbar() {
  return (
    <nav
      className="
        w-full font-[Cairo] bg-(--nav-bg)
        flex items-center justify-between
        px-3 sm:px-4 md:px-10 lg:px-20
        py-2 sm:py-3 md:py-4
      "
      dir="rtl"
    >
      {/* Logo (يمين) */}
      <div className="flex items-center justify-end">
        <img
          src={logo}
          alt="logo"
          className="h-8 sm:h-9 md:h-10 w-auto"
        />
      </div>

      {/* Search (يظهر من md فقط) */}
      <div
        className="
          hidden md:flex
          w-130 lg:w-180.5
          h-11 md:h-13
          items-center justify-between gap-3
          bg-(--white) rounded-[5px]
          px-3 md:px-4
        "
      >
        <img src={camera} alt="camera" className="h-5 w-5 md:h-6 md:w-6 shrink-0" />
        <input
          type="text"
          placeholder="بحث"
          className="
            w-full h-8
            direction-rtl text-right
            outline-none border-0
            bg-transparent
          "
        />
      </div>

      {/* Buttons (شمال) */}
      <div className="flex items-center gap-2 sm:gap-3">
        <button
          className="
            h-10 sm:h-11 md:h-13
            px-3 sm:px-5 md:px-6
            rounded-[5px]
            bg-(--accent)
            flex items-center justify-center
          "
        >
          <span className="text-(--primary) font-bold text-[12px] sm:text-[13px] md:text-[14px] leading-[150%]">
            كن بائعاً
          </span>
        </button>

        <button
          className="
            h-10 sm:h-11 md:h-13
            px-3 sm:px-5 md:px-6
            rounded-[5px]
            bg-(--white)
            border border-(--primary)
            flex items-center justify-center
          "
        >
          <span className="text-(--primary) font-bold text-[12px] sm:text-[13px] md:text-[14px] leading-[150%]">
            تسجيل دخول
          </span>
        </button>
      </div>
    </nav>
  );
}
