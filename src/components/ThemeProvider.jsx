// src/components/ThemeProvider.jsx
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'mbhub-theme'; // 'light' | 'dark' | 'system'

const ThemeContext = createContext({
  theme: 'system',
  setTheme: (_t) => {},
  toggle: () => {},
});

/** Палитры под наши var(--*) */
const TOKENS = {
  light: {
    '--bg': '#ffffff',
    '--text': '#0b1220',
    '--muted': '#6b7280',
    '--border': '#e5e7eb',
    '--card': '#ffffff',

    '--primary': '#2563eb',            // синий
    '--primary-contrast': '#ffffff',

    '--accent': '#ff3b30',             // красный (вместо оранжевого)
    '--accent-bg': 'rgba(255,59,48,0.12)',
  },
  dark: {
    '--bg': '#0b1220',
    '--text': '#e5e7eb',
    '--muted': '#94a3b8',
    '--border': '#334155',
    '--card': '#0f172a',

    '--primary': '#3b82f6',
    '--primary-contrast': '#ffffff',

    '--accent': '#ff3b30',
    '--accent-bg': 'rgba(255,59,48,0.18)',
  },
};

function applyTokens(mode /* 'light' | 'dark' */) {
  const root = document.documentElement;
  const palette = TOKENS[mode];
  if (!palette) return;
  Object.entries(palette).forEach(([k, v]) => root.style.setProperty(k, v));
  root.setAttribute('data-theme', mode);
  root.style.setProperty('color-scheme', mode === 'dark' ? 'dark' : 'light');
}

/** Вычисляем активный режим с учётом 'system' */
function getActiveMode(themePref) {
  if (themePref === 'dark') return 'dark';
  if (themePref === 'light') return 'light';
  // system
  const mql = window.matchMedia?.('(prefers-color-scheme: dark)');
  return mql && mql.matches ? 'dark' : 'light';
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) || 'system';
    } catch {
      return 'system';
    }
  });

  // Применяем тему при изменении предпочтения
  useEffect(() => {
    const mode = getActiveMode(theme);
    applyTokens(mode);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {}
  }, [theme]);

  // Реагируем на смену системной темы, если выбран режим 'system'
  useEffect(() => {
    const mql = window.matchMedia?.('(prefers-color-scheme: dark)');
    if (!mql) return;
    const onChange = () => {
      if (theme === 'system') applyTokens(getActiveMode('system'));
    };
    mql.addEventListener?.('change', onChange);
    return () => mql.removeEventListener?.('change', onChange);
  }, [theme]);

  // Быстрое переключение одной кнопкой (между light/dark)
  const toggle = useMemo(
    () => () => setTheme((t) => (getActiveMode(t) === 'dark' ? 'light' : 'dark')),
    []
  );

  const value = useMemo(() => ({ theme, setTheme, toggle }), [theme, toggle]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
