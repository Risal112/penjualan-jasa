"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function OrderPage() {
  const searchParams = useSearchParams();
  const serviceName = searchParams.get("serviceName") || "";

  // State untuk input form
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pageCount, setPageCount] = useState("");
  const [specialRequest, setSpecialRequest] = useState(""); // State untuk penjelasan atau permintaan khusus

  // Fungsi untuk mengirim pesan ke WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah reload halaman

    const phoneNumber = "6283173495159"; // Ganti dengan nomor WhatsApp Anda (format internasional tanpa '+')
    const message = `Halo kak, saya ingin memesan layanan ${serviceName}.\n\nNama: ${name}\nAlamat: ${address}\nJumlah Halaman: ${pageCount}\n\nPenjelasan/Permintaan Khusus: ${specialRequest}`;

    // Buat URL WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Redirect ke WhatsApp
    window.open(whatsappURL, "_blank");
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Form Pemesanan</h1>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8">
        <h2 className="text-xl font-bold mb-4 text-center">Layanan: {serviceName}</h2> {/* Menambahkan text-center */}
        <form
          className="max-w-lg mx-auto bg-white p-6 shadow-md w-full sm:w-11/12"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2">
              Nama Pemesan
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan nama Anda"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2">Alamat</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Masukkan alamat Anda"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2">
              Jumlah Halaman
            </label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded"
              value={pageCount}
              onChange={(e) => setPageCount(e.target.value)}
              placeholder="Masukkan jumlah halaman"
              required
            />
          </div>
          
          {/* Tabel untuk Penjelasan/Pemintaan Khusus */}
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2">
              Penjelasan/Pemintaan Khusus
            </label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded"
              rows="4"
              value={specialRequest}
              onChange={(e) => setSpecialRequest(e.target.value)}
              placeholder="Masukkan penjelasan atau permintaan khusus"
              required // Menambahkan atribut required agar wajib diisi
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded w-full"
          >
            Kirim Pesanan
          </button>
        </form>
      </main>
    </div>
  );
}
