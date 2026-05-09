/* ============================================================================
   📊  Skills.jsx  —  KEAHLIAN (PROGRESS BAR ANIMASI)
   ============================================================================
   Komponen ini punya 2 bagian:
   1. Komponen <SkillBar />  → bar progress dengan animasi width
   2. Komponen utama <Skills /> → layout 2 kolom (kicker + 2 group skill)

   YANG SERING DIEDIT:
   - Daftar skill & level → /src/data/mock.js  (bagian `skills.groups`)
   - level: angka 0-100 (tampil sebagai persentase)
============================================================================ */

import React, { useEffect, useRef, useState } from "react";
import { useLang } from "../../contexts/LanguageContext";
import useReveal from "../../hooks/useReveal";

function SkillBar({ name, level, animate, delay = 0 }) {
  const [w, setW] = useState(0);
  useEffect(() => {
    if (!animate) return;
    const id = setTimeout(() => setW(level), delay);
    return () => clearTimeout(id);
  }, [animate, level, delay]);

  return (
    <div>
      <div className="flex items-end justify-between mb-2">
        <span className="text-[#0B1F3A] text-sm lg:text-base">{name}</span>
        <span className="font-mono text-xs text-[#0B1F3A]/50">{level}%</span>
      </div>
      <div className="h-[3px] bg-[#0B1F3A]/10 overflow-hidden rounded-full">
        <div
          className="h-full bg-[#B08A3E] transition-[width] duration-1000 ease-out"
          style={{ width: `${w}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { t } = useLang();
  const { ref, shown } = useReveal();
  const sectionRef = useRef(null);

  return (
    <section
      id="skills"
      ref={(el) => {
        ref.current = el;
        sectionRef.current = el;
      }}
      className="relative py-24 lg:py-32 bg-[#F1ECE2]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className={`reveal ${shown ? "shown" : ""} sticky top-32`}>
            <div className="text-[#B08A3E] text-xs uppercase tracking-[0.3em] font-medium mb-5">
              — {t.skills.kicker}
            </div>
            <h2 className="font-display text-4xl lg:text-5xl leading-[1.1] text-[#0B1F3A]">
              {t.skills.title}
            </h2>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-12">
          {t.skills.groups.map((g, gi) => (
            <div
              key={g.name}
              className={`reveal reveal-delay-${gi + 1} ${shown ? "shown" : ""}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-[#B08A3E]">
                  0{gi + 1}
                </span>
                <div className="h-px flex-1 bg-[#0B1F3A]/15" />
                <span className="font-display italic text-2xl text-[#0B1F3A]">
                  {g.name}
                </span>
              </div>
              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
                {g.items.map((s, idx) => (
                  <SkillBar
                    key={s.name}
                    name={s.name}
                    level={s.level}
                    animate={shown}
                    delay={150 + idx * 90}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
