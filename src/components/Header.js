import React from 'react';
import logo from '../data/logo.png'

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="slogan">
        <p>Les jouets d'hier pour un avenir plus vert</p>
      </div>
    </header>
  );
};

export default Header;
