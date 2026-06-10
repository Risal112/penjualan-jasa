"use client";

import { useState, useEffect } from "react";

export function useThemeAndLang() {
  const [dark, setDark] = useState(false);
  const [lang, setLang] = useState("id");

  useEffect(() => {
    // Load from localStorage
    const savedDark = localStorage.getItem("darkMode") === "true";
    const savedLang = localStorage.getItem("lang") || "id";
    setDark(savedDark);
    setLang(savedLang);

    if (savedDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem("darkMode", next);
    if (next) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleLang = () => {
    const next = lang === "id" ? "en" : "id";
    setLang(next);
    localStorage.setItem("lang", next);
  };

  return { dark, toggleDark, lang, toggleLang };
}
