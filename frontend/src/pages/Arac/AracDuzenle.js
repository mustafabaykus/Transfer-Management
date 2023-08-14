import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./Arac.css"

function AracDuzenle() {
  const { id } = useParams();
  const [arac, setArac] = useState({});
  const [marka, setMarka] = useState('');
  const [model, setModel] = useState('');
  const [plaka, setPlaka] = useState('');
  const [surucuAdi, setSurucuAdi] = useState('');
  const [surucuSoyadi, setSurucuSoyadi] = useState('');
  const [surucuTelefon, setSurucuTelefon] = useState('');

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/araclar/${id}`)
      .then(response => {
        const data = response.data;
        setArac(data);
        setMarka(data.marka);
        setModel(data.model);
        setPlaka(data.plaka);
        setSurucuAdi(data.surucu_adi);
        setSurucuSoyadi(data.surucu_soyadi);
        setSurucuTelefon(data.surucu_telefon);
      })
      .catch(error => console.error(error));
  }, [id]);

  const handleUpdate = () => {
    const updatedArac = {
      marka,
      model,
      plaka,
      surucu_adi: surucuAdi,
      surucu_soyadi: surucuSoyadi,
      surucu_telefon: surucuTelefon
    };

    axios.put(`http://127.0.0.1:8000/api/araclar/${id}`, updatedArac)
      .then(response => {
        console.log('Araç güncellendi:', response.data);
        window.alert('Araç başarıyla güncellendi.');
      })
      .catch(error => {
      console.error(error);
      window.alert('Araç güncelleme sırasında bir hata oluştu.')})
  };

  return (
    <div className='form-box'>
      <h2>Araç Düzenle</h2>
      <div>
        <label>Marka: </label>
        <input type="text" value={marka} onChange={e => setMarka(e.target.value)} />
      </div>
      <div>
        <label>Model: </label>
        <input type="text" value={model} onChange={e => setModel(e.target.value)} />
      </div>
      <div>
        <label>Plaka: </label>
        <input type="text" value={plaka} onChange={e => setPlaka(e.target.value)} />
      </div>
      <div>
        <label>Sürücü Adı: </label>
        <input type="text" value={surucuAdi} onChange={e => setSurucuAdi(e.target.value)} />
      </div>
      <div>
        <label>Sürücü Soyadı: </label>
        <input type="text" value={surucuSoyadi} onChange={e => setSurucuSoyadi(e.target.value)} />
      </div>
      <div>
        <label>Sürücü Telefon: </label>
        <input type="text" value={surucuTelefon} onChange={e => setSurucuTelefon(e.target.value)} />
      </div>
      <button type="button" class="btn btn-success" onClick={handleUpdate}>Güncelle</button>
    </div>
  );
}

export default AracDuzenle;
