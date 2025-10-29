import React from 'react';
import { Link } from 'react-router-dom';

export default function MBHubLanding() {
  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      {/* HERO */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 grid md:grid-cols-2 gap-8 lg:gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            MB Hub —
            <span className="block mt-2 text-xl sm:text-2xl lg:text-3xl font-medium">
              надежный партнёр для мэтчинга инвесторов и эмитентов
            </span>
          </h2>
          <p className="mt-5 sm:mt-6 text-sm sm:text-base" style={{ color: 'var(--muted)' }}>
            Fintech-платформа для M&A и венчурного мэтчинга между инвесторами и эмитентами
            с интегрированным AI-анализом и возможностями токенизации через ЦФА.
            Снижаем риски и повышаем конверсию сделок.
          </p>

          <div className="mt-7 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
            <Link
              to="/tokenhub"
              className="px-5 sm:px-6 py-3 rounded-md font-medium shadow"
              style={{ background: 'var(--primary)', color: 'var(--primary-contrast)' }}
            >
              Перейти в Token Hub
            </Link>
            <Link
              to="/#pricing"
              className="px-5 sm:px-6 py-3 rounded-md border"
              style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}
            >
              Тарифы
            </Link>
          </div>

          <div className="mt-7 sm:mt-8 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border" style={{ borderColor: 'var(--border)', background: 'var(--card)' }}>
              <h4 className="text-sm font-semibold">Гипотеза</h4>
              <p className="text-xs mt-2" style={{ color: 'var(--muted)' }}>
                AI + токенизация снизят риски инвестиций на 20–30% и повысят конверсию сделок.
              </p>
            </div>
            <div className="p-4 rounded-lg border" style={{ borderColor: 'var(--border)', background: 'var(--card)' }}>
              <h4 className="text-sm font-semibold">Бюджет MVP</h4>
              <p className="text-xs mt-2" style={{ color: 'var(--muted)' }}>
                Оценка: 2–5 млн руб. с прогнозным ROI ≈ 150% за 2 года.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-6 sm:p-8 rounded-2xl text-white shadow-2xl">
          <h3 className="text-xl sm:text-2xl font-bold">AI-driven matching</h3>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base">
            Модель на альтернативных данных и smart-scoring для подбора инвесторов под профиль эмитента.
            Прогнозы, релевантность и оптимизация портфеля.
          </p>

          <div className="mt-5 sm:mt-6 bg-white/10 p-3 sm:p-4 rounded-lg">
            <p className="text-[11px] sm:text-xs">Key metrics</p>
            <div className="mt-2 sm:mt-3 flex gap-4">
              <div>
                <div className="text-xl sm:text-2xl font-bold">-20–30%</div>
                <div className="text-[11px] sm:text-xs">снижение риска</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold">+15–20%</div>
                <div className="text-[11px] sm:text-xs">cash flow для компаний</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / PROBLEM */}
      <section id="about" className="container mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl sm:text-2xl font-semibold">Проблема, которую решает проект</h3>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base" style={{ color: 'var(--muted)' }}>
              Российский рынок fintech испытывает дефицит специализированных платформ для эффективного соединения tech-стартапов
              и инвесторов в сегментах M&A и венчурного финансирования. Существующие решения не используют комплексно AI
              для точной оценки рисков и мэтчинга.
            </p>

            <h4 className="mt-5 sm:mt-6 font-semibold">Наше решение</h4>
            <ul className="mt-2 sm:mt-3 list-disc list-inside text-sm sm:text-base" style={{ color: 'var(--muted)' }}>
              <li>AI-анализ альтернативных данных и скоринг проектов.</li>
              <li>Интеграция токенизации через ЦФА для повышения ликвидности.</li>
              <li>Модуль M&A и специализация на венчуре без транзакционных комиссий.</li>
            </ul>
          </div>

          <div className="p-5 sm:p-6 rounded-lg border" style={{ borderColor: 'var(--border)', background: 'var(--card)' }}>
            <h4 className="font-semibold">Целевая аудитория</h4>
            <ol className="mt-2 sm:mt-3 text-xs sm:text-sm list-decimal list-inside" style={{ color: 'var(--muted)' }}>
              <li>Технологические стартапы и корпорации</li>
              <li>Инвестиционные фонды и HNWIs</li>
              <li>Банки и финансовые организации</li>
            </ol>
          </div>
        </div>
      </section>

      {/* TOKENIZATION */}
      <section id="token" className="container mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="rounded-2xl p-6 sm:p-8 border" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
          <h3 className="text-xl sm:text-2xl font-semibold">Токенизация через ЦФА</h3>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base" style={{ color: 'var(--muted)' }}>
            Мы описываем ключевые аспекты токенизации коммерческих прав и финансовых показателей эмитентов
            с помощью цифровых финансовых активов (ЦФА).
          </p>

          <div className="mt-5 sm:mt-6 grid md:grid-cols-2 gap-5 sm:gap-6">
            <div>
              <h4 className="font-semibold">Что это даёт?</h4>
              <ul className="list-disc list-inside mt-2 sm:mt-3 text-sm sm:text-base" style={{ color: 'var(--muted)' }}>
                <li>Преобразование выручки и KPI компании в токены на блокчейне.</li>
                <li>Дополнительный cash flow для компании — до 20–30% от эмиссии.</li>
                <li>Повышение ликвидности активов и доступность диверсифицированных инвестиций.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Регуляция и риски</h4>
              <p className="mt-2 text-sm sm:text-base" style={{ color: 'var(--muted)' }}>
                Токенизация регулируется ФЗ №259-ФЗ — эмиссия ЦФА возможна только через лицензированных операторов (реестр Банка России).
                Необходима лицензия оператора; риски включают волатильность и требования AML/KYC.
              </p>
            </div>
          </div>

          {/* Важный акцент — красный */}
          <div className="mt-5 sm:mt-6 p-4 rounded-md"
               style={{ background: 'var(--accent-bg)', borderLeft: '4px solid var(--accent)' }}>
            <h5 className="font-semibold" style={{ color: 'var(--accent)' }}>Ключевые детали (важно)</h5>
            <p className="text-xs sm:text-sm mt-2" style={{ color: 'var(--muted)' }}>
              Эмиссия через оператора ЦФА (например, Atomyze / Сбер), смарт-контракты для выплат и учет в реестре.
              Интеграция в раздел <strong>Token Hub</strong> с AI-прогнозами.
            </p>
          </div>
        </div>
      </section>

      {/* TOKEN HUB (interactive mock) */}
      <section id="tokenhub" className="container mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          <div className="lg:col-span-2 p-5 sm:p-6 rounded-xl border shadow"
               style={{ borderColor: 'var(--border)', background: 'var(--card)' }}>
            <h3 className="text-lg sm:text-xl font-semibold">Token Hub — покупка и управление токенами</h3>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base" style={{ color: 'var(--muted)' }}>
              Маркетплейс токенов компаний с AI-прогнозами доходности, историей выплат и smart-contract escrow.
            </p>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {[
                { name: 'Эмитент A', items: ['Выручка: 1,2 млрд ₽','Чистая прибыль: 200 млн ₽','EBITDA: 300 млн ₽','P/E: 5','P/S: 2','EV/EBITDA: 4','Прогноз ROI: 18%/год'] },
                { name: 'Эмитент B', items: ['Выручка: 0,9 млрд ₽','Чистая прибыль: 150 млн ₽','EBITDA: 240 млн ₽','P/E: 4','P/S: 1','EV/EBITDA: 3','Прогноз ROI: 12%/год'] },
                { name: 'Эмитент C', items: ['Выручка: 1,7 млрд ₽','Чистая прибыль: 300 млн ₽','EBITDA: 340 млн ₽','P/E: 7','P/S: 5','EV/EBITDA: 6','Прогноз ROI: 22%/год'] },
              ].map((card, i) => (
                <div key={i} className="p-4 rounded-lg border shadow-sm" style={{ borderColor: 'var(--border)', background: 'var(--card)' }}>
                  <div className="text-sm font-semibold">{card.name}</div>
                  <ul className="text-xs mt-2 list-disc list-inside" style={{ color: 'var(--muted)' }}>
                    {card.items.map((it, idx) => <li key={idx}>{it}</li>)}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-5 p-4 rounded-lg border" style={{ borderColor: 'var(--border)', background: 'var(--card)' }}>
              <h5 className="font-semibold">Как это работает</h5>
              <ol className="list-decimal list-inside text-sm mt-2" style={{ color: 'var(--muted)' }}>
                <li>Партнёрство с оператором ЦФА и подготовка условий эмиссии.</li>
                <li>Эмиссия токенов и размещение на Token Hub.</li>
                <li>AI-скоринг и автоматизация выплат через смарт-контракты.</li>
              </ol>
            </div>
          </div>

          <aside className="p-5 sm:p-6 rounded-xl border shadow"
                 style={{ borderColor: 'var(--border)', background: 'var(--card)' }}>
            <h4 className="font-semibold">Quick stats</h4>
            <div className="mt-3">
              <div className="text-sm" style={{ color: 'var(--muted)' }}>Минимальная инвестиция</div>
              <div className="text-lg font-bold">50 000 ₽</div>
            </div>
            <div className="mt-3">
              <div className="text-sm" style={{ color: 'var(--muted)' }}>Период выплат</div>
              <div className="text-lg font-bold">Квартал / По договоренности</div>
            </div>
            <div className="mt-5">
              <Link
                to="/tokenhub"
                className="block w-full text-center py-3 rounded-md font-semibold shadow"
                style={{ background: 'var(--primary)', color: 'var(--primary-contrast)' }}
              >
                Купить токены
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* REGULATION + LEGAL */}
      <section className="container mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="rounded-2xl p-6 sm:p-8 border"
             style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
          <h3 className="text-xl sm:text-2xl font-semibold">Регуляторные аспекты</h3>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base" style={{ color: 'var(--muted)' }}>
            Для работы платформы MB Hub, привлекающей средства и организующей сделки, потребуется регистрация как ОИП
            (оператор инвестиционной платформы) в Банке России при работе с привлечением средств. Для токенизации требуется
            сотрудничество с лицензированным оператором ЦФА согласно ФЗ №259-ФЗ.
          </p>

          <div className="mt-5 sm:mt-6 grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg border shadow-sm" style={{ borderColor: 'var(--border)', background: 'var(--card)' }}>
              <h6 className="font-semibold">Форма юр. лица</h6>
              <p className="text-xs mt-2" style={{ color: 'var(--muted)' }}>
                Рекомендуется ООО; для финансовых услуг — увеличить уставной капитал до 5–35 млн руб.
              </p>
            </div>
            <div className="p-4 rounded-lg border shadow-sm" style={{ borderColor: 'var(--border)', background: 'var(--card)' }}>
              <h6 className="font-semibold">AML / KYC</h6>
              <p className="text-xs mt-2" style={{ color: 'var(--muted)' }}>
                Необходима полноценная проверка клиентов и процедур для соответствия требованиям регулятора.
              </p>
            </div>
            <div className="p-4 rounded-lg border shadow-sm" style={{ borderColor: 'var(--border)', background: 'var(--card)' }}>
              <h6 className="font-semibold">Лицензирование</h6>
              <p className="text-xs mt-2" style={{ color: 'var(--muted)' }}>
                Для некоторых операций потребуется лицензия оператора ЦФА и согласование с ЦБ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING (Эмитенты + Инвесторы) */}
      <section id="pricing" className="container mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <h3 className="text-2xl font-semibold">Модель комиссий и тарифы</h3>
        <p className="mt-3 text-sm sm:text-base" style={{ color: 'var(--muted)' }}>
          Тарифная модель без транзакционных комиссий: стабильные доходы и удержание пользователей.
        </p>

        {/* Для эмитентов */}
        <h4 className="text-lg sm:text-xl font-semibold mt-6">Для эмитентов</h4>
        <div className="mt-5 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border shadow-sm" style={{ borderColor: '#000f0e', background: 'var(--card)' }}>
            <h5 className="font-semibold">Базовый</h5>
            <ul className="text-sm mt-2" style={{ color: 'var(--muted)' }}>
              <li><i>5 000 ₽/мес</i></li>
              <li>Доступ к листингу</li>
              <li>Базовая аналитика</li>
              <li>Эмиссия инвестиционных токенов</li>
              <li>Любая категория инвесторов</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border shadow" style={{ borderColor: '#00ffff', background: 'var(--card)' }}>
            <h5 className="font-semibold">Премиум</h5>
            <ul className="text-sm mt-2" style={{ color: 'var(--muted)' }}>
              <li><i>50 000 ₽/мес</i></li>
              <li>Доступ к листингу</li>
              <li>Расширенная аналитика (новое)</li>
              <li>AI-скоринг (новое)</li>
              <li>Эмиссия инвестиционных токенов</li>
              <li>Эмиссия токенов управления (новое)</li>
              <li>Любая категория инвесторов</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border shadow" style={{ borderColor: 'var(--accent)', background: 'var(--card)' }}>
            <h5 className="font-semibold">Корпоратив</h5>
            <ul className="text-sm mt-2" style={{ color: 'var(--muted)' }}>
              <li><i>150 000 ₽/мес</i></li>
              <li>Доступ к листингу</li>
              <li>Расширенная аналитика</li>
              <li>AI-скоринг</li>
              <li>Эмиссия инвестиционных токенов</li>
              <li>Эмиссия токенов управления</li>
              <li>M&A-модуль (новое)</li>
              <li>Персональный менеджер (новое)</li>
              <li>Размещение на главной (новое)</li>
              <li>Любая категория инвесторов</li>
              <li>Опция только для квал. инвесторов (новое)</li>
            </ul>
          </div>
        </div>

        {/* Для инвесторов */}
        <h4 className="text-lg sm:text-xl font-semibold mt-10">Для инвесторов</h4>
        <div className="mt-5 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border shadow-sm" style={{ borderColor: '#000f0e', background: 'var(--card)' }}>
            <h5 className="font-semibold">Базовый</h5>
            <ul className="text-sm mt-2" style={{ color: 'var(--muted)' }}>
              <li><i>Бесплатно</i></li>
              <li>Покупка инвестиционных токенов</li>
              <li>Базовая аналитика</li>
              <li>Рекомендации по хеджированию рисков</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border shadow" style={{ borderColor: '#00ffff', background: 'var(--card)' }}>
            <h5 className="font-semibold">Продвинутый</h5>
            <ul className="text-sm mt-2" style={{ color: 'var(--muted)' }}>
              <li><i>7 000 ₽/мес</i></li>
              <li>Покупка инвестиционных токенов</li>
              <li>Покупка токенов управления (новое)</li>
              <li>Расширенная аналитика (новое)</li>
              <li>Рекомендации по хеджированию рисков</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border shadow" style={{ borderColor: 'var(--accent)', background: 'var(--card)' }}>
            <h5 className="font-semibold">Премиальный</h5>
            <ul className="text-sm mt-2" style={{ color: 'var(--muted)' }}>
              <li><i>15 000 ₽/мес</i></li>
              <li>Покупка инвестиционных токенов</li>
              <li>Покупка токенов управления</li>
              <li>Расширенная аналитика</li>
              <li>Рекомендации по хеджированию рисков</li>
              <li>Персональный менеджер (новое)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="container mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <h3 className="text-2xl font-semibold">Команда</h3>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg border shadow-sm" style={{ borderColor: 'var(--border)', background: 'var(--card)' }}>
            <h4 className="font-semibold">Матвей Минибаев</h4>
            <p className="text-sm" style={{ color: 'var(--muted)' }}>
              CEO и Основатель — Финансовый Университет, опыт в ПАО «Московская Биржа», развитие рынка облигаций.
            </p>
          </div>
          <div className="p-6 rounded-lg border shadow-sm" style={{ borderColor: 'var(--border)', background: 'var(--card)' }}>
            <h4 className="font-semibold">Александр Короваевич</h4>
            <p className="text-sm" style={{ color: 'var(--muted)' }}>
              CFO — Финансовый Университет, опыт в финансовой аналитике и проектной деятельности.
            </p>
          </div>
          <div className="p-6 rounded-lg border shadow-sm" style={{ borderColor: 'var(--border)', background: 'var(--card)' }}>
            <h4 className="font-semibold">Шамиль Алиев</h4>
            <p className="text-sm" style={{ color: 'var(--muted)' }}>
              CTO — РАНХиГС и МЭИ, опыт в бэкенде и создании сайтов.
            </p>
          </div>
          <div className="p-6 rounded-lg border shadow-sm" style={{ borderColor: 'var(--border)', background: 'var(--card)' }}>
            <h4 className="font-semibold">Искусственный интеллект</h4>
            <p className="text-sm" style={{ color: 'var(--muted)' }}>
              AI-модуль для скоринга и прогнозов на основе альтернативных данных.
            </p>
          </div>
          <div className="p-6 rounded-lg border shadow-sm" style={{ borderColor: 'var(--border)', background: 'var(--card)' }}>
            <h4 className="font-semibold">Партнёры по токенизации</h4>
            <p className="text-sm" style={{ color: 'var(--muted)' }}>
              Операторы ЦФА (партнёрские интеграции: Atomyze, Сбер и др.).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
