import { Link } from "react-router-dom";
import Header from "../components/Header";
import FooterArabic from "../components/FooterArabic";
import { ROUTES } from "../routes";

export default function Seller() {
  return (
    <div>
      <Header />
      <div dir="rtl" className="min-h-screen bg-white pt-40 pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
              كن بائعاً
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              انضم إلى منصة Stockship وابدأ بيع منتجاتك بالجملة
            </p>
          </div>

          <div className="mt-12 rounded-2xl bg-slate-50 p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              لماذا Stockship؟
            </h2>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>وصل إلى شبكة واسعة من التجار والمشترين</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>تفاوض مباشر مع المشترين</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>حماية كاملة لكل صفقة</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>متابعة الشحن وحماية المدفوعات</span>
              </li>
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to={ROUTES.PUBLISH_AD}
                className="flex-1 rounded-lg bg-[#194386] px-6 py-3 text-center font-semibold text-white hover:bg-[#153268] transition-colors"
              >
                نشر إعلان
              </Link>
              <Link
                to={ROUTES.SIGNUP}
                className="flex-1 rounded-lg border border-[#194386] px-6 py-3 text-center font-semibold text-[#194386] hover:bg-slate-50 transition-colors"
              >
                سجل الآن
              </Link>
              <Link
                to={ROUTES.HOME}
                className="flex-1 rounded-lg border border-[#194386] px-6 py-3 text-center font-semibold text-[#194386] hover:bg-slate-50 transition-colors"
              >
                العودة للصفحة الرئيسية
              </Link>
            </div>
          </div>
        </div>
      </div>
      <FooterArabic />
    </div>
  );
}

