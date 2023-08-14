import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./Transfer.css"

function TransferDuzenle() {
  const { id } = useParams();
  const [transfer, setTransfer] = useState({});
  const [yolcuID, setYolcuID] = useState('');
  const [aracID, setAracID] = useState('');
  const [seferTarihi, setSeferTarihi] = useState('');
  const [seferSaati, setSeferSaati] = useState('');
  const [baslangicNoktasi, setBaslangicNoktasi] = useState('');
  const [bitisNoktasi, setBitisNoktasi] = useState('');

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/transferler/${id}`)
      .then(response => {
        const data = response.data;
        setTransfer(data);
        setYolcuID(data.yolcu_id);
        setAracID(data.arac_id);
        setSeferTarihi(data.sefer_tarihi);
        setSeferSaati(data.sefer_saati);
        setBaslangicNoktasi(data.baslangic_noktasi);
        setBitisNoktasi(data.bitis_noktasi);
      })
      .catch(error => console.error(error));
  }, [id]);

  const handleUpdate = () => {
    const updatedTransfer = {
      yolcu_id: yolcuID,
      arac_id: aracID,
      sefer_tarihi: seferTarihi,
      sefer_saati: seferSaati,
      baslangic_noktasi: baslangicNoktasi,
      bitis_noktasi: bitisNoktasi
    };

    axios.put(`http://127.0.0.1:8000/api/transferler/${id}`, updatedTransfer)
      .then(response => {
        console.log('Transfer güncellendi:', response.data);
        window.alert('Transfer başarıyla güncellendi.');
      })
      .catch(error => {
        console.error(error);
        window.alert('Transfer güncelleme sırasında bir hata oluştu.')})
  };

  return (
    <div className='form-box'>
      <h2>Transfer Düzenle</h2>
      <div>
        <label>Yolcu ID: </label>
        <input type="text" value={yolcuID} onChange={e => setYolcuID(e.target.value)} />
      </div>
      <div>
        <label>Araç ID: </label>
        <input type="text" value={aracID} onChange={e => setAracID(e.target.value)} />
      </div>
      <div>
        <label>Sefer Tarihi: </label>
        <input type="text" value={seferTarihi} onChange={e => setSeferTarihi(e.target.value)} />
      </div>
      <div>
        <label>Sefer Saati: </label>
        <input type="text" value={seferSaati} onChange={e => setSeferSaati(e.target.value)} />
      </div>
      <div>
        <label>Başlangıç Noktası: </label>
        <input type="text" value={baslangicNoktasi} onChange={e => setBaslangicNoktasi(e.target.value)} />
      </div>
      <div>
        <label>Bitiş Noktası: </label>
        <input type="text" value={bitisNoktasi} onChange={e => setBitisNoktasi(e.target.value)} />
      </div>
      <button type="button" class="btn btn-success" onClick={handleUpdate}>Güncelle</button>
    </div>
  );
}

export default TransferDuzenle;
