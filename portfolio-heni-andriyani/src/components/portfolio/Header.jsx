/* ============================================================================
   🧭  Header.jsx  —  NAVBAR
   ============================================================================
   - Menu navigasi (auto-highlight section aktif saat scroll)
   - Tombol toggle bahasa ID/EN  (klik teks "ID/EN" di kanan atas)
   - Tombol CTA "Hubungi Saya"
   - Drawer menu untuk mobile

   YANG SERING DIEDIT:
   - Daftar `links` (urutan & label menu)        → cari `const links`
   - Logo "Heni Andriyani"                        → cari "<a href="#home"
   - Warna navbar saat scroll                     → cari "scrolled ?"
============================================================================ */

import React, { useEffect, useState } from "react";
import { Menu, X, Languages, ArrowUpRight } from "lucide-react";
import { useLang } from "../../contexts/LanguageContext";
import { Button } from "../ui/button";

const sectionIds = [
  "home",
  "about",
  "experience",
  "education",
  "skills",
  "projects",
  "certificates",
  "contact",
];

export default function Header() {
  const { t, lang, toggle } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      let cur = "home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) cur = id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "about", label: t.nav.about },
    { id: "experience", label: t.nav.experience },
    { id: "education", label: t.nav.education },
    { id: "skills", label: t.nav.skills },
    { id: "projects", label: t.nav.projects },
    { id: "certificates", label: t.nav.certificates },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F7F3ED]/85 backdrop-blur-md border-b border-[#0B1F3A]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="font-display text-2xl tracking-tight text-[#0B1F3A]">Heni</span>
          <span className="font-display text-2xl text-[#B08A3E] italic">Andriyani</span>
          <span className="hidden md:inline-block ml-2 h-1.5 w-1.5 rounded-full bg-[#B08A3E] group-hover:scale-150 transition-transform" />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`relative text-sm tracking-wide transition-colors ${
                active === l.id
                  ? "text-[#0B1F3A]"
                  : "text-[#0B1F3A]/60 hover:text-[#0B1F3A]"
              }`}
            >
              {l.label}
              {active === l.id && (
                <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-[#B08A3E]" />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="toggle language"
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#0B1F3A]/15 hover:border-[#0B1F3A]/40 text-xs font-medium tracking-wider uppercase text-[#0B1F3A] transition-colors"
          >
            <Languages size={14} />
            {lang === "id" ? "ID / EN" : "EN / ID"}
          </button>
          <Button
            asChild
            className="hidden md:inline-flex bg-[#0B1F3A] hover:bg-[#0B1F3A]/90 text-[#F7F3ED] rounded-full px-5 h-10 group"
          >
            <a href="#contact" className="flex items-center gap-1.5">
              {t.nav.cta}
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </Button>
          <button
            className="lg:hidden p-2 rounded-md text-[#0B1F3A]"
            onClick={() => setOpen((s) => !s)}
            aria-label="menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 bg-[#F7F3ED] border-b border-[#0B1F3A]/10 ${
          open ? "max-h-[480px]" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="font-display text-2xl text-[#0B1F3A] py-1"
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-3 border-t border-[#0B1F3A]/10">
            <button
              onClick={toggle}
              className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-[#0B1F3A]/20 text-xs uppercase tracking-wider"
            >
              <Languages size={14} /> {lang === "id" ? "ID / EN" : "EN / ID"}
            </button>
            <Button
              asChild
              className="bg-[#0B1F3A] text-[#F7F3ED] rounded-full px-5"
            >
              <a href="#contact" onClick={() => setOpen(false)}>
                {t.nav.cta}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
