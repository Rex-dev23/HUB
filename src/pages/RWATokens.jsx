import React from 'react';

export default function RWATokens() {
  return (
    <>
      <section className="rwa-hero">
        <div className="container">
          <h1 className="rwa-title">RWA-токены: мост между реальным и цифровым</h1>
          <p className="rwa-subtitle">Цифровые представления реальных активов на блокчейне.</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-block">
            <h2>Что такое <span className="highlight">RWA</span>?</h2>
            <p>Токены, представляющие недвижимость, сырьё, искусство и др., с дробным владением и лучшей ликвидностью.</p>
          </div>
        </div>
      </section>

      <section className="issuers-list">
        <div className="container">
          <div className="section-header">
            <h2>Эмитенты <span className="highlight">RWA-токенов</span></h2>
            <p>Предложения по токенизации реальных активов.</p>
          </div>
          <div className="rwa-cards-grid" id="rwa-cards-container">
            {[1,2,3,4].map(i=>(
              <div className="issuer-card" key={i}>
                <h3>RWA Проект {i}</h3>
                <p className="issuer-company">Описание проекта …</p>
                <div className="issuer-actions">
                  <button className="btn-primary">Подробнее</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
