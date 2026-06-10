"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaMoon, FaSun } from "react-icons/fa";
import {
  HiOutlineArrowRight,
  HiOutlineMapPin,
  HiOutlineChatBubbleLeftRight,
  HiOutlineClipboardDocumentList,
  HiOutlinePaintBrush,
  HiOutlineCursorArrowRays,
  HiOutlineBars3,
  HiOutlineXMark,
} from "react-icons/hi2";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import { useThemeAndLang } from "./hooks/useThemeAndLang";
import { t } from "./i18n/translations";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  useScrollAnimation();
  const { dark, toggleDark, lang, toggleLang } = useThemeAndLang();
  const i = t[lang];

  useEffect(() => {
    const counters = document.querySelectorAll("[data-count]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const end = parseInt(el.getAttribute("data-count"));
            const suffix = el.getAttribute("data-suffix") || "";
            let current = 0;
            const step = Math.max(1, Math.floor(end / 60));
            const timer = setInterval(() => {
              current += step;
              if (current >= end) {
                current = end;
                clearInterval(timer);
              }
              el.textContent = current + suffix;
            }, 30);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: 40, suffix: "+", label: i.projectDone },
    { number: 20, suffix: "+", label: i.happyClients },
    { number: 2, suffix: "+", label: i.yearsExp },
    { number: 89, suffix: "%", label: i.satisfaction },
  ];

  const processSteps = [
    { icon: HiOutlineChatBubbleLeftRight, title: i.step1, desc: i.step1Desc },
    { icon: HiOutlineClipboardDocumentList, title: i.step2, desc: i.step2Desc },
    { icon: HiOutlinePaintBrush, title: i.step3, desc: i.step3Desc },
    { icon: HiOutlineCursorArrowRays, title: i.step4, desc: i.step4Desc },
  ];

  const testimonials = [
    {
      name: "Budi S.", role: "Owner Toko Online", phone: "+62 812-7349", last4: "5159", avatar: "👨‍💼",
      messages: [
        { from: "client", text: "Kak, website-nya udah jadi ya? Keren banget! 😍" },
        { from: "client", text: "Penjualan saya naik 40% sejak punya website ini 👍" },
        { from: "admin", text: "Alhamdulillah, senang bisa bantu kak Budi! 🙏" },
      ],
    },
    {
      name: "Sari W.", role: "CEO Startup", phone: "+62 853-4821", last4: "9217", avatar: "👩‍💼",
      messages: [
        { from: "client", text: "Aplikasi-nya stabil banget, user-friendly lagi 👌" },
        { from: "client", text: "Tim-nya responsif, support-nya mantap!" },
        { from: "admin", text: "Terima kasih kak Sari, kami siap support terus! 💪" },
      ],
    },
    {
      name: "Andi P.", role: "Manager Restoran", phone: "+62 821-5690", last4: "3456", avatar: "👨‍🍳",
      messages: [
        { from: "client", text: "Sistem kasir-nya sangat membantu operasional 👏" },
        { from: "client", text: "Pengerjaan cepat dan sesuai budget. Mantap!" },
        { from: "admin", text: "Semoga bisnisnya makin lancar ya kak! 🚀" },
      ],
    },
    {
      name: "Dewi R.", role: "Owner Butik", phone: "+62 878-2109", last4: "8892", avatar: "👩‍🎨",
      messages: [
        { from: "client", text: "Website butik-nya cantik banget kak! 🛍️" },
        { from: "client", text: "Customer saya pada suka, order jadi makin gampang" },
        { from: "admin", text: "Senang dengarnya kak Dewi! Sukses terus! ✨" },
      ],
    },
    {
      name: "Rudi H.", role: "Direktur Logistik", phone: "+62 856-3074", last4: "6541", avatar: "🧑‍💼",
      messages: [
        { from: "client", text: "Aplikasi tracking-nya bagus, karyawan mudah pakai" },
        { from: "client", text: "Efisiensi kerja naik 60% sejak pakai sistem ini" },
        { from: "admin", text: "Luar biasa! Terima kasih feedback-nya kak Rudi 🙌" },
      ],
    },
    {
      name: "Lina M.", role: "Founder Bimbel", phone: "+62 838-7421", last4: "2083", avatar: "👩‍🏫",
      messages: [
        { from: "client", text: "Web bimbel-nya keren, parent bisa pantau anak langsung 📚" },
        { from: "client", text: "Pendaftaran online jadi lebih rapi dan tertata" },
        { from: "admin", text: "Alhamdulillah kak Lina, semoga makin banyak muridnya! 🎓" },
      ],
    },
    {
      name: "Fajar K.", role: "Owner Gym", phone: "+62 813-9502", last4: "4728", avatar: "🏋️",
      messages: [
        { from: "client", text: "Aplikasi booking kelas-nya smooth banget kak 💪" },
        { from: "client", text: "Member pada bilang enak pakai-nya, ga ribet" },
        { from: "admin", text: "Mantap kak Fajar! Keep growing! 🔥" },
      ],
    },
    {
      name: "Mega S.", role: "Owner Katering", phone: "+62 857-1048", last4: "7765", avatar: "👩‍🍳",
      messages: [
        { from: "client", text: "Website katering-nya bikin order naik 2x lipat! 🍱" },
        { from: "client", text: "Fitur pilih menu-nya customer suka banget" },
        { from: "admin", text: "Wah keren! Semoga makin laris kak Mega! 🙏" },
      ],
    },
    {
      name: "Yoga P.", role: "CEO Agency", phone: "+62 822-6310", last4: "5519", avatar: "🧑‍💻",
      messages: [
        { from: "client", text: "Dashboard analytics-nya detail banget kak" },
        { from: "client", text: "Bantu kami ambil keputusan lebih cepat dan akurat 📊" },
        { from: "admin", text: "Siap kak Yoga, kami terus improve! 💡" },
      ],
    },
    {
      name: "Nita A.", role: "Owner Salon", phone: "+62 896-5283", last4: "0474", avatar: "💇‍♀️",
      messages: [
        { from: "client", text: "App booking salon-nya bagus! Customer bisa pilih stylist sendiri 💇‍♀️" },
        { from: "client", text: "No-show berkurang 70% karena ada reminder otomatis" },
        { from: "admin", text: "Keren kak Nita! Salon-nya makin maju! ✨" },
      ],
    },
    {
      name: "Hendra T.", role: "Owner Properti", phone: "+62 811-8734", last4: "2052", avatar: "🏠",
      messages: [
        { from: "client", text: "Website listing properti-nya profesional banget 🏠" },
        { from: "client", text: "Lead masuk 3x lebih banyak dari sebelumnya" },
        { from: "admin", text: "Alhamdulillah kak Hendra, sukses terus! 🏆" },
      ],
    },
    {
      name: "Ratna D.", role: "Owner Klinik", phone: "+62 852-4061", last4: "8938", avatar: "👩‍⚕️",
      messages: [
        { from: "client", text: "Sistem booking klinik-nya sangat membantu 🏥" },
        { from: "client", text: "Pasien bisa antri online, ga perlu nunggu lama" },
        { from: "admin", text: "Semoga pelayanan makin prima kak Ratna! 🙏" },
      ],
    },
    {
      name: "Dimas R.", role: "Founder EdTech", phone: "+62 877-9520", last4: "3161", avatar: "👨‍💻",
      messages: [
        { from: "client", text: "Platform e-learning-nya keren, student engagement naik 📱" },
        { from: "client", text: "Fitur quiz dan progress tracking-nya mantap!" },
        { from: "admin", text: "Terima kasih kak Dimas, semoga makin impactful! 🎯" },
      ],
    },
    {
      name: "Putri L.", role: "Owner Wedding Organizer", phone: "+62 819-6472", last4: "1847", avatar: "👰",
      messages: [
        { from: "client", text: "Website WO-nya elegant banget kak! 💒" },
        { from: "client", text: "Calon client langsung percaya lihat portofolionya" },
        { from: "admin", text: "Semoga makin banyak wedding-nya kak Putri! 💐" },
      ],
    },
    {
      name: "Agus W.", role: "Owner Bengkel", phone: "+62 831-2950", last4: "7186", avatar: "🧑‍🔧",
      messages: [
        { from: "client", text: "App booking servis kendaraan-nya praktis banget 🚗" },
        { from: "client", text: "Customer tinggal pilih jadwal, ga perlu telpon lagi" },
        { from: "admin", text: "Mantap kak Agus, bengkel-nya makin modern! 🔧" },
      ],
    },
  ];

  const [waPage, setWaPage] = useState(0);
  const waPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / waPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setWaPage((prev) => (prev + 1) % totalPages);
    }, 6000);
    return () => clearInterval(interval);
  }, [totalPages]);

  const techStack = [
    { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
    { name: "React Native (Expo)", icon: "https://cdn.simpleicons.org/expo/white" },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
    { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20" },
    { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
    { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
  ];

  const [contactOpen, setContactOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* ==================== NAVBAR ==================== */}
      <nav className="nav-glass sticky top-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold gradient-text cursor-pointer" onClick={() => router.push("/")}>
            Manjurdigitallis
          </h1>
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleDark}
              className="w-8 h-8 rounded-lg flex items-center justify-center bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors cursor-pointer"
            >
              {dark ? <FaSun className="text-yellow-400 text-sm" /> : <FaMoon className="text-slate-600 text-sm" />}
            </button>
            <button
              onClick={toggleLang}
              className="h-8 px-2 rounded-lg flex items-center justify-center bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors cursor-pointer text-xs font-bold text-slate-600 dark:text-slate-300"
            >
              {lang === "id" ? "EN" : "ID"}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 rounded-lg flex items-center justify-center bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <HiOutlineXMark className="text-xl text-slate-700 dark:text-slate-200" /> : <HiOutlineBars3 className="text-xl text-slate-700 dark:text-slate-200" />}
            </button>
          </div>
          <ul className="hidden md:flex items-center space-x-4">
            <li><a href="#" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">{i.home}</a></li>
            <li><Link href="/services" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">{i.services}</Link></li>
            <li><Link href="/advantages" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">{i.advantages}</Link></li>
            <li><a href="#testimoni" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">{i.testimonials}</a></li>
            <li><a href="#proses" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">{i.howItWorks}</a></li>
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
        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pb-3 border-t border-slate-200 dark:border-slate-700 pt-3" style={{ animation: "fadeInDown 0.2s ease-out" }}>
            <ul className="space-y-1">
              <li><a href="#" className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-700/50 transition-colors" onClick={() => setMobileMenuOpen(false)}>{i.home}</a></li>
              <li><Link href="/services" className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-700/50 transition-colors" onClick={() => setMobileMenuOpen(false)}>{i.services}</Link></li>
              <li><Link href="/advantages" className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-700/50 transition-colors" onClick={() => setMobileMenuOpen(false)}>{i.advantages}</Link></li>
              <li><a href="#testimoni" className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-700/50 transition-colors" onClick={() => setMobileMenuOpen(false)}>{i.testimonials}</a></li>
              <li><a href="#proses" className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-700/50 transition-colors" onClick={() => setMobileMenuOpen(false)}>{i.howItWorks}</a></li>
              <li><a href="https://cv-gray-iota.vercel.app/" target="_blank" rel="noopener noreferrer" className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-700/50 transition-colors" onClick={() => setMobileMenuOpen(false)}>{i.portfolio}</a></li>
              <li className="border-t border-slate-200 dark:border-slate-700 pt-1 mt-1">
                <a href="https://wa.me/6283173495159?text=Halo%20kak%2C%20saya%20mau%20konsultasi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/30 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  <FaWhatsapp className="text-base" /> {i.whatsapp}
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/manjurdigitallis?igsh=djNlMW05a2ZtYnVr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-pink-600 dark:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-900/30 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  <FaInstagram className="text-base" /> Instagram
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* ==================== 1. HERO ==================== */}
      <section className="relative px-6 pt-20 pb-28 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950 pointer-events-none" />
        <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-indigo-200 dark:bg-indigo-900/30 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-25" style={{ animation: "pulse 4s ease-in-out infinite alternate" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-100 rounded-full filter blur-[120px] opacity-20" />

        {/* Floating Tech Icons */}
        <div className="absolute top-32 left-[10%] text-indigo-200 animate-float opacity-40" style={{ animationDelay: "0s" }}>
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
        </div>
        <div className="absolute top-20 right-[15%] text-purple-200 animate-float opacity-40" style={{ animationDelay: "1s" }}>
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
        </div>
        <div className="absolute bottom-32 left-[20%] text-pink-200 animate-float opacity-35" style={{ animationDelay: "2s" }}>
          <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>
        </div>
        <div className="absolute bottom-20 right-[10%] text-indigo-200 animate-float opacity-30" style={{ animationDelay: "0.5s" }}>
          <svg className="w-11 h-11" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10z"/></svg>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none' stroke='%23000' stroke-width='0.5'/%3E%3C/svg%3E\")" }} />

        <div className="relative max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="hero-animate hero-animate-d1 inline-flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-indigo-100 dark:border-indigo-800 rounded-full px-5 py-2 mb-8 shadow-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">{i.badge}</span>
            <span className="text-indigo-300 dark:text-indigo-600">|</span>
            <span className="text-sm text-slate-500 dark:text-slate-400">Manjurdigitallis</span>
          </div>

          {/* Main Heading */}
          <h2 className="hero-animate hero-animate-d2 text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 text-slate-900 dark:text-white">
            {i.heroTitle1}{" "}
            <span className="relative inline-block">
              <span className="gradient-text">{i.heroTitle2}</span>
              <span className="block h-1 mt-1 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400" />
            </span>{" "}
            {i.heroTitle3}
          </h2>

          {/* Subtitle */}
          <p className="hero-animate hero-animate-d3 text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {i.heroDesc1}{" "}
            <span className="text-slate-700 dark:text-slate-200 font-semibold">{i.heroDescBold}</span>{i.heroDesc2}{" "}
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold">{i.heroDescHighlight}</span>
          </p>

          {/* CTA Buttons */}
          <div className="hero-animate hero-animate-d4 flex justify-center gap-4 flex-wrap">
            <Link
              href="/services"
              className="group relative inline-flex items-center gap-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold px-8 py-4 rounded-2xl hover:shadow-xl hover:shadow-indigo-200 dark:hover:shadow-indigo-900/50 hover:-translate-y-1 transition-all duration-300 text-base cursor-pointer overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2.5">
                {i.viewServices}
                <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <a
              href="https://wa.me/6283173495159?text=Halo%20kak%2C%20saya%20mau%20konsultasi"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 bg-white dark:bg-slate-800 text-indigo-700 dark:text-indigo-300 font-bold px-8 py-4 rounded-2xl border-2 border-indigo-100 dark:border-indigo-800 hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-base cursor-pointer"
            >
              <FaWhatsapp className="text-green-500 text-xl group-hover:scale-110 transition-transform" />
              {i.freeConsult}
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="hero-animate hero-animate-d4 mt-12 flex items-center justify-center gap-6 flex-wrap">
            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
              <span>{i.trustFree}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
              <span>{i.trustRevision}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
              <span>{i.trustWarranty}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 2. STATS COUNTER ==================== */}
      <section className="px-6 mt-10 relative z-10">
        <div className="max-w-5xl mx-auto soft-card p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center stagger-children dark:bg-slate-800/80 stats-card">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="counter-number">
                <span data-count={s.number} data-suffix={s.suffix}>0{s.suffix}</span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== 4. TECH STACK ==================== */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center animate-on-scroll">
          <div className="inline-block mb-5">
            <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white">{i.techTitle}</h3>
            <span className="block h-1 mt-2 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400" />
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-10">{i.techDesc}</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 stagger-children">
            {techStack.map((tech, i) => (
              <div key={i} className="soft-card flex items-center gap-3 px-5 py-4 hover:border-indigo-300 hover:-translate-y-2 hover:shadow-lg transition-all cursor-default">
                <img src={tech.icon} alt={tech.name} width={32} height={32} className="w-8 h-8 flex-shrink-0" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ==================== 6. PROCESS / HOW IT WORKS ==================== */}
      <section id="proses" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 animate-on-scroll">
            <div className="inline-block">
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">{i.processTitle}</h3>
              <span className="block h-1 mt-3 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400" />
            </div>
            <p className="text-slate-500 dark:text-slate-400 mt-5">{i.processDesc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className={`animate-on-scroll delay-${idx + 1} text-center relative group`}>
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-indigo-200 to-purple-200" />
                )}
                <div className="relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-indigo-200 group-hover:shadow-xl group-hover:shadow-purple-300 group-hover:-translate-y-1 transition-all duration-300">
                  <step.icon className="text-3xl text-white" />
                </div>
                <div className="absolute top-0 right-1/2 translate-x-[60%] -translate-y-2 w-7 h-7 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white text-xs font-bold flex items-center justify-center shadow-lg">
                  {idx + 1}
                </div>
                <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{step.title}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 7. CTA ==================== */}
      <section className="px-6 py-10">
        <div className="max-w-6xl mx-auto animate-on-scroll">
          <div className="relative overflow-hidden rounded-2xl py-8 px-6 md:py-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6" style={{ background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #9333EA 100%)" }}>
            {/* Decorative */}
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
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 8. TESTIMONIALS (WA Screenshots) ==================== */}
      <section id="testimoni" className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 animate-on-scroll">
            <div className="inline-block">
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">{i.testiTitle}</h3>
              <span className="block h-1 mt-3 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400" />
            </div>
          </div>

          {/* Carousel */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${waPage * 100}%)` }}
            >
              {Array.from({ length: totalPages }).map((_, pageIdx) => (
                <div key={pageIdx} className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-1">
                  {testimonials.slice(pageIdx * waPerPage, pageIdx * waPerPage + waPerPage).map((t, i) => {
                    const baseHour = 8 + (i * 2);
                    const baseMinute = 5 + (i * 7) % 55;
                    const times = t.messages.map((_, mi) => {
                      const h = (baseHour + mi) % 24;
                      const mm = (baseMinute + mi * 4) % 60;
                      return `${h}:${mm < 10 ? "0" + mm : mm}`;
                    });

                    return (
                      <div key={i} className="rounded-[12px] overflow-hidden shadow-lg flex flex-col bg-[#0B141A] select-none pointer-events-none" style={{ minHeight: "380px" }}>

                        {/* ===== Android Status Bar ===== */}
                        <div className="bg-[#075E54] px-4 py-[3px] flex items-center justify-between text-white text-[11px]">
                          <span className="font-semibold tracking-wide">{times[0]}</span>
                          <div className="flex items-center gap-[6px]">
                            {/* Signal Bars */}
                            <div className="flex items-end gap-[1.5px] h-[10px]">
                              <div className="w-[3px] h-[3px] bg-white rounded-[0.5px]" />
                              <div className="w-[3px] h-[5px] bg-white rounded-[0.5px]" />
                              <div className="w-[3px] h-[7px] bg-white rounded-[0.5px]" />
                              <div className="w-[3px] h-[10px] bg-white rounded-[0.5px]" />
                            </div>
                            {/* WiFi */}
                            <svg className="w-[13px] h-[13px]" fill="white" viewBox="0 0 24 24"><path d="M12 21l3.5-4.5c-0.9-0.7-2.1-1.1-3.5-1.1s-2.6 0.4-3.5 1.1L12 21zM12 13c2.2 0 4.2 0.7 5.8 1.8l2.5-3.2C17.7 9.5 14.9 8.5 12 8.5s-5.7 1-8.3 3.1l2.5 3.2C7.8 13.7 9.8 13 12 13zM12 5.5c3.5 0 6.8 1.2 9.4 3.3l2.5-3.2C20.6 2.9 16.5 1.5 12 1.5S3.4 2.9 0.1 5.6l2.5 3.2C5.2 6.7 8.5 5.5 12 5.5z"/></svg>
                            {/* Battery */}
                            <div className="flex items-center">
                              <div className="w-[18px] h-[9px] border border-white rounded-[2px] p-[1.5px] relative">
                                <div className="h-full w-[75%] bg-white rounded-[1px]" />
                              </div>
                              <div className="w-[2px] h-[4px] bg-white rounded-r-[1px]" />
                            </div>
                          </div>
                        </div>

                        {/* ===== WA Header ===== */}
                        <div className="bg-[#075E54] px-1 pb-2 pt-[6px] flex items-center">
                          {/* Back Arrow */}
                          <button className="p-1.5 flex-shrink-0">
                            <svg className="w-[22px] h-[22px] text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                          </button>
                          {/* Avatar */}
                          <div className="w-[36px] h-[36px] rounded-full bg-[#62787E] flex items-center justify-center flex-shrink-0 ml-0.5 text-[16px] relative overflow-hidden">
                            <span className="opacity-0">{t.avatar}</span>
                            <span className="absolute inset-0 bg-[#4a5c62]" />
                            <span className="absolute w-[200%] h-[10px] bg-black rounded-full top-[0%] left-[-50%] rotate-[-28deg]" />
                            <span className="absolute w-[200%] h-[9px] bg-black rounded-full top-[12%] left-[-50%] rotate-[20deg]" />
                            <span className="absolute w-[200%] h-[10px] bg-black rounded-full top-[24%] left-[-50%] rotate-[-15deg]" />
                            <span className="absolute w-[200%] h-[9px] bg-black rounded-full top-[36%] left-[-50%] rotate-[25deg]" />
                            <span className="absolute w-[200%] h-[10px] bg-black rounded-full top-[48%] left-[-50%] rotate-[-20deg]" />
                            <span className="absolute w-[200%] h-[9px] bg-black rounded-full top-[60%] left-[-50%] rotate-[16deg]" />
                            <span className="absolute w-[200%] h-[10px] bg-black rounded-full top-[72%] left-[-50%] rotate-[-12deg]" />
                            <span className="absolute w-[200%] h-[9px] bg-black rounded-full top-[84%] left-[-50%] rotate-[22deg]" />
                            <span className="absolute w-[200%] h-[10px] bg-black rounded-full top-[95%] left-[-50%] rotate-[-18deg]" />
                          </div>
                          {/* Name / Number + Status */}
                          <div className="flex-1 min-w-0 ml-2 overflow-hidden">
                            <div className="flex items-center whitespace-nowrap">
                              <span className="text-white font-normal text-[13px] leading-tight">{t.phone}-</span>
                              <span className="relative inline-block ml-[3px]">
                                <span className="text-white font-normal text-[13px] leading-tight">{t.last4}</span>
                                <span className="absolute inset-x-[-4px] top-[2px] h-[15px] bg-black rounded-[2px]" />
                              </span>
                            </div>
                            <p className="text-[#A5BDB9] text-[12px] leading-tight mt-[1px]">online</p>
                          </div>
                          {/* Header Action Icons */}
                          <div className="flex items-center gap-[2px] flex-shrink-0 mr-1">
                            {/* Video Call */}
                            <button className="p-[7px]">
                              <svg className="w-[20px] h-[20px] text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>
                            </button>
                            {/* Voice Call */}
                            <button className="p-[7px]">
                              <svg className="w-[20px] h-[20px] text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
                            </button>
                            {/* More (3 dots) */}
                            <button className="p-[7px]">
                              <svg className="w-[20px] h-[20px] text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
                            </button>
                          </div>
                        </div>

                        {/* ===== Chat Area ===== */}
                        <div className="flex-1 bg-[#0B141A] relative" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23111B21' fill-opacity='0.4'%3E%3Ccircle cx='10' cy='10' r='1.5'/%3E%3Ccircle cx='30' cy='5' r='1'/%3E%3Ccircle cx='50' cy='15' r='1.2'/%3E%3Ccircle cx='20' cy='30' r='1'/%3E%3Ccircle cx='45' cy='35' r='1.5'/%3E%3Ccircle cx='5' cy='50' r='1.2'/%3E%3Ccircle cx='35' cy='50' r='1'/%3E%3Ccircle cx='55' cy='55' r='1.3'/%3E%3C/g%3E%3C/svg%3E\")" }}>

                          {/* Date Badge */}
                          <div className="flex justify-center pt-3 pb-2">
                            <span className="bg-[#1D282F] text-[#8696A0] text-[10px] px-3 py-1 rounded-lg shadow-sm">Hari ini</span>
                          </div>

                          {/* Messages */}
                          <div className="px-3 pb-2 flex flex-col gap-1.5">
                            {t.messages.map((msg, mi) => (
                              <div key={mi} className={`flex ${msg.from === "admin" ? "justify-end" : "justify-start"}`}>
                                <div className={`max-w-[85%] relative`}>
                                  {/* Tail for first message from each side */}
                                  {mi === 0 || t.messages[mi - 1]?.from !== msg.from ? (
                                    <div className={`absolute top-0 w-[8px] h-[13px] ${
                                      msg.from === "admin"
                                        ? "-right-[6px] text-[#005C4B]"
                                        : "-left-[6px] text-[#202C33]"
                                    }`}>
                                      <svg viewBox="0 0 8 13" fill="currentColor" className="w-full h-full">
                                        {msg.from === "admin" ? (
                                          <path d="M0 0 C4 0, 8 3, 8 7 L8 13 C6 10, 2 8, 0 8 Z"/>
                                        ) : (
                                          <path d="M8 0 C4 0, 0 3, 0 7 L0 13 C2 10, 6 8, 8 8 Z"/>
                                        )}
                                      </svg>
                                    </div>
                                  ) : null}
                                  {/* Bubble */}
                                  <div className={`px-2.5 pt-1.5 pb-1 text-[12.5px] leading-[1.4] shadow-md rounded-[7.5px] ${
                                    msg.from === "admin"
                                      ? "bg-[#005C4B] text-[#E9EDEF] rounded-tr-none"
                                      : "bg-[#202C33] text-[#E9EDEF] rounded-tl-none"
                                  }`}>
                                    <span>{msg.text}</span>
                                    {/* Timestamp + tick */}
                                    <div className={`flex items-center gap-1 mt-0.5 ${msg.from === "admin" ? "justify-end" : "justify-end"}`}>
                                      <span className="text-[10px] text-[#8696A0]">{times[mi]}</span>
                                      {msg.from === "admin" && (
                                        <svg className="w-3.5 h-2 text-[#53BDEB]" fill="currentColor" viewBox="0 0 16 11"><path d="M11.07.66L5.6 6.13 3.43 3.96 2.37 5.02 5.6 8.25 12.13 1.72zM14.07.66L8.6 6.13 7.87 5.4 6.81 6.46 8.6 8.25 15.13 1.72z"/></svg>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* ===== Bottom Input Bar ===== */}
                        <div className="bg-[#1F2C33] px-2 py-2 flex items-center gap-2">
                          <div className="flex-1 bg-[#2A3942] rounded-full px-3 py-1.5 flex items-center gap-2">
                            <svg className="w-4 h-4 text-[#8696A0]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                            <span className="text-[#8696A0] text-[11px] flex-1">Ketik pesan</span>
                            <svg className="w-4 h-4 text-[#8696A0]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/><path strokeLinecap="round" d="M12 8v4l2 2"/></svg>
                            <svg className="w-4 h-4 text-[#8696A0]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/></svg>
                          </div>
                          <div className="w-9 h-9 rounded-full bg-[#00A884] flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.41 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/></svg>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Progress indicator (non-interactive) */}
          <div className="flex justify-center gap-1.5 mt-8 pointer-events-none">
            {Array.from({ length: totalPages }).map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i === waPage ? "bg-indigo-400 w-5" : "bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 9. FOOTER ==================== */}
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
                <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors cursor-pointer">{i.home}</a></li>
                <li><Link href="/services" className="text-slate-400 hover:text-white text-sm transition-colors cursor-pointer">{i.services}</Link></li>
                <li><Link href="/advantages" className="text-slate-400 hover:text-white text-sm transition-colors cursor-pointer">{i.advantages}</Link></li>
                <li><a href="#testimoni" className="text-slate-400 hover:text-white text-sm transition-colors cursor-pointer">{i.testimonials}</a></li>
                <li><a href="#proses" className="text-slate-400 hover:text-white text-sm transition-colors cursor-pointer">{i.howItWorks}</a></li>
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
