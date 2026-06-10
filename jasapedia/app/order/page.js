"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { HiOutlineArrowLeft, HiOutlineCodeBracket } from "react-icons/hi2";

function OrderForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const serviceName = searchParams.get("serviceName") || "";

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("");
  const [projectDesc, setProjectDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "6283173495159";
    const message = `Halo kak, saya tertarik dengan layanan ${serviceName}.\n\nNama: ${name}\nNo. HP: ${phone}\nBudget: ${budget}\n\nDeskripsi Proyek:\n${projectDesc}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

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
          <h1 className="text-xl font-bold text-slate-900">Form Pemesanan</h1>
        </div>
      </nav>

      {/* Content */}
      <section className="px-6 py-16">
        <div className="max-w-xl mx-auto">
          {/* Service Badge */}
          <div className="text-center mb-10">
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center mx-auto mb-4">
              <HiOutlineCodeBracket className="text-3xl text-indigo-600" />
            </div>
            <span className="soft-badge inline-block mb-3">{serviceName}</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Pesan Layanan</h2>
            <p className="text-slate-500 text-sm mt-2">Isi form di bawah, kami akan hubungi Anda via WhatsApp</p>
            <div className="section-divider mx-auto mt-4" />
          </div>

          {/* Form */}
          <form className="soft-card p-8" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Nama
              </label>
              <input
                type="text"
                className="soft-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Masukkan nama Anda"
                required
              />
            </div>

            <div className="mb-5">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                No. HP / WhatsApp
              </label>
              <input
                type="tel"
                className="soft-input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Contoh: 08123456789"
                required
              />
            </div>

            <div className="mb-5">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Estimasi Budget
              </label>
              <select
                className="soft-input"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                required
              >
                <option value="">-- Pilih Budget --</option>
                <option value="< 2 Juta">{"< Rp 2 Juta"}</option>
                <option value="2 - 5 Juta">Rp 2 - 5 Juta</option>
                <option value="5 - 10 Juta">Rp 5 - 10 Juta</option>
                <option value="10 - 25 Juta">Rp 10 - 25 Juta</option>
                <option value="> 25 Juta">{"> Rp 25 Juta"}</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Deskripsi Proyek
              </label>
              <textarea
                className="soft-input"
                rows="5"
                value={projectDesc}
                onChange={(e) => setProjectDesc(e.target.value)}
                placeholder="Ceritakan tentang proyek Anda: tujuan, fitur yang diinginkan, referensi website/aplikasi, dll."
                required
              />
            </div>

            <button type="submit" className="soft-btn w-full text-base cursor-pointer">
              Kirim via WhatsApp
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default function OrderPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <OrderForm />
    </Suspense>
  );
}
