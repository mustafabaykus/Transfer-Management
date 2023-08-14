import React, { useState } from 'react';
import axios from 'axios';
import "./Surucu.css"

function SurucuEkle() {
  const [ad, setAd] = useState('');
  const [soyad, setSoyad] = useState('');
  const [telefon, setTelefon] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/suruculer', {
        ad,
        soyad,
        telefon,
      });
      console.log('Sürücü başarıyla eklendi:', response.data);
    } catch (error) {
      console.error('Sürücü eklenirken bir hata oluştu:', error);
    }
  };

  return (
    <div className='form-box'>
      <h2>Yeni Sürücü Ekle</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
          <label for="surucuAdı" class="form-label">Sürücü Adı</label>
          <input type="text" placeholder="Ad" value={ad} onChange={e => setAd(e.target.value)} />
        </div>
        <div className="mb-3">
          <label for="surucuSoyadı" class="form-label">Sürücü Soyadı</label>
          <input type="text" placeholder="Soyad" value={soyad} onChange={e => setSoyad(e.target.value)} />
        </div>
        <div className="mb-3">
          <label for="telefon" class="form-label">Sürücü Telefon</label>
          <input type="text" placeholder="Sürücü Telefon Numarası" value={telefon} onChange={e => setTelefon(e.target.value)} />
        </div>
        <button type="button" class="btn btn-success" onClick={handleSubmit}> Ekle</button>
      </form>
    </div>
  );
}

export default SurucuEkle;
