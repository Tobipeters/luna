'use client';

import { useCallback, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('dark');

  // Sync from the attribute already written by the inline script in layout.tsx
  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme');
    if (current === 'light') setTheme('light');
  }, []);

  const toggle = useCallback(() => {
    const next: Theme = theme === 'light' ? 'dark' : 'light';
    if (next === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    try { localStorage.setItem('luna-theme', next); } catch (_) { /* ignore */ }
    setTheme(next);
  }, [theme]);

  return { theme, toggle };
}
