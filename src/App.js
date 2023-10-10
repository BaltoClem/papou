import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './styles/App.css';
import Header from './components/Header';
import WhoAreWe from './components/WhoAreWe';
import PartnersSection from './components/PartnersSection';
// import SectionNosValeurs from './components/SectionNosValeurs';
// import SectionNosCategories from './components/SectionNosCategories';
// import SectionNosIncontournables from './components/SectionNosIncontournables';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Header />
      <WhoAreWe />
      <PartnersSection />
      {/*<SectionNosValeurs />
      <SectionNosCategories />
      <SectionNosIncontournables />*/}
      <Footer /> 
    </div>
  );
}

export default App;
