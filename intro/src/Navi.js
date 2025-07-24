import React from 'react';
import './Navi.css';

const Navi = () => {
  return (
    <div className="navi-wrapper">
      <nav className="navi-bar">
        {/* Sol: Logo ve Menü */}
        <div className="navi-left">
          <div className="navi-logo">
            <img src="/logo.png" alt="Logo" />
            <span className="navi-logo-text">soft</span>
          </div>
          <hr className="navi-divider" />
          {/* Menü alt çizgi */}
          <div className="navi-menu">
            <span className="navi-menu-item">Anasayfa</span>
            <span className="navi-menu-item">Sistem ▼</span>
            <span className="navi-menu-item">Organizasyonlar</span>
          </div>
        </div>
        {/* Sağ: İkonlar ve Profil */}
        <div className="navi-right">
          <span className="navi-lang">
            <img src="/tr-flag.png" alt="TR" />
          </span>
          <span className="navi-icon">⛶</span>
          <span className="navi-icon">🌙</span>
          <div className="navi-user">
            <span className="navi-user-icon">👤</span>
            <div>
              <div className="navi-user-name">Kullanıcı Adı</div>
              <div className="navi-user-role">Uya Co2 (Distributor)</div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navi;