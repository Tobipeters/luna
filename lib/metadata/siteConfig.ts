/**
 * siteConfig.ts
 * Single source of truth for brand constants.
 * All metadata files, JSON-LD, and OG tags derive from this.
 */

export const siteConfig = {
  name:          'Luna Digital Services',
  tagline:       'Enterprise Technology Procurement & Workforce Solutions',
  url:           'https://www.lunadigitalservices.com',
  foundingYear:  2022,
  locale:        'en_NG',
  // twitterHandle: '@lunadigitalng',
  twitterHandle: '',

  description:
    'Luna Digital Services helps organizations source technology, build technical teams, and execute infrastructure operations at scale across Africa and beyond.',

  // ── Contact & address ────────────────────────────────────────────────────
  contact: {
    email: 'info@lunadigitalservices.com',
    phone: '+2348169359741',
  },
  address: {
    streetAddress:   '5, The Rock Drive, Trocadero Square',
    addressLocality: 'Lekki Phase 1',
    addressRegion:   'Lagos',
    addressCountry:  'NG',
    postalCode:      '105102',
  },

  // ── OG images — one per section, 1200×630 ideal ──────────────────────────
  // Replace with real rendered OG cards (/public/og/*.jpg) before launch.
  // Until then these point to existing upload assets as stand-ins.
  images: {
    /** Site-wide default card */
    default: {
      url:    'https://www.lunadigitalservices.com/og/default.jpg',
      width:  1200,
      height: 630,
      alt:    'Luna Digital Services — Enterprise Technology Partner',
    },
    /** Hero / home */
    home: {
      url:    'https://www.lunadigitalservices.com/uploads/1.1.jpg',
      width:  1200,
      height: 800,
      alt:    'Luna Digital Services — Technology Procurement at Scale',
    },
    /** Capabilities lead shot */
    capabilities: {
      url:    'https://www.lunadigitalservices.com/uploads/1.1.jpg',
      width:  1200,
      height: 800,
      alt:    'Technology Procurement — Luna Digital Services Capabilities',
    },
    /** Workforce / recruitment */
    workforce: {
      url:    'https://www.lunadigitalservices.com/uploads/Technology Recruitment 2.jpg',
      width:  1200,
      height: 800,
      alt:    'Workforce Solutions — Luna Digital Services',
    },
    /** Advisory / consulting */
    advisory: {
      url:    'https://www.lunadigitalservices.com/uploads/TECHNOLOGY CONSULTING 3.jpg',
      width:  1200,
      height: 800,
      alt:    'Technology Advisory — Luna Digital Services',
    },
    /** Case studies — AB InBev procurement shot */
    caseStudies: {
      url:    'https://www.lunadigitalservices.com/uploads/Tech Procurement Services.jpeg',
      width:  1200,
      height: 800,
      alt:    'Enterprise Case Studies — Luna Digital Services',
    },
    /** Contact — managed ops shot */
    contact: {
      url:    'https://www.lunadigitalservices.com/uploads/TECHNOLOGY CONSULTING 1.jpg',
      width:  1200,
      height: 800,
      alt:    'Contact Luna Digital Services — Lagos, Nigeria',
    },
  },

  // ── Social / sameAs ──────────────────────────────────────────────────────
  social: {
    twitter:   'https://twitter.com/lunadigitalng',
    linkedin:  'https://www.linkedin.com/company/lunadigitalservices',
  },
} as const;

/** Convenience type for image entries */
export type SiteImage = typeof siteConfig.images.default;
