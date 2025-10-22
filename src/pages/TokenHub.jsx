import React, { useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend } from 'chart.js';
Chart.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const issuers = [
  { code:'TMP', name:'Эмитент A', company:'ООО «ТОЧКА МАРКЕТПЛЕЙСЫ»' },
  { code:'NEX', name:'Эмитент B', company:'АО «НЕКСТ ТЕХНОЛОДЖИ»' },
  { code:'GRT', name:'Эмитент C', company:'ПАО «ГРАНТ-ИНВЕСТ»' },
  { code:'ALP', name:'Эмитент D', company:'ООО «АЛЬФА ПРОДАКШН»' },
  { code:'QNT', name:'Эмитент E', company:'АО «КВАНТ СИСТЕМС»' },
  { code:'MTR', name:'Эмитент F', company:'ООО «МЕТРОЛОГИЯ»' },
  { code:'SPC', name:'Эмитент G', company:'ПАО «СПЕКТР ХОЛДИНГ»' },
  { code:'VRG', name:'Эмитент H', company:'АО «ВЕРГОН»' },
  { code:'LNX', name:'Эмитент I', company:'ООО «ЛИНКС ТЕХНО»' },
  { code:'ECO', name:'Эмитент J', company:'ПАО «ЭКО ЭНЕРДЖИ»' },
];

export default function TokenHub() {
  const data = useMemo(() => ({
    labels: ['Пн','Вт','Ср','Чт','Пт'],
    datasets: [{
      label: 'Цена токена',
      data: [100,105,103,110,115],
      fill: false,
      borderWidth: 2,
      tension: 0.35
    }]
  }), []);

  const options = useMemo(()=>({
    plugins:{ legend:{display:false} },
    scales:{ x:{ grid:{display:false}}, y:{ grid:{display:false}, display:false} },
    responsive: true,
    maintainAspectRatio: false
  }), []);

  return (
    <>
      <section className="tokenhub-hero">
        <div className="container">
          <h1 className="tokenhub-title">TokenHub</h1>
          <p className="tokenhub-subtitle">Исследуйте токены эмитентов и инвестируйте в будущее.</p>
          <div className="hero-stats">
            <div className="stat-item"><span className="stat-number">10</span><span className="stat-label">Эмитентов</span></div>
            <div className="stat-item"><span className="stat-number">MBF-1</span><span className="stat-label">Сеть</span></div>
            <div className="stat-item"><span className="stat-number">24/7</span><span className="stat-label">Торговля</span></div>
          </div>
          <div style={{height:140, marginTop:'1rem', background:'var(--card)', borderRadius:'12px', padding:'12px'}}>
            <Line data={data} options={options} />
          </div>
        </div>
      </section>

      <section className="issuers-list">
        <div className="container">
          <div className="section-header">
            <h2>Доступные эмитенты</h2>
            <p>Выберите эмитента для просмотра токенов и показателей</p>
          </div>
          <div className="issuer-cards-grid" id="issuer-cards-container">
            {issuers.map((e, i)=>(
              <div className="issuer-card" key={i}>
                <h3>{e.name}</h3>
                <p className="issuer-company">{e.company}</p>
                <p><strong>Код токена:</strong> {e.code}</p>
                <p><strong>Сеть:</strong> MBF-1</p>
                <div className="issuer-actions">
                  <button className="btn-primary">Купить токены</button>
                  <button className="btn-secondary">Продать токены</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
