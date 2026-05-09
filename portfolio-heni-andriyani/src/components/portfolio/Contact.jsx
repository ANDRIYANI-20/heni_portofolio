/* ============================================================================
   ✉️  Contact.jsx  —  KONTAK
   ============================================================================
   Layout 2 kolom:
   - Kiri  : info kontak (email, HP, LinkedIn, lokasi) + tombol Copy
   - Kanan : form kontak (saat ini SIMPAN ke localStorage browser)

   YANG SERING DIEDIT:
   - Email/HP/LinkedIn → /src/data/mock.js  (bagian `profile`)
   - Label form        → /src/data/mock.js  (bagian `contact`)
   - Mengirim ke email → ganti fungsi `submit()` agar pakai service seperti
                         EmailJS / Formspree (perlu integrasi tambahan).

   CATATAN: form saat ini hanya MOCK — pesan tersimpan di localStorage browser
   user (tidak terkirim ke email Anda). Hubungi developer jika perlu integrasi.
============================================================================ */

import React, { useState } from "react";
import { useLang } from "../../contexts/LanguageContext";
import useReveal from "../../hooks/useReveal";
import { profile } from "../../data/mock";
import { Mail, Phone, Linkedin, Instagram, MapPin, Copy, Check } from "lucide-react";

function CopyRow({ icon: Icon, label, value, link, copyLabel, copiedLabel }) {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="group flex items-center justify-between gap-4 py-5 border-b border-[#F7F3ED]/10">
      <div className="flex items-center gap-4 min-w-0">
        <div className="h-11 w-11 rounded-xl bg-[#F7F3ED]/10 border border-[#F7F3ED]/15 flex items-center justify-center text-[#B08A3E] group-hover:rotate-6 transition-transform">
          <Icon size={18} />
        </div>
        <div className="min-w-0">
          <div className="font-mono text-[10px] uppercase tracking-widest text-[#F7F3ED]/50">
            {label}
          </div>
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="text-[#F7F3ED] truncate block link-underline"
            >
              {value}
            </a>
          ) : (
            <div className="text-[#F7F3ED] truncate">{value}</div>
          )}
        </div>
      </div>
      <button
        onClick={onCopy}
        className="flex-shrink-0 flex items-center gap-1.5 text-xs text-[#F7F3ED]/60 hover:text-[#B08A3E] transition-colors"
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
        {copied ? copiedLabel : copyLabel}
      </button>
    </div>
  );
}

export default function Contact() {
  const { t } = useLang();
  const { ref, shown } = useReveal();
  const instagramValue = profile.instagram
    .replace(/^https?:\/\/(www\.)?/i, "")
    .replace(/\/$/, "");

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 lg:py-32 bg-[#0B1F3A] text-[#F7F3ED] overflow-hidden"
    >
      <div className="pointer-events-none absolute -bottom-40 -left-20 w-[420px] h-[420px] rounded-full bg-[#B08A3E]/10 blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className={`reveal ${shown ? "shown" : ""}`}>
            <div className="text-[#B08A3E] text-xs uppercase tracking-[0.3em] font-medium mb-5">
              — {t.contact.kicker}
            </div>
            <h2 className="font-display text-4xl lg:text-6xl leading-[1.05]">
              {t.contact.title}
            </h2>
            <p className="text-[#F7F3ED]/65 mt-5 max-w-md leading-relaxed">
              {t.contact.subtitle}
            </p>
          </div>

          <div className={`reveal reveal-delay-2 ${shown ? "shown" : ""} mt-10`}>
            <CopyRow
              icon={Mail}
              label="Email"
              value={profile.email}
              link={`mailto:${profile.email}`}
              copyLabel={t.contact.copy}
              copiedLabel={t.contact.copied}
            />
            <CopyRow
              icon={Phone}
              label="Phone"
              value={profile.phone}
              link={`tel:${profile.phone.replace(/\s/g, "")}`}
              copyLabel={t.contact.copy}
              copiedLabel={t.contact.copied}
            />
            <CopyRow
              icon={Linkedin}
              label="LinkedIn"
              value={profile.linkedin.replace("https://", "")}
              link={profile.linkedin}
              copyLabel={t.contact.copy}
              copiedLabel={t.contact.copied}
            />
            {profile.instagram ? (
              <CopyRow
                icon={Instagram}
                label="Instagram"
                value={instagramValue}
                link={profile.instagram}
                copyLabel={t.contact.copy}
                copiedLabel={t.contact.copied}
              />
            ) : null}
            <CopyRow
              icon={MapPin}
              label="Location"
              value={profile.location}
              copyLabel={t.contact.copy}
              copiedLabel={t.contact.copied}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
