// src/pages/DigitalAssetsPage.jsx
import React from 'react';

export default function DigitalAssetsPage() {
  const cfaData = [
    {
      name: 'ООО «ТехноИнвест»',
      tokens: '2,000,000 ЦФА',
      base: 'Токенизация выручки компании',
      type: 'Цифровые облигации',
      access: 'Доступно только квалифицированным инвесторам',
    },
    {
      name: 'ООО «ЭкоФуд»',
      tokens: '500,000 ЦФА',
      base: 'Продукция сельского хозяйства (зерно, фрукты)',
      type: 'Токенизированные товары',
      access: 'Доступно для неквалифицированных инвесторов',
    },
    {
      name: 'ООО «ЭнергоТрейд»',
      tokens: '1,000,000 ЦФА',
      base: 'Финансовые показатели (cash flow)',
      type: 'Цифровые акции',
      access: 'Доступно только квалифицированным инвесторам',
    },
    {
      name: 'ООО «Ритейл Групп»',
      tokens: '750,000 ЦФА',
      base: 'Ассортимент бытовой техники',
      type: 'Цифровые права требования',
      access: 'Доступно для неквалифицированных инвесторов',
    },
    {
      name: 'ООО «НедвижИнвест»',
      tokens: '3,000,000 ЦФА',
      base: 'Доход от аренды коммерческой недвижимости',
      type: 'Цифровые облигации',
      access: 'Доступно только квалифицированным инвесторам',
    },
    {
      name: 'ООО «ВайнХаус»',
      tokens: '150,000 ЦФА',
      base: 'Партии вина премиум-класса',
      type: 'Токенизированные товары',
      access: 'Доступно для неквалифицированных инвесторов',
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-10" style={{ color: 'var(--primary)' }}>
          Цифровые финансовые активы (ЦФА)
        </h1>

        {/* Определение */}
        <section className="max-w-4xl mx-auto text-center mb-10">
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            <strong style={{ color: 'var(--primary)' }}>Цифровые финансовые активы (ЦФА)</strong> — это цифровые права,
            привязанные к различным активам и оформленные через запись в распределённом реестре (блокчейне).
            По сути, это цифровые аналоги облигаций, векселей, акций и прав требования.
          </p>
        </section>

        {/* Цитата / заголовок сетки */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide" style={{ color: 'var(--primary)' }}>
            Выбери свой ЦФА
          </h2>
        </div>

        {/* Карточки эмитентов */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {cfaData.map((item, index) => {
            const isQualifiedOnly =
              item.access.includes('квалифицирован') && !item.access.includes('неквалифицирован');
            return (
              <div
                key={index}
                className="p-5 sm:p-6 rounded-2xl border shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
                style={{ borderColor: 'var(--border)', background: 'var(--card)' }}
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: 'var(--primary)' }}>
                    {item.name}
                  </h3>
                  <p className="mb-2 text-sm sm:text-base" style={{ color: 'var(--muted)' }}>
                    <strong style={{ color: 'var(--text)' }}>Количество ЦФА:</strong> {item.tokens}
                  </p>
                  <p className="mb-2 text-sm sm:text-base" style={{ color: 'var(--muted)' }}>
                    <strong style={{ color: 'var(--text)' }}>Базовый актив:</strong> {item.base}
                  </p>
                  <p className="mb-2 text-sm sm:text-base" style={{ color: 'var(--muted)' }}>
                    <strong style={{ color: 'var(--text)' }}>Вид ЦФА:</strong> {item.type}
                  </p>
                  <p className="text-sm sm:text-base" style={{ color: 'var(--muted)' }}>
                    <strong style={{ color: 'var(--text)' }}>Доступ:</strong>{' '}
                    <span style={{ color: isQualifiedOnly ? 'var(--accent)' : 'var(--primary)' }}>
                      {item.access}
                    </span>
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <button
                    className="px-4 py-2 rounded-md font-semibold w-1/2 text-center"
                    style={{ background: 'var(--primary)', color: 'var(--primary-contrast)' }}
                  >
                    Купить ЦФА
                  </button>
                  <button
                    className="px-4 py-2 rounded-md font-semibold w-1/2 text-center border"
                    style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}
                  >
                    Продать ЦФА
                  </button>
                </div>

                <div className="mt-4">
                  <div
                    className="w-full h-24 rounded-xl flex items-center justify-center italic text-xs sm:text-sm"
                    style={{ background: 'transparent', border: '1px dashed var(--border)', color: 'var(--muted)' }}
                  >
                    График торгов ЦФА (в разработке)
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* Законодательство */}
        <section
          className="max-w-4xl mx-auto text-center mt-14 sm:mt-16 p-5 sm:p-6 rounded-2xl border"
          style={{ borderColor: 'var(--border)', background: 'var(--card)' }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-3" style={{ color: 'var(--primary)' }}>
            Законодательство
          </h2>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            В России ЦФА регулируются Федеральным законом №259-ФЗ «О цифровых финансовых активах, цифровой валюте
            и о внесении изменений в отдельные законодательные акты Российской Федерации». Закон действует с{' '}
            <span style={{ color: 'var(--accent)' }}>1 января 2021 года</span>.
          </p>
        </section>
      </div>
    </div>
  );
}
