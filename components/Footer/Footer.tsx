import Link from 'next/link';

const CAPABILITIES_LINKS = [
  { label: 'Technology Procurement', href: '#capabilities' },
  { label: 'Workforce Solutions',    href: '#capabilities' },
  { label: 'Technology Advisory',    href: '#capabilities' },
  { label: 'Managed Operations',     href: '#capabilities' },
];

const COMPANY_LINKS = [
  { label: 'Industries',   href: '#industries' },
  { label: 'Case Studies', href: '#cases'      },
  { label: 'Clients',      href: '#clients'    },
  { label: 'Contact',      href: '#contact'    },
];

const CONTACT_LINKS = [
  { label: 'info@lunadigitalservices.com', href: 'mailto:info@lunadigitalservices.com' },
  { label: '+234 816 935 9741',            href: 'tel:+2348169359741'                 },
  { label: 'lunadigitalservices.com',      href: 'https://www.lunadigitalservices.com', external: true },
];

export default function Footer() {
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="wrap">
        <div className="footer-top">
          {/* Brand column */}
          <div className="footer-brand">
            <img src="/assets/logo-on-dark.png" alt="Luna Digital Services" />
            <p>
              A technology solutions company: procurement, workforce, advisory, and managed
              operations for organizations across Africa and beyond.
            </p>
            <address className="footer-addr" style={{ fontStyle: 'normal' }}>
              5, The Rock Drive, Trocadero Square<br />
              Lekki Phase 1, Lagos, Nigeria · Est. 2022
            </address>
          </div>

          {/* Capabilities column */}
          <nav className="footer-col" aria-label="Capabilities links">
            <h5>Capabilities</h5>
            <ul>
              {CAPABILITIES_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company column */}
          <nav className="footer-col" aria-label="Company links">
            <h5>Company</h5>
            <ul>
              {COMPANY_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact column */}
          <address className="footer-col" style={{ fontStyle: 'normal' }} aria-label="Contact information">
            <h5>Contact</h5>
            <ul>
              {CONTACT_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </address>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Luna Digital Services. All rights reserved.</p>
          <p>Lagos, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
