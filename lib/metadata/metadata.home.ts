/**
 * metadata.home.ts
 *
 * SEO metadata for the Hero / Home section.
 *
 * Signal priorities for this section:
 *  - Brand identity and positioning ("enterprise technology partner")
 *  - Geographic targeting (Africa, Nigeria, Lagos)
 *  - Trust signals (AB InBev, Sahara Group, OPay, Sunbeth Global)
 *  - Primary CTA intent ("technology procurement partner")
 */

import type { Metadata } from 'next';
import { siteConfig } from './siteConfig';

const CANONICAL = siteConfig.url;
const OG        = siteConfig.images.home;

export const homeMetadata: Metadata = {
  title: {
    default:  `${siteConfig.name}: ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },

  // 150 chars — strong brand statement + geo signal + trust
  description:
    'Luna Digital Services is an enterprise technology partner in Lagos, Nigeria: procurement, workforce, advisory, and managed operations trusted by AB InBev, OPay, and Sahara Group.',

  keywords: [
    'enterprise technology partner Nigeria',
    'technology company Lagos Nigeria',
    'IT solutions provider Africa',
    'technology procurement partner Lagos',
    'enterprise technology services Nigeria',
    'AB InBev technology partner',
    'OPay technology supplier',
    'Sahara Group IT services',
    'Luna Digital Services',
    'technology company Lekki Lagos',
  ],

  alternates: { canonical: CANONICAL },

  authors:   [{ name: siteConfig.name, url: siteConfig.url }],
  publisher:  siteConfig.name,
  creator:    siteConfig.name,

  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:               true,
      follow:              true,
      'max-image-preview': 'large',
      'max-snippet':       -1,
    },
  },

  openGraph: {
    type:        'website',
    url:          CANONICAL,
    siteName:     siteConfig.name,
    locale:       siteConfig.locale,
    // OG title slightly more evocative than the <title> tag for social share
    title:
      'Enterprise Technology Procurement & Workforce Solutions across Africa | Luna Digital Services',
    description:
      'We help organizations source technology, build technical teams, and execute infrastructure operations at scale across Africa. Trusted by International Breweries (AB InBev), OPay, and Sahara Group.',
    images: [OG, siteConfig.images.default],
  },

  twitter: {
    card:        'summary_large_image',
    site:         siteConfig.twitterHandle,
    creator:      siteConfig.twitterHandle,
    title:
      'Enterprise Technology Procurement & Workforce Solutions | Luna Digital Services',
    description:
      'Trusted by AB InBev, OPay, Sahara Group, and Sunbeth Global. Technology procurement, workforce solutions, advisory, and managed operations across Africa.',
    images: [OG.url],
  },

  category: 'Technology Services',
};
