import React, { useState } from 'react';
import './App.css'; // Sadece stil için gerekli

const ActivityForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    faktor: '',
    hesaplamaTuru: '',
    ad: '',
    kod: '',
    dokuman: '',
    aciklama: '',
    turkceAd: '',
    turkceAciklama: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Formu gönderme işlemi
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Faktör:
        <select name="faktor" onChange={handleChange}>
          <option value="">Seçiniz</option>
          <option value="scope">Scope</option>
        </select>
      </label>
      <label>
        Hesaplama Türü:
        <select name="hesaplamaTuru" onChange={handleChange}>
          <option value="">Seçiniz</option>
        </select>
      </label>
      <label>
        Ad:
        <input type="text" name="ad" onChange={handleChange} />
      </label>
      <label>
        Kod:
        <input type="text" name="kod" onChange={handleChange} />
      </label>
      <label>
        Döküman:
        <input type="file" name="dokuman" onChange={handleChange} />
      </label>
      <label>
        Açıklama:
        <textarea name="aciklama" onChange={handleChange}></textarea>
      </label>
      <label>
        Türkçe Ad:
        <input type="text" name="turkceAd" onChange={handleChange} />
      </label>
      <label>
        Türkçe Açıklama:
        <textarea name="turkceAciklama" onChange={handleChange}></textarea>
      </label>
      <button type="submit">Kaydet</button>
      
     
    </form>
  );
};

export default ActivityForm;