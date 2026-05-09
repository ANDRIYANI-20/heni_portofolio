/* ============================================================================
   🎯  Hero.jsx  —  BAGIAN ATAS (LANDING)
   ============================================================================
   - Eyebrow + judul besar (nama)
   - Tagline + tombol CTA primary & secondary
   - Foto profil di kolom kanan, dengan 2 stat card melayang
   - Marquee bergerak (skill ticker) di bagian bawah

   YANG SERING DIEDIT:
   - Teks hero        → /src/data/mock.js  (bagian `hero`)
   - Foto profil      → /src/data/mock.js  (`profile.photo`)
   - Daftar marquee   → cari array di dalam `marquee` (MySQL, phpMyAdmin, ...)
============================================================================ */

import React from "react";
import { ArrowDownRight, Mail, MapPin, Sparkles } from "lucide-react";
import { useLang } from "../../contexts/LanguageContext";
import { profile } from "../../data/mock";
import { Button } from "../ui/button";
import useReveal from "../../hooks/useReveal";

export default function Hero() {
  const { t } = useLang();
  const { ref, shown } = useReveal();

  return (
    <section
      id="home"
      ref={ref}
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 grain" />
      <div className="pointer-events-none absolute -top-32 -right-24 w-[420px] h-[420px] rounded-full bg-[#B08A3E]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 w-[360px] h-[360px] rounded-full bg-[#0B1F3A]/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10 items-center">
        {/* Text */}
        <div className="lg:col-span-7">
          <div className={`reveal ${shown ? "shown" : ""} flex items-center gap-2 text-[#B08A3E] uppercase tracking-[0.25em] text-xs font-medium mb-6`}>
            <Sparkles size={14} />
            {t.hero.eyebrow}
          </div>

          <h1
            className={`reveal reveal-delay-1 ${shown ? "shown" : ""} font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.02] text-[#0B1F3A]`}
          >
            {t.hero.titleA}
            <br />
            <span className="italic text-[#B08A3E]">{profile.name.split(" ")[0]}</span>
            <span className="text-[#0B1F3A]"> {profile.name.split(" ")[1]}.</span>
          </h1>

          <p
            className={`reveal reveal-delay-2 ${shown ? "shown" : ""} mt-6 text-lg lg:text-xl text-[#0B1F3A]/70 max-w-xl leading-relaxed`}
          >
            <span className="font-medium text-[#0B1F3A]">{t.hero.role}.</span>{" "}
            {t.hero.tagline}
          </p>

          <div
            className={`reveal reveal-delay-3 ${shown ? "shown" : ""} mt-9 flex flex-wrap items-center gap-3`}
          >
            <Button
              asChild
              className="bg-[#0B1F3A] hover:bg-[#0B1F3A]/90 text-[#F7F3ED] rounded-full h-12 px-6 group"
            >
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
              >
                {t.hero.ctaPrimary}
                <ArrowDownRight
                  size={18}
                  className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform"
                />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full h-12 px-6 border-[#0B1F3A]/25 hover:border-[#0B1F3A] hover:bg-transparent text-[#0B1F3A]"
            >
              <a href="#contact" className="flex items-center gap-2">
                <Mail size={16} />
                {t.hero.ctaSecondary}
              </a>
            </Button>
          </div>

          <div
            className={`reveal reveal-delay-4 ${shown ? "shown" : ""} mt-10 flex items-center gap-2 text-sm text-[#0B1F3A]/60`}
          >
            <MapPin size={14} />
            {profile.location}
            <span className="mx-2 h-1 w-1 rounded-full bg-[#0B1F3A]/30" />
            <span className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
              </span>
              Open to work
            </span>
          </div>
        </div>

        {/* Photo */}
        <div className="lg:col-span-5">
          <div className={`reveal reveal-delay-2 ${shown ? "shown" : ""} relative max-w-md mx-auto`}>
            <div className="absolute -inset-3 rounded-[2.2rem] border border-[#B08A3E]/30" />
            <div className="absolute -inset-6 rounded-[2.6rem] border border-[#0B1F3A]/10" />
            <div className="relative rounded-[2rem] overflow-hidden bg-[#0B1F3A] shadow-[0_30px_80px_-30px_rgba(11,31,58,0.45)] float-soft">
              <img
                src={profile.photo}
                alt={profile.name}
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/30 via-transparent to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 bg-[#F7F3ED] rounded-2xl border border-[#0B1F3A]/10 p-4 shadow-xl w-56">
              <div className="font-display text-3xl text-[#0B1F3A] leading-none">
                {t.hero.stat1}
              </div>
              <div className="text-xs text-[#0B1F3A]/60 mt-1">
                {t.hero.stat1Label}
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-[#0B1F3A] text-[#F7F3ED] rounded-2xl p-3 shadow-xl w-44">
              <div className="font-mono text-[10px] text-[#B08A3E] uppercase tracking-widest">
                {t.hero.stat3}
              </div>
              <div className="text-xs mt-1 leading-snug">
                {t.hero.stat3Label}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skill ticker */}
      <div className="relative mt-20 lg:mt-28 overflow-hidden border-y border-[#0B1F3A]/10 bg-[#F1ECE2]/50">
        <div className="marquee py-5 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, idx) => (
            <div key={idx} className="flex items-center gap-12 pr-12">
              {[
                "MySQL",
                "phpMyAdmin",
                "Web Development",
                "Banking Operations",
                "Microsoft Office",
                "Data Processing",
                "Compliance",
                "SQL",
                "Documentation",
              ].map((s) => (
                <span
                  key={`${idx}-${s}`}
                  className="font-display italic text-2xl lg:text-3xl text-[#0B1F3A]/70"
                >
                  {s}
                  <span className="inline-block mx-6 h-2 w-2 rounded-full bg-[#B08A3E] align-middle" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
