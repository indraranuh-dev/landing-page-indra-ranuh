import type { SiteCopy } from './types';

export const copy: SiteCopy = {
  meta: {
    title: 'Indra Ranuh | Senior Software Engineer',
    description:
      'Portofolio korporat Indra Ranuh - enterprise system architecture, integrasi perbankan BI-SNAP, payment gateway (Xendit, Midtrans), dan 70+ scalable digital products sejak 2017.',
    keywords:
      'Indra Ranuh, senior software engineer, general manager, enterprise architecture, Laravel, SNAP API, BI-SNAP, fintech integration, Xendit, Midtrans, Surakarta, Indonesia, Morphling Dev',
  },
  nav: {
    expertise: 'Expertise',
    works: 'Works',
    philosophy: 'Philosophy',
    contact: 'Contact',
    toggleMenu: 'Buka atau tutup menu navigasi',
    vibeBadge: 'Optimized for Vibe & Flow',
  },
  codePreview: {
    sectionLabel: '// CODE · LIVE_SNIPPET',
    title: 'Engineering in Motion',
    intro:
      'Cuplikan kode umum di production. API resource, typed fetch client, dan transform data dengan syntax highlighting.',
    tabListLabel: 'Pilih bahasa cuplikan kode',
    asideLabel: 'PATTERN',
    asideBody:
      'Pola sehari-hari: shape response konsisten di backend, kontrak TypeScript di client, dan normalisasi payload di script.',
    highlights: [
      'Laravel API Resource untuk response JSON',
      'Typed fetch + error handling di TypeScript',
      'Record normalization untuk data ingestion',
    ],
  },
  architecture: {
    sectionLabel: '// ARCHITECTURE · SYSTEM_MAP',
    title: 'Blueprint Topology',
    intro:
      'Ketuk atau pilih lapisan untuk melihat detail — dari client channel hingga domain services, data plane, dan observability.',
    diagramCaption: 'Reference topology · production systems',
    nodes: [
      { id: 'client', label: 'Channels', caption: 'Web, PWA, React Native' },
      { id: 'api', label: 'API Layer', caption: 'REST, auth, rate limits' },
      { id: 'domain', label: 'Domain', caption: 'Use cases, DDD modules' },
      { id: 'data', label: 'Data', caption: 'MySQL, Redis, queues' },
      { id: 'ops', label: 'Ops', caption: 'CI/CD, Sentry, Vercel' },
    ],
  },
  vibeMetrics: {
    sectionLabel: '// METRICS · OPERATING_STATS',
    title: 'Vibe & Velocity',
    intro: 'Angka yang mencerminkan ritme kerja - bukan vanity metrics, tapi sinyal kapasitas delivery.',
    metrics: [
      { label: 'Products', value: '70+', hint: 'Since 2017' },
      { label: 'SNAP Banks', value: '5', hint: 'Direct API' },
      { label: 'Stack Depth', value: '4', hint: 'Layered channels' },
      { label: 'Focus', value: '∞', hint: 'Flow state' },
    ],
    terminal: {
      windowTitle: 'indra@surakarta - zsh',
      ariaLabel: 'Terminal output statistik operasional',
      lines: [
        { kind: 'cmd', text: '$ whoami' },
        { kind: 'plain', text: 'indra - senior engineer' },
        { kind: 'cmd', text: '$ uptime --projects' },
        { kind: 'ok', text: '70 ecosystems · 5 SNAP integrations · 2 PG rails' },
        { kind: 'cmd', text: '$ echo $VIBE' },
        { kind: 'ok', text: 'Optimized for flow & resilient delivery.' },
      ],
    },
  },
  hero: {
    eyebrow: 'Senior Software Engineer & General Manager',
    titleLine1: 'Architecting',
    titleLine2: 'System Resilience.',
    description:
      'Sejak 2017 membangun 70+ digital ecosystems. Spesialis enterprise system architecture, SNAP banking integration (Bank Himbara, BPD), payment gateway, dan corporate-scale product lifecycle.',
    cta: 'Learn More',
    githubLabel: 'GitHub profile',
    stats: {
      ecosystems: 'Digital Ecosystems',
      snap: 'Bank Direct API',
      engineer: 'Engineer Level',
      lead: 'Operational Lead',
    },
  },
  philosophy: {
    sectionLabel: '// PHILOSOPHY · ENGINEERING_ETHOS',
    sectionTitle: 'Philosophy & Interests',
    quote: 'Teknologi bukan sekadar alat, tapi perpanjangan dari logika yang beretika.',
    body: 'Saya memandang pengembangan sistem melalui lensa',
    bodyStrong: 'Engineering Philosophy',
    bodyAfter:
      ': mencari kesederhanaan di tengah kompleksitas bisnis. Kode yang baik bertahan di tengah perubahan skala dan kebutuhan operasional.',
    tags: ['Business Intuition', 'Stoic Engineering', 'Minimalist Architecture'],
    rndLabel: 'CURRENT R&D',
    rndTitle: 'Lightweight UMKM POS',
    rndDescription:
      'Merancang ulang Point of Sale untuk UMKM - extreme performance (low latency), rich features, intuitive daily workflow.',
    rndProgress: 'OPTIMIZING ARCHITECTURE',
  },
  expertise: {
    sectionLabel: '// EXPERTISE · TECHNICAL_STACK',
    title: 'Technical Ecosystem',
    intro:
      'High-performance stack untuk solusi korporat dan scalable financial integration - dari SNAP direct banking hingga payment gateway.',
    stackLabels: {
      core: 'Core',
      highPerf: 'High-Perf',
      scripting: 'Scripting',
    },
    cards: {
      snap: {
        title: 'Bank SNAP Direct',
        description:
          'Implementasi standar API BI-SNAP untuk direct banking integration. Mulai dari Bank Himbara dan Bank Pembangunan Daerah',
        tags: ['Secured API', 'Fintech Stack'],
      },
      pg: {
        title: 'PG Integration',
        description:
          'High-volume transaction handling via Xendit dan Midtrans dengan precise reconciliation.',
        tags: ['Webhooks', 'Settlement'],
      },
      enterprise: {
        title: 'Enterprise Stack',
        description:
          'Arsitektur full-stack tersegmentasi: API & domain logic di backend, edge/static di frontend, mobile channel terpisah, dan pipeline deploy yang repeatable.',
        tags: ['DDD-ready', 'Multi-channel'],
        layers: [
          { label: 'Backend / API', items: ['Laravel', 'PHP 8.x', 'Python', 'TypeScript', 'REST API', 'Redis', 'Queue Workers'] },
          { label: 'Frontend / Web', items: ['Astro', 'Alpine.js', 'Tailwind CSS', 'Vite'] },
          { label: 'Mobile', items: ['React Native', 'PWA'] },
          { label: 'Platform / Ops', items: ['Vercel', 'GitHub Actions', 'Sentry', 'Docker'] },
        ],

      },
    },
  },
  projects: {
    sectionLabel: '// PROJECTS · ENTERPRISE_INDEX',
    title: 'Enterprise Works',
    subtitle: 'Kurasi portofolio ongoing system development - klik kartu untuk case study.',
    learnMore: 'Visit →',
    visitLive: 'Visit Live',
    viewDetail: 'View Case Study',
    closeModal: 'Tutup',
    prevSlide: 'Slide proyek sebelumnya',
    nextSlide: 'Slide proyek berikutnya',
    indexLabel: 'PROJECT',
    modalProblem: 'Problem',
    modalSolution: 'Solution',
    modalStack: 'Stack',
    modalImpact: 'Impact',
  },
  openSource: {
    sectionLabel: '// OPENSOURCE · ECOSYSTEM',
    sectionTitle: 'Ecosystem & Contribution',
    title: 'Empowering Laravel with 3D Capabilities.',
    description:
      'Membangun seamless bridge antara ekosistem Laravel dan 3D visualization melalui inisiatif',
    morphlingStrong: 'Morphling Dev',
    descriptionSuffix: ' - open-source tooling untuk developer Indonesia.',
    githubRepo: 'Github Repo',
    learnMore: 'Learn More',
    cards: {
      personal: {
        description: 'Enterprise snippets & personal repository.',
        connect: 'Connect →',
      },
      morphling: {
        description: 'Advanced ecosystem dan open-source tools - Morphling 3D untuk Laravel.',
        connect: 'Connect →',
      },
    },
  },
  footer: {
    sectionLabel: '// CONTACT · CONVERSION',
    ctaLine1: "Let's Build the",
    ctaLine2: 'Next Standard.',
    emailCopied: 'Email Copied!',
    openMailClient: 'or open mail client',
    socialNavLabel: 'Tautan sosial dan profesional',
    alumnus: 'ALUMNI: UNIVERSITAS MUHAMMADIYAH SURAKARTA (INFORMATIKA)',
    roleLocation: 'Senior Software Engineer • Surakarta, ID',
    copyright: 'All Rights Reserved.',
  },
  seo: {
    personJobTitle: 'Senior Software Engineer & General Manager',
    personDescription:
      'Enterprise software engineer yang mengkhususkan diri pada Laravel, BI-SNAP banking APIs, payment gateway integration, dan corporate digital systems.',
    websiteName: 'Indra Ranuh Portfolio',
    breadcrumbHome: 'Beranda',
  },
};
