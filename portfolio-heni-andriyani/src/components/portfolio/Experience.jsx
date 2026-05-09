/* ============================================================================
   💼  Experience.jsx  —  PENGALAMAN KERJA (DARK SECTION)
   ============================================================================
   Section dengan background navy gelap, layout timeline.
   Tiap pengalaman menampilkan: periode, lokasi, role, perusahaan, ringkasan,
   dan daftar tugas (bullets).

   YANG SERING DIEDIT:
   - Semua data        → /src/data/mock.js  (bagian `experience.items`)
   - Tambah pengalaman → tambah object baru di array `items`
============================================================================ */

import React from "react";
import { useLang } from "../../contexts/LanguageContext";
import useReveal from "../../hooks/useReveal";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export default function Experience() {
  const { t } = useLang();
  const { ref, shown } = useReveal();

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-24 lg:py-32 bg-[#0B1F3A] text-[#F7F3ED] overflow-hidden"
    >
      <div className="pointer-events-none absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-[#B08A3E]/10 blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className={`reveal ${shown ? "shown" : ""} max-w-3xl mb-14`}>
          <div className="text-[#B08A3E] text-xs uppercase tracking-[0.3em] font-medium mb-5">
            — {t.experience.kicker}
          </div>
          <h2 className="font-display text-4xl lg:text-6xl leading-[1.05]">
            {t.experience.title}
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 lg:left-1/3 top-0 bottom-0 w-px bg-[#F7F3ED]/15" />

          {t.experience.items.map((it, idx) => (
            <div
              key={idx}
              className={`reveal reveal-delay-${idx + 1} ${shown ? "shown" : ""} grid lg:grid-cols-3 gap-8 lg:gap-16 pl-6 lg:pl-0 relative pb-10`}
            >
              {/* Dot */}
              <div className="absolute left-0 lg:left-1/3 -translate-x-1/2 top-2 h-3 w-3 rounded-full bg-[#B08A3E] ring-4 ring-[#0B1F3A]" />

              <div className="lg:pr-10 lg:text-right">
                <div className="flex lg:justify-end items-center gap-2 text-[#B08A3E] text-sm font-mono uppercase tracking-widest">
                  <Calendar size={14} />
                  {it.period}
                </div>
                <div className="flex lg:justify-end items-center gap-2 mt-2 text-[#F7F3ED]/60 text-sm">
                  <MapPin size={14} />
                  {it.location}
                </div>
              </div>

              <div className="lg:col-span-2 lg:pl-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-xl bg-[#F7F3ED]/10 border border-[#F7F3ED]/15 flex items-center justify-center">
                    <Briefcase size={18} className="text-[#B08A3E]" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl lg:text-3xl">
                      {it.role}
                    </h3>
                    <p className="text-[#F7F3ED]/70 text-sm">{it.company}</p>
                  </div>
                </div>
                <p className="mt-4 text-[#F7F3ED]/80 leading-relaxed">
                  {it.summary}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {it.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-[#F7F3ED]/85 leading-relaxed"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#B08A3E] flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
