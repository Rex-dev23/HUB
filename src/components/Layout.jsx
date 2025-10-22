import React from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="nav-wrapper">
            <div className="logo"><h1><Link to="/">MB Hub</Link></h1></div>
            <nav className="nav">
              <NavLink to="/" className="nav-link">Главная</NavLink>
              <a href="/#about" className="nav-link">О нас</a>
              <a href="/#services" className="nav-link">Услуги</a>
              <a href="/#investors" className="nav-link">Инвесторы</a>
              <NavLink to="/tokenhub" className="nav-link">TokenHub</NavLink>
              <NavLink to="/tariffs" className="nav-link">Тарифы</NavLink>
              <NavLink to="/auth" className="nav-link">Вход/Регистрация</NavLink>
              <NavLink to="/tokenization" className="nav-link">Токенизация</NavLink>
              <NavLink to="/rwa-tokens" className="nav-link">RWA-токены</NavLink>
              <a href="/#contact" className="nav-link">Контакты</a>
            </nav>
            <Link to="/auth" className="cta-button">Начать</Link>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>MB Hub</h3>
              <p>Надежный партнёр для мэтчинга инвесторов и эмитентов</p>
            </div>
            <div className="footer-section">
              <h4>Услуги</h4>
              <ul>
                <li><a href="#">Мэтчинг инвесторов</a></li>
                <li><a href="#">Токенизация активов</a></li>
                <li><a href="#">AI-аналитика</a></li>
                <li><a href="#">M&A консалтинг</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Компания</h4>
              <ul>
                <li><a href="#">О нас</a></li>
                <li><a href="#">Команда</a></li>
                <li><a href="#">Карьера</a></li>
                <li><a href="#">Новости</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Поддержка</h4>
              <ul>
                <li><a href="#">Помощь</a></li>
                <li><a href="#">Документация</a></li>
                <li><a href="#">Контакты</a></li>
                <li><a href="#">Политика конфиденциальности</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} MB Hub. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
