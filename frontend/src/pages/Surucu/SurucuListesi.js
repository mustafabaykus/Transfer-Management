import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Surucu.css'
import { Link } from "react-router-dom";

function SurucuListesi() {
  const [suruculer, setSurucular] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/suruculer')
      .then(response => setSurucular(response.data))
      .catch(error => console.error(error));
  }, []);


  const handleSurucuSil = (id) => {
    if (window.confirm('Bu surucuyu silmek istediğinize emin misiniz?')) {
      axios.delete(`http://127.0.0.1:8000/api/suruculer/${id}`)
        .then(response => {
          console.log('Surucu silindi:', response.data);
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
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
        {suruculer.map((surucu) => (
          <tr key={surucu.id}>
            <td>{surucu.id}</td>
            <td>{surucu.ad}</td>
            <td>{surucu.soyad}</td>
            <td>{surucu.telefon}</td>
            <td>
              <Link
                to={`/surucu-duzenle/${surucu.id}`}
                className="btn btn-success"
              >
                Düzenle
              </Link>
            </td>
            <td>
              <button className="btn btn-danger" onClick={() => handleSurucuSil(surucu.id)}>
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

export default SurucuListesi;
