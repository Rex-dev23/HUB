import React from 'react';

export default function RWATokensPage() {
  const rwaData = [
    { name: 'ООО «Читай-Город»', tokens: '1,000,000 RWA-токенов', asset: 'Книги и печатная продукция', ratio: '1 токен = 1 книга' },
    { name: 'ООО «Агротех»', tokens: '500,000 RWA-токенов', asset: 'Урожай зерна', ratio: '5 токенов = 1 тонна зерна' },
    { name: 'ООО «Солар Энерджи»', tokens: '2,000,000 RWA-токенов', asset: 'Солнечные панели и энергия', ratio: '1000000 токенов = 1 МВт мощности' },
    { name: 'ООО «Золотой Рудник»', tokens: '750,000 RWA-токенов', asset: 'Золото в хранилище', ratio: '1 токен = 0,1 грамма золота' },
    { name: 'ООО «ЭкоДевелопмент»', tokens: '1,500,000 RWA-токенов', asset: 'Жилая недвижимость в строительстве', ratio: '100000 токенов = 1 квартира' },
    { name: 'ООО «ВинПро»', tokens: '300,000 RWA-токенов', asset: 'Партии вина премиум-класса', ratio: '1 токен = 1 бутылка вина' },
  ];

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center mb-6" style={{ color: 'var(--primary)' }}>
        RWA-токены
      </h1>

      {/* Определение RWA */}
      <section className="max-w-4xl mx-auto text-center mb-10">
        <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
          <strong style={{ color: 'var(--primary)' }}>RWA (Real World Assets)</strong> — это цифровые представления реальных активов, которые существуют в физическом мире, но токенизированы на блокчейне.
          Один токен может представлять часть или целый объект.
        </p>
      </section>

      {/* Слоган */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold uppercase tracking-wide" style={{ color: 'var(--primary)' }}>
          Выбери свой RWA
        </h2>
      </div>

      {/* Карточки */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {rwaData.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl shadow-2xl border hover:scale-105 transition-transform duration-300"
            style={{ borderColor: 'var(--primary)', background: 'var(--card)' }}
          >
            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--primary)' }}>{item.name}</h3>
            <p className="mb-2" style={{ color: 'var(--muted)' }}>
              <strong style={{ color: 'var(--text)' }}>Количество токенов:</strong> {item.tokens}
            </p>
            <p className="mb-2" style={{ color: 'var(--muted)' }}>
              <strong style={{ color: 'var(--text)' }}>Актив:</strong> {item.asset}
            </p>
            <p style={{ color: 'var(--muted)' }}>
              <strong style={{ color: 'var(--text)' }}>Привязка:</strong> {item.ratio}
            </p>
          </div>
        ))}
      </section>

      {/* Заключительный блок */}
      <section className="max-w-4xl mx-auto text-center mt-16 p-6 rounded-2xl shadow-xl border" style={{ borderColor: 'var(--primary)', background: 'var(--card)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>RWA — мост между реальным и цифровым</h2>
        <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
          На MB Hub каждый RWA-токен — это возможность инвестировать в реальные активы с прозрачностью блокчейна.
          Технологии и доверие объединяются, создавая новую эру цифровых инвестиций.
        </p>
      </section>
    </div>
  );
}
