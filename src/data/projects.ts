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
];
