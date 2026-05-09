/* ============================================================================
   🎓  Education.jsx  —  PENDIDIKAN
   ============================================================================
   Grid 2 kolom dengan card bergambar bulat di pojok (decorative).

   YANG SERING DIEDIT:
   - Daftar pendidikan → /src/data/mock.js  (bagian `education.items`)
============================================================================ */

import React from "react";
import { useLang } from "../../contexts/LanguageContext";
import useReveal from "../../hooks/useReveal";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const { t } = useLang();
  const { ref, shown } = useReveal();

  return (
    <section
      id="education"
      ref={ref}
      className="relative py-24 lg:py-32 bg-[#F7F3ED]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className={`reveal ${shown ? "shown" : ""} max-w-3xl mb-14`}>
          <div className="text-[#B08A3E] text-xs uppercase tracking-[0.3em] font-medium mb-5">
            — {t.education.kicker}
          </div>
          <h2 className="font-display text-4xl lg:text-6xl leading-[1.05] text-[#0B1F3A]">
            {t.education.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {t.education.items.map((it, idx) => (
            <div
              key={idx}
              className={`reveal reveal-delay-${idx + 1} ${shown ? "shown" : ""} group relative p-7 lg:p-9 rounded-3xl border border-[#0B1F3A]/10 bg-white hover:border-[#B08A3E]/40 hover:-translate-y-1 transition-all duration-500 shadow-sm hover:shadow-xl overflow-hidden`}
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#B08A3E]/10 group-hover:scale-150 transition-transform duration-700" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-11 w-11 rounded-xl bg-[#0B1F3A] text-[#B08A3E] flex items-center justify-center group-hover:rotate-6 transition-transform">
                    <GraduationCap size={20} />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#0B1F3A]/50">
                    {it.period}
                  </span>
                </div>
                <h3 className="font-display text-2xl lg:text-3xl text-[#0B1F3A] leading-tight">
                  {it.school}
                </h3>
                <div className="text-[#B08A3E] mt-1 italic font-display text-lg">
                  {it.degree}
                </div>
                <p className="text-[#0B1F3A]/65 mt-4 leading-relaxed">
                  {it.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
