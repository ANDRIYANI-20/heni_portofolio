/* ============================================================================
   ✨  useReveal.js  —  HOOK ANIMASI SCROLL REVEAL
   ============================================================================
   Memanfaatkan IntersectionObserver untuk mendeteksi kapan elemen masuk
   viewport, lalu menambahkan class `.shown` agar animasi fade-up berjalan.

   PEMAKAIAN:
     const { ref, shown } = useReveal();
     <div ref={ref} className={`reveal ${shown ? "shown" : ""}`}>...</div>

   Gunakan class:
   - reveal           → wajib (state default: invisible + translateY)
   - reveal-delay-1..4 → opsional, untuk efek staggered

   Definisi CSS-nya ada di /src/index.css (cari ".reveal").
============================================================================ */

import { useEffect, useRef, useState } from "react";

export default function useReveal({ threshold = 0.15, root = null, rootMargin = "0px" } = {}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold, root, rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [root, rootMargin, threshold]);

  return { ref, shown };
}
