"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaMoon, FaSun } from "react-icons/fa";
import {
  HiOutlineRocketLaunch,
  HiOutlineStar,
  HiOutlineShieldCheck,
  HiOutlineCurrencyDollar,
  HiOutlinePaintBrush,
  HiOutlineChatBubbleLeftRight,
  HiOutlineCheckCircle,
  HiOutlineArrowRight,
  HiOutlineMapPin,
} from "react-icons/hi2";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useThemeAndLang } from "../hooks/useThemeAndLang";
import { t } from "../i18n/translations";

const advantages = [
  {
    icon: HiOutlineRocketLaunch,
    titleKey: "adv1Title",
    descKey: "adv1Desc",
    pointsKey: "adv1Points",
    color: "from-indigo-500 to-purple-500",
    borderColor: "#6366F1",
  },
  {
    icon: HiOutlineStar,
    titleKey: "adv2Title",
    descKey: "adv2Desc",
    pointsKey: "adv2Points",
    color: "from-amber-400 to-orange-500",
    borderColor: "#F59E0B",
  },
  {
    icon: HiOutlineShieldCheck,
    titleKey: "adv3Title",
    descKey: "adv3Desc",
    pointsKey: "adv3Points",
    color: "from-emerald-400 to-teal-500",
    borderColor: "#10B981",
  },
  {
    icon: HiOutlineCurrencyDollar,
    titleKey: "adv4Title",
    descKey: "adv4Desc",
    pointsKey: "adv4Points",
    color: "from-pink-400 to-rose-500",
    borderColor: "#EC4899",
  },
  {
    icon: HiOutlinePaintBrush,
    titleKey: "adv5Title",
    descKey: "adv5Desc",
    pointsKey: "adv5Points",
    color: "from-cyan-400 to-blue-500",
    borderColor: "#06B6D4",
  },
  {
    icon: HiOutlineChatBubbleLeftRight,
    titleKey: "adv6Title",
    descKey: "adv6Desc",
    pointsKey: "adv6Points",
    color: "from-violet-400 to-purple-500",
    borderColor: "#8B5CF6",
  },
];

export default function AdvantagesPage() {
  useScrollAnimation();
  const { dark, toggleDark, lang, toggleLang } = useThemeAndLang();
  const i = t[lang];
  const router = useRouter();
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* ==================== NAVBAR ==================== */}
      <nav className="nav-glass sticky top-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold gradient-text cursor-pointer">
            Manjurdigitallis
          </Link>
          <ul className="hidden md:flex items-center space-x-4">
            <li><Link href="/" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">{i.home}</Link></li>
            <li><Link href="/services" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">{i.services}</Link></li>
            <li><span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 cursor-default">{i.advantages}</span></li>
            <li><Link href="/#testimoni" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">{i.testimonials}</Link></li>
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
                    href="https://www.instagram.com/manjurdigitallis?igsh=djNlMW05a2ZtYnVr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-pink-50 dark:hover:bg-pink-900/30 transition-colors cursor-pointer"
                    onClick={() => setContactOpen(false)}
                  >
                    <FaInstagram className="text-pink-500 text-lg" />
                    <div>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{i.instagram}</p>
                      <p className="text-[11px] text-slate-400">@manjurdigitallis</p>
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
              {i.advPageTitle} <span className="gradient-text">{lang === "id" ? "Kami" : "Us"}</span>
            </h1>
            <span className="block h-1 mt-3 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400" />
          </div>
          <p className="text-slate-500 dark:text-slate-400 mt-5 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            {i.advPageDesc}
          </p>
        </div>
      </section>

      {/* ==================== ADVANTAGES CARDS ==================== */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((adv, index) => (
              <div key={index} className={`animate-on-scroll delay-${index + 1} soft-card p-8 flex flex-col group relative overflow-hidden`}>
                {/* Top gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${adv.color}`} />

                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${adv.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 animate-float`} style={{ animationDelay: `${index * 0.2}s` }}>
                  <adv.icon className="text-2xl text-white" />
                </div>

                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{i[adv.titleKey]}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-5">{i[adv.descKey]}</p>

                <div className="mt-auto flex flex-col gap-2.5">
                  {i[adv.pointsKey].map((point, pi) => (
                    <div key={pi} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <HiOutlineCheckCircle className="text-green-500 flex-shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
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
                  {i.ctaTitle}
                </h3>
                <p className="text-white/80 text-sm md:text-base mt-1">
                  {i.ctaDesc} <span className="text-yellow-300 font-bold">{i.ctaFree}</span> {i.ctaDesc2}
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
                {i.ctaBtn}
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
              <h2 className="text-2xl font-bold mb-3">Manjurdigitallis</h2>
              <p className="text-slate-400 text-sm leading-relaxed">{i.footerDesc}</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">{i.navigation}</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-slate-400 hover:text-white text-sm transition-colors cursor-pointer">{i.home}</Link></li>
                <li><Link href="/services" className="text-slate-400 hover:text-white text-sm transition-colors cursor-pointer">{i.services}</Link></li>
                <li><span className="text-white text-sm font-semibold cursor-default">{i.advantages}</span></li>
                <li><Link href="/#testimoni" className="text-slate-400 hover:text-white text-sm transition-colors cursor-pointer">{i.testimonials}</Link></li>
                <li><Link href="/#proses" className="text-slate-400 hover:text-white text-sm transition-colors cursor-pointer">{i.howItWorks}</Link></li>
                <li><a href="https://cv-gray-iota.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white text-sm transition-colors cursor-pointer">{i.portfolio}</a></li>
                <li><a href="https://wa.me/6283173495159?text=Halo%20kak%2C%20saya%20mau%20konsultasi" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white text-sm transition-colors cursor-pointer">{i.contactUs}</a></li>
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
                  <a href="https://www.instagram.com/manjurdigitallis?igsh=djNlMW05a2ZtYnVr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-pink-400 text-sm transition-colors cursor-pointer">
                    <FaInstagram className="flex-shrink-0" /> @manjurdigitallis
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-slate-500 text-sm text-center mt-8">&copy; 2025 Manjurdigitallis. All rights reserved.</p>
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
