'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const SLIDE_LABELS = [
  'Technology Leadership',
  'Procurement at Scale',
  'Data Center Operations',
  'Technology Deployment',
  'Brand Visual',
];

const SLIDE_DUR = 7000;

interface Slide {
  type: 'image' | 'video';
  src: string;
  /** CSS background-position override for image slides */
  bgPosition?: string;
  alt?: string;
}

const SLIDES: Slide[] = [
  { type: 'image', src: '/uploads/1.1.jpg',   bgPosition: 'center 30%' },
  { type: 'image', src: '/uploads/2.1.jpg',   bgPosition: 'center' },
  { type: 'video', src: '/uploads/Servers.mp4' },
  { type: 'video', src: '/uploads/Tech 2.mp4' },
  { type: 'video', src: '/uploads/hf_20260328_065045_c44942da-53c6-4804-b734-f9e07fc22e08.mp4' },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const timerRef  = useRef<ReturnType<typeof setTimeout> | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const goSlide = useCallback((index: number) => {
    const next = ((index % SLIDES.length) + SLIDES.length) % SLIDES.length;

    // Pause outgoing video
    const outVid = videoRefs.current[current];
    if (outVid) outVid.pause();

    setCurrent(next);

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => goSlide(next + 1), SLIDE_DUR);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  // Play incoming video whenever `current` changes
  useEffect(() => {
    const vid = videoRefs.current[current];
    if (vid) { vid.currentTime = 0; vid.play().catch(() => {}); }
  }, [current]);

  // Start auto-advance
  useEffect(() => {
    timerRef.current = setTimeout(() => goSlide(1), SLIDE_DUR);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="hero" id="home" aria-label="Hero">
      {/* ── Carousel background ── */}
      <div className="hero-carousel" aria-hidden="true">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className={`hslide${i === current ? ' active' : ''}`}
            data-index={i}
          >
            {slide.type === 'image' ? (
              <div
                className="hslide-bg"
                style={{ backgroundImage: `url('${slide.src}')`, backgroundPosition: slide.bgPosition }}
              />
            ) : (
              <video
                ref={(el) => { videoRefs.current[i] = el; }}
                muted
                playsInline
              >
                <source src={slide.src} type="video/mp4" />
              </video>
            )}
          </div>
        ))}
        <div className="hslide-scrim" />
        <div className="hslide-scrim-b" />
      </div>

      {/* ── Copy ── */}
      <div className="hero-inner">
        <p className="eyebrow">Enterprise Technology Partner</p>
        <h1>
          Enterprise technology procurement &amp;{' '}
          <span className="lt">workforce solutions</span>
        </h1>
        <p className="hero-sub">
          We help organizations source technology, build technical teams, and execute
          infrastructure operations at scale, across Africa and beyond.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary">
            Speak With Our Team
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#capabilities" className="btn-line">View Capabilities</a>
        </div>
        <p className="hero-trust">
          Trusted by{' '}
          <strong>International Breweries (AB InBev)</strong>,{' '}
          <strong>Sahara Group</strong>,{' '}
          <strong>OPay</strong>,{' '}
          <strong>Sunbeth Global</strong> and leading enterprises.
        </p>
      </div>

      {/* ── Carousel nav ── */}
      <div className="carousel-nav" aria-label="Slide controls">
        <div className="cnav-info" aria-live="polite">
          <span className="cnav-num">
            {String(current + 1).padStart(2, '0')} / 0{SLIDES.length}
          </span>
          <span className="cnav-label">{SLIDE_LABELS[current]}</span>
        </div>

        <div className="cnav-dots" role="tablist" aria-label="Slides">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`cnav-dot${i === current ? ' active' : ''}`}
              onClick={() => goSlide(i)}
              aria-label={`Slide ${i + 1}: ${SLIDE_LABELS[i]}`}
              aria-selected={i === current}
              role="tab"
              type="button"
            />
          ))}
        </div>

        <div className="cnav-arrows">
          <button className="cnav-btn" onClick={() => goSlide(current - 1)} aria-label="Previous slide" type="button">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button className="cnav-btn" onClick={() => goSlide(current + 1)} aria-label="Next slide" type="button">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
