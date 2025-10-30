// src/pages/TokenizationPage.jsx
import React from 'react';

export default function TokenizationPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      {/* Hero */}
      <section className="container mx-auto px-4 sm:px-6 py-10 sm:py-14 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Токенизация: <span style={{ color: 'var(--primary)' }}>Будущее финансов</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg max-w-3xl mx-auto" style={{ color: 'var(--muted)' }}>
          Превратите реальные активы и финансовые показатели в цифровые токены на блокчейне.
        </p>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 sm:px-6 pb-16 space-y-8 sm:space-y-10">
        {/* Что такое токенизация */}
        <div
          className="rounded-2xl p-6 sm:p-8 border"
          style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold">
            Что такое <span style={{ color: 'var(--primary)' }}>Токенизация</span>?
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            Токенизация — это процесс преобразования прав на владение реальными активами или финансовыми показателями
            в цифровые токены, которые хранятся и управляются на блокчейне. Эти токены могут представлять долю в
            компании, право на часть будущей прибыли, владение недвижимостью или даже уникальными предметами искусства.
            На платформе <strong>MB Hub</strong> токенизация открывает новые горизонты для привлечения капитала и инвестирования.
          </p>
        </div>

        {/* Токенизация продукции */}
        <div
          className="rounded-2xl p-6 sm:p-8 border"
          style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold">
            Токенизация <span style={{ color: 'var(--primary)' }}>реальной продукции</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            Представьте, что компания <span style={{ color: 'var(--primary)' }}>ООО «ЧИТАЙ-ГОРОД»</span>, крупный книжный
            ритейлер, решает токенизировать часть своего будущего тиража эксклюзивных изданий. Вместо традиционного финансирования
            они выпускают токены на платформе MB Hub. Каждый токен может давать право на получение одного экземпляра книги,
            скидку на будущие покупки или долю от прибыли с продаж этого тиража. Инвесторы, покупая эти токены, напрямую
            финансируют производство и маркетинг, а взамен получают не только потенциальную прибыль, но и эксклюзивные преимущества.
          </p>
          <p className="mt-3 text-sm sm:text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            Другой пример: <span style={{ color: 'var(--primary)' }}>фермерское хозяйство</span> может токенизировать будущий урожай,
            позволяя инвесторам заранее приобрести долю в нём. Или <span style={{ color: 'var(--primary)' }}>музыкальный лейбл</span> может
            токенизировать права на новый альбом, давая держателям токенов часть роялти. Это создаёт прямую связь между
            производителем и инвестором, минуя посредников и делая инвестиции более доступными и прозрачными.
          </p>
        </div>

        {/* Токенизация показателей компании */}
        <div
          className="rounded-2xl p-6 sm:p-8 border"
          style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold">
            Токенизация <span style={{ color: 'var(--primary)' }}>показателей компании</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            Токенизация не ограничивается физическими активами. Компании могут выпускать токены, привязанные к своим
            финансовым показателям, таким как{' '}
            <span style={{ color: 'var(--primary)' }}>выручка, чистая прибыль или операционный денежный поток (cash flow)</span>.
            Например, стартап с высоким потенциалом роста, но ограниченным доступом к традиционному банковскому финансированию,
            может выпустить токены, которые дают право на процент от будущей выручки компании в течение определённого периода.
          </p>
          <p className="mt-3 text-sm sm:text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            Это позволяет инвесторам получать доход, напрямую зависящий от успеха компании, без необходимости владеть
            акциями или долговыми обязательствами. Для эмитентов это гибкий способ привлечения капитала, который не
            размывает долю владения и не увеличивает долговую нагрузку. Платформа MB Hub обеспечивает прозрачность и
            автоматизацию выплат через смарт-контракты, гарантируя, что держатели токенов получают свою долю своевременно
            и без лишних сложностей.
          </p>
        </div>

        {/* Преимущества */}
        <div
          className="rounded-2xl p-6 sm:p-8 border"
          style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold">
            Преимущества <span style={{ color: 'var(--primary)' }}>токенизации</span> на MB Hub
          </h2>
          <ul className="mt-4 space-y-2 text-sm sm:text-base">
            <li>
              <span className="font-semibold" style={{ color: 'var(--primary)' }}>Доступность:</span>{' '}
              <span style={{ color: 'var(--muted)' }}>
                Снижение барьеров для входа как для эмитентов, так и для инвесторов.
              </span>
            </li>
            <li>
              <span className="font-semibold" style={{ color: 'var(--primary)' }}>Ликвидность:</span>{' '}
              <span style={{ color: 'var(--muted)' }}>
                Токенизированные активы могут быть легко проданы и куплены на вторичном рынке.
              </span>
            </li>
            <li>
              <span className="font-semibold" style={{ color: 'var(--primary)' }}>Прозрачность:</span>{' '}
              <span style={{ color: 'var(--muted)' }}>
                Все транзакции и условия фиксируются в блокчейне и смарт-контрактах.
              </span>
            </li>
            <li>
              <span className="font-semibold" style={{ color: 'var(--primary)' }}>Гибкость:</span>{' '}
              <span style={{ color: 'var(--muted)' }}>
                Возможность создавать уникальные финансовые инструменты, адаптированные под конкретные нужды.
              </span>
            </li>
            <li>
              <span className="font-semibold" style={{ color: 'var(--primary)' }}>Эффективность:</span>{' '}
              <span style={{ color: 'var(--muted)' }}>
                Снижение затрат и времени на привлечение капитала за счёт автоматизации процессов.
              </span>
            </li>
          </ul>

          {/* Единственный блок с красными акцентами остаётся */}
          <div
            className="mt-6 p-4 rounded-md"
            style={{ background: 'var(--accent-bg)', borderLeft: '4px solid var(--accent)' }}
          >
            <p className="text-sm sm:text-base">
              На MB Hub мы используем передовые технологии блокчейна и искусственного интеллекта, чтобы сделать процесс
              токенизации максимально простым, безопасным и выгодным для всех участников рынка.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
