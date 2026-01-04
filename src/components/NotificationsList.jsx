import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import hugeicon from "../assets/imgs/hugeicons_notification-01.png";
import { ROUTES } from "../routes";

export default function NotificationsList() {
  const { t, i18n } = useTranslation();
  const currentDir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  const items = [
    t("notifications.notificationText"),
    t("notifications.notificationText"),
    t("notifications.notificationText"),
    t("notifications.notificationText"),
    t("notifications.notificationText"),
    t("notifications.notificationText"),
  ];

  return (
    <div dir={currentDir} className="bg-white my-25">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-8 pt-30">
        {/* Top info bar */}
        <div className={`flex items-center gap-2 rounded-sm bg-blue-200/70 px-4 py-3 text-lg font-bold text-slate-700 ${currentDir === 'rtl' ? 'justify-start' : 'justify-start'}`}>
          <span className={currentDir === 'rtl' ? 'text-right' : 'text-left'}>
            {t("notifications.requestAccepted")}{" "}
            <Link
              to={ROUTES.PAYMENT_ONE}
              className="font-semibold text-amber-600 hover:text-amber-700 px-2 underline"
            >
              {t("notifications.clickHere")}
            </Link>
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
              className={`flex items-start gap-3 px-4 py-4 ${
                idx !== items.length - 1 ? "border-b border-slate-200" : ""
              } ${currentDir === 'rtl' ? 'flex-row-reverse' : ''}`}
            >
              <img 
                src={hugeicon}  
                className={`rounded-md shadow-xl mt-1 ${currentDir === 'rtl' ? 'ml-2' : 'mr-2'}`} 
                title="hugeicons" 
                alt="hugeicons" 
              />
              <p className={`leading-7 text-slate-700 text-lg font-bold flex-1 ${currentDir === 'rtl' ? 'text-right' : 'text-left'}`}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
