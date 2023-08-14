import React, { useState } from 'react';
import axios from 'axios';
import "./Transfer.css"

function GununTransferleri() {
  const [tarih, setTarih] = useState('');
  const [transferler, setTransferler] = useState([]);

  const handleTarihChange = (e) => {
    setTarih(e.target.value);
  };

  const handleGetirClick = () => {
    axios
      .get(`http://127.0.0.1:8000/api/transferler/gunun-transferleri?tarih=${tarih}`)
      .then((response) => {
        setTransferler(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className='body'>
      <h2>Günün Transferleri</h2>
      <div>
        <label htmlFor='tarih'>Tarih Seçin: </label>
        <input
          type='date'
          id='tarih'
          value={tarih}
          onChange={handleTarihChange}
        />
        <button onClick={handleGetirClick}>Getir</button>
      </div>
      <table className='table'>
        <thead>
            <tr>
                <th scope='col'>#</th>
                <th scope='col'>Yolcu Adı</th>
                <th scope='col'>Yolcu Soyadı</th>
                <th scope='col'>Başlangıç</th>
                <th scope='col'>Bitiş</th>
            </tr>
        </thead>
        <tbody>
        {transferler.map((transfer) => (
            <tr key={transfer.id}>
                <td>{transfer.id}</td>
                <td>{transfer.yolcu.ad}</td>
                <td>{transfer.yolcu.soyad}</td>
                <td>{transfer.baslangic_noktasi}</td>
                <td>{transfer.bitis_noktasi}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default GununTransferleri;
