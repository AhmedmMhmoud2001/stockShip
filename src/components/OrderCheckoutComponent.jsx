import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes";

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
   
const [coupon, setCoupon] = useState("");

  const subtotal = 4589;
  const shipping = 45.0;
  const total = 4589;

  return (
    <div dir="rtl" className="min-h-screen bg-white mt-40 w-full">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-25">
        
        {/* Navigation Links */}
        <div className="mb-6 flex flex-wrap items-center gap-4 text-sm">
          <Link
            to={ROUTES.HOME}
            className="text-blue-900 hover:text-blue-700 hover:underline"
          >
            الصفحة الرئيسية
          </Link>
          <span className="text-slate-400">/</span>
          <Link
            to={ROUTES.PRODUCTS_LIST}
            className="text-blue-900 hover:text-blue-700 hover:underline"
          >
            المنتجات
          </Link>
          <span className="text-slate-400">/</span>
          <Link
            to={ROUTES.ORDERS}
            className="text-blue-900 hover:text-blue-700 hover:underline"
          >
            طلباتي
          </Link>
          <span className="text-slate-400">/</span>
          <span className="text-slate-600 font-semibold">إتمام الشراء</span>
        </div>
        
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
          <Link to={ROUTES.ORDER_CHECKOUT_TWO}>
            <button
            type="button"
            className="mt-6 w-full rounded-md bg-amber-500 px-4 py-4 text-sm font-bold text-blue-900 hover:bg-amber-600"
          >
            إتمام الشراء
          </button>
          </Link>
          
        </section>

        {/* Additional Navigation Links */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to={ROUTES.HOME}
            className="px-6 py-2 text-sm font-semibold text-blue-900 border border-blue-900 rounded-md hover:bg-blue-50 transition-colors"
          >
            العودة للصفحة الرئيسية
          </Link>
          <Link
            to={ROUTES.PRODUCTS_LIST}
            className="px-6 py-2 text-sm font-semibold text-blue-900 border border-blue-900 rounded-md hover:bg-blue-50 transition-colors"
          >
            تصفح المزيد من المنتجات
          </Link>
          <Link
            to={ROUTES.ORDERS}
            className="px-6 py-2 text-sm font-semibold text-blue-900 border border-blue-900 rounded-md hover:bg-blue-50 transition-colors"
          >
            عرض طلباتي
          </Link>
        </div>

        <div className="h-10" />
      </div>
    </div>
  );
}
