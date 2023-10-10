import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './styles/App.css';
import Header from './components/Header';
// import SectionPartenaires from './components/SectionPartenaires';
// import SectionNosValeurs from './components/SectionNosValeurs';
// import SectionNosCategories from './components/SectionNosCategories';
// import SectionNosIncontournables from './components/SectionNosIncontournables';
import WhoAreWe from './components/WhoAreWe';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <WhoAreWe />
      {/*<SectionPartenaires />
      <SectionNosValeurs />
      <SectionNosCategories />
      <SectionNosIncontournables />*/}
      <Footer /> 
    </div>
  );
}

export default App;
