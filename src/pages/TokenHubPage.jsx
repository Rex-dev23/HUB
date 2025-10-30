// src/pages/TokenHubPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function TokenHubPage() {
  const issuers = [
    { code: 'TMP', name: 'Эмитент A', company: 'ООО «ТОЧКА МАРКЕТПЛЕЙСЫ»' },
    { code: 'NEX', name: 'Эмитент B', company: 'АО «НЕКСТ ТЕХНОЛОДЖИ»' },
    { code: 'GRT', name: 'Эмитент C', company: 'ПАО «ГРАНТ-ИНВЕСТ»' },
    { code: 'ALP', name: 'Эмитент D', company: 'ООО «АЛЬФА ПРОДАКШН»' },
    { code: 'QNT', name: 'Эмитент E', company: 'АО «КВАНТ СИСТЕМС»' },
    { code: 'MTR', name: 'Эмитент F', company: 'ООО «МЕТРОЛОГИЯ»' },
    { code: 'SPC', name: 'Эмитент G', company: 'ПАО «СПЕКТР ХОЛДИНГ»' },
    { code: 'VRG', name: 'Эмитент H', company: 'АО «ВЕРГОН»' },
    { code: 'LNX', name: 'Эмитент I', company: 'ООО «ЛИНКС ТЕХНО»' },
    { code: 'ECO', name: 'Эмитент J', company: 'ПАО «ЭКО ЭНЕРДЖИ»' },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      {/* ===== Hero ===== */}
      <section className="container mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">TokenHub</h1>
          <p className="mt-4 text-base sm:text-lg" style={{ color: 'var(--muted)' }}>
            Исследуйте токены от ведущих эмитентов и инвестируйте в будущее с помощью передовых технологий блокчейна.
          </p>

          {/* hero stats */}
          <div className="mt-6 grid grid-cols-3 gap-3 max-w-md mx-auto">
            {[
              { num: '10', label: 'Эмитентов' },
              { num: 'MBF-1', label: 'Сеть' },
              { num: '24/7', label: 'Торговля' },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-xl p-4 border text-center"
                style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
              >
                <div className="text-lg sm:text-xl font-bold" style={{ color: 'var(--primary)' }}>{s.num}</div>
                <div className="text-xs sm:text-sm" style={{ color: 'var(--muted)' }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/auth"
              className="px-5 py-3 rounded-md font-semibold"
              style={{ background: 'var(--primary)', color: 'var(--primary-contrast)' }}
            >
              Начать
            </Link>
            <Link
              to="/tokenization"
              className="px-5 py-3 rounded-md font-semibold border"
              style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}
            >
              О токенизации
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Issuers ===== */}
      <section className="container mx-auto px-4 sm:px-6 pb-16">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold">Доступные эмитенты</h2>
          <p className="mt-2 text-sm sm:text-base" style={{ color: 'var(--muted)' }}>
            Выберите эмитента для просмотра информации о токенах и показателях
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {issuers.map((em, idx) => (
            <article
              key={idx}
              className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col"
              style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
            >
              <header className="mb-3">
                <h3 className="text-lg font-semibold" style={{ color: 'var(--primary)' }}>
                  {em.name}
                </h3>
                <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>{em.company}</p>
              </header>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <div className="font-semibold">Код токена</div>
                  <div style={{ color: 'var(--muted)' }}>{em.code}</div>
                </div>
                <div>
                  <div className="font-semibold">Сеть</div>
                  <div style={{ color: 'var(--muted)' }}>MBF-1</div>
                </div>
                <div>
                  <div className="font-semibold">Прогноз ROI</div>
                  <div style={{ color: 'var(--muted)' }}>
                    {idx % 3 === 0 ? '22%/год' : idx % 3 === 1 ? '18%/год' : '12%/год'}
                  </div>
                </div>
                <div>
                  <div className="font-semibold">Капитализация</div>
                  <div style={{ color: 'var(--muted)' }}>{(2 + (idx % 4))}.5 млрд ₽</div>
                </div>
              </div>

              {/* actions */}
              <div className="mt-5 flex gap-3">
                <button
                  className="flex-1 py-2 rounded-md font-semibold"
                  style={{ background: 'var(--primary)', color: 'var(--primary-contrast)' }}
                >
                  Купить токены
                </button>
                <button
                  className="flex-1 py-2 rounded-md font-semibold border"
                  style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}
                >
                  Продать токены
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
