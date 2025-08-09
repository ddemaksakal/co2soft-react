import React from "react";
import { useNavigate } from "react-router-dom";
import './App.css';

const dummyData = [
  { sira: 1, faktor: "_", ad: "Doğrudan Emisyonlar", durum: 'Aktif', tipler: ' ', islemler: '...' },
  { sira: 2, faktor: '010_010 - Doğrudan Emisyonlar', ad: "Sabit Yanma", durum: 'Aktif', tipler: '', islemler: '...' },
];
// ActivitiesPage bileşeni, aktiviteleri listeleyen ve yeni aktivite ekleme butonu içeren bir sayfa
// useNavigate fonksiyonu ile yeni aktivite formuna yönlendirme yapılıyor
const ActivitiesPage = () => {
  const navigate = useNavigate();

// Yeni aktivite ekleme butonu tıklandığında /activities/new route'una yönlendirir
  return (
    <div className="activity-container">
      <h2 className="activity-title">Aktiviteler</h2>
      <div className="activity-card">
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
          <button className="activity-btn" onClick={() => navigate('/activities/new')}>
            Yeni Aktivite
          </button>
        </div>
        <table className="activity-table">
          <thead>
            <tr>
              <th>Sıra</th>
              <th>Faktör</th>
              <th>Ad</th>
              <th>Durum</th>
              <th>Tipler</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((activity) => (
              <tr key={activity.sira}>
                <td>{activity.sira}</td>
                <td>{activity.faktor}</td>
                <td>{activity.ad}</td>
                <td>{activity.durum}</td>
                <td>{activity.tipler}</td>
                <td>{activity.islemler}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActivitiesPage;
