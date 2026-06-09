"use client";

import { useRouter } from "next/navigation";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { HiOutlineArrowLeft } from "react-icons/hi2";

export default function Contact() {
  const router = useRouter();

  const socials = [
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/yourprofile",
      color: "#E1306C",
      bg: "#FDE8EF",
      desc: "Follow kami untuk update terbaru",
    },
    {
      name: "TikTok",
      icon: FaTiktok,
      url: "https://www.tiktok.com/@yourprofile",
      color: "#000000",
      bg: "#F0F0F0",
      desc: "Tonton konten kreatif kami",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="nav-glass sticky top-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <button
            onClick={() => router.push("/")}
            className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center hover:bg-indigo-100 transition-colors cursor-pointer"
          >
            <HiOutlineArrowLeft className="text-xl text-indigo-600" />
          </button>
          <h1 className="text-xl font-bold text-slate-900">Hubungi Kami</h1>
        </div>
      </nav>

      {/* Content */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="soft-badge inline-block mb-4">Sosial Media</span>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-3">
              Ikuti Kami
            </h2>
            <p className="text-slate-500">
              Tetap terhubung dengan kami melalui sosial media
            </p>
            <div className="section-divider mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="soft-card p-8 flex flex-col items-center text-center gap-4 no-underline"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: social.bg }}
                >
                  <social.icon className="text-4xl" style={{ color: social.color }} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{social.name}</h3>
                <p className="text-sm text-slate-500">{social.desc}</p>
                <span className="soft-btn !py-2 !px-6 text-sm mt-2">Kunjungi</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
