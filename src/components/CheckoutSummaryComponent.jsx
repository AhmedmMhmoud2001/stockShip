import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes";

export default function CheckoutSummaryComponent() {
  const [rows, setRows] = useState([
    { serial: 1, itemNo: 1, qty: 1, price: 1, cbm: 1 },
    { serial: 2, itemNo: 2, qty: 2, price: 2, cbm: 2 },
    { serial: 3, itemNo: 8, qty: 3, price: 3, cbm: 3 },
    { serial: 5, itemNo: 5, qty: 6, price: 6, cbm: 6 },
  ]);

  const totals = useMemo(() => {
    const sumQty = rows.reduce((a, r) => a + Number(r.qty || 0), 0);
    const sumPrice = rows.reduce((a, r) => a + Number(r.price || 0), 0);
    const sumCbm = rows.reduce((a, r) => a + Number(r.cbm || 0), 0);
    return { sumQty, sumPrice, sumCbm };
  }, [rows]);

  const updateRow = (idx, key, value) => {
    setRows((prev) =>
      prev.map((r, i) => (i === idx ? { ...r, [key]: value } : r))
    );
  };

  const [useSiteShipper, setUseSiteShipper] = useState(true);
  const [useMyShipper, setUseMyShipper] = useState(false);
  const [customsClearance, setCustomsClearance] = useState(true);

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const [coupon, setCoupon] = useState("");

  const subtotal = 4589;
  const shipping = 45.0;
  const total = 4589;

  return (
    <div dir="rtl" className="w-full bg-white mt-50 mb-10">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-8 py-6 space-y-8">
        

        {/* Shipping address */}
        <section className="w-full">
          <div className="text-right text-lg font-bold text-slate-900 mb-3">
            عنوان شحن البضائع
          </div>

          <div className="space-y-3 text-sm text-slate-700">
            <label className="flex items-start gap-2">
              <input
                type="checkbox"
                checked={useSiteShipper}
                onChange={(e) => setUseSiteShipper(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-slate-300"
              />
              <span>ارغب باستخدام وسطاء الشحن الموفوقين من الموقع.</span>
            </label>

            <label className="flex items-start gap-2">
              <input
                type="checkbox"
                checked={useMyShipper}
                onChange={(e) => setUseMyShipper(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-slate-300"
              />
              <span>لا ارغب باستخدام وسطاء الشحن ( يوجد لدي وسيط شحن ).</span>
            </label>
          </div>
         <div>
            <div className="mt-5 text-xl"> العنوان</div>
             <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-right">
              <div className="mt-7 md:mt-0 text-sm font-semibold text-slate-700">
                الدولة<span className="text-red-500">*</span>
              </div>
              <input
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="..."
                className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div className="text-right">
              <div className="mt-7 md:mt-0 text-sm font-semibold text-slate-700">
                المدينة<span className="text-red-500">*</span>
              </div>
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="..."
                className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>
         </div>
          

          <label className="mt-6 flex items-center justify-between gap-3 rounded-md bg-rose-100/60 px-4 py-3 text-sm text-slate-800">
            <span>توفير التخليص الجمركي تحت مسؤوليتك</span>
            <input
              type="checkbox"
              checked={customsClearance}
              onChange={(e) => setCustomsClearance(e.target.checked)}
              className="h-4 w-4 rounded border-slate-300"
            />
          </label>
        </section>

        {/* Order summary */}
        <section className="w-full">
          <div className="text-right text-sm font-bold text-blue-900 mb-2">
            ملخص الطلب
          </div>

          <div className="overflow-hidden rounded-md border border-slate-100">
            <div className="grid grid-cols-5 bg-blue-50 text-sm font-semibold text-slate-800">
              <div className="px-3 py-3 text-center">المسلسل</div>
              <div className="px-3 py-3 text-center">رقم الصنف</div>
              <div className="px-3 py-3 text-center">الكمية</div>
              <div className="px-3 py-3 text-center">السعر</div>
              <div className="px-3 py-3 text-center">CBM</div>
            </div>

            <div className="bg-white">
              {rows.map((r, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-5 items-center border-t border-slate-100 min-h-[74px]"
                >
                  <div className="text-center text-sm text-slate-700">
                    <input
                      value={r.serial}
                      onChange={(e) => updateRow(idx, "serial", e.target.value)}
                      className="mx-auto w-4/5 rounded-md bg-blue-50 px-2 py-2 text-center text-sm outline-none focus:ring-2 focus:ring-blue-200"
                    />
                  </div>

                  <div className="text-center text-sm text-slate-700">
                    <input
                      value={r.itemNo}
                      onChange={(e) => updateRow(idx, "itemNo", e.target.value)}
                      className="mx-auto w-4/5 rounded-md bg-blue-50 px-2 py-2 text-center text-sm outline-none focus:ring-2 focus:ring-blue-200"
                    />
                  </div>

                  <div className="text-center text-sm text-slate-700 border-l border-slate-200">
                    {r.qty}
                  </div>

                  <div className="text-center text-sm text-slate-700 border-l border-slate-200">
                    {r.price}
                  </div>

                  <div className="text-center text-sm text-slate-700 border-l border-slate-200">
                    {r.cbm}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-5 bg-blue-900 text-white text-sm font-semibold">
              <div className="px-3 py-3 text-center">الإجمالي</div>
              <div className="px-3 py-3 text-center">........</div>
              <div className="px-3 py-3 text-center">{totals.sumQty}</div>
              <div className="px-3 py-3 text-center">
                {totals.sumPrice} ر.س
              </div>
              <div className="px-3 py-3 text-center">2222</div>
            </div>
          </div>

          <div className="mt-2 text-right text-sm font-semibold text-blue-900">
            نسبة الموقع %4 من الصفقة.
          </div>
        </section>

        {/* Cart summary */}
        <section className="w-full">
          <div className="text-right text-lg font-bold text-slate-900 mb-3">
            السلة
          </div>

          <div className="w-full rounded-md border border-slate-200 overflow-hidden">
            <div className="flex items-stretch">
              <input
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="ادخل كود الخصم"
                className="flex-1 px-4 py-3 text-sm outline-none"
              />
              <button
                type="button"
                className="w-20 border-r border-slate-200 text-sm text-blue-700 hover:bg-slate-50"
              >
                حفظ
              </button>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-y-3 text-sm text-slate-700">
            <div className="text-right font-semibold">الإجمالي الفرعي</div>
            <div className="text-left">${subtotal}</div>

            <div className="text-right font-semibold">التوصيل</div>
            <div className="text-left">${shipping.toFixed(2)}</div>

            <div className="text-right font-semibold">الإجمالي الفرعي</div>
            <div className="text-left">${total}</div>
          </div>

          <Link
            to={ROUTES.PAYMENT_ONE}
            className="block mt-6 w-full rounded-md bg-amber-500 px-4 py-4 text-sm font-bold text-blue-900 hover:bg-amber-600 text-center"
          >
            إتمام الشراء
          </Link>
        </section>
      </div>
    </div>
  );
}
