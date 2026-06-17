/**
 * metadata.root.ts
 *
 * Base Metadata exported from layout.tsx — applies as the outermost default.
 * page.tsx overrides this with pageMetadata which merges all section signals.
 *
 * The primary job of this file is to set:
 *  - metadataBase (required for Next.js to resolve relative OG image URLs)
 *  - title.template (so child routes inherit "Page | Luna Digital Services")
 *  - site-wide robots directive
 */

import type { Metadata } from 'next';
import { siteConfig } from './siteConfig';

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default:  `${siteConfig.name}: ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  keywords: [
    'enterprise technology partner Africa',
    'technology procurement Nigeria',
    'IT workforce solutions Lagos',
    'managed technology operations',
    'Luna Digital Services',
  ],

  alternates: { canonical: siteConfig.url },
  authors:    [{ name: siteConfig.name, url: siteConfig.url }],
  publisher:   siteConfig.name,
  creator:     siteConfig.name,

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
    url:          siteConfig.url,
    siteName:     siteConfig.name,
    locale:       siteConfig.locale,
    title:       `${siteConfig.name}: ${siteConfig.tagline}`,
    description:  siteConfig.description,
    images:      [siteConfig.images.default],
  },

  twitter: {
    card:        'summary_large_image',
    site:         siteConfig.twitterHandle,
    creator:      siteConfig.twitterHandle,
    title:       `${siteConfig.name}: ${siteConfig.tagline}`,
    description:  siteConfig.description,
    images:      [siteConfig.images.default.url],
  },
};
