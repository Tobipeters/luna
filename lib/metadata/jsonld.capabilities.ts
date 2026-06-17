/**
 * jsonld.capabilities.ts
 *
 * JSON-LD structured data (Schema.org) for the Capabilities section.
 * Renders as a <script type="application/ld+json"> in the page <head>.
 *
 * USAGE:
 *   // src/app/page.tsx  (or src/app/capabilities/page.tsx)
 *   import { capabilitiesJsonLd } from '@/lib/jsonld.capabilities';
 *
 *   export default function Page() {
 *     return (
 *       <>
 *         <script
 *           type="application/ld+json"
 *           dangerouslySetInnerHTML={{ __html: JSON.stringify(capabilitiesJsonLd) }}
 *         />
 *         <CapabilitiesSection />
 *       </>
 *     );
 *   }
 */

import { siteConfig } from './siteConfig';

export const capabilitiesJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    // ── Organization ──────────────────────────────────────────────────────
    {
      '@type':       'Organization',
      '@id':         `${siteConfig.url}/#organization`,
      name:           siteConfig.name,
      url:            siteConfig.url,
      logo: {
        '@type':      'ImageObject',
        url:         `${siteConfig.url}/assets/logo-on-dark.png`,
      },
      contactPoint: {
        '@type':          'ContactPoint',
        telephone:         siteConfig.contact.phone,
        email:             siteConfig.contact.email,
        contactType:      'customer service',
        areaServed:       'NG',
        availableLanguage: 'English',
      },
      address: {
        '@type':           'PostalAddress',
        ...siteConfig.address,
      },
      sameAs: [siteConfig.url],
    },

    // ── Service: Technology Procurement ───────────────────────────────────
    {
      '@type':       'Service',
      '@id':         `${siteConfig.url}/#service-procurement`,
      name:          'Technology Procurement',
      serviceType:   'Enterprise Technology Procurement',
      provider:      { '@id': `${siteConfig.url}/#organization` },
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
          '@type':    'Offer',
          position:   i + 1,
          itemOffered: { '@type': 'Service', name },
        })),
      },
    },

    // ── Service: Workforce Solutions ─────────────────────────────────────
    {
      '@type':       'Service',
      '@id':         `${siteConfig.url}/#service-workforce`,
      name:          'Workforce Solutions',
      serviceType:   'Technical Recruitment & Staffing',
      provider:      { '@id': `${siteConfig.url}/#organization` },
      areaServed:    { '@type': 'Continent', name: 'Africa' },
      description:
        'Technical recruitment and staffing across 30+ roles, backed by a 1,000+ candidate talent pool, with optional managed talent including payroll and benefits.',
    },

    // ── Service: Technology Advisory ─────────────────────────────────────
    {
      '@type':       'Service',
      '@id':         `${siteConfig.url}/#service-advisory`,
      name:          'Technology Advisory',
      serviceType:   'IT Consulting & Advisory',
      provider:      { '@id': `${siteConfig.url}/#organization` },
      areaServed:    { '@type': 'Continent', name: 'Africa' },
      description:
        'Strategic guidance on emerging technologies, cloud operations, and infrastructure to help organizations invest with clarity and confidence.',
    },

    // ── Service: Managed Technology Operations ────────────────────────────
    {
      '@type':       'Service',
      '@id':         `${siteConfig.url}/#service-managed-ops`,
      name:          'Managed Technology Operations',
      serviceType:   'Managed IT Services',
      provider:      { '@id': `${siteConfig.url}/#organization` },
      areaServed:    { '@type': 'Continent', name: 'Africa' },
      description:
        'Deployment, IT support, and operational continuity — keeping business-critical systems running across your organization.',
    },

    // ── WebPage ───────────────────────────────────────────────────────────
    {
      '@type':        'WebPage',
      '@id':          `${siteConfig.url}/#capabilities`,
      url:            `${siteConfig.url}/#capabilities`,
      name:           'Capabilities | Luna Digital Services',
      description:
        'Four enterprise capabilities — Technology Procurement, Workforce Solutions, Technology Advisory, and Managed Technology Operations.',
      isPartOf:       { '@id': `${siteConfig.url}/#website` },
      about:          [
        { '@id': `${siteConfig.url}/#service-procurement`  },
        { '@id': `${siteConfig.url}/#service-workforce`    },
        { '@id': `${siteConfig.url}/#service-advisory`     },
        { '@id': `${siteConfig.url}/#service-managed-ops`  },
      ],
      primaryImageOfPage: {
        '@type':  'ImageObject',
        url:     `${siteConfig.url}/uploads/1.1.jpg`,
        width:    1200,
        height:   800,
      },
    },
  ],
};
