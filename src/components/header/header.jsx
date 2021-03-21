import React from 'react';
import './header.css';

function Header() {
  return (
    <header className="header wrapper">
      <a className="header-logo" href="/">
        <img src="../../assets/img/icon/sign.png" alt="Video service logo" />
        <h1 className="header-logo__title">Видеосервис</h1>
      </a>
      <form className="header-search">
        <input className="header-search__input" type="search" placeholder="Поиск..." />
        <button type="submit">Найти</button>
      </form>
      <div className="header-login">
        <button type="button">Войти</button>
      </div>
    </header>
  );
}

export default Header;
