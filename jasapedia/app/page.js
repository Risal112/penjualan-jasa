"use client";

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleOrder = (serviceName) => {
    if (!serviceName) return;
    router.push(`/order?serviceName=${encodeURIComponent(serviceName)}`);
  };

  const services = [
    {
      name: "Foto Copy",
      description: "Cetak dokumen cepat dan berkualitas.",
      price: "Rp 500/lembar",
      image: "/images/foto-copy.jpg",
    },
    {
      name: "Print",
      description: "Hasil cetak warna dan hitam putih terbaik.",
      price: "Rp 1.000/lembar",
      image: "/images/print.jpg",
    },
    {
      name: "Makalah",
      description: "Buat makalah profesional dengan mudah.",
      price: "Rp 50.000/makalah",
      file: "/files/makalah-sample.pdf",
    },
    {
      name: "PPT",
      description: "Desain presentasi menarik dan kreatif.",
      price: "Rp 100.000/presentasi",
      video: "/videos/ppt-example.mp4",
    },
    {
      name: "Brosur",
      description: "Cetak brosur promosi berkualitas.",
      price: "Rp 500/lembar",
      image: "/images/brosur.jpg",
    },
  ];

  return (
    <div>
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">JasaPedia</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#services" className="hover:underline">Layanan</a></li>
              <li>
                <a
                  onClick={() => router.push('/contact')} // Menavigasi ke halaman kontak
                  className="hover:underline cursor-pointer"
                >
                  Hubungi Kami
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-100 text-center py-12">
        <h2 className="text-4xl font-bold mb-4">Solusi Jasa Cetak Anda</h2>
        <p className="text-lg mb-6">
          Kami menyediakan jasa cetak foto copy, print, makalah, PPT, dan brosur dengan kualitas terbaik.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto pt-0 pb-10">
        <h3 className="text-3xl font-bold text-center mb-8">Layanan Kami</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-lg p-6 text-center">
              {service.file ? (
                <a href={service.file} download className="block mb-4 text-blue-600 hover:underline">
                  Unduh Makalah
                </a>
              ) : service.video ? (
                <video controls className="w-full h-48 mb-4 rounded">
                  <source src={service.video} type="video/mp4" />
                  Browser Anda tidak mendukung pemutaran video.
                </video>
              ) : (
                <img src={service.image} alt={service.name} className="w-full h-48 object-cover mb-4 rounded" />
              )}
              <h4 className="font-bold text-xl mb-2">{service.name}</h4>
              <p className="mb-2">{service.description}</p>
              <p className="text-lg font-semibold mb-4">{service.price}</p>
              <button
                onClick={() => handleOrder(service.name)}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Pesan Sekarang
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-500 text-white py-1">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 JasaPedia. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
