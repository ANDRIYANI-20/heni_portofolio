/* ============================================================================
   🏅  Certificates.jsx  —  SERTIFIKAT
   ============================================================================
   Grid 4 kolom card sertifikat dengan icon Award.

   YANG SERING DIEDIT:
   - Daftar sertifikat → /src/data/mock.js  (bagian `certificates.items`)
============================================================================ */

import React from "react";
import { useLang } from "../../contexts/LanguageContext";
import useReveal from "../../hooks/useReveal";
import { Award, Calendar } from "lucide-react";

export default function Certificates() {
  const { t, lang } = useLang();
  const { ref, shown } = useReveal();

  return (
    <section
      id="certificates"
      ref={ref}
      className="relative py-24 lg:py-32 bg-[#F1ECE2]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className={`reveal ${shown ? "shown" : ""} max-w-3xl mb-14`}>
          <div className="text-[#B08A3E] text-xs uppercase tracking-[0.3em] font-medium mb-5">
            — {t.certificates.kicker}
          </div>
          <h2 className="font-display text-4xl lg:text-6xl leading-[1.05] text-[#0B1F3A]">
            {t.certificates.title}
          </h2>
          <p className="text-[#0B1F3A]/60 mt-3">{t.certificates.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.certificates.items.map((c, idx) => (
            <div
              key={idx}
              className={`reveal reveal-delay-${(idx % 4) + 1} ${shown ? "shown" : ""} group relative p-6 rounded-2xl bg-white border border-[#0B1F3A]/10 hover:border-[#B08A3E]/50 hover:-translate-y-1 transition-all duration-500 shadow-sm hover:shadow-xl overflow-hidden`}
            >
              <div className="absolute -right-8 -bottom-8 h-28 w-28 rounded-full bg-[#B08A3E]/10 group-hover:scale-150 transition-transform duration-700" />
              <div className="relative">
                <div className="flex items-center justify-between mb-5">
                  <div className="h-10 w-10 rounded-xl bg-[#0B1F3A] text-[#B08A3E] flex items-center justify-center group-hover:rotate-6 transition-transform">
                    <Award size={18} />
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-[#0B1F3A]/50">
                    <Calendar size={12} />
                    {c.year}
                  </div>
                </div>
                <h3 className="font-display text-xl text-[#0B1F3A] leading-tight">
                  {c.title}
                </h3>
                <div className="text-[#B08A3E] italic mt-1 text-sm">
                  {c.issuer}
                </div>
                <p className="text-[#0B1F3A]/60 text-sm mt-3 leading-relaxed">
                  {c.desc}
                </p>
                {c.image ? (
                  <>
                    <a
                      href={c.image}
                      target="_blank"
                      rel="noreferrer"
                      className="block mt-4 rounded-xl overflow-hidden border border-[#0B1F3A]/10 hover:border-[#B08A3E]/40 transition-colors"
                    >
                      <img
                        src={c.image}
                        alt={`${c.title} certificate`}
                        loading="lazy"
                        className="w-full h-36 object-cover"
                      />
                    </a>
                    <a
                      href={c.image}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex mt-3 text-xs font-medium text-[#0B1F3A] hover:text-[#B08A3E] transition-colors"
                    >
                      {lang === "id" ? "Lihat sertifikat asli" : "View original certificate"}
                    </a>
                  </>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
