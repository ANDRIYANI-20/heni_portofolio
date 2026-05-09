# 📖 PANDUAN EDIT PORTFOLIO HENI ANDRIYANI

Selamat datang! File ini berisi panduan lengkap untuk mengedit portofolio Anda
sendiri. Ikuti langkah-langkah di bawah untuk mengganti teks, gambar, warna,
atau menambah section baru.

---

## 🚀 CARA MENJALANKAN PROYEK

```bash
cd frontend
yarn install        # install dependency (sekali saja saat pertama kali)
yarn start          # menjalankan server di http://localhost:3000
yarn build          # membuat versi production di folder /build
```

> **Wajib pakai Node.js v18+ dan Yarn.** Jangan pakai `npm install`.

---

## 📂 STRUKTUR FOLDER PENTING

```
frontend/
├── PANDUAN.md                          ← Anda di sini
├── public/
│   └── index.html                      ← Title, meta, favicon
└── src/
    ├── App.js                          ← Routing utama (jarang diedit)
    ├── App.css                         ← Style global App
    ├── index.css                       ← 🎨 WARNA & FONT GLOBAL
    │
    ├── data/
    │   └── mock.js                     ← ⭐ SEMUA TEKS & DATA (bilingual ID/EN)
    │
    ├── contexts/
    │   └── LanguageContext.jsx         ← Logika toggle bahasa (jarang diedit)
    │
    ├── hooks/
    │   └── useReveal.js                ← Animasi scroll reveal (jarang diedit)
    │
    ├── pages/
    │   └── Portfolio.jsx               ← Urutan section di halaman utama
    │
    └── components/portfolio/
        ├── Header.jsx                  ← Navbar + tombol bahasa
        ├── Hero.jsx                    ← Bagian atas (nama, foto, tagline)
        ├── About.jsx                   ← Tentang saya
        ├── Experience.jsx              ← Pengalaman kerja (dark section)
        ├── Education.jsx               ← Pendidikan
        ├── Skills.jsx                  ← Bar keahlian animasi
        ├── Projects.jsx                ← Kartu proyek + popup modal
        ├── Certificates.jsx            ← Sertifikat
        ├── Contact.jsx                 ← Form kontak + info kontak
        └── Footer.jsx                  ← Footer
```

---

## ✏️ APA YANG INGIN ANDA EDIT?

### 1️⃣ Mengganti TEKS (nama, judul, deskripsi, dll.)

➡️ Buka **`src/data/mock.js`**

File ini berisi SEMUA teks portofolio dalam dua bahasa (`id` = Indonesia, `en` = English). Setiap section sudah diberi penanda komentar yang jelas. Cari section yang ingin diganti, lalu edit nilainya.

Contoh:
```js
hero: {
  titleA: "Halo, saya",          // ← ganti sapaan
  role: "General Service & ...", // ← ganti role/posisi
  tagline: "Lebih dari ...",     // ← ganti tagline
}
```

### 2️⃣ Mengganti FOTO PROFIL

➡️ Buka **`src/data/mock.js`** → cari `profile.photo`

```js
export const profile = {
  photo: "URL_FOTO_BARU_DI_SINI",
  // ...
};
```

**Cara pakai foto sendiri**:
1. Letakkan foto Anda di folder `public/` (mis: `public/foto-saya.jpg`)
2. Ganti `photo` menjadi: `photo: "/foto-saya.jpg"`

### 3️⃣ Mengganti KONTAK (email, HP, LinkedIn)

➡️ Buka **`src/data/mock.js`** → cari `export const profile`

```js
export const profile = {
  email: "heniandriyani201@gmail.com",
  phone: "+62 858-4656-3208",
  linkedin: "https://www.linkedin.com/in/heni-andriyani",
};
```

### 4️⃣ Mengganti WARNA TEMA

➡️ Buka **`src/index.css`**

Warna utama saat ini:
- Navy (primary): `#0B1F3A`
- Cream (background): `#F7F3ED`
- Emas (accent): `#B08A3E`

Cari & replace warna ini di seluruh project (pakai fitur Find & Replace editor Anda)
ATAU edit di file `index.css` bagian `:root` untuk warna global.

### 5️⃣ Mengganti FONT

➡️ Buka **`src/index.css`** baris pertama:

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:...&family=Inter:...');
```

Ganti dengan font lain dari [Google Fonts](https://fonts.google.com).
Lalu update di `body` (font Inter) dan class `.font-display` (font Playfair).

### 6️⃣ Menambah / Mengubah PENGALAMAN KERJA

➡️ `src/data/mock.js` → cari `experience.items`

Tambahkan object baru:
```js
items: [
  {
    role: "Posisi Anda",
    company: "Nama Perusahaan",
    period: "2023 — Sekarang",
    location: "Jakarta",
    summary: "Ringkasan singkat...",
    bullets: ["Tugas 1", "Tugas 2", "Tugas 3"],
  },
  // tambah lagi di sini
]
```

### 7️⃣ Menambah PROYEK BARU

➡️ `src/data/mock.js` → cari `projects.items`

```js
items: [
  {
    id: "id-unik-proyek",   // unik, tanpa spasi
    title: "Nama Proyek",
    tag: "Academic Project",
    stack: ["React", "Node"],
    short: "Deskripsi singkat",
    cover: "URL_GAMBAR",
    details: ["Detail 1", "Detail 2"],
    outcome: "Hasil/dampak proyek"
  }
]
```

> **PENTING**: Tambahkan juga di section `en` (English) supaya konsisten saat user toggle bahasa.

### 8️⃣ Menambah SERTIFIKAT

➡️ `src/data/mock.js` → cari `certificates.items`

```js
items: [
  {
    title: "Nama Sertifikat",
    issuer: "Penerbit",
    year: "2024",
    desc: "Deskripsi singkat"
  }
]
```

### 9️⃣ Mengubah URUTAN SECTION

➡️ `src/pages/Portfolio.jsx`

Ubah urutan komponen di dalam `<main>`. Misal pindahkan `<Skills />` sebelum `<Experience />`.

### 🔟 Menyembunyikan Section

➡️ `src/pages/Portfolio.jsx` → comment-out section yang tidak ingin ditampilkan.

```jsx
{/* <Certificates /> */}   ← tidak akan ditampilkan
```

---

## 🎨 PALET WARNA

| Variabel | Hex | Pemakaian |
|----------|-----|-----------|
| Navy | `#0B1F3A` | Teks utama, button primary, section pengalaman |
| Cream | `#F7F3ED` | Background |
| Emas | `#B08A3E` | Aksen, highlight, hover |
| Cream Tua | `#F1ECE2` | Background section variasi |
| Putih | `#FFFFFF` | Card, input field |

---

## 📌 TIPS

- ✅ Selalu **save semua file** lalu refresh browser (atau auto-reload akan jalan).
- ✅ Edit di section `id` DAN `en` agar bahasa konsisten.
- ✅ Backup file `mock.js` sebelum edit besar.
- ⚠️ Jangan hapus tanda koma (`,`) atau kurung kurawal (`{}`) di JS — bisa error.
- ⚠️ Pastikan URL gambar berakhir dengan `.jpg`/`.png` dan dapat diakses publik.

---

## 🆘 TROUBLESHOOTING

**Q: Halaman jadi putih / blank**
A: Buka Console browser (F12). Biasanya error syntax di `mock.js` — periksa koma & kurung kurawal.

**Q: Foto tidak muncul**
A: Pastikan URL foto valid (buka di browser dulu). Jika foto lokal, simpan di folder `public/`.

**Q: Animasi tidak jalan**
A: Hapus folder `node_modules` dan `.cache`, lalu jalankan `yarn install` ulang.

---

Selamat berkreasi! 💛
