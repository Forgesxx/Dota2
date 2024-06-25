import React from 'react';
import './header.css'; // Подключаем стили для Header (Header.css)
import logo from '../assets/logo.png'; // Импортируем изображение логотипа

const Header = () => {
  return (
    <header className="header">
      <div className="header__menu">
        {/* Три полосочки, которые могут представлять выдвижное меню */}
        <div className="header__menu-line"></div>
        <div className="header__menu-line"></div>
        <div className="header__menu-line"></div>
      </div>
      <div className="header__logo">
        {/* Логотип вашего сайта */}
        <img src={logo} alt="Site Logo" />
      </div>
      <nav className="header__nav">
        {/* Навигационные ссылки */}
        <ul className="header__nav-list">
          <li className="header__nav-item"><a href="#">My Tournaments</a></li>
          <li className="header__nav-item"><a href="#">Find One</a></li>
          <li className="header__nav-item"><a href="#">My Team</a></li>
          <li className="header__nav-item"><a href="#">Bank</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
