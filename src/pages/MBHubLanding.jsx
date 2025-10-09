import React from 'react';
import { Link } from 'react-router-dom';

// MB Hub — лендинг (встраивается под общий Layout)
export default function MBHubLanding() {
  return (
    <div>
      {/* HERO */}
      <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-extrabold leading-tight">
            MB Hub — <span className="text-2xl block mt-1 font-medium">надежный партнёр для мэтчинга инвесторов и эмитентов</span>
          </h2>
          <p className="mt-6 text-gray-700">
            Fintech-платформа для M&A и венчурного мэтчинга между инвесторами и эмитентами с интегрированным AI-анализом
            и возможностями токенизации через ЦФА. Снижаем риски и повышаем конверсию сделок.
          </p>

          <div className="mt-8 flex gap-4">
            <Link to="/tokenhub" className="px-6 py-3 rounded-md font-medium shadow-xl" style={{ background: '#ffa200', color: '#fff' }}>
              Перейти в Token Hub
            </Link>
            <Link to="/#pricing" className="px-6 py-3 rounded-md border shadow-xl" style={{ borderColor: '#ffa200' }}>
              Тарифы
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border shadow-xl" style={{ borderColor: '#eaeaea' }}>
              <h4 className="text-sm font-semibold">Гипотеза</h4>
              <p className="text-xs text-gray-600 mt-2">AI + токенизация снизят риски инвестиций на 20–30% и повысят конверсию сделок.</p>
            </div>
            <div className="p-4 rounded-lg border shadow-xl" style={{ borderColor: '#eaeaea' }}>
              <h4 className="text-sm font-semibold">Бюджет MVP</h4>
              <p className="text-xs text-gray-600 mt-2">Оценка: 2–5 млн руб. с прогнозным ROI ≈ 150% за 2 года.</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#00FFFF] to-[#00cccc] p-8 rounded-2xl text-white shadow-2xl">
          <h3 className="text-2xl font-bold">AI-driven matching</h3>
          <p className="mt-4">Модель на альтернативных данных и smart-scoring для подбора инвесторов под профиль эмитента. Прогнозы, релевантность и оптимизация портфеля.</p>

          <div className="mt-6 bg-white/10 p-4 rounded-lg">
            <p className="text-xs">Key metrics</p>
            <div className="mt-3 flex gap-3">
              <div>
                <div className="text-2xl font-bold">-20–30%</div>
                <div className="text-xs">снижение риска</div>
              </div>
              <div>
                <div className="text-2xl font-bold">+15–20%</div>
                <div className="text-xs">cash flow для компаний</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / PROBLEM */}
      <section id="about" className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold">Проблема, которую решает проект</h3>
            <p className="mt-4 text-gray-700">
              Российский рынок fintech испытывает дефицит специализированных платформ для эффективного соединения tech-стартапов и инвесторов
              в сегментах M&A и венчурного финансирования. Существующие решения не используют комплексно AI для точной оценки рисков и мэтчинга.
            </p>

            <h4 className="mt-6 font-semibold">Наше решение</h4>
            <ul className="mt-3 list-disc list-inside text-gray-700">
              <li>AI-анализ альтернативных данных и скоринг проектов.</li>
              <li>Интеграция токенизации через ЦФА для повышения ликвидности.</li>
              <li>Модуль M&A и специализация на венчуре без транзакционных комиссий.</li>
            </ul>
          </div>

          <div className="p-6 rounded-lg border" style={{ borderColor: '#eaeaea' }}>
            <h4 className="font-semibold">Целевая аудитория</h4>
            <ol className="mt-3 text-sm text-gray-600 list-decimal list-inside">
              <li>Технологические стартапы и корпорации</li>
              <li>Инвестиционные фонды и HNWIs</li>
              <li>Банки и финансовые организации</li>
            </ol>
          </div>
        </div>
      </section>

      {/* TOKENIZATION */}
      <section id="token" className="container mx-auto px-6 py-12">
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h3 className="text-2xl font-semibold">Токенизация через ЦФА</h3>
          <p className="mt-4 text-gray-700">Мы описываем ключевые аспекты токенизации коммерческих прав и финансовых показателей эмитентов с помощью цифровых финансовых активов (ЦФА).</p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold">Что это даёт?</h4>
              <ul className="list-disc list-inside mt-3 text-gray-700">
                <li>Преобразование выручки и KPI компании в токены на блокчейне.</li>
                <li>Дополнительный cash flow для компании — до 20–30% от эмиссии.</li>
                <li>Повышение ликвидности активов и доступность диверсифицированных инвестиций.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">Регуляция и риски</h4>
              <p className="text-gray-700 mt-2">
                Токенизация регулируется ФЗ №259-ФЗ — эмиссия ЦФА возможна только через лицензированных операторов (реестр Банка России).
                Необходима лицензия оператора; риски включают волатильность и требования AML/KYC.
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-md" style={{ background: '#fff7e6', borderLeft: '4px solid #ffa200' }}>
            <h5 className="font-semibold">Ключевые детали (выделено)</h5>
            <p className="text-sm mt-2">
              Эмиссия через оператора ЦФА (например, Atomyze / Сбер), смарт-контракты для выплат и учет в реестре. Токен-модель — Ethereum или российские блокчейны;
              интеграция в платформу через раздел <strong>Token Hub</strong> с AI-прогнозами. Потребуется лицензирование Оператора и соблюдение ФЗ №259-ФЗ.
            </p>
          </div>
        </div>
      </section>

      {/* TOKEN HUB (interactive mock) */}
      <section id="tokenhub" className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 bg-gradient-to-br from-[#f8fbff] to-white p-6 rounded-xl border shadow-xl" style={{ borderColor: '#e6f7f7' }}>
            <h3 className="text-xl font-semibold">Token Hub — покупка и управление токенами</h3>
            <p className="mt-3 text-gray-700">Маркетплейс токенов компаний с AI-прогнозами доходности, историей выплат и smart-contract escrow. Простая панель для инвестора и менеджера эмиссии.</p>

            <div className="mt-6 grid md:grid-cols-3 gap-4">
              {[
                { name: 'Эмитент A', items: ['Выручка: 1,2 млрд ₽','Чистая прибыль: 200 млн ₽','EBITDA: 300 млн ₽','P/E: 5','P/S: 2','EV/EBITDA: 4','Прогноз ROI: 18%/год'] },
                { name: 'Эмитент B', items: ['Выручка: 0,9 млрд ₽','Чистая прибыль: 150 млн ₽','EBITDA: 240 млн ₽','P/E: 4','P/S: 1','EV/EBITDA: 3','Прогноз ROI: 12%/год'] },
                { name: 'Эмитент C', items: ['Выручка: 1,7 млрд ₽','Чистая прибыль: 300 млн ₽','EBITDA: 340 млн ₽','P/E: 7','P/S: 5','EV/EBITDA: 6','Прогноз ROI: 22%/год'] },
              ].map((card, i) => (
                <div key={i} className="p-4 rounded-lg border shadow-lg" style={{ borderColor: '#eaeaea' }}>
                  <div className="text-sm font-semibold">{card.name}</div>
                  <ul className="text-xs text-gray-600 mt-2 list-disc list-inside">
                    {card.items.map((it, idx) => <li key={idx}>{it}</li>)}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-lg bg-white border shadow-lg" style={{ borderColor: '#eaeaea' }}>
              <h5 className="font-semibold">Как это работает</h5>
              <ol className="list-decimal list-inside text-sm text-gray-600 mt-2">
                <li>Партнёрство с оператором ЦФА и подготовка условий эмиссии.</li>
                <li>Эмиссия токенов и размещение на Token Hub.</li>
                <li>AI-скоринг для инвесторов и автоматизация выплат через смарт-контракты.</li>
              </ol>
            </div>
          </div>

          <aside className="p-6 rounded-xl border shadow-xl" style={{ borderColor: '#eaeaea' }}>
            <h4 className="font-semibold">Quick stats</h4>
            <div className="mt-4">
              <div className="text-sm">Минимальная инвестиция</div>
              <div className="text-lg font-bold">50 000 ₽</div>
            </div>
            <div className="mt-4">
              <div className="text-sm">Период выплат</div>
              <div className="text-lg font-bold">Квартал / По договоренности</div>
            </div>
            <div className="mt-6">
              <Link to="/tokenhub" className="block w-full text-center py-3 rounded-md font-semibold shadow-xl" style={{ background: '#ffa200', color: '#fff' }}>
                Купить токены
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* REGULATION + LEGAL */}
      <section className="container mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl p-6 border shadow-xl" style={{ borderColor: '#eaeaea' }}>
          <h3 className="text-xl font-semibold">Регуляторные аспекты</h3>
          <p className="mt-4 text-gray-700">
            Для работы платформы MB Hub, привлекающей средства и организующей сделки, потребуется регистрация как ОИП (оператор инвестиционной платформы) в Банке России.
            Для токенизации требуется сотрудничество с лицензированным оператором ЦФА согласно ФЗ №259-ФЗ.
          </p>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {[
              {t:'Форма юр.лица', d:'Рекомендуется ООО; для финансовых услуг — увеличить уставной капитал до 5–35 млн руб.'},
              {t:'AML / KYC', d:'Необходима полноценная проверка клиентов и процедур для соответствия требованиям регулятора.'},
              {t:'Лицензирование', d:'Для некоторых операций потребуется лицензия оператора ЦФА и согласование с ЦБ.'},
            ].map((b,i)=>(
              <div key={i} className="p-4 rounded-lg border shadow-lg" style={{ borderColor: '#eaeaea' }}>
                <h6 className="font-semibold">{b.t}</h6>
                <p className="text-xs text-gray-600 mt-2">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING — Эмитенты */}
      <section id="pricing" className="container mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold">Модель комиссий и тарифы</h3>
        <p className="mt-3 text-gray-700">Тарифная модель без транзакционных комиссий: стабильные доходы и удержание пользователей.</p>

        <h4 className="text-xl font-semibold mt-6">Для эмитентов</h4>
        <div className="mt-4 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border shadow-md" style={{ borderColor: '#000f0e' }}>
            <h5 className="font-semibold">Базовый</h5>
            <p className="text-sm text-gray-600 mt-2"><i>5 000 ₽/мес</i></p>
            <ul className="text-sm text-gray-700 mt-2 list-disc list-inside">
              <li>Доступ к листингу</li>
              <li>Базовая аналитика</li>
              <li>Эмиссия инвестиционных токенов</li>
              <li>Любая категория инвесторов</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border shadow-xl" style={{ borderColor: '#00ffff' }}>
            <h5 className="font-semibold">Премиум</h5>
            <p className="text-sm text-gray-600 mt-2"><i>50 000 ₽/мес</i></p>
            <ul className="text-sm text-gray-700 mt-2 list-disc list-inside">
              <li>Доступ к листингу</li>
              <li>Расширенная аналитика (новое)</li>
              <li>AI-скоринг (новое)</li>
              <li>Эмиссия инвестиционных токенов</li>
              <li>Эмиссия токенов управления (новое)</li>
              <li>Любая категория инвесторов</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border shadow-xl" style={{ borderColor: '#ffa200' }}>
            <h5 className="font-semibold">Корпоратив</h5>
            <p className="text-sm text-gray-600 mt-2"><i>150 000 ₽/мес</i></p>
            <ul className="text-sm text-gray-700 mt-2 list-disc list-inside">
              <li>Доступ к листингу</li>
              <li>Расширенная аналитика</li>
              <li>AI-скоринг</li>
              <li>Эмиссия инвестиционных токенов</li>
              <li>Эмиссия токенов управления</li>
              <li>M&A-модуль (новое)</li>
              <li>Персональный менеджер (новое)</li>
              <li>Размещение на главной странице (новое)</li>
              <li>Любая категория инвесторов</li>
              <li>Возможность ограничить эмиссию только для квалифицированных инвесторов (новое)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PRICING — Инвесторы */}
      <section id="pricing-investors" className="container mx-auto px-6 py-12">
        <h4 className="text-xl font-semibold">Для инвесторов</h4>
        <div className="mt-4 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border shadow-md" style={{ borderColor: '#000f0e' }}>
            <h5 className="font-semibold">Базовый</h5>
            <p className="text-sm text-gray-600 mt-2"><i>Бесплатно</i></p>
            <ul className="text-sm text-gray-700 mt-2 list-disc list-inside">
              <li>Покупка инвестиционных токенов</li>
              <li>Базовая аналитика</li>
              <li>Рекомендации по хеджированию рисков</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border shadow-xl" style={{ borderColor: '#00ffff' }}>
            <h5 className="font-semibold">Продвинутый</h5>
            <p className="text-sm text-gray-600 mt-2"><i>7 000 ₽/мес</i></p>
            <ul className="text-sm text-gray-700 mt-2 list-disc list-inside">
              <li>Покупка инвестиционных токенов</li>
              <li>Покупка токенов управления (новое)</li>
              <li>Расширенная аналитика (новое)</li>
              <li>Рекомендации по хеджированию рисков</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border shadow-xl" style={{ borderColor: '#ffa200' }}>
            <h5 className="font-semibold">Премиальный</h5>
            <p className="text-sm text-gray-600 mt-2"><i>15 000 ₽/мес</i></p>
            <ul className="text-sm text-gray-700 mt-2 list-disc list-inside">
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
      <section id="team" className="container mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold">Команда</h3>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            {t:'Матвей Минибаев', d:'CEO и Основатель — выпускник Финансового Университета; опыт в ПАО «Московская Биржа» (рынок облигаций).'},
            {t:'Александр Короваевич', d:'CFO — выпускник Финансового Университета; опыт в финансовой аналитике и проектной деятельности.'},
            {t:'Шамиль Алиев', d:'CTO — выпускник РАНХиГС и МАИ; опыт в бэкенде и разработке сайтов.'},
            {t:'Искусственный интеллект', d:'AI-модуль для скоринга и прогнозов на основе альтернативных данных.'},
            {t:'Партнёры по токенизации', d:'Операторы ЦФА (партнёрские интеграции: Atomyze, Сбер и др.).'},
          ].map((p, i)=>(
            <div key={i} className="p-6 rounded-lg border shadow-xl" style={{ borderColor: '#eaeaea' }}>
              <h4 className="font-semibold">{p.t}</h4>
              <p className="text-sm text-gray-600">{p.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
