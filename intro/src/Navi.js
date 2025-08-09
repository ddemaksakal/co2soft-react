import React from 'react';
import { Link } from 'react-router-dom';  // Link import edildi
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
            {/* Span yerine Link bileşenleri kullanıldı */}
            <Link to="/" className="navi-menu-item">Anasayfa</Link>
            <Link to="/activities" className="navi-menu-item">Aktiviteler</Link>
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
