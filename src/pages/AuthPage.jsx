import React, { useState } from 'react';

export default function AuthPage() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e, role) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(`${role}: форма отправлена (демо). Подключим бэкенд позже.`);
    }, 400);
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      {/* Hero */}
      <section className="container mx-auto px-4 sm:px-6 py-10 sm:py-14 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold">Вход / Регистрация</h1>
        <p className="mt-3 text-base sm:text-lg max-w-3xl mx-auto" style={{ color: 'var(--muted)' }}>
          Присоединяйтесь к MB Hub и откройте новые возможности для инвестиций и роста.
        </p>
      </section>

      {/* Forms */}
      <section className="container mx-auto px-4 sm:px-6 pb-16">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Эмитенты */}
          <article
            className="rounded-2xl border p-6 sm:p-8 shadow-sm"
            style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
          >
            <h2 className="text-xl sm:text-2xl font-semibold">Вход / регистрация для эмитентов</h2>

            <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={(e) => onSubmit(e, 'Эмитент')}>
              <div className="col-span-1 sm:col-span-2">
                <label className="block text-sm mb-1" htmlFor="em-company">Название компании</label>
                <input id="em-company" required
                  className="w-full rounded-md border px-3 py-2"
                  style={{ background: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--text)' }}
                  placeholder="ООО «Пример»"
                />
              </div>

              <div>
                <label className="block text-sm mb-1" htmlFor="em-ceo">ФИО руководителя</label>
                <input id="em-ceo" required
                  className="w-full rounded-md border px-3 py-2"
                  style={{ background: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--text)' }}
                  placeholder="Иванов И.И."
                />
              </div>
              <div>
                <label className="block text-sm mb-1" htmlFor="em-email">E-mail руководителя</label>
                <input id="em-email" type="email" required
                  className="w-full rounded-md border px-3 py-2"
                  style={{ background: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--text)' }}
                  placeholder="ceo@example.com"
                />
              </div>

              <div>
                <label className="block text-sm mb-1" htmlFor="em-inn">ИНН</label>
                <input id="em-inn" required
                  className="w-full rounded-md border px-3 py-2"
                  style={{ background: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--text)' }}
                  placeholder="1234567890"
                />
              </div>
              <div>
                <label className="block text-sm mb-1" htmlFor="em-kpp">КПП</label>
                <input id="em-kpp"
                  className="w-full rounded-md border px-3 py-2"
                  style={{ background: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--text)' }}
                  placeholder="123456789"
                />
              </div>

              <div>
                <label className="block text-sm mb-1" htmlFor="em-ogrnip">ОГРНИП</label>
                <input id="em-ogrnip"
                  className="w-full rounded-md border px-3 py-2"
                  style={{ background: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--text)' }}
                  placeholder="1234567890123"
                />
              </div>
              <div>
                <label className="block text-sm mb-1" htmlFor="em-capital">Уставный капитал</label>
                <input id="em-capital"
                  className="w-full rounded-md border px-3 py-2"
                  style={{ background: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--text)' }}
                  placeholder="1 000 000 ₽"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm mb-1" htmlFor="em-okved-main">Основной вид деятельности (+код ОКВЭД)</label>
                <input id="em-okved-main"
                  className="w-full rounded-md border px-3 py-2"
                  style={{ background: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--text)' }}
                  placeholder="62.01 Разработка компьютерного ПО"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm mb-1" htmlFor="em-okved-extra">Доп. виды деятельности (+коды ОКВЭД)</label>
                <input id="em-okved-extra"
                  className="w-full rounded-md border px-3 py-2"
                  style={{ background: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--text)' }}
                  placeholder="62.02; 63.11"
                />
              </div>

              <div>
                <label className="block text-sm mb-1" htmlFor="em-regdate">Дата регистрации</label>
                <input id="em-regdate" type="date"
                  className="w-full rounded-md border px-3 py-2"
                  style={{ background: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--text)' }}
                />
              </div>
              <div>
                <label className="block text-sm mb-1" htmlFor="em-legal">Юридический адрес</label>
                <input id="em-legal"
                  className="w-full rounded-md border px-3 py-2"
                  style={{ background: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--text)' }}
                  placeholder="г. Москва, ул. Пример, д. 1"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="inline-flex items-center gap-2 text-sm">
                  <input type="checkbox" required style={{ accentColor: 'var(--primary)' }} />
                  Согласие на обработку персональных данных
                </label>
              </div>

              <div className="sm:col-span-2 flex flex-wrap gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-5 py-3 rounded-md font-semibold"
                  style={{ background: 'var(--primary)', color: 'var(--primary-contrast)', opacity: loading ? 0.8 : 1 }}
                >
                  {loading ? 'Отправка…' : 'Зарегистрироваться'}
                </button>
                <button
                  type="button"
                  onClick={(e) => onSubmit(e, 'Эмитент — KYC/AML')}
                  className="px-5 py-3 rounded-md font-semibold border"
                  style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}
                >
                  KYC/AML проверка
                </button>
              </div>
            </form>

            <p className="mt-6 text-sm" style={{ color: 'var(--muted)' }}>
              <strong>Дополнительно:</strong> Эмитентам важна полная и точная информация для регуляторных проверок и привлечения инвесторов.
            </p>
          </article>

          {/* Инвесторы */}
          <article
            className="rounded-2xl border p-6 sm:p-8 shadow-sm"
            style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
          >
            <h2 className="text-xl sm:text-2xl font-semibold">Вход / регистрация для инвесторов</h2>

            <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={(e) => onSubmit(e, 'Инвестор')}>
              <div>
                <label className="block text-sm mb-1" htmlFor="inv-fio">ФИО</label>
                <input id="inv-fio" required
                  className="w-full rounded-md border px-3 py-2"
                  style={{ background: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--text)' }}
                  placeholder="Петров П.П."
                />
              </div>
              <div>
                <label className="block text-sm mb-1" htmlFor="inv-email">E-mail</label>
                <input id="inv-email" type="email" required
                  className="w-full rounded-md border px-3 py-2"
                  style={{ background: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--text)' }}
                  placeholder="investor@example.com"
                />
              </div>

              <div>
                <label className="block text-sm mb-1" htmlFor="inv-passport">Серия и номер паспорта</label>
                <input id="inv-passport" required
                  className="w-full rounded-md border px-3 py-2"
                  style={{ background: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--text)' }}
                  placeholder="0000 000000"
                />
              </div>
              <div>
                <label className="block text-sm mb-1" htmlFor="inv-address">Адрес регистрации</label>
                <input id="inv-address" required
                  className="w-full rounded-md border px-3 py-2"
                  style={{ background: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--text)' }}
                  placeholder="г. Москва, ул. Пример, д. 2"
                />
              </div>

              <div>
                <label className="block text-sm mb-1" htmlFor="inv-phone">Телефон</label>
                <input id="inv-phone" type="tel"
                  className="w-full rounded-md border px-3 py-2"
                  style={{ background: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--text)' }}
                  placeholder="+7 (900) 000-00-00"
                />
              </div>
              <div>
                <label className="block text-sm mb-1" htmlFor="inv-birth">Дата рождения</label>
                <input id="inv-birth" type="date"
                  className="w-full rounded-md border px-3 py-2"
                  style={{ background: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--text)' }}
                />
              </div>

              <div className="sm:col-span-2">
                <label className="inline-flex items-center gap-2 text-sm">
                  <input type="checkbox" required style={{ accentColor: 'var(--primary)' }} />
                  Согласие на обработку персональных данных
                </label>
              </div>

              <div className="sm:col-span-2 flex flex-wrap gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-5 py-3 rounded-md font-semibold"
                  style={{ background: 'var(--primary)', color: 'var(--primary-contrast)', opacity: loading ? 0.8 : 1 }}
                >
                  {loading ? 'Отправка…' : 'Зарегистрироваться'}
                </button>
                <button
                  type="button"
                  onClick={(e) => onSubmit(e, 'Инвестор — KYC/AML')}
                  className="px-5 py-3 rounded-md font-semibold border"
                  style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}
                >
                  KYC/AML проверка
                </button>
              </div>
            </form>

            <p className="mt-6 text-sm" style={{ color: 'var(--muted)' }}>
              <strong>Дополнительно:</strong> KYC/AML обязателен для безопасности и доступа к расширенным возможностям.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
