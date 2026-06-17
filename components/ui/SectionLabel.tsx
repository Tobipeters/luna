import React from 'react';

interface SectionLabelProps {
  children: React.ReactNode;
  /** 'on-dark' for white/navy backgrounds, 'on-light' for light-mode sections */
  variant?: 'on-dark' | 'on-light';
  className?: string;
}

/**
 * Reusable section eyebrow label — the small uppercase tag with a gradient
 * rule that appears above every section heading.
 */
export default function SectionLabel({
  children,
  variant = 'on-light',
  className = '',
}: SectionLabelProps) {
  return (
    <span className={`lbl ${variant} ${className}`}>{children}</span>
  );
}
