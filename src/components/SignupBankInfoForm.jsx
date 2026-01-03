import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";

const Field = ({ label, required, value, onChange, placeholder = "..." }) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-semibold text-slate-800 text-right">
        {label}
        {required && <span className="text-red-500 ms-1">*</span>}
      </label>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-2 w-full rounded-md border border-blue-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-200"
      />
    </div>
  );
};

export default function SignupBankInfoForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    country: "",

    bankAccountName: "",
    bankAccountNumber: "",
    bankName: "",
    bankAddress: "",
    bankCode: "",
    swift: "",
    region: "",
    companyAddress: "",

    agree: true,
  });

  const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));
  const setCheck = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.checked }));

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div dir="rtl" className="min-h-screen bg-white mt-40">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-8 py-10">
        <form
          onSubmit={onSubmit}
          className="rounded-xl border border-slate-100 bg-white shadow-sm p-6 sm:p-8 space-y-10"
        >
          {/* Section 1 */}
          <div>
            <div className="text-center text-lg font-bold text-slate-900">
              أدخل بياناتك للانضمام ل stockship
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field
                label="الاسم الكامل/الاسم التجاري"
                required
                value={form.fullName}
                onChange={set("fullName")}
              />
              <Field
                label="رقم الهاتف"
                required
                value={form.phone}
                onChange={set("phone")}
              />
            </div>

            <div className="mt-6">
              <Field
                label="البريد الإلكتروني"
                required
                value={form.email}
                onChange={set("email")}
              />
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field
                label="المدينة"
                required
                value={form.city}
                onChange={set("city")}
              />
              <Field
                label="الدولة"
                required
                value={form.country}
                onChange={set("country")}
              />
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <div className="text-center text-lg font-bold text-slate-900">
              أكمل بياناتك الخاصة لإتمام عملية الشراء
            </div>

            <div className="mt-8 space-y-6">
              <Field
                label="اسم الحساب البنكي"
                required
                value={form.bankAccountName}
                onChange={set("bankAccountName")}
              />

              <Field
                label="رقم الحساب البنكي"
                required
                value={form.bankAccountNumber}
                onChange={set("bankAccountNumber")}
              />

              <Field
                label="البنك"
                required
                value={form.bankName}
                onChange={set("bankName")}
              />

              <Field
                label="عنوان البنك"
                required
                value={form.bankAddress}
                onChange={set("bankAddress")}
              />

              <Field
                label="رمز البنك"
                required
                value={form.bankCode}
                onChange={set("bankCode")}
              />

              <Field
                label="swift"
                required
                value={form.swift}
                onChange={set("swift")}
              />

              <Field
                label="الدولة/المنطقة"
                required
                value={form.region}
                onChange={set("region")}
              />

              <Field
                label="عنوان الشركة"
                required
                value={form.companyAddress}
                onChange={set("companyAddress")}
              />
            </div>

            <label className="mt-8 flex items-center justify-between gap-3 rounded-md bg-rose-100/70 px-4 py-3 text-sm font-semibold text-slate-800">
              <span>موافقة علي الشروط و الاحكام</span>
              <input
                type="checkbox"
                checked={form.agree}
                onChange={setCheck("agree")}
                className="h-4 w-4 rounded border-slate-300"
              />
            </label>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="w-full sm:w-52 rounded-md bg-amber-500 px-6 py-3 text-sm font-bold text-blue-900 hover:bg-amber-600"
              >
                تم
              </button>
              <Link
                to={ROUTES.PUBLISH_AD}
                className="w-full sm:w-auto inline-block text-center rounded-md bg-blue-900 px-6 py-3 text-sm font-bold text-white hover:bg-blue-800"
              >
                إنشاء إعلان
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
