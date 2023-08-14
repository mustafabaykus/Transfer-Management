import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const YolcuDropdownMenu = () => {
  return (
    <div className="dropdown-menu">
      <ul>
        <li>
          <Link to="/yolcu-listesi">Yolcu Listesi</Link>
        </li>
        <li>
          <Link to="/yolcu-ekle">Yolcu Ekle</Link>
        </li>
      </ul>
    </div>
  );
};

const AracDropdownMenu = () => {
    return (
      <div className="dropdown-menu">
        <ul>
          <li>
            <Link to="/arac-listesi">Arac Listesi</Link>
          </li>
          <li>
            <Link to="/arac-ekle">Arac Ekle</Link>
          </li>
        </ul>
      </div>
    );
};

const TransferDropdownMenu = () => {
    return (
      <div className="dropdown-menu">
        <ul>
          <li>
            <Link to="/transfer-listesi">Transfer Listesi</Link>
          </li>
          <li>
            <Link to="/transfer">Transfer Oluştur</Link>
          </li>
          <li>
            <Link to="/gunun-transferleri">Günün Transferleri</Link>
          </li>
        </ul>
      </div>
    );
};

const SurucuDropdownMenu = () => {
    return (
      <div className="dropdown-menu">
        <ul>
          <li>
            <Link to="/surucu-listesi">Sürücü Listesi</Link>
          </li>
          <li>
            <Link to="/surucu-ekle">Sürücü Ekle</Link>
          </li>
        </ul>
      </div>
    );
};



function Header() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="dashboard">
      <div className="px-3 py-2 dashboard_header">
        <div className="header_container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul className="nav col-12 col-lg-10 my-2 justify-content-center text-small">
              <div className="menu" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Link to="/yolcu-listesi" id="yolcu">
                  Yolcu
                </Link>
                <YolcuDropdownMenu />
                {isDropdownVisible && <YolcuDropdownMenu />}
              </div>
              <div className="menu" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Link to="/surucu-listesi" id="suruculer">
                    Sürücüler
                </Link>
                <SurucuDropdownMenu />
                {isDropdownVisible && <SurucuDropdownMenu />}
              </div>
              <div className="menu" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Link to="/arac-listesi" id="araclar">
                    Araçlar
                </Link>
                <AracDropdownMenu />
                {isDropdownVisible && <AracDropdownMenu />}
              </div>
              <div className="menu" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Link to="/transfer-listesi" id="transferler">
                    Transferler
                </Link>
                <TransferDropdownMenu />
                {isDropdownVisible && <TransferDropdownMenu />}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
