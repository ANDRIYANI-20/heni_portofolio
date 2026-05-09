/* ============================================================================
   📦  mock.js  —  PUSAT DATA PORTFOLIO HENI ANDRIYANI
   ============================================================================
   File ini berisi SEMUA teks, gambar, dan data yang ditampilkan di portofolio.
   Edit di sini untuk mengganti isi tanpa menyentuh komponen.

   STRUKTUR FILE:
     1. profile          → data pribadi (nama, foto, kontak)
     2. content.id       → semua teks dalam Bahasa Indonesia
     3. content.en       → semua teks dalam Bahasa Inggris

   ⚠️  PENTING:
     - Edit di SECTION ID dan EN agar konsisten saat toggle bahasa.
     - Jangan hapus koma (,) atau kurung kurawal ({ }) — bisa menyebabkan error.
     - Kalau bingung, cari komentar [SECTION ...] untuk lompat ke bagian.
============================================================================ */


/* ----------------------------------------------------------------------------
   [SECTION 1] PROFILE - DATA PRIBADI
   ----------------------------------------------------------------------------
   Edit nama, foto, lokasi, dan kontak Anda di sini.
   Ganti `photo` dengan URL gambar atau path lokal di folder /public/.
---------------------------------------------------------------------------- */
export const profile = {
  name: "Heni Andriyani",
  photo: "/la.jpeg",
  resume: "/RESUME_HENI_ANDRIYANI.pdf",
  location: "Mampang Prapatan, Jakarta Selatan",
  email: "heniandriyani201@gmail.com",
  phone: "+62 858-4656-3208",
  linkedin: "https://www.linkedin.com/in/heni-andriyani",
  instagram: "https://www.instagram.com/hn.andriyani",
  available: true, // tampilkan badge "Open to work"
};


/* ----------------------------------------------------------------------------
   [SECTION 2] CONTENT - SEMUA TEKS (BILINGUAL)
   ----------------------------------------------------------------------------
   Object `content` berisi dua bahasa:
     - id  → Bahasa Indonesia (default)
     - en  → English

   STRUKTUR DI DALAM SETIAP BAHASA:
     ├─ nav           → label menu navigasi
     ├─ hero          → bagian paling atas (nama, tagline, CTA)
     ├─ about         → tentang saya
     ├─ experience    → pengalaman kerja
     ├─ education     → pendidikan
     ├─ skills        → keahlian (dengan progress bar)
     ├─ projects      → proyek (klik buka popup modal)
     ├─ certificates  → sertifikat & pelatihan
     ├─ contact       → form kontak & label
     └─ footer        → tagline footer
---------------------------------------------------------------------------- */
export const content = {
  /* ===================== BAHASA INDONESIA ===================== */
  id: {
    /* ---------- [2.1] NAVIGASI ---------- */
    nav: {
      home: "Beranda",
      about: "Tentang",
      experience: "Pengalaman",
      education: "Pendidikan",
      skills: "Keahlian",
      projects: "Proyek",
      certificates: "Sertifikat",
      contact: "Kontak",
      cta: "Hubungi Saya",
    },

    /* ---------- [2.2] HERO (BAGIAN ATAS) ---------- */
    hero: {
      eyebrow: "Portofolio Profesional",
      titleA: "Halo, saya",
      role: "General Service & Calon Profesional Sistem Informasi",
      tagline:
        "Lebih dari tujuh tahun sebagai operasional di lingkungan perbankan, kini ingin melangkah lebih dalam ke dunia data, sistem, dan operasional digital.",
      ctaPrimary: "Lihat CV Lengkap",
      ctaSecondary: "Hubungi Saya",
      // Stat cards yang melayang di atas foto
      stat1: "7+ Tahun",
      stat1Label: "Pengalaman Perbankan",
      stat2: "S1 Sistem Informasi",
      stat2Label: "Universitas Pamulang",
      stat3: "100% Akurasi",
      stat3Label: "Standar Operasional",
    },

    /* ---------- [2.3] TENTANG SAYA ---------- */
    about: {
      kicker: "Tentang Saya",
      title:
        "Profesional yang teliti, terstruktur, dan adaptif terhadap teknologi.",
      // Tambah/kurangi paragraf bebas (array of string)
      paragraphs: [
        "Lulusan S1 Sistem Informasi dengan pengalaman kerja lebih dari 7 tahun di bidang operasional dan layanan umum. Memiliki pengalaman dalam penyusunan laporan, koordinasi operasional, serta administrasi kerja secara sistematis dan sesuai SOP.",
        "Terbiasa bekerja secara teliti, disiplin, dan bertanggung jawab dalam mendukung kelancaran aktivitas operasional. Memiliki kemampuan komunikasi dan kerja sama tim yang baik, cepat beradaptasi dengan lingkungan kerja baru, dan siap untuk mengembangkan diri serta memberikan kontribusi nyata dalam meningkatkan produktivitas perusahaan.",
      ],
      // 4 highlight card (label + deskripsi singkat)
      highlights: [
        { label: "Ketelitian", desc: "Terbiasa bekerja dengan standar akurasi tinggi." },
        { label: "Kepatuhan", desc: "Memahami prosedur dan compliance perbankan." },
        { label: "Cepat Belajar", desc: "Mudah beradaptasi dengan tools dan teknologi baru." },
        { label: "Kolaboratif", desc: "Koordinasi lintas unit kerja secara efektif." },
      ],
    },

    /* ---------- [2.4] PENGALAMAN KERJA ---------- */
    experience: {
      kicker: "Perjalanan Karier",
      title: "Pengalaman Kerja",
      // Tambah pekerjaan baru: salin object di bawah
      items: [
        {
          role: "General Service",
          company: "BTPN Syariah (Vendor PT SJS & PT SOS)",
          period: "2018 — Sekarang",
          location: "Jakarta",
          summary:
            "Mendukung kelancaran operasional harian di lingkungan perbankan dengan standar kepatuhan dan akurasi tinggi.",
          // Daftar tugas / pencapaian
          bullets: [
            "Mengelola kebutuhan operasional harian perusahaan secara terstruktur dan tepat waktu.",
            "Melakukan administrasi data dan penyusunan laporan operasional dengan berbagai unit kerja agar kebutuhan terpenuhi tepat waktu dan sesuai standar.",
            "Mengelola inventaris serta memastikan fasilitas kerja tersedia dan terawat.",
            "Berkoordinasi dengan vendor dan tim internal terkait kebutuhan operasional kantor.",
            "Menangani permintaan operasional dan kendala lapangan dengan cepat dan tepat.",
            "Membantu menjaga kebersihan, kerapihan, dan kenyamanan area kerja sesuai standar perusahaan.",
            "Mendukung kelancaran aktivitas operasional melalui koordinasi lintas divisi.",
            "Terbiasa bekerja dengan target kerja, jadwal operasional, dan standar pelayanan perusahaan."
          ],
        },
        {
          role: "Production Operator",
          company: "PT. Indah Jaya Textile Industry",
          period: "2017 — 2018",
          location: "Indonesia",
          summary:
            "Mengoperasikan mesin pemotong handuk sesuai standar produksi untuk menjaga kualitas hasil dan kelancaran proses kerja.",
          bullets: [
            "Mengoperasikan mesin pemotong handuk sesuai standar produksi yang berlaku.",
            "Memastikan hasil potongan presisi, rapi, dan sesuai ukuran yang ditentukan.",
            "Menjaga kelancaran proses produksi dengan mematuhi SOP dan standar K3.",
            "Melakukan perawatan ringan pada mesin pemotong agar tetap berjalan optimal.",
          ],
        },
      ],
    },

    /* ---------- [2.5] PENDIDIKAN ---------- */
    education: {
      kicker: "Pendidikan",
      title: "Latar Belakang Akademis",
      items: [
        {
          school: "Universitas Pamulang",
          degree: "S1 — Sistem Informasi",
          period: "2021 — 2025",
          desc: "Fokus pada perancangan basis data, pengolahan data, dan pengembangan sistem informasi.",
        },
        {
          school: "SMAN 1 Rawajitu Selatan",
          degree: "Sekolah Menengah Atas",
          period: "2013 — 2016",
          desc: "Pendidikan menengah atas dengan landasan disiplin dan ketekunan.",
        },
      ],
    },

    /* ---------- [2.6] KEAHLIAN ---------- */
    // Skill ditampilkan sebagai progress bar (0 - 100)
    skills: {
      kicker: "Keahlian",
      title: "Kompetensi & Tools",
      groups: [
        {
          name: "Teknis",
          items: [
            { name: "MySQL & phpMyAdmin", level: 80 },
            { name: "Web Development (PHP, HTML, CSS)", level: 70 },
            { name: "Microsoft Office", level: 90 },
            { name: "Pengolahan Data & SQL Dasar", level: 75 },
          ],
        },
        {
          name: "Pendukung",
          items: [
            { name: "Koordinasi Operasional Perbankan", level: 92 },
            { name: "Ketelitian & Kepatuhan Prosedural", level: 95 },
            { name: "Manajemen Dokumen & Laporan", level: 88 },
            { name: "Adaptasi Teknologi Baru", level: 85 },
          ],
        },
      ],
    },

    /* ---------- [2.7] PROYEK (DENGAN POPUP MODAL) ---------- */
    // Klik kartu proyek → buka popup detail
    projects: {
      kicker: "Proyek",
      title: "Proyek Teknis & Akademis",
      subtitle: "Klik kartu proyek untuk melihat detail studi kasus.",
      items: [
        {
          id: "sistem-tiket-bus", // unik, tanpa spasi
          title: "Sistem Tiket Bus Online",
          tag: "Proyek Akademik",
          stack: ["PHP", "MySQL", "phpMyAdmin", "HTML/CSS"],
          short:
            "Sistem pemesanan tiket bus berbasis web dengan basis data relasional yang menjaga integritas transaksi.",
          cover:
            "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1200&q=80",
          // Detail scope (muncul di popup)
          details: [
            "Merancang struktur database meliputi tabel penumpang, jadwal, tujuan, transaksi, akun pengguna, dan pembayaran.",
            "Membuat tabel dasar dan relasinya menggunakan MySQL serta mengelola data melalui phpMyAdmin.",
            "Mengembangkan query dasar untuk menampilkan, memfilter, dan mengurutkan data menggunakan SELECT.",
            "Menyusun alur input-proses-output untuk menjaga integritas data pada sistem pemesanan.",
          ],
          outcome:
            "Proyek menghasilkan prototipe sistem pemesanan yang fungsional, dengan basis data ternormalisasi dan alur transaksi yang konsisten.",
        },
        // Tambah proyek baru di sini ⬇️ (jangan lupa juga tambah di section `en`)
      ],
    },

    /* ---------- [2.8] SERTIFIKAT ---------- */
    certificates: {
      kicker: "Sertifikat",
      title: "Sertifikat & Pelatihan",
      subtitle: "Beberapa pembelajaran formal & non-formal yang saya ikuti.",
      items: [
        { title: "Latihan Dasar Kepemimpinan (LDK)", issuer: "Himpunan Mahasiswa Sistem Informasi (HMSI)", year: "2021", desc: "Membangun kepemimpinan yang berkarakter di generasi yang akan datang.", image: "/D.png" },
        { title: "Seminar Nasional", issuer: "Universitas Pamulang", year: "2022", desc: "Menguatkan semangat nasional dalam pembangunan ekonomi Indonesia menuju era Society 5.0.", image: "/C.png" },
        { title: "Seminar Nasional", issuer: "Universitas Pamulang", year: "2023", desc: "Masa depan dunia kerja: AI dan Big Data di era otomatisasi.", image: "/A.png" },
        { title: "Seminar Nasional", issuer: "Universitas Pamulang", year: "2024", desc: "Memasuki era kekuatan kecerdasan buatan: transformasi digital, kolaborasi manusia, dan visi masa depan.", image: "/B.png" },
        { title: "International Conference on Emerging Technologies and Sustainability (ICETS)", issuer: "Universitas Pamulang", year: "2024", desc: "Pengenalan teknologi terkini dan praktik keberlanjutan dalam berbagai bidang.", image: "/F.png" },
        { title: "Network Administrator", issuer: "Lembaga Sertifikasi Profesi Universitas Pamulang", year: "2025", desc: "Mempelajari perancangan, pengelolaan, hingga pemeliharaan jaringan komputer.", image: "/E.png" },
      ],
    },

    /* ---------- [2.9] KONTAK ---------- */
    contact: {
      kicker: "Kontak",
      title: "Mari berdiskusi tentang peluang kolaborasi.",
      subtitle:
        "Saya terbuka untuk peran data operation, administrasi sistem, dan posisi yang menjembatani operasional perbankan dengan teknologi.",
      formName: "Nama",
      formEmail: "Email",
      formMessage: "Pesan",
      formSubmit: "Kirim Pesan",
      sent: "Pesan terkirim. Terima kasih!",
      copy: "Salin",
      copied: "Tersalin",
    },

    /* ---------- [2.10] FOOTER ---------- */
    footer: {
      tagline: "Dibuat dengan ketelitian — 2025",
    },
  },


  /* ===================== ENGLISH (BAHASA INGGRIS) ===================== */
  // Salin struktur di atas, terjemahkan teksnya
  en: {
    /* ---------- [EN.1] NAV ---------- */
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      projects: "Projects",
      certificates: "Certificates",
      contact: "Contact",
      cta: "Get in Touch",
    },

    /* ---------- [EN.2] HERO ---------- */
    hero: {
      eyebrow: "Professional Portfolio",
      titleA: "Hello, I'm",
      role: "General Service & Information Systems Professional",
      tagline:
        "Seven plus years inside a banking environment, now stepping deeper into data, systems, and digital operations.",
      ctaPrimary: "View Full CV",
      ctaSecondary: "Contact Me",
      stat1: "7+ Years",
      stat1Label: "Banking Experience",
      stat2: "BSc IS",
      stat2Label: "Universitas Pamulang",
      stat3: "100% Accuracy",
      stat3Label: "Operational Standard",
    },

    /* ---------- [EN.3] ABOUT ---------- */
    about: {
      kicker: "About Me",
      title: "A meticulous, structured, and tech-adaptive professional.",
      paragraphs: [
        "A Bachelor's graduate in Information Systems with more than seven years of work experience in operations and general services. Experienced in preparing reports, coordinating operations, and handling administrative work systematically and in accordance with standard operating procedures.",
        "Accustomed to working with accuracy, discipline, and responsibility in supporting smooth operational activities. Possesses strong communication and teamwork skills, adapts quickly to new work environments, and is ready to continue growing while making meaningful contributions to improving company productivity.",
      ],
      highlights: [
        { label: "Detail-Oriented", desc: "Trained to work with high accuracy standards." },
        { label: "Compliance", desc: "Familiar with banking procedures and compliance." },
        { label: "Quick Learner", desc: "Adapts easily to new tools and technologies." },
        { label: "Collaborative", desc: "Coordinates effectively across business units." },
      ],
    },

    /* ---------- [EN.4] EXPERIENCE ---------- */
    experience: {
      kicker: "Career Path",
      title: "Work Experience",
      items: [
        {
          role: "General Service",
          company: "BTPN Syariah (Vendor PT SJS & PT SOS)",
          period: "2018 — Present",
          location: "Jakarta",
          summary:
            "Supporting day-to-day operations in a banking environment with high standards of compliance and accuracy.",
          bullets: [
            "Manage daily company operational needs in a structured and timely manner.",
            "Handle data administration and prepare operational reports while coordinating with various business units to ensure needs are met on time and according to standards.",
            "Manage inventory and ensure workplace facilities are available and well maintained.",
            "Coordinate with vendors and internal teams regarding office operational needs.",
            "Respond to operational requests and field issues quickly and appropriately.",
            "Help maintain cleanliness, tidiness, and comfort in the work area according to company standards.",
            "Support smooth operational activities through cross-division coordination.",
            "Accustomed to working with performance targets, operational schedules, and company service standards.",
          ],
        },
        {
          role: "Production Operator",
          company: "PT. Indah Jaya Textile Industry",
          period: "2017 — 2018",
          location: "Indonesia",
          summary:
            "Operated towel cutting machines according to production standards to maintain product quality and a smooth workflow.",
          bullets: [
            "Operate towel cutting machines in accordance with production standards.",
            "Ensure precise and neat cuts that match the specified sizes.",
            "Maintain a smooth production flow by complying with SOP and K3 standards.",
            "Perform minor maintenance on cutting machines to keep them running optimally.",
          ],
        },
      ],
    },

    /* ---------- [EN.5] EDUCATION ---------- */
    education: {
      kicker: "Education",
      title: "Academic Background",
      items: [
        { school: "Universitas Pamulang", degree: "BSc — Information Systems", period: "2021 — 2025", desc: "Focused on database design, data processing, and information system development." },
        { school: "SMAN 1 Rawajitu Selatan", degree: "Senior High School", period: "2013 — 2016", desc: "Senior high school education with a foundation of discipline and persistence." },
      ],
    },

    /* ---------- [EN.6] SKILLS ---------- */
    skills: {
      kicker: "Skills",
      title: "Competencies & Tools",
      groups: [
        {
          name: "Technical",
          items: [
            { name: "MySQL & phpMyAdmin", level: 80 },
            { name: "Web Development (PHP, HTML, CSS)", level: 70 },
            { name: "Microsoft Office", level: 90 },
            { name: "Data Processing & Basic SQL", level: 75 },
          ],
        },
        {
          name: "Supporting",
          items: [
            { name: "Banking Operational Coordination", level: 92 },
            { name: "Accuracy & Procedural Compliance", level: 95 },
            { name: "Document & Report Management", level: 88 },
            { name: "Adapting to New Technologies", level: 85 },
          ],
        },
      ],
    },

    /* ---------- [EN.7] PROJECTS ---------- */
    projects: {
      kicker: "Projects",
      title: "Technical & Academic Projects",
      subtitle: "Click a project card to view the case study.",
      items: [
        {
          id: "sistem-tiket-bus",
          title: "Online Bus Ticket System",
          tag: "Academic Project",
          stack: ["PHP", "MySQL", "phpMyAdmin", "HTML/CSS"],
          short:
            "A web-based bus ticket booking system backed by a relational database that preserves transaction integrity.",
          cover:
            "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1200&q=80",
          details: [
            "Designed the database structure: passengers, schedules, destinations, transactions, user accounts, and payments.",
            "Built base tables and their relations using MySQL, managed data via phpMyAdmin.",
            "Developed basic queries to display, filter, and sort data using SELECT.",
            "Mapped input-process-output flow to maintain data integrity throughout booking.",
          ],
          outcome:
            "Delivered a functional booking prototype with a normalized database and a consistent transaction flow.",
        },
      ],
    },

    /* ---------- [EN.8] CERTIFICATES ---------- */
    certificates: {
      kicker: "Certificates",
      title: "Certificates & Trainings",
      subtitle: "Selected formal and informal learning I have completed.",
      items: [
        { title: "Basic Leadership Training (LDK)", issuer: "Information Systems Student Association (HMSI)", year: "2021", desc: "Building character-based leadership in future generations.", image: "/D.png" },
        { title: "National Seminar", issuer: "Universitas Pamulang", year: "2022", desc: "Strengthening national spirit in Indonesia's economic development toward Society 5.0.", image: "/C.png" },
        { title: "National Seminar", issuer: "Universitas Pamulang", year: "2023", desc: "The Future Of Work: AI and Big Data In The Age of Automation.", image: "/A.png" },
        { title: "National Seminar", issuer: "Universitas Pamulang", year: "2024", desc: "Welcome to the power of artificial intelligence era: Digital transformation, human collaboration, and vision of the future.", image: "/B.png" },
        { title: "International Conference on Emerging Technologies and Sustainability (ICETS)", issuer: "Universitas Pamulang", year: "2024", desc: "Introduction to emerging technologies and sustainability practices across sectors.", image: "/F.png" },
        { title: "Network Administrator", issuer: "Professional Certification Institute, Universitas Pamulang", year: "2025", desc: "Covered computer network planning, administration, and maintenance.", image: "/E.png" },
      ],
    },

    /* ---------- [EN.9] CONTACT ---------- */
    contact: {
      kicker: "Contact",
      title: "Let's discuss collaboration opportunities.",
      subtitle:
        "I am open to roles in data operation, system administration, and positions that bridge banking operations with technology.",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Message",
      formSubmit: "Send Message",
      sent: "Message sent. Thank you!",
      copy: "Copy",
      copied: "Copied",
    },

    /* ---------- [EN.10] FOOTER ---------- */
    footer: {
      tagline: "Crafted with care — 2025",
    },
  },
};
