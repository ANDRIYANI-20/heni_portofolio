/* ============================================================================
   🌐  LanguageContext.jsx  —  CONTEXT BAHASA (ID / EN)
   ============================================================================
   Menyediakan:
   - lang        → bahasa aktif ("id" atau "en")
   - setLang()   → set bahasa langsung
   - toggle()    → toggle ID <-> EN
   - t           → object teks bahasa aktif (alias content[lang])

   Bahasa tersimpan di localStorage (key: "ha_lang") supaya pilihan user
   tidak hilang saat reload.

   PEMAKAIAN DI KOMPONEN:
     const { t, lang, toggle } = useLang();
     <h1>{t.hero.titleA}</h1>

   ⚠️ Jarang perlu diedit. Edit teks di /src/data/mock.js saja.
============================================================================ */

import React, { createContext, useContext, useEffect, useState } from "react";
import { content } from "../data/mock";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") return "id";
    return localStorage.getItem("ha_lang") || "id";
  });

  useEffect(() => {
    localStorage.setItem("ha_lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = {
    lang,
    setLang,
    toggle: () => setLang((l) => (l === "id" ? "en" : "id")),
    t: content[lang],
  };

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
