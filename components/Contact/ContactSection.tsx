'use client';

import { FormEvent, useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import SectionLabel from '@/components/ui/SectionLabel';

const CAPABILITIES = [
  'Technology Procurement',
  'Workforce Solutions',
  'Technology Advisory',
  'Managed Technology Operations',
  'Other',
] as const;

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useReveal<HTMLElement>();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      className="contact sec"
      id="contact"
      aria-label="Contact us"
      ref={sectionRef}
    >
      <div className="wrap contact-grid">
        {/* Left column — intro & contact details */}
        <div className="contact-left">
          <SectionLabel variant="on-dark" className="reveal">Get in touch</SectionLabel>
          <h2 className="reveal d1">Speak with our team</h2>
          <p className="lead on-dark reveal d2">
            Tell us what your organization needs to procure, build, or deploy.
            We respond within one business day.
          </p>

          {/* Email */}
          <address className="ci reveal d2" style={{ fontStyle: 'normal' }}>
            <div className="ci-ico" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
            <div>
              <p className="ci-k">Email</p>
              <a className="ci-v" href="mailto:info@lunadigitalservices.com">
                info@lunadigitalservices.com
              </a>
            </div>
          </address>

          {/* Phone */}
          <address className="ci reveal d3" style={{ fontStyle: 'normal' }}>
            <div className="ci-ico" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div>
              <p className="ci-k">Phone</p>
              <a className="ci-v" href="tel:+2348169359741">+234 816 935 9741</a>
            </div>
          </address>

          {/* Office */}
          <address className="ci reveal d4" style={{ fontStyle: 'normal' }}>
            <div className="ci-ico" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div>
              <p className="ci-k">Office</p>
              <p className="ci-v">
                5, The Rock Drive, Trocadero Square,<br />
                Lekki Phase 1, Lagos, Nigeria
              </p>
            </div>
          </address>
        </div>

        {/* Right column — contact form */}
        <div className="reveal d1">
          <div className="form-card">
            {!submitted ? (
              <form onSubmit={handleSubmit} noValidate>
                <div className="fg">
                  <label htmlFor="fname">Full Name</label>
                  <input id="fname" type="text" placeholder="e.g. Adaeze Okafor" required />
                </div>
                <div className="fg">
                  <label htmlFor="forg">Organization</label>
                  <input id="forg" type="text" placeholder="Company name" />
                </div>
                <div className="fg">
                  <label htmlFor="femail">Work Email</label>
                  <input id="femail" type="email" placeholder="you@company.com" required />
                </div>
                <div className="fg">
                  <label htmlFor="fcap">Capability Needed</label>
                  <select id="fcap" defaultValue="">
                    <option value="" disabled>Select a capability…</option>
                    {CAPABILITIES.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div className="fg">
                  <label htmlFor="fmsg">How can we help?</label>
                  <textarea id="fmsg" placeholder="Tell us about your requirement…" />
                </div>
                <button type="submit" className="btn-send">Send Message</button>
              </form>
            ) : (
              <p className="form-ok" style={{ display: 'block' }}>
                Thank you. We&apos;ll be in touch within one business day.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
