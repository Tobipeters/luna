/**
 * jsonld.site.ts
 *
 * One comprehensive JSON-LD @graph for the entire single-page site.
 * This replaces the per-section jsonld.capabilities.ts and should be the
 * ONLY ld+json script injected into page.tsx.
 *
 * Graph nodes:
 *  - WebSite         → sitelinks searchbox eligibility
 *  - Organization    → knowledge panel signals
 *  - LocalBusiness   → Google Maps / Local Pack eligibility
 *  - WebPage         → page-level context
 *  - Service × 4    → each capability, linked from Organization
 *  - ItemList        → case studies (named clients)
 *  - FAQPage         → "Why Luna" reasons (boosts FAQ rich results)
 */

import { siteConfig } from './siteConfig';

const BASE = siteConfig.url;

export const siteJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [

    // ── 1. WebSite ─────────────────────────────────────────────────────────
    // Enables Google Sitelinks Searchbox in SERPs for branded queries.
    {
      '@type':  'WebSite',
      '@id':    `${BASE}/#website`,
      url:       BASE,
      name:      siteConfig.name,
      description: siteConfig.description,
      publisher: { '@id': `${BASE}/#organization` },
      potentialAction: {
        '@type':       'SearchAction',
        target:        `${BASE}/?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
      inLanguage: 'en-NG',
    },

    // ── 2. Organization ────────────────────────────────────────────────────
    // Powers Google's Knowledge Panel; links all Service nodes.
    {
      '@type':      ['Organization', 'Corporation'],
      '@id':         `${BASE}/#organization`,
      name:           siteConfig.name,
      alternateName: 'Luna Digital',
      url:            BASE,
      foundingDate:   String(siteConfig.foundingYear),
      description:    siteConfig.description,
      logo: {
        '@type':      'ImageObject',
        '@id':        `${BASE}/#logo`,
        url:          `${BASE}/assets/logo-on-dark.png`,
        contentUrl:   `${BASE}/assets/logo-on-dark.png`,
        caption:       siteConfig.name,
      },
      image: { '@id': `${BASE}/#logo` },
      contactPoint: {
        '@type':           'ContactPoint',
        telephone:          siteConfig.contact.phone,
        email:              siteConfig.contact.email,
        contactType:       'customer service',
        areaServed:        ['NG', 'GH', 'KE', 'ZA', 'ET'],
        availableLanguage: 'English',
      },
      address: {
        '@type': 'PostalAddress',
        ...siteConfig.address,
      },
      sameAs: [
        BASE,
        siteConfig.social.linkedin,
        siteConfig.social.twitter,
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name:    'Technology Services',
        itemListElement: [
          { '@id': `${BASE}/#service-procurement`  },
          { '@id': `${BASE}/#service-workforce`    },
          { '@id': `${BASE}/#service-advisory`     },
          { '@id': `${BASE}/#service-managed-ops`  },
        ],
      },
    },

    // ── 3. LocalBusiness ───────────────────────────────────────────────────
    // Local Pack / Google Maps eligibility. Mirrors Organization address.
    {
      '@type':       ['LocalBusiness', 'ProfessionalService'],
      '@id':          `${BASE}/#localbusiness`,
      name:            siteConfig.name,
      url:             BASE,
      telephone:       siteConfig.contact.phone,
      email:           siteConfig.contact.email,
      priceRange:     '₦₦₦',
      currenciesAccepted: 'NGN, USD',
      paymentAccepted:    'Invoice, Bank Transfer',
      openingHours:       'Mo-Fr 08:00-18:00',
      address: {
        '@type': 'PostalAddress',
        ...siteConfig.address,
      },
      geo: {
        '@type':    'GeoCoordinates',
        latitude:   6.4281,
        longitude:  3.4219,
      },
      image: `${BASE}/assets/logo-on-dark.png`,
      sameAs: [BASE],
      parentOrganization: { '@id': `${BASE}/#organization` },
    },

    // ── 4. WebPage ─────────────────────────────────────────────────────────
    {
      '@type':          'WebPage',
      '@id':            `${BASE}/#webpage`,
      url:               BASE,
      name:             `${siteConfig.name}: ${siteConfig.tagline}`,
      description:       siteConfig.description,
      isPartOf:         { '@id': `${BASE}/#website` },
      about:            { '@id': `${BASE}/#organization` },
      primaryImageOfPage: {
        '@type':  'ImageObject',
        url:      siteConfig.images.home.url,
        width:    siteConfig.images.home.width,
        height:   siteConfig.images.home.height,
      },
      speakable: {
        '@type':   'SpeakableSpecification',
        cssSelector: ['h1', '.hero-sub', '.hero-trust'],
      },
      inLanguage: 'en-NG',
    },

    // ── 5a. Service: Technology Procurement ───────────────────────────────
    {
      '@type':       'Service',
      '@id':         `${BASE}/#service-procurement`,
      name:          'Technology Procurement',
      serviceType:   'Enterprise Technology Procurement',
      provider:      { '@id': `${BASE}/#organization` },
      areaServed:    { '@type': 'Continent', name: 'Africa' },
      description:
        'Enterprise sourcing and supply chain execution — hardware, devices, software licensing, power solutions, and FX & vendor payments, at scale and on schedule.',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name:    'Procurement Sub-services',
        itemListElement: [
          'Hardware & Devices',
          'Software Licensing',
          'Power Solutions',
          'FX & Vendor Payments',
          'IT Support & Repairs',
        ].map((name, i) => ({
          '@type':     'Offer',
          position:    i + 1,
          itemOffered: { '@type': 'Service', name },
        })),
      },
      image: siteConfig.images.capabilities.url,
    },

    // ── 5b. Service: Workforce Solutions ──────────────────────────────────
    {
      '@type':       'Service',
      '@id':         `${BASE}/#service-workforce`,
      name:          'Workforce Solutions',
      serviceType:   'Technical Recruitment & Staffing',
      provider:      { '@id': `${BASE}/#organization` },
      areaServed:    { '@type': 'Continent', name: 'Africa' },
      description:
        'Technical recruitment and staffing across 30+ roles, backed by a 1,000+ candidate talent pool, with optional managed talent including payroll and benefits.',
      image: siteConfig.images.workforce.url,
    },

    // ── 5c. Service: Technology Advisory ──────────────────────────────────
    {
      '@type':       'Service',
      '@id':         `${BASE}/#service-advisory`,
      name:          'Technology Advisory',
      serviceType:   'IT Consulting & Strategic Advisory',
      provider:      { '@id': `${BASE}/#organization` },
      areaServed:    { '@type': 'Continent', name: 'Africa' },
      description:
        'Strategic guidance on emerging technologies, cloud operations, and infrastructure — helping organizations invest with clarity and confidence.',
      image: siteConfig.images.advisory.url,
    },

    // ── 5d. Service: Managed Technology Operations ─────────────────────────
    {
      '@type':       'Service',
      '@id':         `${BASE}/#service-managed-ops`,
      name:          'Managed Technology Operations',
      serviceType:   'Managed IT Services',
      provider:      { '@id': `${BASE}/#organization` },
      areaServed:    { '@type': 'Continent', name: 'Africa' },
      description:
        'Deployment, IT support, and operational continuity — keeping business-critical systems running across your organization.',
      image: siteConfig.images.contact.url,
    },

    // ── 6. ItemList: Case Studies ──────────────────────────────────────────
    // Named clients make this eligible for Google's list snippets.
    {
      '@type': 'ItemList',
      '@id':   `${BASE}/#case-studies`,
      name:    'Enterprise Case Studies',
      description:
        'Real-world examples of Luna Digital Services delivering technology procurement, workforce, and managed operations at enterprise scale.',
      numberOfItems: 3,
      itemListElement: [
        {
          '@type':    'ListItem',
          position:   1,
          name:       'International Breweries PLC (AB InBev) — Device Procurement',
          description:
            '3,000+ laptops and computing devices procured and delivered across multiple enterprise sites.',
          url:        `${BASE}/#cases`,
        },
        {
          '@type':    'ListItem',
          position:   2,
          name:       'BeerTech — Technical Workforce Scaling',
          description:
            '200+ technology professionals placed across engineering and product roles.',
          url:        `${BASE}/#cases`,
        },
        {
          '@type':    'ListItem',
          position:   3,
          name:       'Sunbeth Global Concepts PLC — Enterprise Gadget Supply',
          description:
            '₦100M+ in high-value technology gadgets procured with full vendor accountability.',
          url:        `${BASE}/#cases`,
        },
      ],
    },

    // ── 7. FAQPage: Why Luna ───────────────────────────────────────────────
    // FAQ rich results require Q&A pairs. The "Why Luna" section maps perfectly.
    {
      '@type': 'FAQPage',
      '@id':   `${BASE}/#faq`,
      mainEntity: [
        {
          '@type':          'Question',
          name:             'Why should organizations choose Luna Digital Services for technology procurement?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:    'Luna Digital Services offers structured sourcing and disciplined vendor coordination — delivering the right technology, at the right price, on time. Our procurement reliability removes supply-chain risk from enterprise technology projects.',
          },
        },
        {
          '@type':          'Question',
          name:             'How does Luna Digital Services handle end-to-end technology deployment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:    'We manage operational execution from purchase order through to a fully working environment, acting as an extension of your technology team across the entire delivery lifecycle.',
          },
        },
        {
          '@type':          'Question',
          name:             'Does Luna Digital Services understand African technology markets?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:    'Yes. We have deep expertise in African technology markets, logistics, import & FX processes, and the operational realities of procuring and deploying technology at scale across the continent.',
          },
        },
        {
          '@type':          'Question',
          name:             'Can Luna Digital Services scale with our organization as we grow?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:    'Our delivery model is built for scalability — from a single procurement project to ongoing managed technology operations, we adapt to support organizations at every stage of growth.',
          },
        },
      ],
    },

    // ── 8. BreadcrumbList ─────────────────────────────────────────────────
    // Helps Google understand page structure even for a single-page site.
    {
      '@type': 'BreadcrumbList',
      '@id':   `${BASE}/#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',         item: BASE },
        { '@type': 'ListItem', position: 2, name: 'Capabilities', item: `${BASE}/#capabilities` },
        { '@type': 'ListItem', position: 3, name: 'Industries',   item: `${BASE}/#industries`   },
        { '@type': 'ListItem', position: 4, name: 'Case Studies', item: `${BASE}/#cases`        },
        { '@type': 'ListItem', position: 5, name: 'Contact',      item: `${BASE}/#contact`      },
      ],
    },

  ],
};
