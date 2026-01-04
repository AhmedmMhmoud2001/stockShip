import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Eye, EyeOff } from "lucide-react";
import logo from "../assets/imgs/Group20.png";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes";
export default function LoginCard() {
  const { t, i18n } = useTranslation();
  const currentDir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      {/* Card */}
      <div className="w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Form */}
          <div dir={currentDir} className="p-6 sm:p-10">
            <div className="w-full">
              <h1 className={`text-xl font-bold text-slate-900 w-full ${currentDir === 'rtl' ? 'text-right' : 'text-left'}`}>
                {t("auth.welcomeBack")}
              </h1>
              
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                {/* Email */}
                <div>
                  <label className={`block text-sm text-slate-700 mb-1 ${currentDir === 'rtl' ? 'text-right' : 'text-left'}`}>
                    {t("auth.email")}
                  </label>
                  <input
                    type="email"
                    placeholder="example@email.com"
                    className={`w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 ${currentDir === 'rtl' ? 'text-right' : 'text-left'}`}
                    dir={currentDir}
                  />
                </div>

                {/* Password */}
                <div>
                  <label className={`block text-sm text-slate-700 mb-1 ${currentDir === 'rtl' ? 'text-right' : 'text-left'}`}>
                    {t("auth.password")}
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className={`w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 ${currentDir === 'rtl' ? 'text-right pr-10' : 'text-left pl-10'}`}
                      dir={currentDir}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className={`absolute top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-md text-slate-500 hover:bg-slate-50 ${currentDir === 'rtl' ? 'right-2' : 'left-2'}`}
                      aria-label={showPassword ? t("auth.hidePassword") : t("auth.showPassword")}
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
                <div className={`flex items-center justify-between text-sm ${currentDir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                  <label className={`flex items-center gap-2 text-slate-600 ${currentDir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-slate-300 text-blue-700 focus:ring-blue-200"
                    />
                    {t("auth.rememberMe")}
                  </label>

                  <button
                    type="button"
                    className="text-slate-500 hover:text-slate-700"
                  >
                    {t("auth.forgotPassword")}
                  </button>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full rounded-md bg-blue-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
                >
                  {t("auth.login")}
                </button>

                {/* Links */}
                <div className="pt-2 text-center text-sm">
                  <Link to={ROUTES.SIGNUP}>
                    <span className="text-slate-500">{t("auth.noAccount")}</span>
                    <button type="button" className="font-semibold text-amber-600 hover:text-amber-700 ms-1">
                      {t("auth.signUpNow")}
                    </button>
                  </Link>
                </div>
                <Link to={ROUTES.HOME}>
                  <div className="text-center">
                    <button type="button" className="text-sm font-semibold text-amber-600 hover:text-amber-700">
                      {t("auth.guestLogin")}
                    </button>
                  </div>
                </Link>
              </form>

              <div className="mt-10 text-center text-xs text-slate-400">
                © 2025 QeemaTech - {t("auth.allRightsReserved")}
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
