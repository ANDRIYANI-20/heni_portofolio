/* ============================================================================
   🚀  App.js  —  ROOT APLIKASI
   ============================================================================
   - Membungkus app dengan <LanguageProvider /> (context bahasa)
   - Setup routing dengan React Router (saat ini cuma 1 route: "/")
   - Mount <Toaster /> untuk notifikasi (dari sonner)

   ⚠️ Jarang perlu diedit. Edit konten di /src/data/mock.js dan komponen di
      /src/components/portfolio/ saja.
============================================================================ */

import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Portfolio from "./pages/Portfolio";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<Portfolio />} />
          </Routes>
        </BrowserRouter>
        <Toaster position="bottom-right" richColors />
      </div>
    </LanguageProvider>
  );
}

export default App;
