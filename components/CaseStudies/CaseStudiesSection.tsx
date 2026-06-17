'use client';

import { useReveal } from '@/hooks/useReveal';
import SectionLabel from '@/components/ui/SectionLabel';

interface CaseCol {
  key: 'Challenge' | 'Execution' | 'Outcome';
  value: string;
  /** Outcome column gets large number treatment */
  highlight?: string;
}

interface CaseStudy {
  client: string;
  sector: string;
  logo?: { src: string; alt: string };
  columns: CaseCol[];
}

const CASES: CaseStudy[] = [
  {
    client: 'International Breweries PLC',
    sector: 'A part of AB InBev',
    logo: { src: '/uploads/Tech Procurement Services.jpeg', alt: 'International Breweries PLC' },
    columns: [
      { key: 'Challenge', value: 'Equip operations across multiple sites with standardized, reliable computing devices.' },
      { key: 'Execution', value: 'Structured procurement and supply-chain coordination, managed end to end.' },
      { key: 'Outcome',   value: 'laptops & devices supplied.', highlight: '3,000+' },
    ],
  },
  {
    client: 'BeerTech',
    sector: 'Technology · Workforce',
    columns: [
      { key: 'Challenge', value: 'Rapidly scale a specialized technical team to meet growing demand.' },
      { key: 'Execution', value: 'End-to-end recruitment across multiple engineering and product roles.' },
      { key: 'Outcome',   value: 'technology professionals placed.', highlight: '200+' },
    ],
  },
  {
    client: 'Sunbeth Global Concepts PLC',
    sector: 'Enterprise · Procurement',
    logo: { src: '/uploads/Sunbeth Global Concepts.jpeg', alt: 'Sunbeth Global Concepts PLC' },
    columns: [
      { key: 'Challenge', value: 'Source high-value gadgets at scale, reliably and with full accountability.' },
      { key: 'Execution', value: 'Vendor coordination, logistics, and payment handling across the program.' },
      { key: 'Outcome',   value: 'in gadgets supplied.', highlight: '₦100M+' },
    ],
  },
];

export default function CaseStudiesSection() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section
      className="cases sec"
      id="cases"
      aria-label="Case studies"
      ref={sectionRef}
    >
      <div className="wrap">
        <header className="sec-head">
          <SectionLabel variant="on-light" className="reveal">Case Studies</SectionLabel>
          <h2 className="h2 dark reveal d1">Execution at enterprise scale</h2>
        </header>

        {CASES.map((cs) => (
          <article key={cs.client} className="case reveal">
            {/* Client identity */}
            <div className="case-client">
              {cs.logo && (
                <img
                  className="case-logo"
                  src={cs.logo.src}
                  alt={cs.logo.alt}
                />
              )}
              <h3>{cs.client}</h3>
              <p className="case-sector">{cs.sector}</p>
            </div>

            {/* Three columns: Challenge / Execution / Outcome */}
            <dl className="case-cols">
              {cs.columns.map((col) => (
                <div
                  key={col.key}
                  className={`case-col${col.highlight ? ' outcome' : ''}`}
                >
                  <dt className="ck">{col.key}</dt>
                  <dd className="cv">
                    {col.highlight && <span className="big">{col.highlight}</span>}
                    {col.value}
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}
