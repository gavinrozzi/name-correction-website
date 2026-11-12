import { useCallback, useEffect, useState } from 'react';

export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'darkMode';

function storedTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'; // build-time prerender
  try {
    return localStorage.getItem(STORAGE_KEY) === 'false' ? 'light' : 'dark';
  } catch {
    return 'dark';
  }
}

/** Dark by default, like the main site. index.html sets the attribute before first paint. */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(storedTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.classList.toggle('dark', theme === 'dark');
    try {
      localStorage.setItem(STORAGE_KEY, String(theme === 'dark'));
    } catch {
      // Storage can be unavailable (private mode); the theme still applies for this visit.
    }
  }, [theme]);

  const toggleTheme = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), []);

  return { theme, toggleTheme };
}
