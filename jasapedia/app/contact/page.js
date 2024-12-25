"use client";

import { FaInstagram, FaTiktok } from 'react-icons/fa'; // Import ikon sosial media dari react-icons

export default function Contact() {
  return (
    <div>
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-center items-center">
          <h1 className="text-2xl font-bold">Hubungi Kami</h1>
        </div>
      </header>

      {/* Social Media Section */}
      <section className="container mx-auto py-12 text-center">
        <h2 className="text-3xl font-bold mb-8">Ikuti Kami di Sosial Media</h2>
        <div className="flex justify-center space-x-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Instagram</h3>
            <a href="https://www.instagram.com/yourprofile" target="_blank" className="flex items-center justify-center space-x-2 text-blue-600 hover:underline">
              <FaInstagram className="text-3xl" />
              <span>Instagram Kami</span>
            </a>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">TikTok</h3>
            <a href="https://www.tiktok.com/@yourprofile" target="_blank" className="flex items-center justify-center space-x-2 text-blue-600 hover:underline">
              <FaTiktok className="text-3xl" />
              <span>TikTok Kami</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
