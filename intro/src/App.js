import React from 'react';
import Navi from './Navi';
import './App.css';

const App = () => {
  return (
    <div className="main-bg">
      <Navi />
      <div className="activity-container">
        <h2 className="activity-title">Aktivite</h2>
        <div className="activity-card">
          <div className="activity-row">
            <div className="activity-field">
              <label>Faktör:</label>
              <select><option>Seçiniz</option></select>
            </div>
            <div className="activity-field">
              <label>Aktivite Türü:</label>
              <select><option>Scope</option></select>
            </div>
            <div className="activity-field">
              <label>Sıra No:</label>
              <input type="number" value="0" />
            </div>
            <div className="activity-field">
              <label>Kod:</label>
              <input type="text" />
            </div>
          </div>
          <div className="activity-row">
            <div className="activity-field" style={{flex: 1}}>
              <label>Hesaplama Türü:</label>
              <select><option>Seçiniz</option></select>
            </div>
          </div>
          <div className="activity-row">
            <div className="activity-field" style={{flex: 1}}>
              <label>Ad:</label>
              <input type="text" />
            </div>
          </div>
          <div className="activity-row">
            <div className="activity-field" style={{flex: 1}}>
              <label>Döküman:</label>
              <input type="file" />
            </div>
          </div>
          <div className="activity-row">
            <div className="activity-field" style={{flex: 1}}>
              <label>Açıklama:</label>
              <textarea />
            </div>
          </div>
          <div className="activity-row">
            <div className="activity-field" style={{flex: 1}}>
              <label>Ad:</label>
              <input type="text" />
            </div>
          </div>
          <div className="activity-row">
            <div className="activity-field" style={{flex: 1}}>
              <label>Açıklama:</label>
              <textarea />
            </div>
          </div>
          <div className="activity-row" style={{justifyContent: 'flex-end'}}>
            <button className="activity-btn">Kaydet</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;