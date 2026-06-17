/**
 * metadata.industries.ts
 *
 * SEO metadata for the Industries section.
 *
 * Signal priorities:
 *  - Sector-specific keywords (each vertical gets its own keyword cluster)
 *  - Demonstrates breadth of client portfolio
 *  - Captures "technology for [industry]" intent queries
 */

import type { Metadata } from 'next';
import { siteConfig } from './siteConfig';

const SECTION_PATH = '/#industries';
const CANONICAL    = `${siteConfig.url}${SECTION_PATH}`;

// No dedicated photo for this section yet — workforce image reads as broadly enterprise
const OG = siteConfig.images.workforce;

export const industriesMetadata: Metadata = {
  title: 'Industries We Support | Luna Digital Services',

  // Comma-separated industry list reads naturally and feeds Google's NLP
  description:
    'Luna Digital Services delivers technology procurement, workforce, and managed operations across Financial Services, Telecommunications, Healthcare, Education, Energy, and the Public Sector in Africa.',

  keywords: [
    // Financial Services
    'fintech technology procurement Nigeria',
    'bank IT procurement Lagos',
    'financial services technology partner Africa',
    // Telecoms
    'telecom technology solutions Nigeria',
    'telecommunications IT procurement Africa',
    // Healthcare
    'healthcare technology solutions Nigeria',
    'hospital IT procurement Africa',
    // Education
    'edtech procurement Nigeria',
    'school IT solutions Africa',
    // Energy
    'energy sector technology Nigeria',
    'oil gas IT procurement Africa',
    // Public Sector
    'government IT procurement Nigeria',
    'public sector technology partner Africa',
    // Broad
    'Luna Digital Services industries',
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
      'Technology Solutions Across 6 Industries in Africa | Luna Digital Services',
    description:
      'From financial services and telecom to healthcare, education, energy, and the public sector — Luna Digital Services delivers enterprise technology solutions across Africa\'s most critical industries.',
    images: [OG, siteConfig.images.default],
  },

  twitter: {
    card:        'summary_large_image',
    site:         siteConfig.twitterHandle,
    creator:      siteConfig.twitterHandle,
    title:
      'Technology Solutions Across 6 Industries | Luna Digital Services',
    description:
      'Financial Services · Telecoms · Healthcare · Education · Energy · Public Sector. Enterprise technology procurement and workforce solutions across Africa.',
    images: [OG.url],
  },

  category: 'Technology Services',
};
