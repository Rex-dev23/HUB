import React from 'react';

export default function LoginRegister() {
  const handleSubmit = (e, who) => {
    e.preventDefault();
    alert(`${who}: форма отправлена (демо)`);
  };
  return (
    <>
      <section className="login-register-hero">
        <div className="container">
          <h1 className="login-register-title">Вход / Регистрация</h1>
          <p className="login-register-subtitle">Присоединяйтесь к MB Hub.</p>
        </div>
      </section>

      <section className="forms-section">
        <div className="container">
          <div className="form-grid">
            {/* Эмитенты */}
            <div className="form-card">
              <h2 className="form-title">Для эмитентов</h2>
              <form className="registration-form" onSubmit={(e)=>handleSubmit(e,'Эмитент')}>
                <div className="form-group"><label>Название компании</label><input required /></div>
                <div className="form-group"><label>ФИО руководителя</label><input required /></div>
                <div className="form-group"><label>E-mail руководителя</label><input type="email" required /></div>
                <div className="form-group"><label>ИНН</label><input required /></div>
                <div className="form-group checkbox-group"><input type="checkbox" required /><label>Согласие на обработку ПД</label></div>
                <button type="submit" className="btn-primary">Зарегистрироваться</button>
                <button type="button" className="btn-kyc" onClick={()=>alert('KYC/AML (демо)')}>KYC/AML проверка</button>
              </form>
            </div>

            {/* Инвесторы */}
            <div className="form-card">
              <h2 className="form-title">Для инвесторов</h2>
              <form className="registration-form" onSubmit={(e)=>handleSubmit(e,'Инвестор')}>
                <div className="form-group"><label>ФИО</label><input required /></div>
                <div className="form-group"><label>E-mail</label><input type="email" required /></div>
                <div className="form-group"><label>Серия/номер паспорта</label><input required /></div>
                <div className="form-group"><label>Адрес регистрации</label><input required /></div>
                <div className="form-group checkbox-group"><input type="checkbox" required /><label>Согласие на обработку ПД</label></div>
                <button type="submit" className="btn-primary">Зарегистрироваться</button>
                <button type="button" className="btn-kyc" onClick={()=>alert('KYC/AML (демо)')}>KYC/AML проверка</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
