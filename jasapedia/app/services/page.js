"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaMoon, FaSun } from "react-icons/fa";
import {
  HiOutlineCodeBracket,
  HiOutlineGlobeAlt,
  HiOutlineDevicePhoneMobile,
  HiOutlineWrenchScrewdriver,
  HiOutlineCheckCircle,
  HiOutlineArrowRight,
  HiOutlineMapPin,
} from "react-icons/hi2";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useThemeAndLang } from "../hooks/useThemeAndLang";
import { t } from "../i18n/translations";

const services = [
  {
    name: "Website Company Profile",
    description: "Website profesional untuk memperkenalkan bisnis, produk, dan layanan Anda secara online.",
    features: ["Responsive Design", "SEO Friendly", "Domain & Hosting 1 Tahun"],
    icon: HiOutlineGlobeAlt,
    color: "#4F46E5",
  },
  {
    name: "Web Aplikasi",
    description: "Aplikasi berbasis web custom sesuai kebutuhan bisnis. Sistem kasir, inventory, CRM, dll.",
    features: ["Custom Dashboard", "Multi User & Role", "Database & REST API"],
    icon: HiOutlineCodeBracket,
    color: "#7C3AED",
  },
  {
    name: "Aplikasi Mobile",
    description: "Aplikasi Android & iOS dengan React Native Expo. Satu codebase, tampil di Google Play & App Store.",
    features: ["React Native (Expo)", "Push Notification", "Offline Mode"],
    icon: HiOutlineDevicePhoneMobile,
    color: "#2563EB",
  },
  {
    name: "Maintenance & Support",
    description: "Layanan perawatan, update, dan perbaikan website atau aplikasi yang sudah ada.",
    features: ["Bug Fixing", "Update Fitur", "Backup Rutin"],
    icon: HiOutlineWrenchScrewdriver,
    color: "#059669",
  },
];

export default function ServicesPage() {
  useScrollAnimation();
  const { dark, toggleDark, lang, toggleLang } = useThemeAndLang();
  const i = t[lang];
  const router = useRouter();
  const [contactOpen, setContactOpen] = useState(false);

  const waNumber = "6283173495159";

  const handleOrder = (serviceName) => {
    const message = encodeURIComponent(`Halo kak, saya mau konsultasi untuk pembuatan ${serviceName}`);
    window.open(`https://wa.me/${waNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen">
      {/* ==================== NAVBAR ==================== */}
      <nav className="nav-glass sticky top-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold gradient-text cursor-pointer">
            JasaPedia
          </Link>
          <ul className="hidden md:flex items-center space-x-4">
            <li><Link href="/" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">{i.home}</Link></li>
            <li><span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 cursor-default">{i.services}</span></li>
            <li><Link href="/advantages" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">{i.advantages}</Link></li>
            <li><Link href="/#testimoni" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">{i.testimonials}</Link></li>
            <li><Link href="/#proses" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">{i.howItWorks}</Link></li>
            <li><a href="https://cv-gray-iota.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">{i.portfolio}</a></li>
            <li className="relative">
              <button
                onClick={() => setContactOpen(!contactOpen)}
                className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer inline-flex items-center gap-1.5"
              >
                {i.contactUs}
                <svg className={`w-3.5 h-3.5 transition-transform ${contactOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/></svg>
              </button>
              {contactOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 py-2 min-w-[180px] z-50" style={{ animation: "fadeInDown 0.2s ease-out" }}>
                  <a
                    href="https://wa.me/6283173495159?text=Halo%20kak%2C%20saya%20mau%20konsultasi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-green-50 dark:hover:bg-green-900/30 transition-colors cursor-pointer"
                    onClick={() => setContactOpen(false)}
                  >
                    <FaWhatsapp className="text-green-500 text-lg" />
                    <div>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{i.whatsapp}</p>
                      <p className="text-[11px] text-slate-400">0831-7349-5159</p>
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-pink-50 dark:hover:bg-pink-900/30 transition-colors cursor-pointer"
                    onClick={() => setContactOpen(false)}
                  >
                    <FaInstagram className="text-pink-500 text-lg" />
                    <div>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{i.instagram}</p>
                      <p className="text-[11px] text-slate-400">@jasapedia</p>
                    </div>
                  </a>
                </div>
              )}
            </li>
            {/* Dark Mode + Language Toggles */}
            <li className="flex items-center gap-1.5">
              <button
                onClick={toggleDark}
                className="w-8 h-8 rounded-lg flex items-center justify-center bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors cursor-pointer"
                title={dark ? "Light Mode" : "Dark Mode"}
              >
                {dark ? <FaSun className="text-yellow-400 text-sm" /> : <FaMoon className="text-slate-600 text-sm" />}
              </button>
              <button
                onClick={toggleLang}
                className="h-8 px-2 rounded-lg flex items-center justify-center bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors cursor-pointer text-xs font-bold text-slate-600 dark:text-slate-300"
                title={lang === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
              >
                {lang === "id" ? "EN" : "ID"}
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* ==================== HERO HEADER ==================== */}
      <section className="px-6 pt-16 pb-10">
        <div className="max-w-5xl mx-auto text-center animate-on-scroll">
          <div className="inline-block">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
              {i.servicesPageTitle} <span className="gradient-text">{lang === "id" ? "Kami" : ""}</span>
            </h1>
            <span className="block h-1 mt-3 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400" />
          </div>
          <p className="text-slate-500 dark:text-slate-400 mt-5 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            {i.servicesPageDesc}
          </p>
        </div>
      </section>

      {/* ==================== SERVICES CARDS ==================== */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`animate-on-scroll delay-${index + 1} soft-card p-8 flex flex-col group hover:border-indigo-200 dark:hover:border-indigo-700`}>
                <div className="flex items-start gap-5 mb-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                    style={{ background: `linear-gradient(135deg, ${service.color}20, ${service.color}40)` }}
                  >
                    <service.icon className="text-3xl" style={{ color: service.color }} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{i[`svc${index + 1}`]}</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{i[`svc${index + 1}Desc`]}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {i[`svc${index + 1}Feats`].map((feat, fi) => (
                    <span key={fi} className="flex items-center gap-1 text-xs font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1.5 rounded-lg border border-indigo-100 dark:border-indigo-800">
                      <HiOutlineCheckCircle className="text-green-500" /> {feat}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-center w-full mt-auto pt-5 border-t border-slate-100 dark:border-slate-700">
                  <button
                    onClick={() => handleOrder(i[`svc${index + 1}`])}
                    className="soft-btn !py-2.5 !px-6 text-sm cursor-pointer inline-flex items-center gap-2"
                  >
                    <FaWhatsapp className="text-green-500" />
                    {i.orderNow}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto animate-on-scroll">
          <div className="relative overflow-hidden rounded-2xl py-8 px-6 md:py-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6" style={{ background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #9333EA 100%)" }}>
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10 flex items-center gap-4 flex-1">
              <div className="hidden md:flex w-12 h-12 rounded-xl bg-white/15 items-center justify-center flex-shrink-0">
                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-snug">
                  {i.ctaConfused}
                </h3>
                <p className="text-white/80 text-sm md:text-base mt-1">
                  {i.ctaConfusedDesc} <span className="text-yellow-300 font-bold">{i.ctaFree}</span> {i.ctaConfusedDesc2}
                </p>
              </div>
            </div>
            <div className="relative z-10 flex-shrink-0">
              <a
                href="https://wa.me/6283173495159?text=Halo%20kak%2C%20saya%20mau%20konsultasi"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 bg-white text-indigo-700 font-extrabold px-8 py-3.5 rounded-xl hover:bg-yellow-300 hover:text-indigo-900 transition-all cursor-pointer shadow-xl hover:-translate-y-0.5 text-base whitespace-nowrap"
              >
                <FaWhatsapp className="text-green-500 text-lg group-hover:scale-110 transition-transform" />
                {i.chatNow}
                <HiOutlineArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 text-white px-6 py-14">
        <div className="max-w-6xl mx-auto animate-on-scroll">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-slate-700/50">
            <div>
              <h2 className="text-2xl font-bold mb-3">JasaPedia</h2>
              <p className="text-slate-400 text-sm leading-relaxed">{i.footerDesc}</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">{i.navigation}</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-slate-400 hover:text-white text-sm transition-colors cursor-pointer">{i.home}</Link></li>
                <li><span className="text-white text-sm font-semibold cursor-default">{i.services}</span></li>
                <li><Link href="/advantages" className="text-slate-400 hover:text-white text-sm transition-colors cursor-pointer">{i.advantages}</Link></li>
                <li><Link href="/#proses" className="text-slate-400 hover:text-white text-sm transition-colors cursor-pointer">{i.howItWorks}</Link></li>
                <li><a onClick={() => router.push("/contact")} className="text-slate-400 hover:text-white text-sm transition-colors cursor-pointer">{i.contact}</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">{i.servicesLabel}</h3>
              <ul className="space-y-2">
                <li><span className="text-slate-400 text-sm">{i.svc1}</span></li>
                <li><span className="text-slate-400 text-sm">{i.svc2}</span></li>
                <li><span className="text-slate-400 text-sm">{i.svc3}</span></li>
                <li><span className="text-slate-400 text-sm">{i.svc4}</span></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">{i.contactLabel}</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <HiOutlineMapPin className="text-indigo-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-400 text-sm">{i.address}</span>
                </li>
                <li>
                  <a href="https://wa.me/6283173495159" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-green-400 text-sm transition-colors cursor-pointer">
                    <FaWhatsapp className="flex-shrink-0" /> 0831-7349-5159
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-pink-400 text-sm transition-colors cursor-pointer">
                    <FaInstagram className="flex-shrink-0" /> @jasapedia
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-slate-500 text-sm text-center mt-8">&copy; 2025 JasaPedia. All rights reserved.</p>
        </div>
      </footer>

      {/* ==================== FLOATING WHATSAPP ==================== */}
      <a
        href="https://wa.me/6283173495159?text=Halo%20kak%2C%20saya%20ingin%20konsultasi%20tentang%20jasa%20pembuatan%20web%20%26%20aplikasi"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 cursor-pointer no-underline"
      >
        <span className="bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-semibold px-4 py-2 rounded-lg shadow-md">
          {i.floatingWA}
        </span>
        <div className="bg-green-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex-shrink-0 pulse-glow">
          <FaWhatsapp className="text-white text-3xl" />
        </div>
      </a>
    </div>
  );
}
