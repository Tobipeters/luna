'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTheme } from '@/hooks/useTheme';

const NAV_LINKS = [
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Industries',   href: '#industries'   },
  { label: 'Case Studies', href: '#cases'         },
  { label: 'Clients',      href: '#clients'       },
  { label: 'Contact',      href: '#contact'       },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const { toggle } = useTheme();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <nav
        id="mainNav"
        className={`nav${scrolled ? ' scrolled' : ''}`}
        aria-label="Primary navigation"
      >
        {/* Logo */}
        <Link href="#home" className="nav-logo" aria-label="Luna Digital Services home">
          <img className="logo-dark" src="/assets/logo-on-dark.png" alt="Luna Digital Services" />
          <img className="logo-light" src="/assets/logo-on-light.png" alt="Luna Digital Services" />
        </Link>

        {/* Desktop links */}
        <ul className="nav-links" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={toggle}
            aria-label="Toggle light or dark mode"
            type="button"
          >
            {/* Moon — shown in dark mode */}
            <svg className="ic-moon" width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z" />
            </svg>
            {/* Sun — shown in light mode */}
            <svg className="ic-sun" width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
          </button>

          <a href="#contact" className="btn-nav">Speak With Us</a>

          {/* Hamburger — visible on mobile */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <nav
        id="mobileNav"
        className={`mobile-nav${menuOpen ? ' open' : ''}`}
        aria-label="Mobile navigation"
      >
        {NAV_LINKS.map(({ label, href }) => (
          <a key={href} href={href} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
        <a href="#contact" onClick={() => setMenuOpen(false)}>Speak With Us →</a>
      </nav>
    </>
  );
}
