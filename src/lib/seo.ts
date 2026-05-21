import { copy } from '../content/copy';
import type { Project } from '../data/projects';

export const SITE_URL = 'https://indraranuh.dev';

const AUTHOR = 'Indra Ranuh';
const EMAIL = 'indraranuh1@gmail.com';
const OG_IMAGE_PATH = '/og.svg';
const THEME_COLOR = '#000000';
const TWITTER_HANDLE = '@idrmrph';
const HTML_LANG = 'id-ID';

export function getCanonicalUrl(pathname = '/'): string {
  const base = SITE_URL.replace(/\/$/, '');
  const normalized = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${base}${normalized}`;
}

export function absoluteUrl(path: string): string {
  const base = SITE_URL.replace(/\/$/, '');
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized}`;
}

export function buildPersonJsonLd(pageUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: AUTHOR,
    url: pageUrl,
    image: absoluteUrl(OG_IMAGE_PATH),
    email: EMAIL,
    jobTitle: copy.seo.personJobTitle,
    description: copy.seo.personDescription,
    knowsAbout: [
      'Enterprise Software Architecture',
      'Laravel',
      'BI-SNAP Banking API',
      'Payment Gateway Integration',
      'Fintech',
    ],
    sameAs: [
      'https://linkedin.com/in/indra-ranuh/',
      'https://github.com/indraranuh-dev',
      'https://github.com/morphling-dev',
      'https://threads.com/@idrmrph',
      'https://instagram.com/@idrmrph',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Indra Ranuh',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Surakarta',
      addressCountry: 'ID',
    },
    inLanguage: HTML_LANG,
  };
}

export function buildWebSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: copy.seo.websiteName,
    url: SITE_URL,
    description: copy.meta.description,
    inLanguage: [HTML_LANG],
    publisher: { '@id': `${SITE_URL}/#person` },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/#projects`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function buildProfilePageJsonLd(pageUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${pageUrl}#profile`,
    url: pageUrl,
    mainEntity: { '@id': `${SITE_URL}/#person` },
    inLanguage: HTML_LANG,
    isPartOf: { '@id': `${SITE_URL}/#website` },
  };
}

export function buildBreadcrumbJsonLd(pageUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: copy.seo.breadcrumbHome,
        item: pageUrl,
      },
    ],
  };
}

export function buildProfessionalServiceJsonLd(pageUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `${AUTHOR} — Enterprise Software Engineering`,
    url: pageUrl,
    description: copy.seo.personDescription,
    areaServed: {
      '@type': 'Country',
      name: 'Indonesia',
    },
    serviceType: [
      'Enterprise System Architecture',
      'SNAP Banking Integration',
      'Payment Gateway Integration',
      'Laravel Development',
    ],
    provider: { '@id': `${SITE_URL}/#person` },
  };
}

export function buildCreativeWorkJsonLd(project: Project) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    url: project.url ?? `${SITE_URL}/#projects`,
    author: { '@id': `${SITE_URL}/#person` },
    inLanguage: HTML_LANG,
    keywords: project.tags.join(', '),
  };
}

export function buildJsonLdGraph(projects: Project[], pathname = '/') {
  const pageUrl = getCanonicalUrl(pathname);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildPersonJsonLd(pageUrl),
      buildWebSiteJsonLd(),
      buildProfilePageJsonLd(pageUrl),
      buildBreadcrumbJsonLd(pageUrl),
      buildProfessionalServiceJsonLd(pageUrl),
      ...projects.map((p) => buildCreativeWorkJsonLd(p)),
    ],
  };
}

export function getOgImageUrl(): string {
  return absoluteUrl(OG_IMAGE_PATH);
}

export const seoConstants = {
  author: AUTHOR,
  email: EMAIL,
  ogImagePath: OG_IMAGE_PATH,
  themeColor: THEME_COLOR,
  twitterHandle: TWITTER_HANDLE,
  siteName: 'Indra Ranuh',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  htmlLang: 'id',
  ogLocale: 'id_ID',
};
