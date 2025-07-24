import React from "react";
import './App.css';

// Örnek veri
const dummyData = [
  { sira: 1, faktor: "_", ad: "Doğrudan Emisyonlar", durum: 'Aktif', tipler: ' ', islemler: '...' },
  { sira: 2, faktor: '010_010 - Doğrudan Emisyonlar', ad: "Sabit Yanma", durum: 'Aktif', tipler: '', islemler: '...' },
];

// onNewActivity: yeni aktivite ekleme fonksiyonu, butona tıklanınca formu açmak için kullanılacak.
const ActivitiesTable = ({ onNewActivity }) => {
  return (
    <div className="activity-container">
      <h2 className="activity-title">Aktiviteler</h2>
      <div className="activity-card">
        {/* Yeni Aktivite butonu */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
          <button className="activity-btn" onClick={onNewActivity}>Yeni Aktivite</button>
        </div>
        {/* Aktivite tablosu */}
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
            {dummyData.map((activity, index) => (
              <tr key={index}>
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

export default ActivitiesTable;