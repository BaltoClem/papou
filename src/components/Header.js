import React from 'react';
import logo from '../data/logo.png';
import '../styles/Header.css';

const Header = () => {

  return (
    <header>
      <div className="papou-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="slogan">
        <p>Les jouets d'hier pour un avenir plus vert</p>
      </div>

      {/* General Bar */}
      <div className='navbar'>

        {/* SearchBar */}
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
        </div>
        {/* SearchBar */}

        {/* Tabs */}
        <div className='tabs'>
          <a href="#tab1">Boutique</a>
          <a href="#tab2">De 0 à 3 ans</a>
          <a href="#tab3">De 3 à 6 ans</a>
          <a href="#tab4">De 6 à 10 ans</a>
          <a href="#tab5">Plus de 10 ans</a>
        </div>
        {/* Tabs */}

        {/* Icons Group */}
        <div className='group_icons'>
          <i class="material-icons">favorite_border</i>
          <i class="material-icons">person_outline</i>
          <i class="material-icons">shopping_cart</i>
        </div>
        {/* Icons Group */}

      </div>
      {/* General Bar */}
    </header>
  );
};

export default Header;
