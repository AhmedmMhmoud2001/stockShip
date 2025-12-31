import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import logo from "../assets/imgs/Group20.png";
import { Link } from "react-router-dom";
export default function LoginCard() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div  className="min-h-screen bg-white flex items-center justify-center p-4">
      {/* Card */}
      <div className="w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Form */}
          <div dir={"rtl"} className="p-6 sm:p-10">
            <div className="w-full ">
              <h1 className="text-xl font-bold text-slate-900 text-right w-full ">
                مرحباً بعودتك!
              </h1>
              
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                {/* Email */}
                <div>
                  <label className="block text-sm text-slate-700 mb-1">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    placeholder="example@email.com"
                    className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm text-slate-700 mb-1">
                    كلمة المرور
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
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Row: Remember + Forgot */}
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-slate-600">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-slate-300 text-blue-700 focus:ring-blue-200"
                    />
                    تذكرني
                  </label>

                  <button
                    type="button"
                    className="text-slate-500 hover:text-slate-700"
                  >
                    نسيت كلمة المرور؟
                  </button>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full rounded-md bg-blue-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
                >
                  تسجيل الدخول
                </button>

                {/* Links */}
                <div className="pt-2 text-center text-sm">
                    <Link to="/signup">
                     <span className="text-slate-500">ليس لديك حساب؟</span>
                 
                  <button type="button" className="font-semibold text-amber-600 hover:text-amber-700">
                    سجل الآن
                  </button>
                   </Link>
                </div>
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
          <div className=" bg-blue-900 p-6 sm:p-10 flex items-center justify-center">
            

            <img className="w-md" src={logo} alt="logo" />

          </div>
        </div>
      </div>
    </div>
  );
}
