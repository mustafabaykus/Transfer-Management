import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

function AracListesi() {
  const [araclar, setAraclar] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/araclar')
      .then(response => setAraclar(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleAracSil = (id) => {
    if (window.confirm('Bu aracı silmek istediğinize emin misiniz?')) {
      axios.delete(`http://127.0.0.1:8000/api/araclar/${id}`)
        .then(response => {
          console.log('Araç silindi:', response.data);
        })
        .catch(error => console.error(error));
    }
  };

  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Marka</th>
            <th scope='col'>Model</th>
            <th scope='col'>Plaka</th>
            <th scope='col'>Surucu Adı</th>
            <th scope='col'>Surucu Soyadı</th>
            <th scope='col'>Surucu Telefon</th>
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
        <tbody>

        {araclar.map((arac) => (
          <tr key={arac.id}>
            <td>{arac.id}</td>
            <td>{arac.marka}</td>
            <td>{arac.model}</td>
            <td>{arac.plaka}</td>
            <td>
              <Link
                to={`/arac-duzenle/${arac.id}`}
                    className="btn btn-success"
                >
                  Düzenle
              </Link>
            </td>
            <td>
                <button className="btn btn-danger" onClick={() => handleAracSil(arac.id)} >
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

export default AracListesi;
