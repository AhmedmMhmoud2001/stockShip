import React, { useState } from "react";
import { Eye, EyeOff, ChevronDown } from "lucide-react";
import logo from "../assets/imgs/Group20.png";
import { Link } from "react-router-dom";
export default function SignUpCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  // Optional: لو عايز تتوسع لاحقاً في الدول
  const [country, setCountry] = useState({ code: "+966", flag: "🇸🇦" });

  return (
    <div className="min-h-screen bg-white mb-10 flex items-center justify-center p-4">
      {/* Card */}
      <div className="w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Form */}
          <div dir="rtl" className="p-6 sm:p-10">
            <div className="w-full">
              <h1 className="text-xl font-bold text-slate-900 text-right w-full">
                مرحباً بعودتك!
              </h1>

              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  // TODO: submit logic
                }}
              >
                {/* Name */}
                <div>
                  <label className="block text-sm text-slate-700 mb-1">
                    الاسم*
                  </label>
                  <input
                    type="text"
                    placeholder="أدخل الاسم"
                    className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm text-slate-700 mb-1">
                    البريد الإلكتروني*
                  </label>
                  <input
                    type="email"
                    placeholder="example@email.com"
                    className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm text-slate-700 mb-1">
                    رقم الهاتف*
                  </label>

                  <div className="flex flex-row-reverse items-stretch  gap-2">
                    {/* Country code */}
                    <div className="relative min-w-[120px]">
                      <select
                        value={country.code}
                        onChange={(e) => {
                          const v = e.target.value;
                          // عدّل flags براحتك
                          if (v === "+966") setCountry({ code: "+966", flag: "🇸🇦" });
                          if (v === "+965") setCountry({ code: "+965", flag: "🇰🇼" });
                          if (v === "+20") setCountry({ code: "+20", flag: "🇪🇬" });
                        }}
                        className="appearance-none w-full rounded-md border border-slate-200 bg-white ps-3 pe-9 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                      >
                        <option value="+966">🇸🇦 +966</option>
                        <option value="+965">🇰🇼 +965</option>
                        <option value="+20">🇪🇬 +20</option>
                      </select>
                      <ChevronDown className="h-4 w-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>

                    {/* Phone number */}
                    <input
                      type="tel"
                      placeholder="5XXXXXXXX"
                      className="flex-1 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm text-slate-700 mb-1">
                    كلمة المرور*
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-md text-slate-500 hover:bg-slate-50"
                      aria-label={showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm text-slate-700 mb-1">
                    تأكيد كلمة المرور*
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirm ? "text" : "password"}
                      placeholder="••••••••"
                      className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirm((v) => !v)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-md text-slate-500 hover:bg-slate-50"
                      aria-label={showConfirm ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"}
                    >
                      {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                {/* Terms */}
                <label className="flex items-center gap-2 text-sm text-slate-700 rounded-md bg-rose-50 px-3 py-2 border border-rose-100">
                  <input
                    type="checkbox"
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                    className="h-4 w-4 rounded border-slate-300 text-blue-700 focus:ring-blue-200"
                  />
                  موافقة على الشروط والاحكام
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!acceptTerms}
                  className={`w-full rounded-md px-4 py-2.5 text-sm font-semibold text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200
                    ${acceptTerms ? "bg-blue-900 hover:bg-blue-800" : "bg-slate-300 cursor-not-allowed"}`}
                >
                  استكمال البيانات
                </button>

                {/* Links */}
                <Link to="/login">
                    <div className="pt-2 text-center text-sm">
                        
                    <span className="text-slate-500">هل لديك حساب بالفعل؟</span>{" "}
                    <button type="button" className="font-semibold text-amber-600 hover:text-amber-700">
                        سجل الدخول
                    </button>
                    </div>
                </Link>
                 <Link to="/">
                <div className="text-center">
                  <button type="button" className="text-sm font-semibold text-amber-600 hover:text-amber-700">
        الدخول كزائر
                  </button>
                </div>
                </Link>
              </form>

              <div className="mt-10 text-center text-xs text-slate-400">
                © 2025 QeemaTech - جميع الحقوق محفوظة
              </div>
            </div>
          </div>

          {/* Right: Brand */}
          <div className="bg-blue-900 p-6 sm:p-10 flex items-center justify-center">
            <img className="w-md" src={logo} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
