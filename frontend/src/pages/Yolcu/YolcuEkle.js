import React, { useState } from 'react';
import axios from 'axios';
import "./Yolcu.css"

function YolcuEkle() {
  const [ad, setAd] = useState('');
  const [soyad, setSoyad] = useState('');
  const [telefon, setTelefon] = useState('');
  const [yolcuTipi, setYolcuTipi] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/yolcular', { ad, soyad, telefon, yolcu_tipi: yolcuTipi })
      .then(response => {
        console.log(response.data);
        window.alert('Yolcu başarıyla eklendi.');
      })
      .catch(error => {
        console.error(error);
        window.alert('Yolcu ekleme sırasında bir hata oluştu.')})
  };

  return (
    <div className='form-box'>
      <h2>Yolcu Ekle</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="yolcuAdı" class="form-label">Yolcu Adı</label>
          <input type="text" placeholder="Ad" value={ad} onChange={e => setAd(e.target.value)} />
        </div>
        <div className="mb-3">
          <label for="yolcuSoyadı" class="form-label">Yolcu Soyadı</label>
          <input type="text" placeholder="Soyad" value={soyad} onChange={e => setSoyad(e.target.value)} />
        </div>
        <div className="mb-3">
          <label for="yolcuTelefon" class="form-label">Telefon Numarası</label>
          <input type="text" placeholder="Telefon" value={telefon} onChange={e => setTelefon(e.target.value)} />
        </div>
        <div className="mb-3">
          <label for="yolcuTipi" class="form-label">Yolcu Tipi</label>
          <input type="text" placeholder="Yolcu Tipi" value={yolcuTipi} onChange={e => setYolcuTipi(e.target.value)} />
        </div>
        <button type="button" class="btn btn-success" onClick={handleSubmit}>Ekle</button>
      </form>
    </div>
  );
}

export default YolcuEkle;
