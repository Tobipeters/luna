"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import SectionLabel from "@/components/ui/SectionLabel";

const CAPABILITIES = [
  "Technology Procurement",
  "Workforce Solutions",
  "Technology Advisory",
  "Managed Technology Operations",
  "Other",
] as const;

const COMPANY_EMAIL = "info@lunadigitalservices.com";
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${COMPANY_EMAIL}`;

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useReveal<HTMLElement>();
  const submittedTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (submittedTimerRef.current) {
        clearTimeout(submittedTimerRef.current);
      }
    };
  }, []);

  const scheduleSubmittedReset = () => {
    if (submittedTimerRef.current) {
      clearTimeout(submittedTimerRef.current);
    }

    submittedTimerRef.current = setTimeout(() => {
      setSubmitted(false);
      submittedTimerRef.current = null;
    }, 5000);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    if (formData.get("_honey")) {
      setSubmitted(true);
      scheduleSubmittedReset();
      return;
    }

    const contactDetails = {
      fullName: formData.get("firstName"),
      organization: formData.get("organization"),
      email: formData.get("email"),
      capabilityNeeded: formData.get("capabilityNeeded"),
      message: formData.get("message"),
    };

    console.log("Contact details:", contactDetails);

    try {
      setIsSubmitting(true);

      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`FormSubmit request failed: ${response.status}`);
      }

      setSubmitted(true);
      scheduleSubmittedReset();
    } catch (error) {
      console.error("Unable to submit contact form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <SectionLabel variant="on-dark" className="reveal">
            Get in touch
          </SectionLabel>
          <h2 className="reveal d1">Speak with our team</h2>
          <p className="lead on-dark reveal d2">
            Tell us what your organization needs to procure, build, or deploy.
            We respond within one business day.
          </p>

          {/* Email */}
          <address className="ci reveal d2" style={{ fontStyle: "normal" }}>
            <div className="ci-ico" aria-hidden="true">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div>
              <p className="ci-k">Email</p>
              <a className="ci-v" href={`mailto:${COMPANY_EMAIL}`}>
                {COMPANY_EMAIL}
              </a>
            </div>
          </address>

          {/* Phone */}
          <address className="ci reveal d3" style={{ fontStyle: "normal" }}>
            <div className="ci-ico" aria-hidden="true">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <p className="ci-k">Phone</p>
              <a className="ci-v" href="tel:+2348169359741">
                +234 816 935 9741
              </a>
            </div>
          </address>

          {/* Office */}
          <address className="ci reveal d4" style={{ fontStyle: "normal" }}>
            <div className="ci-ico" aria-hidden="true">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <p className="ci-k">Office</p>
              <p className="ci-v">
                5, The Rock Drive, Trocadero Square,
                <br />
                Lekki Phase 1, Lagos, Nigeria
              </p>
            </div>
          </address>
        </div>

        {/* Right column — contact form */}
        <div className="reveal d1">
          <div className="form-card">
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="_honey"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ display: "none" }}
                />
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_subject"
                  value="New contact form submission - Luna Digital Services"
                />
                <input type="hidden" name="_template" value="table" />
                <div className="fg">
                  <label htmlFor="firstName">Full Name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="e.g. Adaeze Okafor"
                    required
                  />
                </div>
                <div className="fg">
                  <label htmlFor="organization">Organization</label>
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    placeholder="Company name"
                  />
                </div>
                <div className="fg">
                  <label htmlFor="email">Work Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    required
                  />
                </div>
                <div className="fg">
                  <label htmlFor="capabilityNeeded">Capability Needed</label>
                  <select
                    id="capabilityNeeded"
                    name="capabilityNeeded"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a capability…
                    </option>
                    {CAPABILITIES.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div className="fg">
                  <label htmlFor="message">How can we help?</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your requirement…"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-send"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            ) : (
              <p className="form-ok" style={{ display: "block" }}>
                Thank you. We&apos;ll be in touch within one business day.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
