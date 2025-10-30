import React from 'react';

export default function RWATokensPage() {
  const rwaData = [
    {
      name: 'ООО «Читай-Город»',
      tokens: '1,000,000 RWA-токенов',
      asset: 'Книги и печатная продукция',
      ratio: '1 токен = 1 книга',
    },
    {
      name: 'ООО «Агротех»',
      tokens: '500,000 RWA-токенов',
      asset: 'Урожай зерна',
      ratio: '5 токенов = 1 тонна зерна',
    },
    {
      name: 'ООО «Солар Энерджи»',
      tokens: '2,000,000 RWA-токенов',
      asset: 'Солнечные панели и энергия',
      ratio: '1,000,000 токенов = 1 МВт мощности',
    },
    {
      name: 'ООО «Золотой Рудник»',
      tokens: '750,000 RWA-токенов',
      asset: 'Золото в хранилище',
      ratio: '1 токен = 0,1 грамма золота',
    },
    {
      name: 'ООО «ЭкоДевелопмент»',
      tokens: '1,500,000 RWA-токенов',
      asset: 'Жилая недвижимость в строительстве',
      ratio: '100,000 токенов = 1 квартира',
    },
    {
      name: 'ООО «ВинПро»',
      tokens: '300,000 RWA-токенов',
      asset: 'Партии вина премиум-класса',
      ratio: '1 токен = 1 бутылка вина',
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Hero */}
        <section className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            RWA-токены: <span style={{ color: 'var(--primary)' }}>мост между реальным и цифровым</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg max-w-3xl mx-auto" style={{ color: 'var(--muted)' }}>
            Цифровые представления реальных активов, открывающие новые инвестиционные возможности.
          </p>
        </section>

        {/* Определение */}
        <section
          className="rounded-2xl p-6 sm:p-8 border mb-10 sm:mb-12"
          style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold">
            Что такое <span style={{ color: 'var(--primary)' }}>RWA (Real World Assets)</span> токены?
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            RWA-токены — это цифровые представления реальных активов, существующих в физическом мире, но
            токенизированных на блокчейне. Один токен может представлять часть или целый объект: недвижимость, золото,
            искусство, сырьё и многое другое. Токенизация RWA позволяет дробить владение дорогими активами на доступные
            доли, повышая их ликвидность и инвестиционную привлекательность. На платформе <strong>MB Hub</strong> мы
            создаём безопасную и прозрачную среду для токенизации и торговли такими активами.
          </p>
        </section>

        {/* Заголовок списка */}
        <div className="text-center mb-6 sm:mb-8">
          <h3 className="text-2xl font-bold uppercase tracking-wide" style={{ color: 'var(--primary)' }}>
            Выбери свой RWA
          </h3>
          <p className="mt-2 text-sm sm:text-base" style={{ color: 'var(--muted)' }}>
            Предложения по токенизации реальных активов от партнёров MB Hub.
          </p>
        </div>

        {/* Сетка карточек эмитентов */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {rwaData.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl border shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
              style={{ borderColor: 'var(--border)', background: 'var(--card)' }}
            >
              <div>
                <h4 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: 'var(--primary)' }}>
                  {item.name}
                </h4>
                <p className="mb-2 text-sm sm:text-base" style={{ color: 'var(--muted)' }}>
                  <strong style={{ color: 'var(--text)' }}>Количество токенов:</strong> {item.tokens}
                </p>
                <p className="mb-2 text-sm sm:text-base" style={{ color: 'var(--muted)' }}>
                  <strong style={{ color: 'var(--text)' }}>Актив:</strong> {item.asset}
                </p>
                <p className="text-sm sm:text-base" style={{ color: 'var(--muted)' }}>
                  <strong style={{ color: 'var(--text)' }}>Привязка:</strong> {item.ratio}
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between gap-3">
                <button
                  className="px-4 py-2 rounded-md font-semibold w-1/2 text-center"
                  style={{ background: 'var(--primary)', color: 'var(--primary-contrast)' }}
                >
                  Купить RWA
                </button>
                <button
                  className="px-4 py-2 rounded-md font-semibold w-1/2 text-center border"
                  style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}
                >
                  Продать RWA
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
