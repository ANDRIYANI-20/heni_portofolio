/* ============================================================================
   🗂️  Projects.jsx  —  PROYEK (DENGAN POPUP MODAL)
   ============================================================================
   - Grid card proyek (klik buka popup detail)
   - Card "Coming soon" sebagai placeholder proyek selanjutnya
   - Modal popup menampilkan: cover, deskripsi, stack, scope, outcome

   YANG SERING DIEDIT:
   - Daftar proyek    → /src/data/mock.js  (bagian `projects.items`)
   - Teks "Coming soon" → cari class "border-dashed" di file ini
   - Tampilan modal   → cari "<Dialog open=" di file ini
============================================================================ */

import React, { useState } from "react";
import { useLang } from "../../contexts/LanguageContext";
import useReveal from "../../hooks/useReveal";
import { ArrowUpRight, X, Database, Layers, Target } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { Badge } from "../ui/badge";

export default function Projects() {
  const { t } = useLang();
  const { ref, shown } = useReveal();
  const [open, setOpen] = useState(null);

  const active = t.projects.items.find((p) => p.id === open);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-24 lg:py-32 bg-[#F7F3ED]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className={`reveal ${shown ? "shown" : ""} max-w-3xl mb-14 flex flex-col gap-3`}>
          <div className="text-[#B08A3E] text-xs uppercase tracking-[0.3em] font-medium">
            — {t.projects.kicker}
          </div>
          <h2 className="font-display text-4xl lg:text-6xl leading-[1.05] text-[#0B1F3A]">
            {t.projects.title}
          </h2>
          <p className="text-[#0B1F3A]/60">{t.projects.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {t.projects.items.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setOpen(p.id)}
              className={`reveal reveal-delay-${idx + 1} ${shown ? "shown" : ""} group relative text-left rounded-3xl overflow-hidden bg-[#0B1F3A] border border-[#0B1F3A] hover:-translate-y-1 transition-all duration-500 shadow-sm hover:shadow-2xl`}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={p.cover}
                  alt={p.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest bg-[#F7F3ED] text-[#0B1F3A] px-2.5 py-1 rounded-full">
                    {p.tag}
                  </span>
                </div>
                <div className="absolute top-4 right-4 h-10 w-10 rounded-full bg-[#B08A3E] text-[#0B1F3A] flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                  <ArrowUpRight size={18} />
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl lg:text-3xl text-[#F7F3ED] leading-tight">
                  {p.title}
                </h3>
                <p className="text-[#F7F3ED]/65 mt-2 leading-relaxed">
                  {p.short}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[10px] uppercase tracking-widest text-[#B08A3E] border border-[#B08A3E]/35 px-2.5 py-1 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}

          {/* placeholder card encouraging more projects */}
          <div
            className={`reveal reveal-delay-2 ${shown ? "shown" : ""} relative rounded-3xl border-2 border-dashed border-[#0B1F3A]/15 p-8 flex flex-col justify-center min-h-[360px] bg-white/40`}
          >
            <div className="font-mono text-[11px] uppercase tracking-widest text-[#B08A3E]">
              Featured project
            </div>
            <div className="font-display text-3xl text-[#0B1F3A] leading-tight mt-2">
              Website Company Profile Berdine Terra Global
            </div>
            <p className="text-[#0B1F3A]/70 mt-4 leading-relaxed">
              Pengembangan website company profile untuk memperkuat citra profesional perusahaan,
              menyampaikan layanan utama secara jelas, dan memudahkan calon klien mendapatkan
              informasi bisnis yang relevan dalam satu halaman yang rapi dan mudah dipahami.
            </p>
            <a
              href="https://www.berdineterraglobal.com"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#0B1F3A] hover:text-[#B08A3E] transition-colors"
            >
              www.berdineterraglobal.com
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Modal popup */}
      <Dialog open={!!open} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-[#F7F3ED] border-[#0B1F3A]/15">
          {active && (
            <div className="relative">
              <button
                onClick={() => setOpen(null)}
                className="absolute top-4 right-4 z-10 h-9 w-9 rounded-full bg-[#0B1F3A] text-[#F7F3ED] flex items-center justify-center hover:rotate-90 transition-transform"
                aria-label="close"
              >
                <X size={16} />
              </button>
              <div className="relative h-56 sm:h-72 overflow-hidden">
                <img
                  src={active.cover}
                  alt={active.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/30 to-transparent" />
                <div className="absolute bottom-5 left-6 right-6">
                  <Badge className="bg-[#B08A3E] hover:bg-[#B08A3E] text-[#0B1F3A] font-mono uppercase tracking-widest text-[10px] mb-2">
                    {active.tag}
                  </Badge>
                  <DialogTitle className="font-display text-3xl sm:text-4xl text-[#F7F3ED] leading-tight">
                    {active.title}
                  </DialogTitle>
                </div>
              </div>

              <div className="p-7 max-h-[55vh] overflow-y-auto">
                <DialogDescription className="text-[#0B1F3A]/75 text-base leading-relaxed">
                  {active.short}
                </DialogDescription>

                <div className="flex flex-wrap gap-2 mt-5">
                  {active.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[10px] uppercase tracking-widest text-[#0B1F3A] border border-[#0B1F3A]/20 px-2.5 py-1 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-7">
                  <div className="flex items-center gap-2 text-[#B08A3E] font-mono uppercase text-[10px] tracking-widest mb-3">
                    <Layers size={14} />
                    Scope of Work
                  </div>
                  <ul className="space-y-2.5">
                    {active.details.map((d, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-[#0B1F3A]/80 leading-relaxed"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#B08A3E] flex-shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 p-5 rounded-2xl bg-[#0B1F3A] text-[#F7F3ED]">
                  <div className="flex items-center gap-2 text-[#B08A3E] font-mono uppercase text-[10px] tracking-widest mb-2">
                    <Target size={14} />
                    Outcome
                  </div>
                  <p className="leading-relaxed text-[#F7F3ED]/90">
                    {active.outcome}
                  </p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
