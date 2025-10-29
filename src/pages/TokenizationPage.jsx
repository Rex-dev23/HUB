import React from 'react';

export default function TokenizationPage() {
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center mb-10" style={{ color: 'var(--primary)' }}>
        Токенизация в MB Hub
      </h1>

      {/* Блок 1 */}
      <section className="max-w-5xl mx-auto mb-12 p-6 rounded-2xl shadow-xl border" style={{ borderColor: 'var(--primary)', background: 'var(--card)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>Что такое токенизация?</h2>
        <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
          Токенизация — это процесс преобразования реальных активов, бизнес-показателей или прав в цифровые токены, размещаемые на платформе MB Hub.
          Она позволяет компаниям (Эмитентам) привлекать инвестиции, а инвесторам — получать доли и доходность от реальных проектов.
        </p>
      </section>

      {/* Блок 2 */}
      <section className="max-w-5xl mx-auto mb-12 p-6 rounded-2xl shadow-2xl border" style={{ borderColor: 'var(--primary)', background: 'var(--card)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>Токенизация продукции</h2>
        <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
          Эмитент может затокенизировать свою продукцию, создавая цифровые аналоги товаров, услуг или прав на владение ими. Например,
          компания ООО «ЧИТАЙ-ГОРОД» решила выпустить токены, обеспеченные реальными книгами. Каждый токен символизирует долю в партии книг,
          и инвесторы могут получать доход в зависимости от продаж.
        </p>
        <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
          Другой пример — ООО «АГРОТЕХ». Компания выпускает токены, обеспеченные урожаем зерна. Инвесторы, покупая такие токены, участвуют
          в распределении прибыли от реализации сельхозпродукции. Это делает процесс инвестиций прозрачным и технологичным.
        </p>
      </section>

      {/* Блок 3 */}
      <section className="max-w-5xl mx-auto mb-12 p-6 rounded-2xl shadow-2xl border" style={{ borderColor: 'var(--primary)', background: 'var(--card)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>Токенизация показателей компании</h2>
        <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
          Токенизация может быть основана не только на продукции, но и на ключевых финансовых показателях компании: выручке, чистой прибыли, EBITDA или денежном потоке.
          В этом случае компания выпускает токены, отражающие долю в определённом финансовом результате. Например, 1 токен = 0,0001% от чистой прибыли за год.
        </p>
        <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
          Такой подход создаёт прозрачную и измеримую систему взаимодействия между инвесторами и эмитентами, усиливая доверие и снижая барьеры для инвестиций.
        </p>
      </section>

      {/* Блок 4 */}
      <section className="max-w-5xl mx-auto mb-12 p-6 rounded-2xl shadow-2xl border" style={{ borderColor: 'var(--primary)', background: 'var(--card)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>Преимущества токенизации на MB Hub</h2>
        <ul className="list-disc pl-6 text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
          <li>✅ Доступность: Снижение барьеров для входа как для эмитентов, так и для инвесторов;</li>
          <li>✅ Ликвидность: Токенизированные активы могут быть легко проданы и куплены на вторичном рынке;</li>
          <li>✅ Прозрачность: Все транзакции и условия фиксируются в блокчейне и смарт-контрактах;</li>
          <li>✅ Гибкость: Возможность создавать уникальные финансовые инструменты, адаптированные под конкретные нужды;</li>
          <li>✅ Эффективность: Снижение затрат и времени на привлечение капитала за счет автоматизации процессов.</li>
        </ul>
      </section>

      {/* Блок 5 */}
      <section className="max-w-5xl mx-auto mb-16 p-6 rounded-2xl shadow-2xl border text-center" style={{ borderColor: 'var(--primary)', background: 'var(--card)' }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>MB Hub — пространство будущего инвестиций</h2>
        <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
          Наша цель — объединить реальный сектор и цифровую экономику, предоставив компаниям и инвесторам надёжный инструмент взаимодействия через токенизацию.
          Будущее инвестиций уже здесь, на платформе MB Hub.
        </p>
      </section>
    </div>
  );
}
