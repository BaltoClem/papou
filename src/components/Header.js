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
      <div className='search_icons'>
        <nav>
          <div className="nav-wrapper">
            <form>
              <div className="input-field">
                <input id="search" type="search" placeholder='Recherche' required />
                <label className="label-icon" for="search">
                  <i className="material-icons">search</i>
                </label>
                <i className="material-icons">close</i>
              </div>
            </form>
          </div>
        </nav>
        <div className='group_icons'>
          <i class="material-icons">favorite_border</i>
          <i class="material-icons">person_outline</i>
          <i class="material-icons">shopping_cart</i>
        </div>
      </div>
    </header>
  );
};

export default Header;
