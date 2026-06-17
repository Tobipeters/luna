'use client';

import { useReveal } from '@/hooks/useReveal';

interface Metric {
  value: string;
  label: string;
  /** Apply gradient text treatment */
  grad?: boolean;
}

const METRICS: Metric[] = [
  { value: '3,000+', label: 'Devices procured for a single enterprise',   grad: true  },
  { value: '1,000+', label: 'Technical professionals in our talent pool',  grad: false },
  { value: '200+',   label: 'Roles filled for a single client',            grad: true  },
  { value: '$500K+', label: 'In FX & vendor payments processed',           grad: false },
];

export default function MetricsSection() {
  const sectionRef = useReveal<HTMLDivElement>();

  return (
    <div className="metrics" aria-label="Key metrics" ref={sectionRef}>
      <dl className="wrap metrics-grid">
        {METRICS.map((m, i) => (
          <div key={m.label} className={`metric reveal${i > 0 ? ` d${i}` : ''}`}>
            <dt className={`mnum${m.grad ? ' grad' : ''}`}>{m.value}</dt>
            <dd className="mlbl">{m.label}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
