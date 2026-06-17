'use client';

import { useReveal } from '@/hooks/useReveal';
import SectionLabel from '@/components/ui/SectionLabel';

interface Industry {
  label: string;
  icon: React.ReactNode;
}

// SVG paths kept as JSX; each icon uses the same 22×22 viewport
const INDUSTRIES: Industry[] = [
  {
    label: 'Financial Services',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M7 15h0M7 11h0M12 15h0M12 11h0M17 15h0M17 11h0"/>
      </svg>
    ),
  },
  {
    label: 'Telecommunications',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 20V8a2 2 0 0 1 2-2h2V4h8v2h2a2 2 0 0 1 2 2v12"/>
        <path d="M9 22V12h6v10M2 20h20"/>
      </svg>
    ),
  },
  {
    label: 'Healthcare',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
  {
    label: 'Education',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 10 12 5 2 10l10 5 10-5z"/>
        <path d="M6 12v5c0 1 2 3 6 3s6-2 6-3v-5"/>
      </svg>
    ),
  },
  {
    label: 'Energy',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
  },
  {
    label: 'Public Sector',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4M9 9h0M9 13h0M9 17h0"/>
      </svg>
    ),
  },
];

export default function IndustriesSection() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section
      className="ind-section sec"
      id="industries"
      aria-label="Industries we support"
      ref={sectionRef}
    >
      <div className="wrap">
        <header className="sec-head">
          <SectionLabel variant="on-light" className="reveal">Industries</SectionLabel>
          <h2 className="h2 dark reveal d1">Industries we support</h2>
        </header>

        <ul className="ind-grid">
          {INDUSTRIES.map((ind, i) => (
            <li
              key={ind.label}
              className={`ind-card reveal${i % 3 === 1 ? ' d1' : i % 3 === 2 ? ' d2' : ''}`}
            >
              <div className="ind-ico">{ind.icon}</div>
              <span>{ind.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
