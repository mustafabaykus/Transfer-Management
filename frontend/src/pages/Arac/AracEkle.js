import React, { useState } from 'react';
import axios from 'axios';
import "./Arac.css"

function AracEkle() {
  const [marka, setMarka] = useState('');
  const [model, setModel] = useState('');
  const [plaka, setPlaka] = useState('');
  const [ad, setSurucuAd] = useState('');
  const [soyad, setSurucuSoyad] = useState('');
  const [telefon, setSurucuTelefon] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newArac = {
      marka: marka,
      model: model,
      plaka: plaka,
      surucu: {
        ad: ad,
        soyad: soyad,
        telefon: telefon
      }
    };

    axios.post('http://127.0.0.1:8000/api/araclar', newArac)
      .then(response => {
        console.log(response.data);
        window.alert('Araç başarıyla eklendi.');
      })
      .catch(error => {
        console.error(error);
        window.alert('Araç ekleme sırasında bir hata oluştu.')})
  };

  return (
    <div className='form-box'>
      <h2>Araç Ekle</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Marka:</label>
          <input type="text" value={marka} onChange={e => setMarka(e.target.value)} />
        </div>
        <div>
          <label>Model:</label>
          <input type="text" value={model} onChange={e => setModel(e.target.value)} />
        </div>
        <div>
          <label>Plaka:</label>
          <input type="text" value={plaka} onChange={e => setPlaka(e.target.value)} />
        </div>
        <div>
          <label>Sürücü Adı:</label>
          <input type="text" value={ad} onChange={e => setSurucuAd(e.target.value)} />
        </div>
        <div>
          <label>Sürücü Soyadı:</label>
          <input type="text" value={soyad} onChange={e => setSurucuSoyad(e.target.value)} />
        </div>
        <div>
          <label>Sürücü Telefon:</label>
          <input type="text" value={telefon} onChange={e => setSurucuTelefon(e.target.value)} />
        </div>
        <button type="button" class="btn btn-success" onClick={handleSubmit}>Ekle</button>
      </form>
    </div>
  );
}

export default AracEkle;
