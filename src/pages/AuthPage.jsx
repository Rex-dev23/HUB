import React, { useState } from "react";

export default function AuthPage() {
  const [role, setRole] = useState("investor");

  const handleSubmit = (e, type) => {
    e.preventDefault();
    alert(`${type} форма успешно отправлена!`);
  };

  return (
    <div className="min-h-screen px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-8" style={{ color: 'var(--primary)' }}>
        Вход / Регистрация
      </h2>

      {/* Переключатель ролей */}
      <div className="max-w-3xl mx-auto mb-6">
        <div className="inline-flex rounded-xl p-1 border" style={{ borderColor: 'var(--primary)' }}>
          <button
            type="button"
            aria-pressed={role === "investor"}
            onClick={() => setRole("investor")}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${role === "investor" ? "" : "hover:opacity-80"}`}
            style={role === "investor" ? { background: 'var(--primary)', color: 'var(--primary-contrast)' } : { color: 'var(--text)' }}
          >
            Для инвесторов
          </button>
          <button
            type="button"
            aria-pressed={role === "emitter"}
            onClick={() => setRole("emitter")}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${role === "emitter" ? "" : "hover:opacity-80"}`}
            style={role === "emitter" ? { background: 'var(--primary)', color: 'var(--primary-contrast)' } : { color: 'var(--text)' }}
          >
            Для эмитентов
          </button>
        </div>
      </div>

      {/* Инвестор */}
      {role === "investor" && (
        <section className="max-w-3xl mx-auto p-6 rounded-2xl shadow-2xl border" style={{ borderColor: 'var(--primary)', background: 'var(--card)' }}>
          <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--primary)' }}>Вход / регистрация для инвесторов</h3>
          <form onSubmit={(e) => handleSubmit(e, "Инвестор")}>
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="ФИО" className="border p-3 rounded" required style={{ borderColor: 'var(--border)', background: 'var(--bg)' }} />
              <input type="email" placeholder="E-mail" className="border p-3 rounded" required style={{ borderColor: 'var(--border)', background: 'var(--bg)' }} />
              <input type="text" placeholder="Серия и номер паспорта" className="border p-3 rounded" required style={{ borderColor: 'var(--border)', background: 'var(--bg)' }} />
              <input type="text" placeholder="Адрес регистрации" className="border p-3 rounded" required style={{ borderColor: 'var(--border)', background: 'var(--bg)' }} />
              <input type="tel" placeholder="Телефон" className="border p-3 rounded" style={{ borderColor: 'var(--border)', background: 'var(--bg)' }} />
              <input type="date" className="border p-3 rounded" style={{ borderColor: 'var(--border)', background: 'var(--bg)' }} />
            </div>
            <label className="mt-5 flex items-center gap-2 text-sm" style={{ color: 'var(--muted)' }}>
              <input type="checkbox" required /> Согласие на обработку персональных данных
            </label>
            <button type="submit" className="mt-6 px-6 py-3 rounded-md font-semibold shadow" style={{ background: 'var(--primary)', color: 'var(--primary-contrast)' }}>
              KYC/AML проверка
            </button>
          </form>
        </section>
      )}

      {/* Эмитент */}
      {role === "emitter" && (
        <section className="max-w-3xl mx-auto p-6 rounded-2xl shadow-2xl border" style={{ borderColor: 'var(--primary)', background: 'var(--card)' }}>
          <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--primary)' }}>Вход / регистрация для эмитентов</h3>
          <form onSubmit={(e) => handleSubmit(e, "Эмитент")}>
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Название компании" className="border p-3 rounded" required style={{ borderColor: 'var(--border)', background: 'var(--bg)' }} />
              <input type="text" placeholder="ФИО руководителя" className="border p-3 rounded" required style={{ borderColor: 'var(--border)', background: 'var(--bg)' }} />
              <input type="email" placeholder="E-mail руководителя" className="border p-3 rounded" required style={{ borderColor: 'var(--border)', background: 'var(--bg)' }} />
              <input type="tel" placeholder="Телефон руководителя" className="border p-3 rounded" style={{ borderColor: 'var(--border)', background: 'var(--bg)' }} />
              <input type="text" placeholder="ИНН" className="border p-3 rounded" required style={{ borderColor: 'var(--border)', background: 'var(--bg)' }} />
              <input type="text" placeholder="КПП" className="border p-3 rounded" style={{ borderColor: 'var(--border)', background: 'var(--bg)' }} />
              <input type="text" placeholder="ОГРНИП" className="border p-3 rounded" style={{ borderColor: 'var(--border)', background: 'var(--bg)' }} />
              <input type="text" placeholder="Основной вид деятельности (+код ОКВЭД)" className="border p-3 rounded" style={{ borderColor: 'var(--border)', background: 'var(--bg)' }} />
              <input type="text" placeholder="Доп. виды деятельности (+коды ОКВЭД)" className="border p-3 rounded" style={{ borderColor: 'var(--border)', background: 'var(--bg)' }} />
              <input type="text" placeholder="Уставный капитал" className="border p-3 rounded" style={{ borderColor: 'var(--border)', background: 'var(--bg)' }} />
              <input type="date" className="border p-3 rounded" style={{ borderColor: 'var(--border)', background: 'var(--bg)' }} />
              <input type="text" placeholder="Юридический адрес" className="border p-3 rounded md:col-span-2" style={{ borderColor: 'var(--border)', background: 'var(--bg)' }} />
            </div>

            {/* Важный блок — красный */}
            <div className="mt-4 p-3 rounded-md" style={{ background: 'var(--accent-bg)', borderLeft: '4px solid var(--accent)' }}>
              <p className="text-sm">
                <span className="font-semibold" style={{ color: 'var(--accent)' }}>Важно:</span> данные должны соответствовать учредительным документам.
              </p>
            </div>

            <label className="mt-5 flex items-center gap-2 text-sm" style={{ color: 'var(--muted)' }}>
              <input type="checkbox" required /> Согласие на обработку персональных данных
            </label>
            <button type="submit" className="mt-6 px-6 py-3 rounded-md font-semibold shadow" style={{ background: 'var(--primary)', color: 'var(--primary-contrast)' }}>
              KYC/AML проверка
            </button>
          </form>
        </section>
      )}
    </div>
  );
}
