import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Yolcu.css'
import { Link } from "react-router-dom";

function YolcuListesi() {
  const [yolcular, setYolcular] = useState([]);
  const [siralama, setSiralama] = useState("hasta");

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/yolcular')
      .then(response => setYolcular(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleYolcuTipiSiralama = () => {
    if (siralama === "hasta") {
      setSiralama("hastanePersoneli");
      const siralanmisYolcular = [...yolcular].sort((a, b) => {
        return a.yolcu_tipi === "hasta" ? -1 : 1;
      });
      setYolcular(siralanmisYolcular);
    } else {
      setSiralama("hasta");
      const siralanmisYolcular = [...yolcular].sort((a, b) => {
        return a.yolcu_tipi === "hastane personeli" ? -1 : 1;
      });
      setYolcular(siralanmisYolcular);
    }
  };

  const handleYolcuSil = (id) => {
    if (window.confirm('Bu yolcuyu silmek istediğinize emin misiniz?')) {
      axios.delete(`http://127.0.0.1:8000/api/yolcular/${id}`)
        .then(response => {
          console.log('Yolcu silindi:', response.data);
        })
        .catch(error => console.error(error));
    }
  };

  return (
    <div className='body'>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Ad</th>
            <th scope='col'>Soyad</th>
            <th scope='col'>Telefon Numarası</th>
            <th scope='col' onClick={handleYolcuTipiSiralama} style={{ cursor: 'pointer' }}>
              Yolcu Tipi
              {siralama === "hasta" ? " ↓" : " ↑"}
            </th>
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
        {yolcular.map((yolcu) => (
          <tr key={yolcu.id}>
            <td>{yolcu.id}</td>
            <td>{yolcu.ad}</td>
            <td>{yolcu.soyad}</td>
            <td>{yolcu.telefon}</td>
            <td>{yolcu.yolcu_tipi}</td>
            <td>
              <Link
                to={`/yolcu-duzenle/${yolcu.id}`}
                className="btn btn-success"
              >
                Düzenle
              </Link>
            </td>
            <td>
              <button className="btn btn-danger" onClick={() => handleYolcuSil(yolcu.id)}>
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

export default YolcuListesi;
