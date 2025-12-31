import React from "react";
import { Search } from "lucide-react";
import hugeicon from "../assets/imgs/hugeicons_notification-01.png";
export default function NotificationsList() {
  const items = [
    "لوريم إيبسوم دولار سيت أميت، كونسيكتيتور أديبيسينج إليت. سِد دو إيوسمد...",
    "لوريم إيبسوم دولار سيت أميت، كونسيكتيتور أديبيسينج إليت. سِد دو إيوسمد...",
    "لوريم إيبسوم دولار سيت أميت، كونسيكتيتور أديبيسينج إليت. سِد دو إيوسمد...",
    "لوريم إيبسوم دولار سيت أميت، كونسيكتيتور أديبيسينج إليت. سِد دو إيوسمد...",
    "لوريم إيبسوم دولار سيت أميت، كونسيكتيتور أديبيسينج إليت. سِد دو إيوسمد...",
    "لوريم إيبسوم دولار سيت أميت، كونسيكتيتور أديبيسينج إليت. سِد دو إيوسمد...",
  ];

  return (
    <div dir="rtl" className="bg-white my-25">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-8 pt-30">
        {/* Top info bar */}
        <div className="flex items-center justify-start gap-2 rounded-sm bg-blue-200/70 px-4 py-3 text-lg font-bold text-slate-700">
          <span>
            تم قبول طلبك يمكنك الانتقال للدفع
            <button
              type="button"
              className="font-semibold text-amber-600 hover:text-amber-700 px-2"
            >
              اضغط هنا
            </button>
          </span>
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-xs">
            i
          </span>
        </div>

        {/* List */}
        <div className="mt-3 overflow-hidden rounded-sm border border-slate-200 bg-white">
          {items.map((text, idx) => (
            <div
              key={idx}
              className={`flex items-start  gap-3 px-4 py-4 ${
                idx !== items.length - 1 ? "border-b border-slate-200" : ""
              }`}
            >
                <img src={hugeicon}  className="rounded-md shadow-xl mr-2 mt-1" title="hugeicons" alt="hugeicons" />
              <p className="leading-7 text-slate-700 text-lg font-bold">{text}</p>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
