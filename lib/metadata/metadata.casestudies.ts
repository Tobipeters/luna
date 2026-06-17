/**
 * metadata.casestudies.ts
 *
 * SEO metadata for the Case Studies section.
 *
 * Signal priorities:
 *  - Named clients (AB InBev, International Breweries, Sunbeth Global, BeerTech)
 *    are strong keyword signals — potential clients search for them
 *  - Outcome numbers (3,000+, 200+, ₦100M+) anchor the description
 *  - "Proof" intent queries: "technology procurement case study Nigeria"
 */

import type { Metadata } from 'next';
import { siteConfig } from './siteConfig';

const SECTION_PATH = '/#cases';
const CANONICAL    = `${siteConfig.url}${SECTION_PATH}`;
const OG           = siteConfig.images.caseStudies;

export const caseStudiesMetadata: Metadata = {
  title: 'Case Studies — Enterprise Technology at Scale | Luna Digital Services',

  // Named clients + outcome numbers in the description = high-intent result
  description:
    'How Luna Digital Services supplied 3,000+ devices to International Breweries (AB InBev), placed 200+ professionals for BeerTech, and delivered ₦100M+ in gadgets for Sunbeth Global Concepts.',

  keywords: [
    'International Breweries technology procurement',
    'AB InBev IT supplier Nigeria',
    'BeerTech workforce solutions',
    'Sunbeth Global Concepts technology',
    'enterprise procurement case study Nigeria',
    'technology supplier Africa case study',
    'bulk laptop procurement Nigeria',
    'technical recruitment Nigeria case study',
    'Luna Digital Services clients',
    'enterprise IT delivery Africa',
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
      'Enterprise Technology Delivery at Scale | Case Studies | Luna Digital Services',
    description:
      '3,000+ devices for International Breweries PLC (AB InBev) · 200+ professionals placed for BeerTech · ₦100M+ in technology supplied for Sunbeth Global Concepts. Real results, at enterprise scale.',
    images: [OG, siteConfig.images.default],
  },

  twitter: {
    card:        'summary_large_image',
    site:         siteConfig.twitterHandle,
    creator:      siteConfig.twitterHandle,
    title:
      'Enterprise Technology Delivery at Scale | Luna Digital Services',
    description:
      '3,000+ devices for AB InBev · 200+ professionals placed for BeerTech · ₦100M+ in gadgets for Sunbeth Global. See how we execute at enterprise scale.',
    images: [OG.url],
  },

  category: 'Technology Services',
};
