import React from 'react';

export default function Landing() {
  return (
    <>
      {/* Hero */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">MB Hub — надёжный партнер для мэтчинга инвесторов и эмитентов</h1>
            <p className="hero-subtitle">Fintech-стартап для мэтчинга инвесторов и эмитентов с использованием токенизации и смарт-контрактов</p>
            <div className="hero-buttons">
              <a className="btn-primary" href="/tokenhub">Изучить возможности</a>
              <a className="btn-secondary" href="/tokenization">Узнать больше</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-card">
              <div className="card-icon">🚀</div>
              <h3>AI + Blockchain</h3>
              <p>Инновационные технологии для финансового мэтчинга</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenization highlight */}
      <section className="tokenization-section" id="services">
        <div className="container">
          <div className="tokenization-content">
            <div className="section-badge">Инновация</div>
            <h2 className="section-title">Токенизация через цифровые финансовые активы (ЦФА)</h2>
            <p className="section-description">
              Выручка или показатели компаний преобразуются в токены на блокчейне. Инвесторы покупают токены,
              предоставляя компаниям дополнительный cash flow до 20–30% от эмиссии.
            </p>

            <div className="tokenization-features">
              <div className="feature-card">
                <div className="feature-icon">⚖️</div>
                <h3>Регулирование</h3>
                <p>Регулируется законом о ЦФА; требуется лицензия оператора.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🤝</div>
                <h3>Партнёрство</h3>
                <p>Оператор ЦФА (Atomyze/Сбер и др.).</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔗</div>
                <h3>Токен-модель</h3>
                <p>Ethereum/российские блокчейны, смарт-контракты выплат.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h3>Token Hub</h3>
                <p>Раздел «Token Hub» с покупкой токенов и AI-прогнозами.</p>
              </div>
            </div>

            <div className="impact-statement">
              <p><strong>Воздействие:</strong> AI + токенизация снижают риски и повышают конверсию сделок.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & solution */}
      <section className="problem-solution" id="about">
        <div className="container">
          <div className="section-grid">
            <div className="problem-card">
              <h2>Проблема</h2>
              <p>Рынку не хватает платформ для эффективного соединения стартапов и инвесторов с использованием AI.</p>
            </div>
            <div className="solution-card">
              <h2>Гипотеза</h2>
              <p>AI-мэтчинг снижает риски на 20–30% и повышает конверсию. Плюс поддержка блокчейна.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target audience */}
      <section className="target-audience" id="investors">
        <div className="container">
          <h2 className="section-title">Наша целевая аудитория</h2>
          <div className="audience-grid">
            {[
              {icon:'🏢', title:'Компании с потенциалом', text:'Большой потенциал, но низкий cash flow'},
              {icon:'🚀', title:'Tech-стартапы', text:'Нуждаются в инвестициях/M&A'},
              {icon:'💼', title:'Инвестфонды', text:'Ищут перспективные проекты'},
              {icon:'💎', title:'Частные инвесторы', text:'HNWIs и доверительное управление'},
              {icon:'🏦', title:'Финорганизации', text:'Банки, финконсалтинг'},
            ].map((a,i)=>(
              <div className="audience-card" key={i}>
                <div className="audience-icon">{a.icon}</div>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="pricing">
        <div className="container">
          <h2 className="section-title">Модель подписок</h2>
          <p className="section-subtitle">Без транзакционных комиссий — удержание и прогнозируемость.</p>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Базовая</h3>
              <div className="price">Бесплатно</div>
              <p>Для стартапов</p>
              <ul><li>Базовый доступ</li><li>Ограниченная аналитика</li></ul>
            </div>
            <div className="pricing-card featured">
              <h3>Премиум</h3>
              <div className="price">10 000–50 000 ₽/мес</div>
              <p>Для инвесторов</p>
              <ul><li>Расширенная аналитика</li><li>AI-прогнозы</li></ul>
            </div>
            <div className="pricing-card">
              <h3>Корпоративный</h3>
              <div className="price">50 000–100 000 ₽/мес</div>
              <p>Для корпораций</p>
              <ul><li>M&A-модуль</li><li>Токенизация</li></ul>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="founder" id="contact">
        <div className="container">
          <div className="founder-content">
            <div className="founder-info">
              <h2>Об основателе</h2>
              <h3>Матвей Минибаев</h3>
              <p>Выпускник Финуниверситета, опыт в ПАО «Московская Биржа». Фокус: финтех и инвестплатформы.</p>
            </div>
            <div className="founder-image">
              <div className="placeholder-avatar">М.М.</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
