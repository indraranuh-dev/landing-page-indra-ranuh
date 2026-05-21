export interface SiteCopy {
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  nav: {
    expertise: string;
    works: string;
    philosophy: string;
    contact: string;
    toggleMenu: string;
    vibeBadge: string;
  };
  codePreview: {
    sectionLabel: string;
    title: string;
    intro: string;
    tabListLabel: string;
    asideLabel: string;
    asideBody: string;
    highlights: string[];
  };
  architecture: {
    sectionLabel: string;
    title: string;
    intro: string;
    diagramCaption: string;
    nodes: { id: string; label: string; caption: string }[];
  };
  vibeMetrics: {
    sectionLabel: string;
    title: string;
    intro: string;
    metrics: { label: string; value: string; hint: string }[];
    terminal: {
      windowTitle: string;
      ariaLabel: string;
      lines: { kind: 'plain' | 'cmd' | 'ok'; text: string }[];
    };
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    cta: string;
    githubLabel: string;
    stats: {
      ecosystems: string;
      snap: string;
      engineer: string;
      lead: string;
    };
  };
  philosophy: {
    sectionLabel: string;
    sectionTitle: string;
    quote: string;
    body: string;
    bodyStrong: string;
    bodyAfter: string;
    tags: [string, string, string];
    rndLabel: string;
    rndTitle: string;
    rndDescription: string;
    rndProgress: string;
  };
  expertise: {
    sectionLabel: string;
    title: string;
    intro: string;
    stackLabels: {
      core: string;
      highPerf: string;
      scripting: string;
    };
    cards: {
      snap: { title: string; description: string; tags: [string, string] };
      pg: { title: string; description: string; tags: [string, string] };
      enterprise: {
        title: string;
        description: string;
        tags: [string, string];
        layers: { label: string; items: string[] }[];
      };
    };
  };
  projects: {
    sectionLabel: string;
    title: string;
    subtitle: string;
    learnMore: string;
    visitLive: string;
    viewDetail: string;
    closeModal: string;
    prevSlide: string;
    nextSlide: string;
    indexLabel: string;
    modalProblem: string;
    modalSolution: string;
    modalStack: string;
    modalImpact: string;
  };
  openSource: {
    sectionLabel: string;
    sectionTitle: string;
    title: string;
    description: string;
    morphlingStrong: string;
    descriptionSuffix: string;
    githubRepo: string;
    learnMore: string;
    cards: {
      personal: { description: string; connect: string };
      morphling: { description: string; connect: string };
    };
  };
  footer: {
    sectionLabel: string;
    ctaLine1: string;
    ctaLine2: string;
    emailCopied: string;
    openMailClient: string;
    socialNavLabel: string;
    alumnus: string;
    roleLocation: string;
    copyright: string;
  };
  seo: {
    personJobTitle: string;
    personDescription: string;
    websiteName: string;
    breadcrumbHome: string;
  };
}
