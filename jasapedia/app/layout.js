import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "JasaPedia - Solusi Jasa Cetak Anda",
  description: "Jasa cetak foto copy, print, makalah, PPT, dan brosur dengan kualitas terbaik.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
