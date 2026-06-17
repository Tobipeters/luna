/**
 * metadata.contact.ts
 *
 * SEO metadata for the Contact section.
 *
 * Signal priorities:
 *  - Local SEO: Lekki, Lagos, Nigeria → "near me" + geo queries
 *  - High-intent bottom-of-funnel copy ("speak with", "get in touch")
 *  - Full NAP (Name, Address, Phone) for Google Business / Local Pack
 *  - openGraph.type = 'website' (no ContactPage OG type, use WebPage JSON-LD instead)
 */

import type { Metadata } from 'next';
import { siteConfig } from './siteConfig';

const SECTION_PATH = '/#contact';
const CANONICAL    = `${siteConfig.url}${SECTION_PATH}`;
const OG           = siteConfig.images.contact;

export const contactMetadata: Metadata = {
  title: 'Contact Us — Speak With Our Team | Luna Digital Services',

  // Includes NAP fragments for local SEO; stays under 160 chars
  description:
    'Get in touch with Luna Digital Services in Lekki Phase 1, Lagos, Nigeria. Call +234 816 935 9741 or email info@lunadigitalservices.com. We respond within one business day.',

  keywords: [
    'contact Luna Digital Services',
    'technology company Lekki Lagos',
    'IT procurement company Lagos contact',
    'enterprise technology partner Nigeria contact',
    'Luna Digital Services phone number',
    'Luna Digital Services email',
    'technology services Lagos contact',
    'Lekki Phase 1 technology company',
  ],

  alternates: { canonical: CANONICAL },
  authors:    [{ name: siteConfig.name, url: siteConfig.url }],
  publisher:   siteConfig.name,

  robots: {
    index:  true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },

  openGraph: {
    type:        'website',
    url:          CANONICAL,
    siteName:     siteConfig.name,
    locale:       siteConfig.locale,
    title:
      'Speak With the Luna Digital Services Team | Lagos, Nigeria',
    description:
      'Tell us what your organization needs to procure, build, or deploy. We respond within one business day. Located at Lekki Phase 1, Lagos.',
    images: [OG, siteConfig.images.default],
  },

  twitter: {
    card:        'summary_large_image',
    site:         siteConfig.twitterHandle,
    creator:      siteConfig.twitterHandle,
    title:
      'Speak With the Luna Digital Services Team | Lagos, Nigeria',
    description:
      'Procurement, workforce, advisory, or managed operations — tell us what you need and we\'ll respond within one business day.',
    images: [OG.url],
  },

  category: 'Technology Services',
};
