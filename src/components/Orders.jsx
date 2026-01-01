import React, { useMemo, useState } from "react";

const TABS = [
  { key: "all", label: "الكل" },
  { key: "waiting", label: "في انتظار رد الشركة" },
  { key: "shipping", label: "قيد التوصيل" },
  { key: "done", label: "منتهية" },
];

const STATUS_BADGE = {
  waiting: { label: "في انتظار رد الشركة", className: "bg-amber-100 text-amber-900" },
  shipping: { label: "قيد التوصيل", className: "bg-blue-100 text-blue-900" },
  done: { label: "منتهية", className: "bg-emerald-100 text-emerald-900" },
};

export default function Orders() {
  const orders = useMemo(
    () => [
      {
        id: "541454",
        companyName: "اسم الشركة",
        total: 5000,
        currency: "رس",
        itemsCount: 30,
        status: "waiting",
        logo:
          "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      },
      {
        id: "541454",
        companyName: "اسم الشركة",
        total: 5000,
        currency: "رس",
        itemsCount: 30,
        status: "shipping",
        logo:
          "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      },{
        id: "541454",
        companyName: "اسم الشركة",
        total: 5000,
        currency: "رس",
        itemsCount: 30,
        status: "waiting",
        logo:
          "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      },
      {
        id: "541454",
        companyName: "اسم الشركة",
        total: 5000,
        currency: "رس",
        itemsCount: 30,
        status: "waiting",
        logo:
          "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      },
      {
        id: "541454",
        companyName: "اسم الشركة",
        total: 5000,
        currency: "رس",
        itemsCount: 30,
        status: "shipping",
        logo:
          "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      },
      {
        id: "541454",
        companyName: "اسم الشركة",
        total: 5000,
        currency: "رس",
        itemsCount: 30,
        status: "done",
        logo:
          "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      },
    ],
    []
  );

  const [activeTab, setActiveTab] = useState("all");

  const filtered = useMemo(() => {
    if (activeTab === "all") return orders;
    if (activeTab === "waiting") return orders.filter((o) => o.status === "waiting");
    if (activeTab === "shipping") return orders.filter((o) => o.status === "shipping");
    if (activeTab === "done") return orders.filter((o) => o.status === "done");
    return orders;
  }, [orders, activeTab]);

  return (
    <div  className="min-h-screen bg-white mt-55">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-8 py-8 ">
        <div className="flex items-center justify-start flex-row-reverse gap-3">
          {TABS.map((t) => {
            const active = activeTab === t.key;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => setActiveTab(t.key)}
                className={`rounded-md px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-blue-100 text-blue-900"
                    : "bg-transparent text-slate-600 hover:bg-slate-100"
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        <div className="mt-6 space-y-6">
          {filtered.map((o, idx) => {
            const badge = STATUS_BADGE[o.status] || STATUS_BADGE.waiting;

            return (
              <div
                key={`${o.id}-${idx}`}
                className="rounded-lg bg-white shadow-sm ring-1 ring-slate-200 px-5 py-5"
              >
                <div className="flex items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col items-start gap-3">
                      <span className={`inline-flex rounded-md px-3 py-1 text-xs font-semibold ${badge.className}`}>
                        {badge.label}
                      </span>

                      <button
                        type="button"
                        className="rounded-md bg-blue-900 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-800"
                      >
                        التفاصيل
                      </button>
                    </div>

                    <div className="hidden sm:block text-sm text-slate-600">
                      <span className="text-slate-400">عدد البضائع المطلوبة</span>{" "}
                      <span className="font-semibold text-slate-900">{o.itemsCount}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <div className="text-sm font-semibold text-slate-900">
                        #{o.id}
                      </div>
                      <div className="mt-1 text-sm text-slate-600">
                        {o.companyName}
                      </div>
                      <div className="mt-1 text-sm text-slate-700">
                        توتال الطلب{" "}
                        <span className="font-semibold">{o.total}</span>{" "}
                        {o.currency}
                      </div>

                      <div className="mt-3 sm:hidden text-sm text-slate-600">
                        <span className="text-slate-400">عدد البضائع المطلوبة</span>{" "}
                        <span className="font-semibold text-slate-900">{o.itemsCount}</span>
                      </div>
                    </div>

                    <div className="h-28 w-28 rounded-md bg-slate-200 flex items-center justify-center overflow-hidden">
                      <img src={o.logo} alt="logo" className="h-16 w-16 object-contain opacity-90" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {filtered.length === 0 && (
            <div className="rounded-md border border-slate-200 bg-slate-50 p-6 text-center text-sm text-slate-600">
              لا توجد طلبات
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
