import React from 'react';
import { Link } from 'react-router-dom';

export default function MBHubLanding() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      {/* ===== HERO ===== */}
      <section id="home" className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Левый столбец */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
              MB Hub — надёжный партнёр для мэтчинга инвесторов и эмитентов
            </h1>
            <p className="mt-4 text-base sm:text-lg" style={{ color: 'var(--muted)' }}>
              Fintech-стартап для мэтчинга инвесторов и эмитентов с использованием технологии токенизации и смарт-контрактов.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#services"
                className="px-5 py-3 rounded-md font-semibold"
                style={{ background: 'var(--primary)', color: 'var(--primary-contrast)' }}
              >
                Изучить возможности
              </a>
              <a
                href="#about"
                className="px-5 py-3 rounded-md font-semibold border"
                style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}
              >
                Узнать больше
              </a>
            </div>
          </div>

          {/* Правый столбец */}
          <div className="relative">
            <div
              className="rounded-2xl p-5 shadow-md border max-w-sm mx-auto"
              style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
            >
              <div className="text-3xl mb-2">🚀</div>
              <h3 className="text-lg font-semibold">AI + Blockchain</h3>
              <p className="mt-1 text-sm" style={{ color: 'var(--muted)' }}>
                Инновационные технологии для финансового мэтчинга.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TOKENIZATION (Highlighted) ===== */}
      <section id="services" className="container mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <div
          className="rounded-2xl p-6 sm:p-8 border"
          style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
        >
          <div className="flex items-center gap-3 mb-3">
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{ background: 'var(--accent-bg)', color: 'var(--accent)' }}
            >
              Инновация
            </span>
            <span className="text-xs sm:text-sm" style={{ color: 'var(--muted)' }}>
              Токенизация через цифровые финансовые активы (ЦФА)
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-semibold">
            Токенизация через цифровые финансовые активы (ЦФА)
          </h2>
          <p className="mt-3 text-sm sm:text-base" style={{ color: 'var(--muted)' }}>
            Выручка или показатели компаний преобразуются в токены на блокчейне. Инвесторы покупают токены, предоставляя компаниям
            дополнительный cash flow до 20–30% от эмиссии.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl border" style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}>
              <div className="text-2xl mb-2">⚖️</div>
              <h3 className="font-semibold">Регулирование</h3>
              <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>
                Регулируется законом о ЦФА; требуется лицензия оператора, повышает ликвидность платформы.
              </p>
            </div>
            <div className="p-4 rounded-xl border" style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}>
              <div className="text-2xl mb-2">🤝</div>
              <h3 className="font-semibold">Партнёрство</h3>
              <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>
                Партнёрство с оператором ЦФА (например, Atomyze / Сбер).
              </p>
            </div>
            <div className="p-4 rounded-xl border" style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}>
              <div className="text-2xl mb-2">🔗</div>
              <h3 className="font-semibold">Токен-модель</h3>
              <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>
                Эмиссия на Ethereum/российском блокчейне, смарт-контракты для выплат.
              </p>
            </div>
            <div className="p-4 rounded-xl border" style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}>
              <div className="text-2xl mb-2">🎯</div>
              <h3 className="font-semibold">Token Hub</h3>
              <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>
                Раздел «Token Hub» с AI-прогнозами и витриной токенов.
              </p>
            </div>
          </div>

          <div
            className="mt-6 p-4 rounded-md"
            style={{ background: 'var(--accent-bg)', borderLeft: '4px solid var(--accent)' }}
          >
            <p className="text-sm">
              <strong>Воздействие:</strong> AI + токенизация займут нишу, снижая риски и повышая конверсию сделок.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/tokenhub"
              className="px-5 py-3 rounded-md font-semibold"
              style={{ background: 'var(--primary)', color: 'var(--primary-contrast)' }}
            >
              Открыть Token Hub
            </Link>
            <Link
              to="/tokenization"
              className="px-5 py-3 rounded-md font-semibold border"
              style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}
            >
              Подробнее о токенизации
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PROBLEM & SOLUTION ===== */}
      <section className="container mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
            <h2 className="text-xl font-semibold">Проблема</h2>
            <p className="mt-3 text-sm sm:text-base" style={{ color: 'var(--muted)' }}>
              На российском рынке Fintech не хватает специализированных платформ для эффективного соединения tech-стартапов
              с инвесторами (M&A и венчур). Существующие решения редко используют AI для точной оценки рисков и мэтчинга.
            </p>
          </div>
          <div className="p-6 rounded-2xl border" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
            <h2 className="text-xl font-semibold">Гипотеза</h2>
            <p className="mt-3 text-sm sm:text-base" style={{ color: 'var(--muted)' }}>
              Интеграция AI для анализа альтернативных данных и автоматизированного мэтчинга снизит риски на 20–30% и повыстит
              конверсию сделок — особенно в условиях поддержки Банком России инноваций в AI и blockchain.
            </p>
          </div>
        </div>
      </section>

      {/* ===== TARGET AUDIENCE ===== */}
      <section id="investors" className="container mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <h2 className="text-xl sm:text-2xl font-semibold">Наша целевая аудитория</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { icon: '🏢', title: 'Компании с потенциалом', text: 'Большой потенциал, низкий текущий cash flow' },
            { icon: '🚀', title: 'Tech-стартапы', text: 'Корпорации и стартапы, нуждающиеся в инвестициях и M&A' },
            { icon: '💼', title: 'Инвестфонды', text: 'Фонды, ищущие перспективные проекты' },
            { icon: '💎', title: 'Частные инвесторы', text: 'HNWIs и доверительное управление' },
            { icon: '🏦', title: 'Финорганизации', text: 'Банки и финорганизации, консалтинг' },
          ].map((a, i) => (
            <div key={i} className="p-4 rounded-xl border" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
              <div className="text-2xl">{a.icon}</div>
              <h3 className="mt-2 font-semibold">{a.title}</h3>
              <p className="mt-1 text-sm" style={{ color: 'var(--muted)' }}>{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section id="pricing" className="container mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <h2 className="text-xl sm:text-2xl font-semibold">Модель подписок</h2>
        <p className="mt-2 text-sm sm:text-base" style={{ color: 'var(--muted)' }}>
          Переход на подписки для конкуренции с крупными игроками, без транзакционных комиссий.
        </p>

        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
            <h3 className="font-semibold">Базовая</h3>
            <div className="text-lg mt-1">Бесплатно</div>
            <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>Для стартапов</p>
            <ul className="mt-3 text-sm" style={{ color: 'var(--muted)' }}>
              <li>Базовый доступ к платформе</li>
              <li>Ограниченная аналитика</li>
              <li>Стандартная поддержка</li>
            </ul>
          </div>

          <div
            className="p-6 rounded-2xl border shadow-md"
            style={{ background: 'var(--card)', borderColor: 'var(--primary)' }}
          >
            <h3 className="font-semibold">Премиум</h3>
            <div className="text-lg mt-1">10 000 – 50 000 ₽/мес</div>
            <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>Для инвесторов</p>
            <ul className="mt-3 text-sm" style={{ color: 'var(--muted)' }}>
              <li>Расширенная аналитика</li>
              <li>AI-прогнозы</li>
              <li>Приоритетная поддержка</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl border" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
            <h3 className="font-semibold">Корпоративный</h3>
            <div className="text-lg mt-1">50 000 – 100 000 ₽/мес</div>
            <p className="text-sm mt-1" style={{ color: 'var(--muted)' }}>Для корпораций</p>
            <ul className="mt-3 text-sm" style={{ color: 'var(--muted)' }}>
              <li>M&A-модуль</li>
              <li>Токенизация</li>
              <li>Персональный менеджер</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== ABOUT FOUNDER / TEAM ===== */}
      <div id="about" />
      <div id="team" />
      <section className="container mx-auto px-4 sm:px-6 pb-16">
        <div
          className="rounded-2xl p-6 sm:p-8 border grid md:grid-cols-2 gap-6 items-center"
          style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
        >
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold">Об основателе</h2>
            <h3 className="mt-1 text-lg font-semibold" style={{ color: 'var(--primary)' }}>
              Матвей Минибаев
            </h3>
            <p className="mt-3 text-sm sm:text-base" style={{ color: 'var(--muted)' }}>
              Выпускник Финансового Университета по направлению «Финансовые рынки и Финтех», с опытом работы в ПАО «Московская Биржа».
              Эксперт в области финансовых технологий и инвестиционных платформ.
            </p>
          </div>
          <div className="flex md:justify-end">
            <div
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center text-xl font-bold"
              style={{ background: 'var(--bg)', border: '2px solid var(--border)' }}
            >
              М.М.
            </div>
          </div>
        </div>
      </section>

      {/* Пустые якоря для совместимости с меню (если нужно) */}
      <div id="issuers" className="h-0" />
      <div id="contact" className="h-0" />
    </div>
  );
}
