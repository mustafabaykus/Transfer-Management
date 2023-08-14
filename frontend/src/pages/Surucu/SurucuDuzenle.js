import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./Surucu.css"

function SurucuDuzenle() {
  const { id } = useParams();
  const [surucu, setSurucu] = useState({});
  const [ad, setAd] = useState('');
  const [soyad, setSoyad] = useState('');
  const [telefon, setTelefon] = useState('');

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/suruculer/${id}`)
      .then(response => {
        const data = response.data;
        setSurucu(data);
        setAd(data.ad);
        setSoyad(data.soyad);
        setTelefon(data.telefon);
      })
      .catch(error => console.error(error));
  }, [id]);

  const handleUpdate = () => {
    const updatedYolcu = {
      ad,
      soyad,
      telefon,
    };

    axios.put(`http://127.0.0.1:8000/api/suruculer/${id}`, updatedYolcu)
      .then(response => {
        console.log('Surucu güncellendi:', response.data);
        window.alert('Surucu başarıyla güncellendi.');
      })
      .catch(error => {
        console.error(error);
        window.alert('Surucu güncelleme sırasında bir hata oluştu.')})
  };

  return (
    <div className='form-box'>
      <h2>Surucu Düzenle</h2>
      <div>
        <label>Ad: </label>
        <input type="text" value={ad} onChange={e => setAd(e.target.value)} />
      </div>
      <div>
        <label>Soyad: </label>
        <input type="text" value={soyad} onChange={e => setSoyad(e.target.value)} />
      </div>
      <div>
        <label>Telefon Numarası: </label>
        <input type="text" value={telefon} onChange={e => setTelefon(e.target.value)} />
      </div>
      <button type="button" class="btn btn-success" onClick={handleUpdate}>Güncelle</button>
    </div>
  );
}

export default SurucuDuzenle;
