import React from 'react';
import logo from '../../data/logo.png';
import '../../styles/general/Header.css';
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <header>
      <div className="papou-logo">
        <img src={logo} alt="Logo" />
      </div>
      {/* <div className="slogan">
        <p>Les jouets d'hier pour un avenir plus vert</p>
      </div> */}

      {/* General Bar */}
      <div className='navbar'>

        {/* SearchBar */}
        <div className='search_icons'>
          <nav>
            <div className="nav-wrapper">
              <form>
                <div className="input-field">
                  <input id="search" type="search" placeholder='Recherche' required />
                  <label className="label-icon" htmlFor="search">
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
            <Link to="/" className='link'>Accueil</Link>
            <Link to="/shop" className='link'>Boutique</Link>
            <Link to="/category/0-3" className='hidden-link link'>De 0 à 3 ans</Link>
            <Link to="/category/3-6" className='hidden-link link'>De 3 à 6 ans</Link>
            <Link to="/category/6-10" className='hidden-link link'>De 6 à 10 ans</Link>
            <Link to="/category/10-plus" className='hidden-link link'>Plus de 10 ans</Link>
          </div>
        
        {/* Tabs */}

        {/* Icons Group */}
        <div className='group_icons'>
          <i className="material-icons">favorite_border</i>
          <i className="material-icons">person_outline</i>
          <i className="material-icons">shopping_cart</i>
        </div>
        {/* Icons Group */}

      </div>
      {/* General Bar */}
    </header>
  );
};

export default Header;
