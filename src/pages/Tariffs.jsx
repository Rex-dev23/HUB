import React from 'react';

export default function Tariffs() {
  return (
    <>
      <section className="tariffs-hero">
        <div className="container">
          <h1 className="tariffs-title">Тарифы в Хабе</h1>
          <p className="tariffs-subtitle">Выберите оптимальный план.</p>
        </div>
      </section>

      <section className="pricing-section">
        <div className="container">
          <h2 className="section-title">Тарифы для эмитентов</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Базовый</h3>
              <div className="price">5000 ₽<span>/мес</span></div>
              <ul><li>Листинг</li><li>Базовая аналитика</li><li>Эмиссия инвест-токенов</li><li>Любая категория инвесторов</li></ul>
              <button className="btn-primary">Выбрать</button>
            </div>
            <div className="pricing-card featured">
              <h3>Премиум</h3>
              <div className="price">50000 ₽<span>/мес</span></div>
              <ul><li>Расширенная аналитика (новое)</li><li>AI-скоринг (новое)</li><li>Токены управления (новое)</li></ul>
              <button className="btn-primary">Выбрать</button>
            </div>
            <div className="pricing-card">
              <h3>Корпоратив</h3>
              <div className="price">150000 ₽<span>/мес</span></div>
              <ul><li>M&A-модуль</li><li>Персональный менеджер</li><li>Размещение на главной</li></ul>
              <button className="btn-primary">Выбрать</button>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-section">
        <div className="container">
          <h2 className="section-title">Тарифы для инвесторов</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Базовый</h3>
              <div className="price">Бесплатно</div>
              <ul><li>Покупка инвест-токенов</li><li>Базовая аналитика</li></ul>
              <button className="btn-primary">Выбрать</button>
            </div>
            <div className="pricing-card featured">
              <h3>Продвинутый</h3>
              <div className="price">7000 ₽<span>/мес</span></div>
              <ul><li>Токены управления</li><li>Расширенная аналитика</li></ul>
              <button className="btn-primary">Выбрать</button>
            </div>
            <div className="pricing-card">
              <h3>Премиальный</h3>
              <div className="price">15000 ₽<span>/мес</span></div>
              <ul><li>Расширенная аналитика</li><li>Персональный менеджер</li></ul>
              <button className="btn-primary">Выбрать</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
