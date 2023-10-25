import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/General.css';
import Header from './components/Header';
import Home from './components/home/Home';
import Footer from './components/Footer';
import Shop from './components/shop/Shop';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          {/* Définissez d'autres routes ici si nécessaire */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;