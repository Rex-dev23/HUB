import React, { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();

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
    <div className="min-h-screen bg-white text-gray-900">
      <header className="border-b relative z-20" style={{ borderColor: '#e6e6e6' }}>
  <div className="container mx-auto px-6 py-4 flex items-center justify-between">
    <Link to="/" className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: '#ffa200' }}>
        <span className="font-bold text-white">MB</span>
      </div>
      <div>
        <h1 className="text-lg font-semibold">MB HUB</h1>
        <p className="text-xs text-gray-600">надежный партнёр для мэтчинга инвесторов и эмитентов</p>
      </div>
    </Link>

    {/* Десктоп-меню */}
    <nav className="hidden md:flex gap-6 items-center text-sm">
      <Link to="/#about" className="hover:underline">О платформе</Link>
      <Link to="/#token" className="hover:underline">Токенизация</Link>
      <Link to="/tokenhub" className="hover:underline">Token Hub</Link>
      <Link to="/#pricing" className="hover:underline">Тарифы</Link>
      <Link to="/#team" className="hover:underline">Команда</Link>

      {/* Вход как ССЫЛКА */}
      <Link
        to="/auth"
        className="px-4 py-2 rounded-md cursor-pointer"
        style={{ background: '#ffa200', color:'#fff' }}
      >
        Вход
      </Link>
    </nav>

    {/* Мобильная кнопка входа (чтобы не пропадала на маленьких экранах) */}
    <Link
      to="/auth"
      className="md:hidden px-4 py-2 rounded-md cursor-pointer"
      style={{ background: '#00FFFF' }}
    >
      Вход
    </Link>
  </div>
</header>


      <Outlet />

      <footer className="border-t mt-12" style={{ borderColor: '#f1f1f1' }}>
        <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-semibold">MB HUB</div>
            <div className="text-xs text-gray-600">© {new Date().getFullYear()} MB HUB — все права защищены</div>
          </div>
          <div className="text-sm text-gray-600">Контакты: support@mbhub.com</div>
        </div>
      </footer>
    </div>
  );
}
