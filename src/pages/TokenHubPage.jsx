import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router-dom';

const priceData = [
  { day: 'Пн', price: 100 },
  { day: 'Вт', price: 105 },
  { day: 'Ср', price: 103 },
  { day: 'Чт', price: 110 },
  { day: 'Пт', price: 115 },
];

const emitters = [
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

export default function TokenHubPage() {
  return (
    <div className="min-h-screen">
      <header className="py-8 border-b" style={{ borderColor: 'var(--primary)' }}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold" style={{ color: 'var(--primary)' }}>TokenHub</h1>
            <p className="mt-2" style={{ color: 'var(--muted)' }}>Раздел для покупки и продажи токенов эмитентов на сети MBF-1</p>
          </div>
          <Link to="/#tokenhub" className="text-sm underline">На главную</Link>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {emitters.map((emitter, index) => (
          <div key={index} className="p-6 rounded-xl border shadow-sm" style={{ borderColor: 'var(--border)' }}>
            <h2 className="text-xl font-semibold mb-2">{emitter.name}</h2>
            <p className="text-sm mb-1" style={{ color: 'var(--muted)' }}>{emitter.company}</p>
            <p className="text-sm mb-1"><strong>Код токена:</strong> {emitter.code}</p>
            <p className="text-sm mb-3"><strong>Сеть:</strong> MBF-1</p>

            {/* Financial metrics */}
            <div className="mb-3">
              <h3 className="font-semibold text-sm mb-1">Показатели</h3>
              <ul className="text-xs space-y-1" style={{ color: 'var(--muted)' }}>
                <li>Выручка: 1,2 млрд ₽</li>
                <li>Чистая прибыль: 200 млн ₽</li>
                <li>EBITDA: 300 млн ₽</li>
                <li>Опер. прибыль: 250 млн ₽</li>
                <li>Долг: 500 млн ₽</li>
                <li>Опер. ДП: 220 млн ₽</li>
                <li>Инв. ДП: -100 млн ₽</li>
                <li>Капитализация: 2,5 млрд ₽</li>
                <li>ROI: 18%</li>
                <li>ROA: 12%</li>
                <li>ROE: 20%</li>
                <li>ROS: 15%</li>
              </ul>
            </div>

            {/* Multiples */}
            <div className="mb-3">
              <h3 className="font-semibold text-sm mb-1">Мультипликаторы</h3>
              <ul className="text-xs space-y-1">
                <li><span style={{ color: 'var(--accent)' }}>P/E: 12</span></li>
                <li>P/S: 4</li>
                <li>P/B: 2.5</li>
                <li>EV/EBITDA: 8</li>
              </ul>
            </div>

            {/* Token chart */}
            <div className="mb-4">
              <h3 className="font-semibold text-sm mb-1">Изменение цены токена</h3>
              <ResponsiveContainer width="100%" height={120}>
                <LineChart data={priceData}>
                  <XAxis dataKey="day" hide />
                  <YAxis hide />
                  <Tooltip />
                  <Line type="monotone" dataKey="price" stroke="var(--accent)" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button className="flex-1 py-2 rounded-md font-semibold" style={{ background: 'var(--primary)', color: 'var(--primary-contrast)' }}>
                Купить токены
              </button>
              <button className="flex-1 py-2 rounded-md font-semibold border" style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}>
                Продать токены
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
