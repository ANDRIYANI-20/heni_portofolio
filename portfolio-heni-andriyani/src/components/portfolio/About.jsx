/* ============================================================================
   👤  About.jsx  —  TENTANG SAYA
   ============================================================================
   Layout 2 kolom:
   - Kiri (sticky)  : kicker + judul
   - Kanan          : paragraf + 4 highlight card

   YANG SERING DIEDIT:
   - Semua teks       → /src/data/mock.js  (bagian `about`)
   - Tambah paragraf  → tambah string di array `about.paragraphs`
   - Tambah highlight → tambah object di array `about.highlights`
============================================================================ */

import React from "react";
import { useLang } from "../../contexts/LanguageContext";
import useReveal from "../../hooks/useReveal";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const { t } = useLang();
  const { ref, shown } = useReveal();

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 lg:py-32 bg-[#F7F3ED]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        {/* Left kicker */}
        <div className="lg:col-span-4">
          <div
            className={`reveal ${shown ? "shown" : ""} sticky top-32`}
          >
            <div className="text-[#B08A3E] text-xs uppercase tracking-[0.3em] font-medium mb-5">
              — {t.about.kicker}
            </div>
            <h2 className="font-display text-4xl lg:text-5xl leading-[1.1] text-[#0B1F3A]">
              {t.about.title}
            </h2>
          </div>
        </div>

        {/* Right content */}
        <div className="lg:col-span-8 space-y-6">
          {t.about.paragraphs.map((p, i) => (
            <p
              key={i}
              className={`reveal reveal-delay-${i + 1} ${shown ? "shown" : ""} text-lg lg:text-xl text-[#0B1F3A]/80 leading-relaxed`}
            >
              {p}
            </p>
          ))}

          <div className="grid sm:grid-cols-2 gap-4 pt-6">
            {t.about.highlights.map((h, idx) => (
              <div
                key={h.label}
                className={`reveal reveal-delay-${(idx % 4) + 1} ${shown ? "shown" : ""} group p-5 rounded-2xl border border-[#0B1F3A]/10 bg-white/60 hover:bg-white hover:border-[#B08A3E]/40 hover:-translate-y-1 transition-all duration-500 shadow-sm hover:shadow-md`}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-8 w-8 rounded-full bg-[#0B1F3A] text-[#B08A3E] flex items-center justify-center group-hover:rotate-6 transition-transform">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <div className="font-display text-xl text-[#0B1F3A]">
                      {h.label}
                    </div>
                    <div className="text-sm text-[#0B1F3A]/60 mt-1 leading-relaxed">
                      {h.desc}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
