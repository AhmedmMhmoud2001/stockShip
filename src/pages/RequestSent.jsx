import { Link, useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import Header from "../components/Header";
import FooterArabic from "../components/FooterArabic";
import { ROUTES } from "../routes";

export default function RequestSent() {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div dir="rtl" className="min-h-screen bg-white pt-40 pb-20">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Icon */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-green-500 border-4 border-green-600 flex items-center justify-center">
                  <CheckCircle className="h-16 w-16 sm:h-20 sm:w-20 text-white" strokeWidth={3} />
                </div>
              </div>
            </div>

            {/* Main Message */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              تم إرسال طلبك بنجاح انتظر رد البائع عليك
            </h1>

            {/* Secondary Message */}
            <p className="text-base sm:text-lg text-slate-600 mb-8">
              يمكنك إعادة إرسال طلبك في حالة عدم رد البائع في خلال 72 ساعة
            </p>

            {/* Action Button */}
            <div className="flex justify-center">
              <button
                onClick={() => navigate(ROUTES.ORDER_CHECKOUT)}
                className="px-12 py-4 bg-[#F5AF00] text-blue-900 font-bold text-lg rounded-lg hover:bg-[#E5A000] transition-colors shadow-sm"
              >
                تم
              </button>
            </div>

            {/* Additional Navigation Links */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={ROUTES.HOME}
                className="px-6 py-2 text-sm font-semibold text-blue-900 border border-blue-900 rounded-md hover:bg-blue-50 transition-colors"
              >
                العودة للصفحة الرئيسية
              </Link>
              <Link
                to={ROUTES.ORDERS}
                className="px-6 py-2 text-sm font-semibold text-blue-900 border border-blue-900 rounded-md hover:bg-blue-50 transition-colors"
              >
                عرض طلباتي
              </Link>
            </div>
          </div>
        </div>
      </div>
      <FooterArabic />
    </div>
  );
}

