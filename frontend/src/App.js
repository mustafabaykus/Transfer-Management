import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import YolcuListesi from './pages/Yolcu/YolcuListesi';
import YolcuEkle from './pages/Yolcu/YolcuEkle';
import YolcuDuzenle from './pages/Yolcu/YolcuDuzenle';
import AracListesi from './pages/Arac/AracListesi';
import AracEkle from './pages/Arac/AracEkle';
import AracDuzenle from './pages/Arac/AracDuzenle';
import SurucuDuzenle from './pages/Surucu/SurucuDuzenle';
import SurucuEkle from './pages/Surucu/SurucuEkle';
import SurucuListesi from './pages/Surucu/SurucuListesi';
import Transfer from './pages/Transfer/Transfer'
import TransferListesi from './pages/Transfer/TransferListesi'
import TransferDuzenle from './pages/Transfer/TransferDuzenle';
import Header from './features/header';
import GununTransferleri from './pages/Transfer/GununTransferleri';


function App() {
  return (
    <Router>
      <div>
      <Header >
        </Header>
        <Routes>
          <Route path="/" element={<YolcuListesi />} />
          <Route path="/yolcu-listesi" element={<YolcuListesi />} />
          <Route path="/yolcu-ekle" element={<YolcuEkle />} />
          <Route path="/yolcu-duzenle/:id" element={<YolcuDuzenle />} />
          <Route path="/arac-listesi" element={<AracListesi />} />
          <Route path="/arac-ekle" element={<AracEkle />} />
          <Route path="/arac-duzenle/:id" element={<AracDuzenle />} />
          <Route path="/surucu-duzenle/:id" element={<SurucuDuzenle />} />
          <Route path="/surucu-ekle" element={<SurucuEkle />} />
          <Route path="/surucu-listesi" element={<SurucuListesi />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/transfer-listesi" element={<TransferListesi />} />
          <Route path="/transfer-duzenle/:id" element={<TransferDuzenle />} />
          <Route path="/gunun-transferleri" element={<GununTransferleri />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

