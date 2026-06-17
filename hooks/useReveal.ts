'use client';

import { useEffect, useRef } from 'react';

/**
 * Attaches an IntersectionObserver to all `.reveal` elements inside
 * the given container ref, adding the `.in` class when they enter
 * the viewport.  Call this once at the top of any client component
 * that renders reveal-animated children.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    root.querySelectorAll<HTMLElement>('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return ref;
}
