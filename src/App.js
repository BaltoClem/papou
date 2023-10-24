import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './styles/General.css';
import Header from './components/Header';
import WhoAreWe from './components/WhoAreWe';
import OurEssentials from './components/OurEssentials';
import PartnersSection from './components/PartnersSection';
import OurValues from './components/OurValues';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <WhoAreWe />
      <OurEssentials />
      <PartnersSection />
      <OurValues />
      <Footer /> 
    </div>
  );
}

export default App;