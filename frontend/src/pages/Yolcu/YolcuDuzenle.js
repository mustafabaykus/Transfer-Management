import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./Yolcu.css"

function YolcuDuzenle() {
  const { id } = useParams();
  const [yolcu, setYolcu] = useState({});
  const [ad, setAd] = useState('');
  const [soyad, setSoyad] = useState('');
  const [telefon, setTelefon] = useState('');
  const [yolcuTipi, setYolcuTipi] = useState('');

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/yolcular/${id}`)
      .then(response => {
        const data = response.data;
        setYolcu(data);
        setAd(data.ad);
        setSoyad(data.soyad);
        setTelefon(data.telefon);
        setYolcuTipi(data.yolcu_tipi);
      })
      .catch(error => console.error(error));
  }, [id]);

  const handleUpdate = () => {
    const updatedYolcu = {
      ad,
      soyad,
      telefon,
      yolcu_tipi: yolcuTipi
    };

    axios.put(`http://127.0.0.1:8000/api/yolcular/${id}`, updatedYolcu)
      .then(response => {
        console.log('Yolcu güncellendi:', response.data);
        window.alert('Yolcu başarıyla güncellendi.');
      })
      .catch(error => {
        console.error(error);
        window.alert('Yolcu güncelleme sırasında bir hata oluştu.')})
  };

  return (
    <div className='form-box'>
      <h2>Yolcu Düzenle</h2>
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
      <div>
        <label>Yolcu Tipi: </label>
        <input type="text" value={yolcuTipi} onChange={e => setYolcuTipi(e.target.value)} />
      </div>
      <button type="button" class="btn btn-success" onClick={handleUpdate}>Güncelle</button>
    </div>
  );
}

export default YolcuDuzenle;
