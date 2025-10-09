import React, { useState } from "react";

export default function AuthPage() {
  const [role, setRole] = useState("investor"); // 'investor' | 'emitter'

  const handleSubmit = (e, type) => {
    e.preventDefault();
    alert(`${type} форма успешно отправлена!`);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-8" style={{ color: "#ffa200" }}>
        Вход / Регистрация
      </h2>

      {/* Переключатель ролей */}
      <div className="max-w-3xl mx-auto mb-6">
        <div className="inline-flex rounded-xl p-1 border" style={{ borderColor: "#ffd699", boxShadow: "0 1px 12px rgba(255,162,0,0.15)" }}>
          <button
            type="button"
            aria-pressed={role === "investor"}
            onClick={() => setRole("investor")}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
              role === "investor" ? "text-white" : "text-gray-700 hover:text-gray-900"
            }`}
            style={role === "investor" ? { background: "#ffa200" } : {}}
          >
            Для инвесторов
          </button>
          <button
            type="button"
            aria-pressed={role === "emitter"}
            onClick={() => setRole("emitter")}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
              role === "emitter" ? "text-white" : "text-gray-700 hover:text-gray-900"
            }`}
            style={role === "emitter" ? { background: "#ffa200" } : {}}
          >
            Для эмитентов
          </button>
        </div>
      </div>

      {/* ФОРМА ДЛЯ ИНВЕСТОРА — Рис.1 */}
      {role === "investor" && (
        <section
          className="max-w-3xl mx-auto p-6 rounded-2xl shadow-2xl border"
          style={{ borderColor: "#ffa200" }}
        >
          <h3 className="text-2xl font-semibold mb-6" style={{ color: "#ffa200" }}>
            Вход / регистрация для инвесторов
          </h3>

          <form onSubmit={(e) => handleSubmit(e, "Инвестор")}>
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="ФИО" className="border p-3 rounded" required />
              <input type="email" placeholder="E-mail" className="border p-3 rounded" required />

              <input type="text" placeholder="Серия и номер паспорта" className="border p-3 rounded" required />
              <input type="text" placeholder="Адрес регистрации" className="border p-3 rounded" required />

              <input type="tel" placeholder="Телефон" className="border p-3 rounded" />
              {/* Примечание: placeholder для type="date" браузером не показывается — это ок */}
              <input type="date" className="border p-3 rounded" />
            </div>

            <label className="mt-5 flex items-center gap-2 text-sm">
              <input type="checkbox" required /> Согласие на обработку персональных данных
            </label>

            <button
              type="submit"
              className="mt-6 px-6 py-3 rounded-md font-semibold shadow-lg"
              style={{ background: "#ffa200", color: "#fff" }}
            >
              KYC/AML проверка
            </button>
          </form>
        </section>
      )}

      {/* ФОРМА ДЛЯ ЭМИТЕНТА — Рис.2 */}
      {role === "emitter" && (
        <section
          className="max-w-3xl mx-auto p-6 rounded-2xl shadow-2xl border"
          style={{ borderColor: "#ffa200" }}
        >
          <h3 className="text-2xl font-semibold mb-6" style={{ color: "#ffa200" }}>
            Вход / регистрация для эмитентов
          </h3>

          <form onSubmit={(e) => handleSubmit(e, "Эмитент")}>
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Название компании" className="border p-3 rounded" required />
              <input type="text" placeholder="ФИО руководителя" className="border p-3 rounded" required />
              <input type="email" placeholder="E-mail руководителя" className="border p-3 rounded" required />
              <input type="tel" placeholder="Телефон руководителя" className="border p-3 rounded" />
              <input type="text" placeholder="ИНН" className="border p-3 rounded" required />
              <input type="text" placeholder="КПП" className="border p-3 rounded" />
              <input type="text" placeholder="ОГРНИП" className="border p-3 rounded" />
              <input type="text" placeholder="Основной вид деятельности (+код ОКВЭД)" className="border p-3 rounded" />
              <input type="text" placeholder="Доп. виды деятельности (+коды ОКВЭД)" className="border p-3 rounded" />
              <input type="text" placeholder="Уставный капитал" className="border p-3 rounded" />
              <input type="date" className="border p-3 rounded" />
              <input type="text" placeholder="Юридический адрес" className="border p-3 rounded md:col-span-2" />
            </div>

            <label className="mt-5 flex items-center gap-2 text-sm">
              <input type="checkbox" required /> Согласие на обработку персональных данных
            </label>

            <button
              type="submit"
              className="mt-6 px-6 py-3 rounded-md font-semibold shadow-lg"
              style={{ background: "#ffa200", color: "#fff" }}
            >
              KYC/AML проверка
            </button>
          </form>
        </section>
      )}
    </div>
  );
}
