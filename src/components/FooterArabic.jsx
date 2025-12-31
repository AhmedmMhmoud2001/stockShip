import React from "react";
import {
  ChevronLeft,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import logo from "../assets/imgs/Group25.png";
import paymentMethod from "../assets/imgs/payment-method.png";

function FooterLinks({ title, links }) {
  return (
    <div className="text-right">
      <h4 className="mb-4 text-lg font-semibold text-slate-900">{title}</h4>
      <ul className="space-y-3 text-sm text-slate-600">
        {links.map((l, i) => (
          <li key={i}>
            <a
              href={l.href}
              className="inline-flex items-center gap-2 transition hover:text-slate-900"
            >
              <ChevronLeft className="h-4 w-4 text-slate-400" />
              <span>{l.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FooterArabic({
  brandName = "STOCKSHIP",
  description = `منصة للشركات والتجار تعمل على بناء الثقة بين المصانع والتجار، حيث يمكنك عرض بضائعك بالجملة، للتفاوض مباشرةً مع المشترين. ونضمن الصفقات بأمان وسهولة، مع ضمان متابعة الشحن وحماية المدفوعات في كل خطوة.`,
  contact = {
    address: `العنوان: 502 شارع التصميم الجديد، ميلووكي، سان فرانسيسكو، CA 94110 الولايات المتحدة`,
    phone: `الهاتف: (+01) 123-456-789`,
    email: `البريد الإلكتروني: contact@ecom-market.com`,
    hours: `ساعات العمل: من 8:00 صباحاً إلى 5:00 مساءً\nمن الاثنين إلى السبت`,
  },
  columns = {
    account: {
      title: "حسابي",
      links: [
        { label: "حسابي", href: "#" },
        { label: "مركز الإرجاع", href: "#" },
        { label: "مركز الشحن", href: "#" },
        { label: "تذاكر الدعم", href: "#" },
        { label: "تتبع الطلب", href: "#" },
        { label: "مركز الدعم", href: "#" },
        { label: "طريقة الدفع", href: "#" },
      ],
    },
    categories: {
      title: "الفئات",
      links: [
        { label: "عنا", href: "#" },
        { label: "معلومات التوصيل", href: "#" },
        { label: "سياسة الخصوصية", href: "#" },
        { label: "الشروط والأحكام", href: "#" },
        { label: "اتصل بنا", href: "#" },
        { label: "مركز الدعم", href: "#" },
        { label: "الوظائف", href: "#" },
      ],
    },
    company: {
      title: "الشركة",
      links: [
        { label: "عنا", href: "#" },
        { label: "معلومات التوصيل", href: "#" },
        { label: "سياسة الخصوصية", href: "#" },
        { label: "الشروط والأحكام", href: "#" },
        { label: "اتصل بنا", href: "#" },
        { label: "مركز الدعم", href: "#" },
        { label: "الوظائف", href: "#" },
      ],
    },
  },
  year = new Date().getFullYear(),
}) {
  return (
    <footer dir="rtl" className="w-full bg-[#EEF4FF] ">
      <div className="mx-2 sm:mx-6 md:mx-10 lg:mx-16 xl:mx-24 2xl:mx-25 max-w-7xl px-4 py-12 md:py-14">
        {/* ✅ Responsive grid: 1 / 2 / 4 columns */}
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand (عمود) */}
          <div className="text-right">
            <img src={logo} alt="logo" className="inline-block h-10 w-auto" />

            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              {description}
            </p>

            <div className="mt-6">
              <div className="text-sm font-semibold text-slate-900">
                بيانات الدفع الآمنة
              </div>
              <div className="mt-3 flex justify-start">
                <img
                  src={paymentMethod}
                  alt="payment-method"
                  className=" w-[60%] "
                />
              </div>
            </div>
          </div>

          {/* Account (عمود) */}
          <div>
            <FooterLinks {...columns.account} />
          </div>

          {/* Categories (عمود) */}
          <div>
            <FooterLinks {...columns.categories} />
          </div>

          {/* Contact (عمود) */}
          <div className="text-right">
            <h4 className="mb-4 text-lg font-semibold text-slate-900">
              اتصل بنا
            </h4>

            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-start justify-start gap-3">
                <span className="leading-relaxed">{contact.address}</span>
              </li>
              <li className="flex items-start justify-start gap-3">
                <span>{contact.phone}</span>
              </li>
              <li className="flex items-start justify-start gap-3">
                <span>{contact.email}</span>
              </li>
              <li className="flex items-start justify-start gap-3 whitespace-pre-line">
                <span>{contact.hours}</span>
              </li>
            </ul>

            <div className="mt-6 flex justify-start gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-full bg-blue-500 text-white shadow-sm ring-1 ring-slate-200 hover:text-slate-900"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full bg-blue-500 text-white shadow-sm ring-1 ring-slate-200 hover:text-slate-900"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="grid h-10 w-10 place-items-center rounded-full bg-blue-500 text-white shadow-sm ring-1 ring-slate-200 hover:text-slate-900"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-full bg-blue-500 text-white shadow-sm ring-1 ring-slate-200 hover:text-slate-900"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 h-px w-full bg-blue-400/60" />

        <div className="py-6 text-center text-sm text-blue-500">
          حقوق الطبع والنشر © {brandName} {year} جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}
