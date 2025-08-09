import React from 'react';
import './App.css';

const ActivityForm = ({ onClose }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Şimdilik veri girişi olmayacak, sadece formu kapatma fonksiyonu çagrılacak.
    if (onClose) onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="activity-form">
      <label>
        Faktör:
        <select name="faktor">
          <option value="">Seçiniz</option>
          <option value="scope">Scope</option>
        </select>
      </label>
      <label>
        Hesaplama Türü:
        <select name="hesaplamaTuru">
          <option value="">Seçiniz</option>
        </select>
      </label>
      <label>
        Ad:
        <input type="text" name="ad" />
      </label>
      <label>
        Kod:
        <input type="text" name="kod" />
      </label>
      <label>
        Döküman:
        <input type="file" name="dokuman" />
      </label>
      <label>
        Açıklama:
        <textarea name="aciklama"></textarea>
      </label>
      <label>
        Türkçe Ad:
        <input type="text" name="turkceAd" />
      </label>
      <label>
        Türkçe Açıklama:
        <textarea name="turkceAciklama"></textarea>
      </label>
      <button type="submit">Kaydet</button>
    </form>
  );
};

export default ActivityForm;