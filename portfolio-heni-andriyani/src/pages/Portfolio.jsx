/* ============================================================================
   📄  Portfolio.jsx  —  HALAMAN UTAMA
   ============================================================================
   File ini menyusun urutan section di halaman.
   Untuk MENGUBAH URUTAN: tukar posisi komponen di dalam <main>.
   Untuk MENYEMBUNYIKAN section: bungkus dengan {/* ... *\/} (comment).
============================================================================ */

import React from "react";
import Header from "../components/portfolio/Header";
import Hero from "../components/portfolio/Hero";
import About from "../components/portfolio/About";
import Experience from "../components/portfolio/Experience";
import Education from "../components/portfolio/Education";
import Skills from "../components/portfolio/Skills";
import Projects from "../components/portfolio/Projects";
import Certificates from "../components/portfolio/Certificates";
import Contact from "../components/portfolio/Contact";
import Footer from "../components/portfolio/Footer";

export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-[#F7F3ED] text-[#0B1F3A] selection:bg-[#0B1F3A] selection:text-[#F7F3ED]">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
