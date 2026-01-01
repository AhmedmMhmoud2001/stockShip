import React, { useMemo, useState } from "react";

export default function PaymentTwo() {
  const [method, setMethod] = useState("card"); // card | transfer
  const [receipt, setReceipt] = useState(null);

  const summary = useMemo(
    () => ({
      amount: 10000,
      tax: 10000,
      total: 20000,
      currency: "جنيه مصري",
    }),
    []
  );

  const notes = useMemo(
    () => [
      "في حالة الإلغاء بعد الدفع يتم استرداد المبلغ بدون مبلغ الضريبة و الغرامات التجارية + عمولة استخدام الفيزا.",
      "المبلغ يبقى معلق في حساب ستوك شيب إلى حين وصول البوليصة الشحن ثم يتحول للمشتري.",
      "المبلغ يظل معلق في حساب ستوك شيب إلى حين التأكد من جودة الشحنة عبر البوليصة.",
    ],
    []
  );

  return (
    <div dir="rtl" className="min-h-screen bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-8 py-8">
        <div className="rounded-xl border border-slate-100 bg-white shadow-sm p-6 sm:p-8">
          <div className="flex justify-between items-center gap-10">
           
            {/* Right panel */}
            <div className="space-y-5">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <div className="font-semibold text-blue-900">اسم المبلغ</div>
                  <div className="text-slate-900">
                    {summary.amount.toLocaleString()} {summary.currency}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="font-semibold text-blue-900">الضريبة</div>
                  <div className="text-slate-900">
                    {summary.tax.toLocaleString()} {summary.currency}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="font-semibold text-blue-900">
                    إجمالي الدفع الآن
                  </div>
                  <div className="text-slate-900">
                    {summary.total.toLocaleString()} {summary.currency}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {notes.map((t, i) => (
                  <label
                    key={i}
                    className="flex items-start justify-between gap-3 rounded-md bg-slate-50 px-4 py-3 text-xs text-slate-700"
                  >
                    <span className="leading-6">{t}</span>
                    <input
                      type="checkbox"
                      defaultChecked
                      className="mt-1 h-4 w-4 rounded border-slate-300"
                    />
                  </label>
                ))}

                <label className="flex items-center justify-between gap-3 rounded-md bg-rose-100/70 px-4 py-3 text-xs font-semibold text-slate-800">
                  <span>نسبة الموقع من الصفقة تكون 2.5%</span>
                  <input
                    type="checkbox"
                    defaultChecked
                    className="h-4 w-4 rounded border-slate-300"
                  />
                </label>
              </div>
            </div>
             {/* Left panel */}
            <div className="flex flex-col justify-between min-h-[420px]">
              <div>
                <div className="flex items-center justify-center gap-10 text-sm font-semibold">
                  <button
                    type="button"
                    onClick={() => setMethod("transfer")}
                    className={`relative pb-2 ${
                      method === "transfer"
                        ? "text-blue-900"
                        : "text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    تحويل بنكي
                    {method === "transfer" && (
                      <span className="absolute -bottom-0.5 right-0 left-0 mx-auto h-[2px] w-20 bg-amber-500" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setMethod("card")}
                    className={`relative pb-2 ${
                      method === "card"
                        ? "text-blue-900"
                        : "text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    بطاقة بنكية
                    {method === "card" && (
                      <span className="absolute -bottom-0.5 right-0 left-0 mx-auto h-[2px] w-20 bg-amber-500" />
                    )}
                  </button>
                </div>

                <div className="mt-8 space-y-2 text-sm text-slate-800 text-center">
                  <div className="font-semibold">
                    البنك: <span className="font-normal">FAB</span>
                  </div>
                  <div className="font-semibold">
                    رقم الحساب (IBAN):{" "}
                    <span className="font-normal">
                      AE12 3456 7890 1234 5678 901
                    </span>
                  </div>
                  <div className="font-semibold">
                    المستفيد:{" "}
                    <span className="font-normal">Mazadat Abu Dhabi LLC</span>
                  </div>
                  <div className="font-semibold">
                    المبلغ:{" "}
                    <span className="font-normal">
                      {summary.amount.toLocaleString()} {summary.currency}
                    </span>
                  </div>
                </div>

                <div className="mt-10 text-right text-sm font-semibold text-slate-900">
                  قم برفع صورة الإيصال
                </div>

                <div className="mt-3 flex items-center justify-center">
                  <label className="w-full max-w-md cursor-pointer rounded-xl border border-slate-200 bg-white p-6 text-center hover:bg-slate-50">
                    <input
                      type="file"
                      accept="image/*,application/pdf"
                      className="hidden"
                      onChange={(e) => setReceipt(e.target.files?.[0] || null)}
                    />
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14 2v6h6"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <div className="mt-3 text-sm text-slate-700">
                      اسحب الصورة هنا أو انقر للتحديد
                    </div>
                    <div className="mt-1 text-xs text-slate-500">حتى 10MB</div>

                    {receipt && (
                      <div className="mt-3 text-xs font-semibold text-blue-900">
                        {receipt.name}
                      </div>
                    )}
                  </label>
                </div>
              </div>

              <button
                type="button"
                className="mt-10 w-full max-w-xs rounded-md bg-amber-500 px-4 py-3 text-sm font-bold text-blue-900 hover:bg-amber-600"
              >
                دفع
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
