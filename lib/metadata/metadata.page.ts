/**
 * metadata.page.ts
 *
 * The SINGLE metadata export consumed by src/app/page.tsx.
 *
 * Strategy for a single-page site:
 *  - <title> and <description> come from `homeMetadata` (brand + trust signals)
 *  - keywords are MERGED across all sections (home → capabilities → industries
 *    → case studies → contact) and de-duplicated
 *  - OG title/description use the capabilities framing (richest content block)
 *  - OG images offer the home hero first, then the default fallback card
 *  - Twitter card mirrors OG
 *
 * When individual sections become their own routes, export the relevant
 * metadata directly from those route files instead of from here.
 */

import type { Metadata } from 'next';
import { siteConfig }         from './siteConfig';
import { homeMetadata }       from './metadata.home';
import { capabilitiesMetadata } from './metadata.capabilities';
import { industriesMetadata } from './metadata.industries';
import { caseStudiesMetadata } from './metadata.casestudies';
import { contactMetadata }    from './metadata.contact';

// ── Merge keywords from all sections, de-duped ────────────────────────────
function mergeKeywords(...sources: Metadata[]): string[] {
  const seen = new Set<string>();
  const result: string[] = [];
  for (const meta of sources) {
    const kws = meta.keywords;
    const list = Array.isArray(kws) ? kws : typeof kws === 'string' ? [kws] : [];
    for (const kw of list) {
      const norm = kw.trim().toLowerCase();
      if (!seen.has(norm)) { seen.add(norm); result.push(kw.trim()); }
    }
  }
  return result;
}

export const pageMetadata: Metadata = {
  // ── Title — brand identity is the anchor for the home page ───────────────
  title: homeMetadata.title,

  // ── Description — home framing with trust signals ────────────────────────
  description: homeMetadata.description,

  // ── Keywords — union of all sections ────────────────────────────────────
  keywords: mergeKeywords(
    homeMetadata,
    capabilitiesMetadata,
    industriesMetadata,
    caseStudiesMetadata,
    contactMetadata,
  ),

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

  // ── Open Graph — capabilities framing (richest content block) ────────────
  openGraph: {
    type:        'website',
    url:          siteConfig.url,
    siteName:     siteConfig.name,
    locale:       siteConfig.locale,
    title:
      'Four Enterprise Capabilities. One Technology Partner. | Luna Digital Services',
    description:
      'Technology Procurement, Workforce Solutions, Technology Advisory, and Managed Operations — executed at enterprise scale across Africa. Trusted by AB InBev, OPay, Sahara Group, and Sunbeth Global.',
    images: [
      siteConfig.images.home,        // hero shot — most visually compelling
      siteConfig.images.capabilities, // procurement shot — capability context
      siteConfig.images.default,      // branded fallback card
    ],
  },

  // ── Twitter — concise, share-optimised ───────────────────────────────────
  twitter: {
    card:        'summary_large_image',
    site:         siteConfig.twitterHandle,
    creator:      siteConfig.twitterHandle,
    title:
      'Enterprise Technology Procurement & Workforce Solutions | Luna Digital Services',
    description:
      'Trusted by International Breweries (AB InBev), OPay, Sahara Group · 3,000+ devices procured · 200+ professionals placed · Based in Lagos, Nigeria.',
    images: [siteConfig.images.home.url],
  },

  category: 'Technology Services',
};
