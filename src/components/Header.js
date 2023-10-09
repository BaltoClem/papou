import React from 'react';
import logo from '../data/logo.png';

const Header = () => {
  return (
    <header>
      <div className="papou-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="slogan">
        <p>Les jouets d'hier pour un avenir plus vert</p>
      </div>
      <nav>
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input id="search" type="search" required />
              <label className="label-icon" for="search">
                <i className="material-icons">search</i>
              </label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Header;
