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
  HiOutlineEnvelope,
} from "react-icons/hi2";

export default function Home() {
  const router = useRouter();

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
      description: "Aplikasi berbasis web custom sesuai kebutuhan bisnis Anda. Sistem kasir, inventory, CRM, dll.",
      features: ["Custom Dashboard", "Multi User", "Database & API"],
      price: "Mulai Rp 3 Jt",
      icon: HiOutlineCodeBracket,
      color: "#7C3AED",
    },
    {
      name: "Aplikasi Mobile",
      description: "Aplikasi Android & iOS untuk bisnis Anda. Tampil modern di Google Play & App Store.",
      features: ["Android & iOS", "Push Notification", "Offline Mode"],
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

  const features = [
    { icon: HiOutlineRocketLaunch, title: "Cepat & Tepat Waktu", desc: "Pengerjaan sesuai deadline yang disepakati" },
    { icon: HiOutlineStar, title: "Kualitas Terbaik", desc: "Teknologi modern & best practice" },
    { icon: HiOutlineShieldCheck, title: "Garansi & Support", desc: "Garansi revisi & dukungan teknis" },
  ];

  const techStack = ["React", "Next.js", "Node.js", "Laravel", "Flutter", "Tailwind CSS", "PostgreSQL", "Firebase"];

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="nav-glass sticky top-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold gradient-text cursor-pointer" onClick={() => router.push("/")}>
            JasaPedia
          </h1>
          <ul className="flex items-center space-x-8">
            <li>
              <a href="#" className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors cursor-pointer">
                Home
              </a>
            </li>
            <li>
              <a href="#layanan" className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors cursor-pointer">
                Layanan
              </a>
            </li>
            <li>
              <a href="#portofolio" className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors cursor-pointer">
                Portofolio
              </a>
            </li>
            <li>
              <button
                onClick={() => router.push("/contact")}
                className="soft-btn !py-2 !px-5 text-sm cursor-pointer"
              >
                Hubungi Kami
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-20 pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 pointer-events-none" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />

        <div className="relative max-w-4xl mx-auto text-center">
          <span className="soft-badge inline-block mb-6">Web & App Development</span>
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-slate-900">
            Wujudkan <span className="gradient-text">Ide Digital</span> Anda
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Kami membangun website dan aplikasi profesional yang modern, cepat,
            dan sesuai kebutuhan bisnis Anda. Dari konsep hingga jadi.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="#layanan" className="soft-btn text-base cursor-pointer">
              Lihat Layanan <HiOutlineArrowRight className="inline ml-1" />
            </a>
            <button
              onClick={() => router.push("/contact")}
              className="px-7 py-3 rounded-xl border-2 border-indigo-200 text-indigo-600 font-semibold hover:bg-indigo-50 transition-colors cursor-pointer"
            >
              Konsultasi Gratis
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="soft-card p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
                <f.icon className="text-2xl text-indigo-600" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">{f.title}</h4>
                <p className="text-sm text-slate-500">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="layanan" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="soft-badge inline-block mb-4">Layanan Kami</span>
            <h3 className="text-4xl font-extrabold text-slate-900">
              Solusi Digital Lengkap
            </h3>
            <div className="section-divider mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="soft-card p-8 flex flex-col">
                <div className="flex items-start gap-5 mb-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${service.color}12` }}
                  >
                    <service.icon className="text-3xl" style={{ color: service.color }} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">{service.name}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>

                {/* Feature List */}
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

      {/* Tech Stack */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="soft-badge inline-block mb-4">Teknologi</span>
          <h3 className="text-3xl font-extrabold text-slate-900 mb-10">
            Stack yang Kami Gunakan
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, i) => (
              <div key={i} className="soft-card !shadow-none px-6 py-3 text-sm font-semibold text-slate-700 hover:text-indigo-600">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="portofolio" className="px-6 py-20">
        <div className="max-w-4xl mx-auto soft-card p-12 text-center bg-gradient-to-br from-indigo-600 to-purple-600 !border-none !shadow-none">
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Siap Memulai Proyek Anda?
          </h3>
          <p className="text-indigo-100 mb-8 max-w-xl mx-auto">
            Konsultasikan ide dan kebutuhan Anda secara gratis. Kami akan bantu wujudkan solusi digital terbaik.
          </p>
          <button
            onClick={() => router.push("/contact")}
            className="bg-white text-indigo-600 font-bold px-8 py-3.5 rounded-xl hover:bg-indigo-50 transition-colors cursor-pointer shadow-lg"
          >
            Konsultasi Sekarang
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white px-6 py-14">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-slate-700">
            {/* Brand */}
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold mb-3">JasaPedia</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Solusi digital terpercaya untuk pembuatan website dan aplikasi profesional.
              </p>
            </div>

            {/* Navigasi */}
            <div>
              <h3 className="font-semibold text-white mb-4">Navigasi</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors cursor-pointer">Home</a></li>
                <li><a href="#layanan" className="text-slate-400 hover:text-white text-sm transition-colors cursor-pointer">Layanan</a></li>
                <li><a href="#portofolio" className="text-slate-400 hover:text-white text-sm transition-colors cursor-pointer">Portofolio</a></li>
                <li><a onClick={() => router.push("/contact")} className="text-slate-400 hover:text-white text-sm transition-colors cursor-pointer">Kontak</a></li>
              </ul>
            </div>

            {/* Layanan */}
            <div>
              <h3 className="font-semibold text-white mb-4">Layanan</h3>
              <ul className="space-y-2">
                <li><span className="text-slate-400 text-sm">Website Company Profile</span></li>
                <li><span className="text-slate-400 text-sm">Web Aplikasi</span></li>
                <li><span className="text-slate-400 text-sm">Aplikasi Mobile</span></li>
                <li><span className="text-slate-400 text-sm">Maintenance & Support</span></li>
              </ul>
            </div>

            {/* Kontak & Sosial Media */}
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

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/6283173495159?text=Halo%20kak%2C%20saya%20ingin%20konsultasi%20tentang%20jasa%20pembuatan%20web%20%26%20aplikasi"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 cursor-pointer no-underline group"
      >
        <span className="bg-white text-slate-800 text-sm font-semibold px-4 py-2 rounded-lg shadow-md">
          Ayo Konsultasikan Sekarang!
        </span>
        <div className="bg-green-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex-shrink-0">
          <FaWhatsapp className="text-white text-3xl" />
        </div>
      </a>
    </div>
  );
}
