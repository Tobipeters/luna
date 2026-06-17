/**
 * metadata.capabilities.ts
 *
 * SEO metadata for the Capabilities section.
 *
 * USAGE — two patterns depending on your routing setup:
 *
 * ① Single-page app (current) — imported and merged in metadata.page.ts
 *
 * ② Dedicated route — export directly from the route file:
 *     // src/app/capabilities/page.tsx
 *     export { capabilitiesMetadata as metadata } from '@/lib/metadata.capabilities';
 */

import type { Metadata } from 'next';
import { siteConfig } from './siteConfig';

const SECTION_PATH = '/#capabilities';
const CANONICAL    = `${siteConfig.url}${SECTION_PATH}`;
const OG           = siteConfig.images.capabilities;

export const capabilitiesMetadata: Metadata = {
  title: {
    default:  'Capabilities | Luna Digital Services',
    template: '%s | Capabilities | Luna Digital Services',
  },

  description:
    'Four enterprise capabilities under one partner: Technology Procurement, Workforce Solutions, Technology Advisory, and Managed Technology Operations across Africa.',

  keywords: [
    'technology procurement Nigeria',
    'enterprise IT procurement Africa',
    'workforce solutions Lagos',
    'technical recruitment Nigeria',
    'technology advisory Africa',
    'managed IT operations Nigeria',
    'hardware procurement Africa',
    'software licensing Nigeria',
    'FX vendor payments technology',
    'Luna Digital Services capabilities',
  ],

  alternates: { canonical: CANONICAL },
  authors:    [{ name: siteConfig.name, url: siteConfig.url }],
  publisher:   siteConfig.name,
  creator:     siteConfig.name,

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
      'Four Enterprise Capabilities. One Technology Partner. | Luna Digital Services',
    description:
      'From hardware procurement and FX payments to technical recruitment, cloud advisory, and managed operations — Luna Digital Services delivers end-to-end technology execution at enterprise scale across Africa.',
    images: [OG, siteConfig.images.default],
  },

  twitter: {
    card:        'summary_large_image',
    site:         siteConfig.twitterHandle,
    creator:      siteConfig.twitterHandle,
    title:
      'Four Enterprise Capabilities. One Technology Partner. | Luna Digital Services',
    description:
      'Technology Procurement, Workforce Solutions, Technology Advisory, and Managed Operations — executed at enterprise scale across Africa.',
    images: [OG.url],
  },

  category: 'Technology Services',
};
