import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

export default function PaymentCardForm() {
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
      "المبلغ يظل معلق في حساب ستوك شيب إلى حين وصول البوليصة الشحن ثم يتحول للمشتري.",
      "المبلغ يظل معلق في حساب ستوك شيب إلى حين التأكد من جودة الشحنة عبر البوليصة.",
    ],
    []
  );

  const [cardNumber, setCardNumber] = useState("");
  const [address, setAddress] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [country, setCountry] = useState("United States");
  const [postal, setPostal] = useState("90210");

  return (
    <div dir="rtl" className="min-h-screen bg-white pt-40">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-8 py-10">
        <div className="flex justify-between items-center gap-10">
            {/* Right: summary */}
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
                <div className="font-semibold text-blue-900">إجمالي الدفع الآن</div>
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

              <label className="flex items-center justify-between gap-3 rounded-md bg-rose-100/70 px-4 py-3 text-xs font-semibold text-slate-800">
                <span>نسبة الخصم من الكريديت في حالة استخدام الكريديت تكون 2.5%</span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 rounded border-slate-300"
                />
              </label>
            </div>
          </div>
          {/* Left: form */}
          <div className="rounded-xl border border-slate-100 bg-white shadow-sm p-6 sm:p-8">
            <div className="flex items-center justify-center gap-10 text-sm font-semibold">
              <button type="button" className="relative pb-2 text-slate-500">
                تحويل بنكي
              </button>

              <button type="button" className="relative pb-2 text-blue-900">
                بطاقة بنكية
                <span className="absolute -bottom-0.5 right-0 left-0 mx-auto h-[2px] w-20 bg-amber-500" />
              </button>
            </div>

            <div className="mt-8 space-y-5">
              {/* Card number */}
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                  <span>رقم البطاقة</span>
                </div>

                <div className="relative">
                  <input
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="1234 1234 1234 1234"
                    className="w-full rounded-md border border-blue-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-200"
                  />

                  <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <span className="inline-flex h-5 w-8 items-center justify-center rounded bg-slate-100 text-[10px] font-bold text-slate-700">
                      VISA
                    </span>
                    <span className="inline-flex h-5 w-6 items-center justify-center rounded bg-amber-100 text-[10px] font-bold text-amber-800">
                      MC
                    </span>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div>
                <div className="text-xs text-slate-500 mb-1">العنوان</div>
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="..."
                  className="w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              {/* Expiry + CVC */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-slate-500 mb-1">تاريخ الإنتهاء</div>
                  <input
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    placeholder="MM / YY"
                    className="w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div>
                  <div className="text-xs text-slate-500 mb-1">CVC</div>
                  <input
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                    placeholder="CVC"
                    className="w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>
              </div>

              {/* Country + Postal */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-slate-500 mb-1">الدولة</div>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-200"
                  >
                    <option>United States</option>
                    <option>Egypt</option>
                    <option>Saudi Arabia</option>
                    <option>United Arab Emirates</option>
                  </select>
                </div>

                <div>
                  <div className="text-xs text-slate-500 mb-1">Postal code</div>
                  <input
                    value={postal}
                    onChange={(e) => setPostal(e.target.value)}
                    placeholder="90210"
                    className="w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>
              </div>
               <Link to ="/PaymentPageTwo">
                <button
                type="button"
                className="mt-4 w-full rounded-md bg-amber-500 px-4 py-3 text-sm font-bold text-blue-900 hover:bg-amber-600"
              >
                دفع
              </button>
               </Link>
              
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}
