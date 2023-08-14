import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

function TransferListesi() {
  const [transferler, setTransferler] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/transferler')
      .then(response => setTransferler(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleTransferSil = (id) => {
    if (window.confirm('Bu transferi silmek istediğinize emin misiniz?')) {
      axios.delete(`http://127.0.0.1:8000/api/transferler/${id}`)
        .then(response => {
          console.log('Transfer silindi:', response.data);
        })
        .catch(error => console.error(error));
    }
  };

  return (
    <div className='body'>
        <table className='table'>
            <thead>
                <tr>
                    <th>Transfer ID</th>
                    <th>Yolcu ID</th>
                    <th>Araç ID</th>
                    <th>Sefer Tarihi</th>
                    <th>Sefer Saati</th>
                    <th>Başlangıç Noktası</th>
                    <th>Bitiş Noktası</th>
                    <th colSpan="2">Actions</th>
                </tr>
            </thead>
            <tbody>
            {transferler.map(transfer => (
                <tr key={transfer.id}>
                    <td>{transfer.id}</td>
                    <td>{transfer.yolcu_id}</td>
                    <td>{transfer.arac_id}</td>
                    <td>{transfer.sefer_tarihi}</td>
                    <td>{transfer.sefer_saati}</td>
                    <td>{transfer.baslangic_noktasi}</td>
                    <td>{transfer.bitis_noktasi}</td>
                    <td>
              <Link
                to={`/transfer-duzenle/${transfer.id}`}
                    className="btn btn-success"
                >
                  Düzenle
              </Link>
            </td>
            <td>
                <button className="btn btn-danger" onClick={() => handleTransferSil(transfer.id)} >
                  Sil
                </button>
            </td>
                </tr>
        ))}
            </tbody>
        </table>
    </div>
  );
}

export default TransferListesi;