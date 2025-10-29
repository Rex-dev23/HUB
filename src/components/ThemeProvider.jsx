import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const ThemeContext = createContext({ theme: 'system', setTheme: () => {}, toggle: () => {} });

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('mbhub_theme');
    return saved || 'system'; // 'light' | 'dark' | 'system'
  });

  useEffect(() => {
    const root = document.documentElement;
    const apply = (mode) => {
      if (mode === 'light') {
        root.setAttribute('data-theme', 'light');
      } else if (mode === 'dark') {
        root.setAttribute('data-theme', 'dark');
      } else {
        // system
        root.removeAttribute('data-theme'); // даём сработать @media prefers-color-scheme
      }
    };
    apply(theme);

    // если system — слушаем изменение системной темы и мягко обновляем токены
    let mql;
    if (theme === 'system') {
      mql = window.matchMedia('(prefers-color-scheme: dark)');
      const onChange = () => apply('system');
      mql.addEventListener?.('change', onChange);
      return () => mql?.removeEventListener?.('change', onChange);
    }
  }, [theme]);

  const value = useMemo(() => ({
    theme,
    setTheme: (t) => {
      localStorage.setItem('mbhub_theme', t);
      setTheme(t);
    },
    toggle: () => {
      // переключение только между light/dark (как просили)
      const next = (document.documentElement.getAttribute('data-theme') === 'dark') ? 'light' : 'dark';
      localStorage.setItem('mbhub_theme', next);
      setTheme(next);
    }
  }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
