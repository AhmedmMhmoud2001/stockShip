import React, { useMemo, useState } from "react";

export default function OrderCheckoutComponent() {
  const products = useMemo(
    () => [
      {
        id: "p1",
        title: "فلتر زيت أصلي",
        sku: "6563453454",
        desc:
          "لوريم إيبسوم نص تجريبي يمكن استبداله بوصف المنتج الحقيقي. تفاصيل مختصرة عن المنتج ومواصفاته.",
        qtyTotal: 50,
        cbmTotal: 8,
        totalPrice: 1000,
        currency: "ر.س",
        mainImg:
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
        thumbs: [
          "https://images.unsplash.com/photo-1512499617640-c2f999018b72?auto=format&fit=crop&w=300&q=80",
          "https://images.unsplash.com/photo-1580913428735-bd3c269d6a82?auto=format&fit=crop&w=300&q=80",
          "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=300&q=80",
          "https://images.unsplash.com/photo-1565843708714-52ecf69c36b1?auto=format&fit=crop&w=300&q=80",
        ],
      },
      {
        id: "p2",
        title: "فلتر زيت أصلي",
        sku: "6563453454",
        desc:
          "لوريم إيبسوم نص تجريبي يمكن استبداله بوصف المنتج الحقيقي. تفاصيل مختصرة عن المنتج ومواصفاته.",
        qtyTotal: 50,
        cbmTotal: 8,
        totalPrice: 1000,
        currency: "ر.س",
        mainImg:
          "https://images.unsplash.com/photo-1565843708714-52ecf69c36b1?auto=format&fit=crop&w=900&q=80",
        thumbs: [
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=300&q=80",
          "https://images.unsplash.com/photo-1512499617640-c2f999018b72?auto=format&fit=crop&w=300&q=80",
          "https://images.unsplash.com/photo-1580913428735-bd3c269d6a82?auto=format&fit=crop&w=300&q=80",
          "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=300&q=80",
        ],
      },
    ],
    []
  );

  // ✅ selected image لكل منتج
  const [selectedImages, setSelectedImages] = useState(() =>
    Object.fromEntries(products.map((p) => [p.id, p.mainImg]))
  );

  const setSelectedFor = (productId, img) => {
    setSelectedImages((prev) => ({ ...prev, [productId]: img }));
  };

  // جدول الطلب (قيم افتراضية)
  const [rows, setRows] = useState([
    { serial: 1, orderNo: 1, qty: 1, price: 1, cbm: 1 },
    { serial: 2, orderNo: 2, qty: 2, price: 2, cbm: 2 },
    { serial: 3, orderNo: 8, qty: 3, price: 3, cbm: 3 },
    { serial: 5, orderNo: 5, qty: 6, price: 6, cbm: 6 },
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

  // ملخص الدفع (قيم مثال)
  const subtotal = 5650;
  const discount = 0;
  const tax = 0;
  const grandTotal = subtotal - discount + tax;

  return (
    <div dir="rtl" className="min-h-screen bg-white mt-40 w-full">
      <div className="px-4 sm:px-8 md:px-12 lg:px-24 pt-25">
        
        <div className="space-y-6">
          {products.map((p) => {
            const activeImg = selectedImages[p.id] || p.mainImg;

            return (
              <div
                key={p.id}
                className="rounded-md  border-slate-200 bg-white"
              >
                
                <div
                  className="grid grid-cols-1 md:grid-cols-[1fr_190px] gap-4 p-4 sm:p-6"
                  dir="ltr"
                >
                  {/* LEFT: text + summary */}
                  <div dir="rtl">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                          {p.title}
                        </h3>
                        <div className="mt-1 text-xs text-slate-500">
                          #{p.sku}
                        </div>
                      </div>

                      
                    </div>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {p.desc}
                    </p>

                    {/* Summary rows */}
                    <div className="mt-4 overflow-hidden rounded-md  border-slate-200" dir="ltr">
                      {[
                        { label: "مجموع الكمية", value: `${p.qtyTotal} حبه` },
                        { label: "اجمالي المتر مكعب CBM", value: `${p.cbmTotal} CBM` },
                        { label: "اجمالي السعر", value: `${p.totalPrice} ${p.currency}` },
                      ].map((row, idx) => (
                        <div
                          key={row.label}
                          className={`grid grid-cols-2 ${idx !== 0 ? "border-t border-slate-200" : ""}`}
                        >
                          <div className="px-4 py-2 text-sm text-slate-700 text-left" dir="rtl">
                            {row.value}
                          </div>

                          <div
                            className="px-4 py-2 text-sm font-semibold text-blue-800 text-right bg-slate-50 border-l border-slate-200"
                            dir="rtl"
                          >
                            {row.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* RIGHT: image + thumbs */}
                  <div className="flex flex-col items-end">
                    <div className="relative w-full overflow-hidden rounded-md border border-slate-200 bg-slate-50">
                      
                      <img
                        src={activeImg}
                        alt={p.title}
                        className="h-36 sm:h-40 w-full object-cover"
                      />
                      <span className="absolute top-2 left-2 rounded bg-red-600 px-2 py-0.5 text-[10px] font-bold text-white">
                        SALE
                      </span>
                    </div>

                    {/* ✅ thumbnails clickable */}
                    <div className="mt-2 grid grid-cols-5 gap-1 w-full">
                      {p.thumbs.slice(0, 4).map((t, i) => {
                        const isActive = activeImg === t;
                        return (
                          <button
                            key={i}
                            type="button"
                            onClick={() => setSelectedFor(p.id, t)}
                            className={`h-10 overflow-hidden rounded border bg-slate-50 transition
                              ${isActive ? "border-blue-700 ring-2 ring-blue-200" : "border-slate-200 hover:border-slate-400"}`}
                            aria-label="عرض الصورة"
                          >
                            <img
                              src={t}
                              alt=""
                              className="h-full w-full object-cover"
                            />
                          </button>
                        );
                      })}

                      
                      <button
                        type="button"
                        onClick={() => setSelectedFor(p.id, p.mainImg)}
                        className="h-10 rounded border border-slate-200 bg-white text-slate-500 hover:bg-slate-50"
                        aria-label="الرجوع للصورة الأساسية"
                      >
                        ▶
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ✅ جدول الطلب */}
        <div className="mt-6 overflow-hidden rounded-md border border-slate-200">
          <div className="grid grid-cols-5 bg-slate-100 text-xs font-semibold text-slate-700">
            <div className="px-3 py-2 text-center border-l border-slate-200">المسلسل</div>
            <div className="px-3 py-2 text-center border-l border-slate-200">رقم الطلب</div>
            <div className="px-3 py-2 text-center border-l border-slate-200">الكمية</div>
            <div className="px-3 py-2 text-center border-l border-slate-200">السعر</div>
            <div className="px-3 py-2 text-center">CBM</div>
          </div>

          {rows.map((r, idx) => (
            <div key={idx} className="grid grid-cols-5 items-center border-t border-slate-200 bg-white">
              <div className="px-3 py-2 text-center text-sm text-slate-700 border-l border-slate-200">
                {r.serial}
              </div>

              <div className="px-3 py-2 text-center border-l border-slate-200">
                <input
                  value={r.orderNo}
                  onChange={(e) => updateRow(idx, "orderNo", e.target.value)}
                  className="w-full rounded bg-slate-100 px-2 py-1 text-sm text-center outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div className="px-3 py-2 text-center border-l border-slate-200">
                <input
                  value={r.qty}
                  onChange={(e) => updateRow(idx, "qty", e.target.value)}
                  className="w-full rounded bg-slate-100 px-2 py-1 text-sm text-center outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div className="px-3 py-2 text-center border-l border-slate-200">
                <input
                  value={r.price}
                  onChange={(e) => updateRow(idx, "price", e.target.value)}
                  className="w-full rounded bg-slate-100 px-2 py-1 text-sm text-center outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div className="px-3 py-2 text-center">
                <input
                  value={r.cbm}
                  onChange={(e) => updateRow(idx, "cbm", e.target.value)}
                  className="w-full rounded bg-slate-100 px-2 py-1 text-sm text-center outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
            </div>
          ))}

          <div className="grid grid-cols-5 bg-blue-900 text-white text-xs font-semibold">
            <div className="px-3 py-2 text-center border-l border-blue-800">2222</div>
            <div className="px-3 py-2 text-center border-l border-blue-800">الإجمالي</div>
            <div className="px-3 py-2 text-center border-l border-blue-800">{totals.sumQty}</div>
            <div className="px-3 py-2 text-center border-l border-blue-800">{totals.sumPrice}</div>
            <div className="px-3 py-2 text-center">{totals.sumCbm}</div>
          </div>
        </div>

        {/* ✅ ملخص */}
        <div className="mt-6 space-y-3 text-sm text-slate-700">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span>المجموع</span>
            <span className="font-semibold">{subtotal.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span>الخصم</span>
            <span className="font-semibold">{discount.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span>الضريبة</span>
            <span className="font-semibold">{tax.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">الإجمالي</span>
            <span className="font-bold text-slate-900">{grandTotal.toLocaleString()}</span>
          </div>
        </div>

        {/* ✅ زر الإنهاء */}
        <button
          type="button"
          className="mt-6 w-full rounded-md bg-amber-500 px-4 py-3 text-sm font-bold text-white shadow-sm hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-200"
        >
          إتمام الشراء
        </button>

        <div className="h-10" />
      </div>
    </div>
  );
}
