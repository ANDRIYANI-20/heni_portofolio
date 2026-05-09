/* ============================================================================
   🦶  Footer.jsx  —  FOOTER
   ============================================================================
   - Logo nama
   - Sosmed icon (email, LinkedIn)
   - Tombol "Back to top"
   - Copyright + credit font

   YANG SERING DIEDIT:
   - Tagline footer    → /src/data/mock.js  (bagian `footer.tagline`)
   - Tahun copyright   → otomatis (new Date().getFullYear())
   - Tambah ikon sosmed → tambah <a> baru di flex container
============================================================================ */

import React from "react";
import { useLang } from "../../contexts/LanguageContext";
import { profile } from "../../data/mock";
import { ArrowUp, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="relative bg-[#F7F3ED] border-t border-[#0B1F3A]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 grid md:grid-cols-3 gap-8 items-center">
        <div>
          <div className="font-display text-3xl text-[#0B1F3A]">
            Heni <span className="italic text-[#B08A3E]">Andriyani</span>
          </div>
          <div className="text-sm text-[#0B1F3A]/60 mt-1">{t.footer.tagline}</div>
        </div>

        <div className="flex md:justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="h-10 w-10 rounded-full border border-[#0B1F3A]/20 flex items-center justify-center text-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-[#F7F3ED] transition-colors"
            aria-label="email"
          >
            <Mail size={16} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="h-10 w-10 rounded-full border border-[#0B1F3A]/20 flex items-center justify-center text-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-[#F7F3ED] transition-colors"
            aria-label="linkedin"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={profile.instagram || "https://www.instagram.com/"}
            target="_blank"
            rel="noreferrer"
            className="h-10 w-10 rounded-full border border-[#0B1F3A]/20 flex items-center justify-center text-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-[#F7F3ED] transition-colors"
            aria-label="instagram"
          >
            <Instagram size={16} />
          </a>
        </div>

        <div className="md:text-right">
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-[#0B1F3A] text-sm hover:text-[#B08A3E] transition-colors"
          >
            Back to top
            <span className="h-8 w-8 rounded-full border border-[#0B1F3A]/20 flex items-center justify-center group-hover:rotate-12">
              <ArrowUp size={14} />
            </span>
          </a>
        </div>
      </div>
      <div className="border-t border-[#0B1F3A]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 text-xs text-[#0B1F3A]/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <span>© {new Date().getFullYear()} Heni Andriyani. All rights reserved.</span>
          <span className="font-mono">Crafted with Playfair · Inter · React</span>
        </div>
      </div>
    </footer>
  );
}
