import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useTheme } from './ThemeProvider';

/* Компактный тумблер темы (Light ↔ Dark), полностью под var(--*) */
function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const [systemDark, setSystemDark] = useState(false);

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
      style={{ background: 'transparent', border: '1px solid var(--border)', color: 'var(--muted)' }}
      title="Сменить тему"
    >
      {isDark ? '🌙' : '☀'}
    </button>
  );
}

export default function Layout() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileOpen(false); // закрывать меню при переходе
  }, [location]);

  return (
    <div className="min-h-screen">
      {/* HEADER */}
      <header className="border-b sticky top-0 z-40" style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}>
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-3">
          {/* Лого + слоган — одна строка */}
          <Link to="/" className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'var(--primary)' }}>
              <span className="font-bold text-sm sm:text-base" style={{ color: 'var(--primary-contrast)' }}>MB</span>
            </div>
            <div className="min-w-0">
              <h1 className="text-base sm:text-lg font-semibold whitespace-nowrap leading-none">MB Hub</h1>
              <p
                className="text-[11px] sm:text-xs whitespace-nowrap overflow-hidden text-ellipsis leading-none"
                style={{ color: 'var(--muted)' }}
                title="надежный партнёр для мэтчинга инвесторов и эмитентов"
              >
                надежный партнёр для мэтчинга инвесторов и эмитентов
              </p>
            </div>
          </Link>

          {/* Desktop menu */}
          <nav className="hidden md:flex gap-5 lg:gap-6 items-center text-sm whitespace-nowrap">
            <Link to="/#about" className="hover:underline">О платформе</Link>
            <Link to="/tokenization" className="hover:underline">Токенизация</Link>
            <Link to="/tokenhub" className="hover:underline">Token Hub</Link>
            <Link to="/rwa" className="hover:underline">RWA</Link>
            <Link to="/#pricing" className="hover:underline">Тарифы</Link>
            <Link to="/#team" className="hover:underline">Команда</Link>

            <ThemeToggle />

            <Link
              to="/auth"
              className="px-4 py-2 rounded-md font-semibold"
              style={{ background: 'var(--primary)', color: 'var(--primary-contrast)' }}
            >
              Вход
            </Link>
          </nav>

          {/* Mobile: тумблер + бургер */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              aria-label="Открыть меню"
              onClick={() => setMobileOpen(true)}
              className="h-9 w-9 rounded-md flex items-center justify-center"
              style={{ border: '1px solid var(--border)', color: 'var(--text)', background: 'transparent' }}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50">
          {/* затемнение */}
          <div
            className="absolute inset-0"
            style={{ background: 'rgba(0,0,0,0.4)' }}
            onClick={() => setMobileOpen(false)}
          />
          {/* панель */}
          <aside
            className="absolute right-0 top-0 h-full w-72 max-w-[82%] p-5 flex flex-col gap-4 shadow-2xl"
            style={{ background: 'var(--card)', borderLeft: '1px solid var(--border)' }}
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold text-base">Меню</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="h-8 w-8 rounded-md"
                style={{ border: '1px solid var(--border)' }}
                aria-label="Закрыть меню"
              >
                ✕
              </button>
            </div>

            <nav className="flex flex-col text-sm">
              <Link to="/#about" className="py-2">О платформе</Link>
              <Link to="/tokenization" className="py-2">Токенизация</Link>
              <Link to="/tokenhub" className="py-2">Token Hub</Link>
              <Link to="/rwa" className="py-2">RWA</Link>
              <Link to="/#pricing" className="py-2">Тарифы</Link>
              <Link to="/#team" className="py-2">Команда</Link>
            </nav>

            <Link
              to="/auth"
              className="mt-auto block text-center px-4 py-2 rounded-md font-semibold"
              style={{ background: 'var(--primary)', color: 'var(--primary-contrast)' }}
            >
              Вход
            </Link>
          </aside>
        </div>
      )}

      <Outlet />

      {/* FOOTER */}
      <footer className="border-t mt-12" style={{ borderColor: 'var(--border)' }}>
        <div className="container mx-auto px-4 sm:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
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
