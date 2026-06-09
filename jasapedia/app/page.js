"use client";

import { useRouter } from "next/navigation";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";
import {
  HiOutlineCodeBracket,
  HiOutlineDevicePhoneMobile,
  HiOutlineGlobeAlt,
  HiOutlineWrenchScrewdriver,
  HiOutlineArrowRight,
  HiOutlineStar,
  HiOutlineShieldCheck,
  HiOutlineRocketLaunch,
  HiOutlineCheckCircle,
  HiOutlineMapPin,
  HiOutlineChatBubbleLeftRight,
  HiOutlineClipboardDocumentList,
  HiOutlinePaintBrush,
  HiOutlineCursorArrowRays,
} from "react-icons/hi2";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  useScrollAnimation();

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

  const handleOrder = (serviceName) => {
    if (!serviceName) return;
    router.push(`/order?serviceName=${encodeURIComponent(serviceName)}`);
  };

  const services = [
    {
      name: "Website Company Profile",
      description: "Website profesional untuk memperkenalkan bisnis, produk, dan layanan Anda secara online.",
      features: ["Responsive Design", "SEO Friendly", "Domain & Hosting 1 Tahun"],
      price: "Mulai Rp 1.5 Jt",
      icon: HiOutlineGlobeAlt,
      color: "#4F46E5",
    },
    {
      name: "Web Aplikasi",
      description: "Aplikasi berbasis web custom sesuai kebutuhan bisnis. Sistem kasir, inventory, CRM, dll.",
      features: ["Custom Dashboard", "Multi User & Role", "Database & REST API"],
      price: "Mulai Rp 3 Jt",
      icon: HiOutlineCodeBracket,
      color: "#7C3AED",
    },
    {
      name: "Aplikasi Mobile",
      description: "Aplikasi Android & iOS dengan React Native Expo. Satu codebase, tampil di Google Play & App Store.",
      features: ["React Native (Expo)", "Push Notification", "Offline Mode"],
      price: "Mulai Rp 5 Jt",
      icon: HiOutlineDevicePhoneMobile,
      color: "#2563EB",
    },
    {
      name: "Maintenance & Support",
      description: "Layanan perawatan, update, dan perbaikan website atau aplikasi yang sudah ada.",
      features: ["Bug Fixing", "Update Fitur", "Backup Rutin"],
      price: "Mulai Rp 500 Rb/bln",
      icon: HiOutlineWrenchScrewdriver,
      color: "#059669",
    },
  ];

  const stats = [
    { number: 50, suffix: "+", label: "Proyek Selesai" },
    { number: 40, suffix: "+", label: "Klien Puas" },
    { number: 3, suffix: "+", label: "Tahun Pengalaman" },
    { number: 99, suffix: "%", label: "Tingkat Kepuasan" },
  ];

  const processSteps = [
    { icon: HiOutlineChatBubbleLeftRight, title: "Konsultasi", desc: "Diskusikan ide dan kebutuhan Anda bersama kami secara gratis" },
    { icon: HiOutlineClipboardDocumentList, title: "Perencanaan", desc: "Kami susun proposal, timeline, dan estimasi biaya yang transparan" },
    { icon: HiOutlinePaintBrush, title: "Desain & Development", desc: "Tim kami membangun produk Anda dengan teknologi terkini" },
    { icon: HiOutlineCursorArrowRays, title: "Delivery & Support", desc: "Produk siap digunakan dengan garansi dan dukungan teknis" },
  ];

  const testimonials = [
    {
      name: "Budi S.", role: "Owner Toko Online", phone: "+62 812-7349", last4: "5159",
      messages: [
        { from: "client", text: "Kak, website-nya udah jadi ya? Keren banget! 😍" },
        { from: "client", text: "Penjualan saya naik 40% sejak punya website ini 👍" },
        { from: "admin", text: "Alhamdulillah, senang bisa bantu kak Budi! 🙏" },
      ],
    },
    {
      name: "Sari W.", role: "CEO Startup", phone: "+62 853-4821", last4: "9217",
      messages: [
        { from: "client", text: "Aplikasi-nya stabil banget, user-friendly lagi 👌" },
        { from: "client", text: "Tim-nya responsif, support-nya mantap!" },
        { from: "admin", text: "Terima kasih kak Sari, kami siap support terus! 💪" },
      ],
    },
    {
      name: "Andi P.", role: "Manager Restoran", phone: "+62 821-5690", last4: "3456",
      messages: [
        { from: "client", text: "Sistem kasir-nya sangat membantu operasional 👏" },
        { from: "client", text: "Pengerjaan cepat dan sesuai budget. Mantap!" },
        { from: "admin", text: "Semoga bisnisnya makin lancar ya kak! 🚀" },
      ],
    },
    {
      name: "Dewi R.", role: "Owner Butik", phone: "+62 878-2109", last4: "8892",
      messages: [
        { from: "client", text: "Website butik-nya cantik banget kak! 🛍️" },
        { from: "client", text: "Customer saya pada suka, order jadi makin gampang" },
        { from: "admin", text: "Senang dengarnya kak Dewi! Sukses terus! ✨" },
      ],
    },
    {
      name: "Rudi H.", role: "Direktur Logistik", phone: "+62 856-3074", last4: "6541",
      messages: [
        { from: "client", text: "Aplikasi tracking-nya bagus, karyawan mudah pakai" },
        { from: "client", text: "Efisiensi kerja naik 60% sejak pakai sistem ini" },
        { from: "admin", text: "Luar biasa! Terima kasih feedback-nya kak Rudi 🙌" },
      ],
    },
    {
      name: "Lina M.", role: "Founder Bimbel", phone: "+62 838-7421", last4: "2083",
      messages: [
        { from: "client", text: "Web bimbel-nya keren, parent bisa pantau anak langsung 📚" },
        { from: "client", text: "Pendaftaran online jadi lebih rapi dan tertata" },
        { from: "admin", text: "Alhamdulillah kak Lina, semoga makin banyak muridnya! 🎓" },
      ],
    },
    {
      name: "Fajar K.", role: "Owner Gym", phone: "+62 813-9502", last4: "4728",
      messages: [
        { from: "client", text: "Aplikasi booking kelas-nya smooth banget kak 💪" },
        { from: "client", text: "Member pada bilang enak pakai-nya, ga ribet" },
        { from: "admin", text: "Mantap kak Fajar! Keep growing! 🔥" },
      ],
    },
    {
      name: "Mega S.", role: "Owner Katering", phone: "+62 857-1048", last4: "7765",
      messages: [
        { from: "client", text: "Website katering-nya bikin order naik 2x lipat! 🍱" },
        { from: "client", text: "Fitur pilih menu-nya customer suka banget" },
        { from: "admin", text: "Wah keren! Semoga makin laris kak Mega! 🙏" },
      ],
    },
    {
      name: "Yoga P.", role: "CEO Agency", phone: "+62 822-6310", last4: "5519",
      messages: [
        { from: "client", text: "Dashboard analytics-nya detail banget kak" },
        { from: "client", text: "Bantu kami ambil keputusan lebih cepat dan akurat 📊" },
        { from: "admin", text: "Siap kak Yoga, kami terus improve! 💡" },
      ],
    },
    {
      name: "Nita A.", role: "Owner Salon", phone: "+62 896-5283", last4: "0474",
      messages: [
        { from: "client", text: "App booking salon-nya bagus! Customer bisa pilih stylist sendiri 💇‍♀️" },
        { from: "client", text: "No-show berkurang 70% karena ada reminder otomatis" },
        { from: "admin", text: "Keren kak Nita! Salon-nya makin maju! ✨" },
      ],
    },
    {
      name: "Hendra T.", role: "Owner Properti", phone: "+62 811-8734", last4: "2052",
      messages: [
        { from: "client", text: "Website listing properti-nya profesional banget 🏠" },
        { from: "client", text: "Lead masuk 3x lebih banyak dari sebelumnya" },
        { from: "admin", text: "Alhamdulillah kak Hendra, sukses terus! 🏆" },
      ],
    },
    {
      name: "Ratna D.", role: "Owner Klinik", phone: "+62 852-4061", last4: "8938",
      messages: [
        { from: "client", text: "Sistem booking klinik-nya sangat membantu 🏥" },
        { from: "client", text: "Pasien bisa antri online, ga perlu nunggu lama" },
        { from: "admin", text: "Semoga pelayanan makin prima kak Ratna! 🙏" },
      ],
    },
    {
      name: "Dimas R.", role: "Founder EdTech", phone: "+62 877-9520", last4: "3161",
      messages: [
        { from: "client", text: "Platform e-learning-nya keren, student engagement naik 📱" },
        { from: "client", text: "Fitur quiz dan progress tracking-nya mantap!" },
        { from: "admin", text: "Terima kasih kak Dimas, semoga makin impactful! 🎯" },
      ],
    },
    {
      name: "Putri L.", role: "Owner Wedding Organizer", phone: "+62 819-6472", last4: "1847",
      messages: [
        { from: "client", text: "Website WO-nya elegant banget kak! 💒" },
        { from: "client", text: "Calon client langsung percaya lihat portofolionya" },
        { from: "admin", text: "Semoga makin banyak wedding-nya kak Putri! 💐" },
      ],
    },
    {
      name: "Agus W.", role: "Owner Bengkel", phone: "+62 831-2950", last4: "7186",
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

  const techStack = ["React", "Next.js", "React Native (Expo)", "Node.js", "Laravel", "Tailwind CSS", "MySQL", "MongoDB"];

  return (
    <div className="min-h-screen">
      {/* ==================== NAVBAR ==================== */}
      <nav className="nav-glass sticky top-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold gradient-text cursor-pointer" onClick={() => router.push("/")}>
            JasaPedia
          </h1>
          <ul className="hidden md:flex items-center space-x-8">
            <li><a href="#" className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors cursor-pointer">Home</a></li>
            <li><a href="#layanan" className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors cursor-pointer">Layanan</a></li>
            <li><a href="#proses" className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors cursor-pointer">Cara Kerja</a></li>
            <li>
              <button onClick={() => router.push("/contact")} className="soft-btn !py-2 !px-5 text-sm cursor-pointer">
                Hubungi Kami
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* ==================== 1. HERO ==================== */}
      <section className="relative px-6 pt-24 pb-32">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 pointer-events-none" />
        <div className="absolute top-20 right-10 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute top-40 left-1/3 w-60 h-60 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />

        <div className="relative max-w-4xl mx-auto text-center">
          <span className="hero-animate hero-animate-d1 soft-badge inline-block mb-6">Web & App Development</span>
          <h2 className="hero-animate hero-animate-d2 text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-slate-900">
            Wujudkan <span className="gradient-text">Ide Digital</span> Anda
          </h2>
          <p className="hero-animate hero-animate-d3 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Kami membangun website dan aplikasi profesional yang modern, cepat,
            dan sesuai kebutuhan bisnis Anda. Dari konsep hingga jadi.
          </p>
          <div className="hero-animate hero-animate-d4 flex justify-center gap-4 flex-wrap">
            <a href="#layanan" className="soft-btn text-base cursor-pointer inline-flex items-center gap-2">
              Lihat Layanan <HiOutlineArrowRight />
            </a>
            <button
              onClick={() => router.push("/contact")}
              className="px-7 py-3.5 rounded-xl border-2 border-indigo-200 text-indigo-600 font-semibold hover:bg-indigo-50 hover:border-indigo-300 transition-all cursor-pointer"
            >
              Konsultasi Gratis
            </button>
          </div>
        </div>
      </section>

      {/* ==================== 2. STATS COUNTER ==================== */}
      <section className="px-6 -mt-16 relative z-10">
        <div className="max-w-5xl mx-auto soft-card p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center animate-on-scroll">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="counter-number">
                <span data-count={s.number} data-suffix={s.suffix}>0{s.suffix}</span>
              </div>
              <p className="text-slate-500 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== 3. FEATURES / WHY CHOOSE US ==================== */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="soft-badge inline-block mb-4">Kenapa Kami?</span>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">Keunggulan JasaPedia</h3>
            <div className="section-divider mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: HiOutlineRocketLaunch, title: "Cepat & Tepat Waktu", desc: "Pengerjaan sesuai deadline yang disepakati tanpa kompromi kualitas" },
              { icon: HiOutlineStar, title: "Kualitas Premium", desc: "Teknologi modern, code bersih, dan best practice internasional" },
              { icon: HiOutlineShieldCheck, title: "Garansi & Support", desc: "Garansi revisi, free bug fix, dan dukungan teknis pasca delivery" },
            ].map((f, i) => (
              <div key={i} className={`animate-on-scroll delay-${i + 1} soft-card p-8 text-center`}>
                <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center mx-auto mb-5 animate-float" style={{ animationDelay: `${i * 0.3}s` }}>
                  <f.icon className="text-3xl text-indigo-600" />
                </div>
                <h4 className="font-bold text-lg text-slate-900 mb-2">{f.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 4. SERVICES ==================== */}
      <section id="layanan" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 animate-on-scroll">
            <span className="soft-badge inline-block mb-4">Layanan Kami</span>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900">Solusi Digital Lengkap</h3>
            <p className="text-slate-500 mt-3 max-w-lg mx-auto">Pilih layanan yang sesuai kebutuhan bisnis Anda</p>
            <div className="section-divider mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`animate-on-scroll delay-${index + 1} soft-card p-8 flex flex-col group`}>
                <div className="flex items-start gap-5 mb-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${service.color}12` }}
                  >
                    <service.icon className="text-3xl" style={{ color: service.color }} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">{service.name}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feat, fi) => (
                    <span key={fi} className="flex items-center gap-1 text-xs font-medium text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg">
                      <HiOutlineCheckCircle className="text-green-500" /> {feat}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between w-full mt-auto pt-5 border-t border-slate-100">
                  <span className="text-xl font-extrabold text-indigo-600">{service.price}</span>
                  <button
                    onClick={() => handleOrder(service.name)}
                    className="soft-btn !py-2.5 !px-6 text-sm cursor-pointer"
                  >
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 5. PROCESS / HOW IT WORKS ==================== */}
      <section id="proses" className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 animate-on-scroll">
            <span className="soft-badge inline-block mb-4">Cara Kerja</span>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900">4 Langkah Mudah</h3>
            <p className="text-slate-500 mt-3">Dari ide hingga produk jadi, prosesnya simpel dan transparan</p>
            <div className="section-divider mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className={`animate-on-scroll delay-${i + 1} text-center relative`}>
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-indigo-100" />
                )}
                <div className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-indigo-200">
                  <step.icon className="text-3xl text-white" />
                </div>
                <div className="absolute top-0 right-1/2 translate-x-[60%] -translate-y-2 w-7 h-7 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center shadow">
                  {i + 1}
                </div>
                <h4 className="font-bold text-lg text-slate-900 mb-2">{step.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 6. TESTIMONIALS (WA Screenshots) ==================== */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 animate-on-scroll">
            <span className="soft-badge inline-block mb-4">Testimoni</span>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900">Apa Kata Klien Kami</h3>
            <p className="text-slate-500 text-sm mt-3">Percakapan asli dari klien kami via WhatsApp</p>
            <div className="section-divider mx-auto mt-4" />
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
                            <svg className="w-[18px] h-[18px] text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
                          </button>
                          {/* Avatar */}
                          <div className="w-[34px] h-[34px] rounded-full bg-[#62787E] flex items-center justify-center flex-shrink-0 ml-0.5">
                            <svg className="w-[20px] h-[20px] text-[#CFD9DC]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                          </div>
                          {/* Name / Number + Status */}
                          <div className="flex-1 min-w-0 ml-2 overflow-hidden">
                            <div className="flex items-center whitespace-nowrap">
                              <span className="text-white font-normal text-[14.5px] leading-tight">{t.phone}-</span>
                              <span className="relative inline-block ml-[3px]">
                                <span className="text-white font-normal text-[14.5px] leading-tight">{t.last4}</span>
                                <span className="absolute inset-x-[-4px] top-[15%] h-[75%] bg-black rounded-[3px]" />
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

      {/* ==================== 7. TECH STACK ==================== */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center animate-on-scroll">
          <span className="soft-badge inline-block mb-4">Teknologi</span>
          <h3 className="text-3xl font-extrabold text-slate-900 mb-3">Stack yang Kami Gunakan</h3>
          <p className="text-slate-500 text-sm mb-10">Teknologi modern dan terpercaya untuk membangun produk digital Anda</p>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, i) => (
              <div key={i} className={`animate-scale delay-${(i % 4) + 1} soft-card px-6 py-3 text-sm font-semibold text-slate-700 hover:text-indigo-600 hover:border-indigo-200 cursor-default`}>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 8. CTA ==================== */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto animate-scale soft-card p-12 md:p-16 text-center bg-gradient-to-br from-indigo-600 to-purple-600 !border-none !shadow-none relative overflow-hidden">
          <div className="absolute top-0 right-0 w-60 h-60 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Siap Memulai Proyek Anda?
            </h3>
            <p className="text-indigo-100 mb-8 max-w-xl mx-auto text-lg">
              Konsultasikan ide dan kebutuhan Anda secara gratis. Kami akan bantu wujudkan solusi digital terbaik.
            </p>
            <button
              onClick={() => router.push("/contact")}
              className="bg-white text-indigo-600 font-bold px-10 py-4 rounded-xl hover:bg-indigo-50 transition-all cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-1 text-base"
            >
              Konsultasi Sekarang
            </button>
          </div>
        </div>
      </section>

      {/* ==================== 9. FOOTER ==================== */}
      <footer className="bg-slate-900 text-white px-6 py-14">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-slate-700">
            <div>
              <h2 className="text-2xl font-bold mb-3">JasaPedia</h2>
              <p className="text-slate-400 text-sm leading-relaxed">Solusi digital terpercaya untuk pembuatan website dan aplikasi profesional.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Navigasi</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors cursor-pointer">Home</a></li>
                <li><a href="#layanan" className="text-slate-400 hover:text-white text-sm transition-colors cursor-pointer">Layanan</a></li>
                <li><a href="#proses" className="text-slate-400 hover:text-white text-sm transition-colors cursor-pointer">Cara Kerja</a></li>
                <li><a onClick={() => router.push("/contact")} className="text-slate-400 hover:text-white text-sm transition-colors cursor-pointer">Kontak</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Layanan</h3>
              <ul className="space-y-2">
                <li><span className="text-slate-400 text-sm">Website Company Profile</span></li>
                <li><span className="text-slate-400 text-sm">Web Aplikasi</span></li>
                <li><span className="text-slate-400 text-sm">Aplikasi Mobile</span></li>
                <li><span className="text-slate-400 text-sm">Maintenance & Support</span></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Hubungi Kami</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <HiOutlineMapPin className="text-indigo-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-400 text-sm">Jl. Contoh Alamat No. 123, Kota Anda</span>
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
                <li>
                  <a href="https://www.tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors cursor-pointer">
                    <FaTiktok className="flex-shrink-0" /> @jasapedia
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
        <span className="bg-white text-slate-800 text-sm font-semibold px-4 py-2 rounded-lg shadow-md">
          Ayo Konsultasikan Sekarang!
        </span>
        <div className="bg-green-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex-shrink-0 pulse-glow">
          <FaWhatsapp className="text-white text-3xl" />
        </div>
      </a>
    </div>
  );
}
