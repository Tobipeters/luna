'use client';

import { useReveal } from '@/hooks/useReveal';
import SectionLabel from '@/components/ui/SectionLabel';

interface WhyItem {
  index: string;
  title: string;
  description: string;
}

const WHY_ITEMS: WhyItem[] = [
  {
    index: '01',
    title: 'Procurement Reliability',
    description:
      'Structured sourcing and disciplined vendor coordination: the right technology, at the right price, delivered on time.',
  },
  {
    index: '02',
    title: 'Operational Execution',
    description:
      'End-to-end deployment, managed to completion: from purchase order through to a working environment.',
  },
  {
    index: '03',
    title: 'Regional Expertise',
    description:
      'Deep understanding of African technology markets, logistics, and the realities of operating at scale.',
  },
  {
    index: '04',
    title: 'Scalable Delivery',
    description:
      'Built to support organizations as they grow, from a single procurement to ongoing technology operations.',
  },
];

export default function WhyPartnerSection() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section
      className="why sec"
      aria-label="Why partner with Luna"
      ref={sectionRef}
    >
      <div className="wrap">
        {/* Header row */}
        <div className="why-top">
          <div>
            <SectionLabel variant="on-light" className="reveal">Why Luna</SectionLabel>
            <h2 className="h2 dark reveal d1">
              Why organizations<br />partner with us
            </h2>
          </div>
          <p className="lead on-light reveal d2">
            We operate as an extension of your technology team: disciplined in sourcing,
            accountable in execution, and built to scale with you over the long term.
          </p>
        </div>

        {/* Reasons grid */}
        <ul className="why-grid" aria-label="Reasons to partner">
          {WHY_ITEMS.map((item, i) => (
            <li
              key={item.index}
              className={`why-item reveal${i % 2 === 1 ? ' d1' : ''}`}
            >
              <p className="why-idx">{item.index}</p>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
