'use client';

import { useReveal } from '@/hooks/useReveal'; 
import SectionLabel from '@/components/ui/SectionLabel';

interface Pill {
  label: string;
}

interface SupportingCard {
  num: string;
  title: string;
  description: string;
  image: string;
}

const FEATURE_PILLS: Pill[] = [
  { label: 'Hardware & Devices'   },
  { label: 'Software Licensing'   },
  { label: 'Power Solutions'      },
  { label: 'FX & Vendor Payments' },
  { label: 'IT Support & Repairs' },
];

const SUPPORTING_CARDS: SupportingCard[] = [
  {
    num: '02',
    title: 'Workforce Solutions',
    description:
      'Technical recruitment and staffing across 30+ roles, backed by a 1,000+ candidate talent pool. Optional managed talent: payroll, benefits, and administration.',
    image: '/uploads/Technology Recruitment 2.jpg',
  },
  {
    num: '03',
    title: 'Technology Advisory',
    description:
      'Strategic guidance on emerging technologies, cloud operations, and infrastructure, helping you invest with clarity and confidence.',
    image: '/uploads/TECHNOLOGY CONSULTING 3.jpg',
  },
  {
    num: '04',
    title: 'Managed Technology Operations',
    description:
      'Deployment, IT support, and operational continuity, keeping business-critical systems running across your organization.',
    image: '/uploads/TECHNOLOGY CONSULTING 1.jpg',
  },
];

export default function CapabilitiesSection() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section
      className="cap-section sec"
      id="capabilities"
      aria-label="Capabilities"
      ref={sectionRef}
    >
      <div className="wrap">
        {/* Heading */}
        <header className="sec-head">
          <SectionLabel variant="on-light" className="reveal">
            Capabilities
          </SectionLabel>
          <h2 className="h2 dark reveal d1">
            Four capabilities.<br />One technology partner.
          </h2>
        </header>

        {/* Featured capability */}
        <article className="cap-feature reveal">
          <div className="cap-feature-img">
            <img
              src="/uploads/1.1.jpg"
              alt="Technology Procurement"
              style={{ objectPosition: 'center 30%' }}
            />
          </div>
          <div className="cap-feature-body">
            <p className="cap-tag">Lead Capability</p>
            <h3>Technology Procurement</h3>
            <p>
              Enterprise sourcing and supply chain execution. We procure hardware and devices,
              software licensing, and power solutions, and manage FX and vendor payments, at scale
              and on schedule.
            </p>
            <ul className="cap-pills" aria-label="Procurement sub-services">
              {FEATURE_PILLS.map((p) => (
                <li key={p.label} className="cap-pill">{p.label}</li>
              ))}
            </ul>
          </div>
        </article>

        {/* Supporting capabilities */}
        <ul className="cap-grid" aria-label="Additional capabilities">
          {SUPPORTING_CARDS.map((card, i) => (
            <li key={card.num} className={`cap-card reveal${i > 0 ? ` d${i}` : ''}`}>
              <div className="cap-card-img">
                <img src={card.image} alt={card.title} />
              </div>
              <div className="cap-card-body">
                <p className="num" aria-label={`Capability ${card.num}`}>{card.num}</p>
                <h4>{card.title}</h4>
                <p>{card.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
