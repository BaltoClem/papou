import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './styles/App.css';
import Header from './components/Header';
import WhoAreWe from './components/WhoAreWe';
import PartnersSection from './components/PartnersSection';
import OurValues from './components/OurValues';
// import SectionNosCategories from './components/SectionNosCategories';
import OurEssentials from './components/OurEssentials';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Header />
      <WhoAreWe />
      <PartnersSection />
      <OurValues />
      {/* <SectionNosCategories /> */}
      <OurEssentials />
      <Footer /> 
    </div>
  );
}

export default App;
