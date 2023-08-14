import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Transfer.css"

function TransferOlustur() {
  const [yolcular, setYolcular] = useState([]);
  const [araclar, setAraclar] = useState([]);
  const [selectedYolcu, setSelectedYolcu] = useState('');
  const [selectedArac, setSelectedArac] = useState('');
  const [seferTarihi, setSeferTarihi] = useState('');
  const [seferSaati, setSeferSaati] = useState('');
  const [baslangicNoktasi, setBaslangicNoktasi] = useState('');
  const [bitisNoktasi, setBitisNoktasi] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/yolcular')
      .then(response => setYolcular(response.data))
      .catch(error => console.error(error));

    axios.get('http://127.0.0.1:8000/api/araclar')
      .then(response => setAraclar(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransfer = {
      yolcu_id: selectedYolcu,
      arac_id: selectedArac,
      sefer_tarihi: seferTarihi,
      sefer_saati: seferSaati,
      baslangic_noktasi: baslangicNoktasi,
      bitis_noktasi: bitisNoktasi
    };

    axios.post('http://127.0.0.1:8000/api/transferler', newTransfer)
      .then(response => {
        console.log(response.data);
        window.alert('Transfer başarıyla oluşturuldu.');
      })
      .catch(error => {
        console.error(error);
        window.alert('Transfer oluşturma sırasında bir hata oluştu.')})
  };

  return (
    <div className='form-box'>
      <h2>Transfer Oluştur</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Yolcu:</label>
          <select value={selectedYolcu} onChange={e => setSelectedYolcu(e.target.value)}>
            <option value="">Yolcu Seç</option>
            {yolcular.map(yolcu => (
              <option key={yolcu.id} value={yolcu.id}>
                {yolcu.ad} {yolcu.soyad}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Araç:</label>
          <select value={selectedArac} onChange={e => setSelectedArac(e.target.value)}>
            <option value="">Araç Seç</option>
            {araclar.map(arac => (
              <option key={arac.id} value={arac.id}>
                {arac.marka} {arac.model}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Sefer Tarihi:</label>
          <input type="date" value={seferTarihi} onChange={e => setSeferTarihi(e.target.value)} />
        </div>
        <div>
          <label>Sefer Saati:</label>
          <input type="time" value={seferSaati} onChange={e => setSeferSaati(e.target.value)} />
        </div>
        <div>
          <label>Başlangıç Noktası:</label>
          <input type="text" value={baslangicNoktasi} onChange={e => setBaslangicNoktasi(e.target.value)} />
        </div>
        <div>
          <label>Bitiş Noktası:</label>
          <input type="text" value={bitisNoktasi} onChange={e => setBitisNoktasi(e.target.value)} />
        </div>
        <button type="button" class="btn btn-success" onClick={handleSubmit}>Transfer Oluştur</button>
      </form>
    </div>
  );
}

export default TransferOlustur;
