import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useTheme } from './ThemeProvider';

/* Минималистичный переключатель темы (только Light ↔ Dark).
   Полностью подстраивается под тему, без белых квадратиков. */
function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const [systemDark, setSystemDark] = useState(false);

  // Нужен, чтобы корректно показывать иконку, если выбран режим "system"
  useEffect(() => {
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const update = () => setSystemDark(mql.matches);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, []);

  const isDark = theme === 'dark' || (theme === 'system' && systemDark);

  return (
    <button
      onClick={toggle}
      aria-label="Сменить тему"
      className="h-8 w-8 rounded-full flex items-center justify-center transition hover:opacity-80"
      // Без фона/белых коробок, тонкая рамка в цвет темы
      style={{
        background: 'transparent',
        border: '1px solid var(--border)',
        color: 'var(--muted)',
      }}
      title="Сменить тему"
    >
      {isDark ? '🌙' : '☀'}
    </button>
  );
}

export default function Layout() {
  const location = useLocation();

  // Плавный скролл к якорям
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      {/* NAV */}
      <header className="border-b relative z-20" style={{ borderColor: 'var(--border)' }}>
        <div className="container mx-auto px-6 py-4 flex items-center justify-between gap-4">
          {/* Лого + текст в одну строку (не переносится) */}
          <Link to="/" className="flex items-center gap-3 min-w-0">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: 'var(--primary)' }}
            >
              <span className="font-bold" style={{ color: 'var(--primary-contrast)' }}>MB</span>
            </div>
            <div className="min-w-0">
              <h1 className="text-lg font-semibold whitespace-nowrap leading-none">MB Hub</h1>
              <p
                className="text-xs whitespace-nowrap overflow-hidden text-ellipsis leading-none"
                style={{ color: 'var(--muted)' }}
                title="надежный партнёр для мэтчинга инвесторов и эмитентов"
              >
                надежный партнёр для мэтчинга инвесторов и эмитентов
              </p>
            </div>
          </Link>

          {/* Desktop menu */}
          <nav className="hidden md:flex gap-6 items-center text-sm whitespace-nowrap">
            <Link to="/#about" className="hover:underline">О платформе</Link>
            <Link to="/tokenization" className="hover:underline">Токенизация</Link>
            <Link to="/tokenhub" className="hover:underline">Token Hub</Link>
            <Link to="/rwa" className="hover:underline">RWA</Link>
            <Link to="/#pricing" className="hover:underline">Тарифы</Link>
            <Link to="/#team" className="hover:underline">Команда</Link>

            {/* Один компактный тумблер темы */}
            <ThemeToggle />

            <Link
              to="/auth"
              className="px-4 py-2 rounded-md font-semibold"
              style={{ background: 'var(--primary)', color: 'var(--primary-contrast)' }}
            >
              Вход
            </Link>
          </nav>

          {/* Mobile: тот же компактный тумблер + Вход */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Link
              to="/auth"
              className="px-4 py-2 rounded-md font-semibold"
              style={{ background: 'var(--primary)', color: 'var(--primary-contrast)' }}
            >
              Вход
            </Link>
          </div>
        </div>
      </header>

      <Outlet />

      {/* FOOTER */}
      <footer className="border-t mt-12" style={{ borderColor: 'var(--border)' }}>
        <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-semibold">MB Hub</div>
            <div className="text-xs" style={{ color: 'var(--muted)' }}>
              © {new Date().getFullYear()} MB Hub — все права защищены
            </div>
          </div>
          <div className="text-sm" style={{ color: 'var(--muted)' }}>Контакты: support@mbhub.com</div>
        </div>
      </footer>
    </div>
  );
}
