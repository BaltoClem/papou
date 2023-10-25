import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/General.css';
import Header from './components/Header';
import Home from './components/home/Home';
// import WhoAreWe from './components/WhoAreWe';
// import OurEssentials from './components/OurEssentials';
// import PartnersSection from './components/PartnersSection';
// import OurValues from './components/OurValues';
import Footer from './components/Footer';
// import OtherTreasures from './components/OtherTreasures';
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
        {/* <WhoAreWe />
        <OurEssentials />
        <PartnersSection />
        <OurValues />
        <OtherTreasures /> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;