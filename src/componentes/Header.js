import React from 'react';
import '../styles/Header.css'; // Arquivo CSS para estilizar o Header
import Logo from '../assets/images/CarSoul.png';
import userAvatar from '../assets/images/imgPerfil.png'; // Atualize com o caminho do avatar do usuário


function Header() {
    return (
      <header className="header">
        <div className="header-content">
          {/* Logo */}
          <div className="header-logo">
            <img src={Logo} alt="CarSoul Logo" />
          </div>
  
          {/* Informações do usuário */}
          <div className="header-user-info">
            <div className="user-details">
              <img src={userAvatar} alt="User Avatar" className="user-avatar" />
              <div>
                <h2 className="user-name">Renan Augusto</h2>
                <p className="user-title">Desenvolvedor Front-End CarSoul</p>
              </div>
            </div>
            <div className="user-progress">
              <span className="badge badge-gold"></span>
              <span className="badge badge-silver"></span>
              <span className="badge badge-bronze"></span>
              <span className="badge badge-incomplete"></span>
            </div>
          </div>
  
          {/* Menu Icon */}
          <div className="header-menu">
            <button className="menu-button">
              <span className="menu-icon"></span>
            </button>
          </div>
        </div>
      </header>
    );
  }
  
  export default Header;