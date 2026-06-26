export interface Project {
  id: string;
  title: string;
  url: string | null;
  badge: string;
  badgeClass: string;
  tags: string[];
  summary: string;
  description: string;
  problem: string;
  solution: string;
  highlights: string[];
  stack: string[];
  year: string;
  role: string;
}

export const projects: Project[] = [
  {
    id: 'arah-coffee',
    title: 'Arah Coffee',
    url: 'https://arahcoffee.co.id',
    badge: 'IPO READY',
    badgeClass: 'border-teal-400/30 text-teal-400',
    tags: ['AUTO TRANSLATE', 'INVESTOR UI'],
    summary:
      'Company profile korporat untuk IPO readiness - UI jelas bagi calon investor, konten multi-bahasa via Google Translate yang bisa dikoreksi.',
    description:
      'Website profil perusahaan tingkat korporat yang dirancang agar calon investor cepat memahami value proposition, struktur bisnis, dan momentum pertumbuhan. Tanpa framework i18n tradisional: konten dikelola di Laravel, diterjemahkan otomatis dengan Google Translate, lalu tim internal dapat mengoreksi hasil terjemahan sebelum publish.',
    problem:
      'Materi korporat perlu tampil credible dan mudah dipahami investor global, sementara update konten harus cepat tanpa workflow terjemahan manual yang berat.',
    solution:
      'Membangun company profile Laravel dengan information architecture investor-first, auto-translate Google yang dapat dikoreksi, dan UI yang menonjolkan metrik, narasi bisnis, dan call-to-action strategis - bukan sekadar brochure digital.',
    highlights: [
      'Investor-friendly UI, struktur informasi & visual hierarchy jelas',
      'Auto-translate Google + workflow koreksi internal (bukan i18n package)',
      'Laravel CMS-ready untuk tim korporat update konten cepat',
      'IPO-ready narrative & high-performance delivery',
    ],
    stack: ['PHP', 'Google Translate API', 'Tailwind CSS'],
    year: '2023',
    role: 'Lead Engineer',
  },
  {
    id: 'cold-n-brew',
    title: "Cold 'N Brew Reservation",
    url: 'https://reservation.coldnbrew.com',
    badge: 'BOOK & PAY',
    badgeClass: 'border-rose-400/30 text-rose-400',
    tags: ['RESERVATION', 'PAYMENT', 'LARAVEL'],
    summary:
      'Live reservation platform production-ready, tamu reserve dan pay langsung di website dalam satu seamless flow.',
    description:
      'Booking engine real-time untuk outlet Cold \'N Brew yang sudah berjalan di production. Tamu memilih slot, checkout, dan menyelesaikan pembayaran tanpa keluar dari website untuk mengurangi friction dan no-show, dengan stabilitas untuk operasional harian.',
    problem:
      'Reservasi manual dan pembayaran terpisah menyebabkan slot kosong, rekonsiliasi lambat, dan pengalaman tamu tidak konsisten saat peak hour.',
    solution:
      'Full-stack reservation + payment in-app dengan availability real-time, integrasi payment gateway, dan alur checkout yang dioptimalkan untuk mobile - dibangun dan di-hardening untuk production.',
    highlights: [
      'Daily use',
      'Reserve & pay inside the website',
      'Real-time availability & checkout',
      'Mobile-first flow untuk tamu & staff operasional',
    ],
    stack: ['Payment Gateway', 'Tailwind CSS', 'MySQL'],
    year: '2024',
    role: 'Lead Engineer',
  },
  {
    id: 'tirta-ampera',
    title: 'Tirta Ampera',
    url: 'https://tirtaampera.co.id',
    badge: 'UTILITY ECOSYSTEM',
    badgeClass: 'border-blue-400/30 text-blue-400',
    tags: ['APP', 'WEB', 'INTERNAL'],
    summary:
      'Integrated ecosystem PDAM Boyolali - 70k+ pelanggan, customer mobile app, company portal, internal dashboard.',
    description:
      'Ekosistem digital terpadu untuk PDAM Boyolali yang melayani lebih dari 70.000 pelanggan: layanan pelanggan via mobile app, portal informasi perusahaan, dan dashboard operasional internal dalam satu arsitektur yang konsisten.',
    problem:
      'Layanan utilitas tersebar di kanal berbeda tanpa integrasi data, menyulitkan puluhan ribu pelanggan dan tim operasional skala kota.',
    solution:
      'Merancang utility platform multi-channel dengan billing, notifikasi, dan manajemen internal terpusat - siap untuk volume pelanggan 70k+.',
    highlights: [
      '70k+ pelanggan terlayani dalam satu ekosistem digital',
      'Mobile app + web portal + internal tools',
      'Operasional PDAM terdigitalisasi end-to-end',
    ],
    stack: ['Mobile App', 'PWA', 'Internal Dashboard'],
    year: '2022',
    role: 'System Architect',
  },
  {
    id: 'lawu-booking',
    title: 'The Lawu Group - Booking Engine',
    url: 'https://book.thelawugroup.com',
    badge: 'APP ENGINE',
    badgeClass: 'border-zinc-500 text-zinc-400',
    tags: ['BOOKING', 'SCHEDULING', 'PRICING'],
    summary:
      'Booking engine terpusat - scheduling, harga per season (hingga per day), discount dinamis, multi-property.',
    description:
      'Sistem reservasi terpusat untuk berbagai properti dan unit bisnis di bawah The Lawu Group. Mendukung penjadwalan (scheduling), penetapan harga per season dengan granularitas per hari, discount dinamis, serta konfigurasi per outlet dalam satu engine.',
    problem:
      'Setiap unit memiliki kanal booking dan aturan harga sendiri - sulit melihat okupansi grup, menstandarkan promo, dan mengelola season pricing secara konsisten.',
    solution:
      'Centralized booking engine dengan scheduling fleksibel, season & daily rate cards, dynamic discount rules, dan integrasi ke operasional hospitality serta ERP grup.',
    highlights: [
      'Scheduling & availability per property',
      'Season pricing - konfigurasi per day',
      'Dynamic discount & promo rules',
      'Multi-property hub (~30 properties group)',
    ],
    stack: ['Booking Engine', 'Pricing Rules', 'API'],
    year: '2023',
    role: 'Lead Engineer',
  },
  {
    id: 'pesona-karanganyar',
    title: 'Pesona Karanganyar',
    url: "https://pesonakaranganyar.karanganyarkab.go.id/",
    badge: 'PUBLIC SECTOR',
    badgeClass: 'border-emerald-400/30 text-emerald-400',
    tags: ['PORTAL', 'VIRTUAL TOUR', 'SEO'],
    summary:
      'Portal pariwisata resmi Pemkab Karanganyar - destinasi, event, wisata virtual, peta interaktif, dan pendaftaran UMKM.',
    description:
      'Platform custom untuk promosi destinasi wisata, event, dan ekonomi kreatif daerah. Fitur pencarian destinasi, wisata virtual, peta interaktif, modul pendaftaran tenant/UMKM, struktur konten ramah SEO, dan performa halaman yang ringan di mobile.',
    problem:
      'Informasi pariwisata, event, dan potensi UMKM tersebar di berbagai kanal - masyarakat dan investor sulit menemukan sumber resmi yang lengkap dan terpercaya.',
    solution:
      'Portal pariwisata terintegrasi dengan discovery destinasi, virtual tour, peta wisata, onboarding UMKM, dan optimasi SEO serta performa loading.',
    highlights: [
      'Kanal resmi: destinasi · event · UMKM',
      'Virtual tour & peta interaktif',
      'Struktur konten SEO-friendly',
      'Performa mobile-first',
    ],
    stack: ['Laravel', 'GeoJSON', 'SEO', 'GTM + GA'],
    year: '2021',
    role: 'Lead Engineer',
  },
  {
    id: 'rosalia-express',
    title: 'Rosalia Express',
    url: "https://rosalia-express.com/",
    badge: 'LOGISTICS WEB',
    badgeClass: 'border-orange-400/30 text-orange-400',
    tags: ['TRACKING', 'MEMBER', 'INTEGRATION'],
    summary:
      'Redesign website terintegrasi sistem internal - tracking paket real-time, cek ongkir, dan pendaftaran member online.',
    description:
      'Custom website modern untuk Rosalia Express yang terhubung ke sistem operasional internal. Pelanggan dapat tracking pengiriman real-time, cek harga, mendaftar member, serta mengakses halaman promo dan solusi bisnis dari satu kanal digital.',
    problem:
      'Website lama tidak terintegrasi dengan sistem internal - pelanggan tidak bisa tracking, cek harga, atau daftar member secara mandiri.',
    solution:
      'Redesign total dengan integrasi backend logistik, tracking real-time, member online, halaman promo, dan optimasi SEO serta performa.',
    highlights: [
      'Tracking pengiriman real-time',
      'Cek ongkos kirim online',
      'Pendaftaran member mandiri',
      'Integrasi sistem operasional logistik',
    ],
    stack: ['Laravel', 'API Integration', 'SEO'],
    year: '2023',
    role: 'Lead Engineer',
  },
  {
    id: 'anugrah-vulkanisir',
    title: 'Anugrah Vulkanisir',
    url: "https://vulkanisiragv.com/",
    badge: 'B2B PROFILE',
    badgeClass: 'border-lime-400/30 text-lime-400',
    tags: ['SEO', 'SEM', 'LEAD GEN'],
    summary:
      'Company profile B2B vulkanisir ban - visibilitas brand transportasi darat, optimasi SEO/SEM, dan pipeline lead terukur.',
    description:
      'Website company profile profesional untuk Anugrah Vulkanisir yang menonjolkan keahlian vulkanisir ban dan layanan armada angkutan berat. Struktur konten ramah SEO, kampanye SEM terarah, performa halaman dipercepat, dan tracking konversi via GTM + GA.',
    problem:
      'Brand B2B kurang terlihat di pencarian - butuh presence digital yang menghasilkan lead terukur bagi pelaku transportasi darat.',
    solution:
      'Company profile dengan informasi layanan jelas, SEO/SEM optimized, performa cepat, dan pipeline data analytics untuk pengembangan pipeline B2B.',
    highlights: [
      'Visibilitas B2B transportasi darat',
      'SEO & SEM optimized',
      'Performa halaman dipercepat',
      'GTM + GA untuk tracking konversi',
    ],
    stack: ['Laravel', 'SEO', 'SEM', 'GTM', 'GA'],
    year: '2023',
    role: 'Lead Engineer',
  },
  // === Sisanya (tanpa url) ===
  {
    id: 'lawu-erp',
    title: 'The Lawu Group - ERP',
    url: null,
    badge: 'PRIVATE',
    badgeClass: 'border-amber-400/30 text-amber-400',
    tags: ['ERP', 'ACCOUNTING', 'INTERNAL', 'HRM'],
    summary:
      'Custom ERP grup multi-entitas - modul akuntansi lengkap (jurnal, laba rugi, neraca), HRM, terintegrasi POS tiketing & booking.',
    description:
      'ERP kustom untuk The Lawu Group yang mengelola berbagai unit bisnis hospitality dan operasional. Cakupan modul meliputi akuntansi penuh - chart of accounts, jurnal, laporan laba rugi, neraca, dan laporan keuangan terkait - HRM (SDM, absensi, payroll), serta terintegrasi dengan POS tiketing dan sistem booking grup. Deployment internal, tidak dipublikasikan eksternal.',
    problem:
      'Operasional grup kompleks dengan banyak entitas membutuhkan satu sumber kebenaran data keuangan, SDM, dan operasional - spreadsheet dan tools terpisah tidak scalable serta rawan selisih laporan.',
    solution:
      'ERP modular terpusat: finance & accounting end-to-end, HRM, operasional per unit bisnis, reporting konsolidasi, RBAC - dengan integrasi native ke POS tiketing dan booking engine Lawu Group.',
    highlights: [
      'Modul akuntansi: jurnal, laba rugi, neraca & laporan keuangan',
      'HRM: kelola SDM, absensi & payroll',
      'Terintegrasi POS tiketing + sistem booking',
      'Multi-entity group operations & RBAC',
      'Internal-only secure deployment',
    ],
    stack: ['Accounting Module', 'HRM', 'POS Integration', 'Booking Integration', 'RBAC'],
    year: '2023',
    role: 'Lead Engineer & GM oversight',
  },
  {
    id: 'honda-jateng',
    title: 'Honda Jateng Website',
    url: null,
    badge: 'OFFICIAL HUB',
    badgeClass: 'border-red-400/30 text-red-400',
    tags: ['CMS', 'SEO', 'SEM', 'ANALYTICS'],
    summary:
      'Company profile resmi Astra Motor Jawa Tengah - produk, layanan, komunitas, CMS konten, dan growth stack SEO/SEM + GTM/GA.',
    description:
      'Website resmi Honda Jateng dengan desain user-friendly, CMS artikel · promo · berita, optimasi kecepatan halaman mobile-first, serta integrasi Google Tag Manager dan Google Analytics untuk memantau traffic organik dan kampanye digital.',
    problem:
      'Kanal informasi resmi perlu mudah dikelola tim internal, cepat di mobile, dan siap mendukung promosi produk serta aktivitas komunitas di seluruh Jawa Tengah.',
    solution:
      'Company profile responsif dengan CMS konten dinamis, pipeline SEO/SEM, performa loading dioptimalkan, dan data analytics via GTM + GA.',
    highlights: [
      'Kanal resmi: produk · layanan · komunitas',
      'CMS artikel, promo & berita',
      'SEO · SEM · performa mobile-first',
      'GTM + GA untuk tracking kampanye',
    ],
    stack: ['Laravel', 'CMS', 'SEO', 'SEM', 'GTM', 'GA'],
    year: '2020–2023',
    role: 'Lead Engineer',
  },
  {
    id: 'disnaker-solo',
    title: 'Disnaker Surakarta',
    url: null,
    badge: 'GOVERNMENT WEB',
    badgeClass: 'border-sky-400/30 text-sky-400',
    tags: ['PANEL WILAYAH', 'GEOJSON', 'SURVEY'],
    summary:
      'Website custom pendataan potensi tenaga kerja - panel kecamatan & kelurahan, survei publik, dan peta GeoJSON per wilayah.',
    description:
      'Platform custom Disnaker Kota Surakarta untuk mengumpulkan data potensi tenaga kerja. Setiap kecamatan dan kelurahan menginput data wilayah masing-masing melalui panel terpisah, dilengkapi akses survei publik, peta GeoJSON, optimasi SEO, serta integrasi GTM dan GA.',
    problem:
      'Tanpa sistem terpusat, input data potensi tenaga kerja dari tiap kecamatan dan kelurahan sulit distandardisasi, dipantau, dan diakses secara real-time.',
    solution:
      'Website custom dengan Panel Kecamatan, Panel Kelurahan, survei publik, visualisasi GeoJSON, dan growth stack analytics.',
    highlights: [
      'Input per wilayah: kecamatan · kelurahan',
      'Panel admin & survei publik',
      'Peta GeoJSON interaktif',
      'SEO · GTM · GA',
    ],
    stack: ['Laravel', 'GeoJSON', 'RBAC', 'GTM', 'GA'],
    year: '2022',
    role: 'Lead Engineer',
  },
  {
    id: 'solo-great-sale',
    title: 'Solo Great Sale',
    url: null,
    badge: '3D EXPERIENCE',
    badgeClass: 'border-violet-400/30 text-violet-400',
    tags: ['3D WEB', 'VIRTUAL TOUR', 'EVENT'],
    summary:
      'Custom 3D website + virtual tour untuk event Solo Great Sale - pengalaman immersive area event sebelum kunjungan.',
    description:
      'Website event dengan teknologi 3D dan integrasi Google Street View untuk virtual tour interaktif. Pengunjung dapat mengeksplor area event, navigasi lokasi, dan mendapat preview immersive yang mendukung awareness serta minat kunjungan.',
    problem:
      'Promosi event butuh pengalaman digital unik - pengunjung perlu preview area event sebelum datang ke lokasi.',
    solution:
      'Custom 3D website dengan virtual tour interaktif, navigasi area event, dan integrasi Google Street View.',
    highlights: [
      'Virtual tour interaktif area event',
      'Teknologi 3D web + Google Street View',
      'Navigasi lokasi immersive',
      'Mendukung awareness & minat kunjungan',
    ],
    stack: ['3D Web', 'Google Street View', 'Laravel'],
    year: '2022–2023',
    role: 'Lead Engineer',
  },
  {
    id: 'pentol-mang-apin',
    title: 'Pentol Mang Apin',
    url: null,
    badge: 'FRANCHISE LP',
    badgeClass: 'border-yellow-400/30 text-yellow-400',
    tags: ['LANDING PAGE', 'LEAD GEN', 'FRANCHISE'],
    summary:
      'Landing page franchise untuk promosi paket usaha, lead generation calon mitra, dan showcase produk Pentol Mang Apin.',
    description:
      'Landing page development dengan fokus konversi lead calon mitra franchise. Value proposition jelas, form lead capture, showcase produk, dan informasi paket usaha dalam satu halaman yang dioptimalkan untuk acquisition.',
    problem:
      'Franchise butuh kanal digital efektif untuk mengumpulkan lead calon mitra dan mempromosikan paket usaha.',
    solution:
      'Conversion-focused landing page dengan lead capture, informasi paket franchise, dan promosi produk.',
    highlights: [
      'Lead capture calon mitra franchise',
      'Showcase paket usaha & produk',
      'Conversion-focused layout',
      'Kanal acquisition digital',
    ],
    stack: ['Laravel', 'Lead Form', 'Tailwind CSS'],
    year: '2022',
    role: 'Lead Engineer',
  },
  {
    id: 'greenpark-jogja',
    title: 'Greenpark Jogja',
    url: null,
    badge: 'PROPERTY WEB',
    badgeClass: 'border-green-400/30 text-green-400',
    tags: ['COMPANY PROFILE', 'PROPERTY', 'INQUIRY'],
    summary:
      'Company profile apartemen Greenpark Jogja - promosi konsep healthy living, fasilitas, dan inquiry calon penghuni.',
    description:
      'Website company profile responsif untuk Greenpark Jogja Apartment dengan visual storytelling properti, highlight fasilitas, konsep healthy living, galeri visual, informasi unit, dan call-to-action inquiry.',
    problem:
      'Properti perlu presence digital premium yang mempromosikan konsep kesehatan dan living quality kepada calon penghuni.',
    solution:
      'Property company profile dengan galeri visual, informasi fasilitas lengkap, dan CTA inquiry terintegrasi.',
    highlights: [
      'Visual storytelling properti premium',
      'Highlight konsep healthy living',
      'Galeri fasilitas & unit apartemen',
      'CTA inquiry calon penghuni',
    ],
    stack: ['Laravel', 'Tailwind CSS', 'CMS'],
    year: '2022',
    role: 'Lead Engineer',
  },
  {
    id: 'bri-kiosk',
    title: 'BRI Self-Payment Kiosk',
    url: null,
    badge: 'PRIVATE',
    badgeClass: 'border-amber-400/30 text-amber-400',
    tags: ['KIOSK', 'PAYMENT', 'HOSPITAL'],
    summary:
      'Sistem kiosk self-payment BRI untuk RS. Panti Rapih - perbaikan integrasi transaksi dan pengurangan antrian.',
    description:
      'Pengembangan dan perbaikan sistem self-payment terintegrasi BRI untuk operasional kiosk di RS. Panti Rapih. Audit alur payment flow, handshake integrasi kiosk dengan sistem rumah sakit, dan kepatuhan transaksi perbankan.',
    problem:
      'Kiosk self-payment mengalami masalah integrasi yang menghambat transaksi dan menambah antrian di rumah sakit.',
    solution:
      'Perbaikan sistem self-payment terintegrasi dengan audit payment flow, integrasi kiosk-rumah sakit, dan stabilitas transaksi perbankan.',
    highlights: [
      'Self-payment kiosk terintegrasi BRI',
      'Integrasi sistem rumah sakit',
      'Antrian berkurang, transaksi stabil',
      'Kepatuhan alur operasional perbankan',
    ],
    stack: ['Payment Integration', 'Kiosk System', 'Hospital API'],
    year: '2022',
    role: 'Lead Engineer',
  },
  {
    id: 'bank-jateng-invoicing',
    title: 'Bank Jateng Invoicing',
    url: null,
    badge: 'PRIVATE',
    badgeClass: 'border-amber-400/30 text-amber-400',
    tags: ['INTERNAL', 'INVOICING', 'AUTOMOTIVE'],
    summary:
      'Sistem invoicing internal tim Astra Motor Honda Jateng - generate invoice dan surat referensi bank.',
    description:
      'Custom internal system untuk tim Astra Motor Jawa Tengah: pencetakan invoice, surat referensi bank, dan manajemen dokumen internal. Deployment internal, tidak dipublikasikan eksternal.',
    problem:
      'Proses invoice dan surat referensi bank manual serta lambat - rawan kesalahan dan menghambat operasional tim.',
    solution:
      'Sistem internal untuk generate invoice, surat referensi bank, dan manajemen dokumen dengan workflow terstruktur.',
    highlights: [
      'Generate invoice otomatis',
      'Surat referensi bank terdigitalisasi',
      'Manajemen dokumen internal',
      'Efisiensi operasional tim Astra Motor',
    ],
    stack: ['Laravel', 'PDF Generation', 'RBAC'],
    year: '2022',
    role: 'Lead Engineer',
  },
  {
    id: 'astra-motor-stock',
    title: 'Astra Motor Stock Monitor',
    url: null,
    badge: 'PRIVATE',
    badgeClass: 'border-amber-400/30 text-amber-400',
    tags: ['INTERNAL', 'INVENTORY', 'AUTOMOTIVE'],
    summary:
      'Sistem monitoring stok motor internal - pencarian nomor rangka & mesin, status unit, dan laporan inventory.',
    description:
      'Custom system untuk tim internal Astra Motor Honda Jateng memantau stok motor dengan detail nomor rangka dan nomor mesin. Dashboard monitoring, pencarian unit, status inventory, dan laporan untuk operasional penjualan dan distribusi.',
    problem:
      'Monitoring stok motor belum real-time - tim internal sulit melacak unit by nomor rangka/mesin secara akurat.',
    solution:
      'Inventory tracking system dengan database stok motor, pencarian rangka/mesin, dashboard monitoring, dan laporan inventory.',
    highlights: [
      'Pencarian by nomor rangka & mesin',
      'Status unit real-time',
      'Dashboard monitoring operasional',
      'Laporan inventory terstruktur',
    ],
    stack: ['Laravel', 'MySQL', 'RBAC', 'Reporting'],
    year: '2022',
    role: 'Lead Engineer',
  },
];
