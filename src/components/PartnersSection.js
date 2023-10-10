import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Importez les logos de vos partenaires
import partenaire1 from '../data/partners_logo/partner1.png';
import partenaire2 from '../data/partners_logo/partner2.png';
import partenaire3 from '../data/partners_logo/partner3.jpg';
import partenaire4 from '../data/partners_logo/partner4.png';
import partenaire5 from '../data/partners_logo/partner5.webp';

const partenaires = [
  { id: 1, logo: partenaire1, nom: 'Partenaire 1' },
  { id: 2, logo: partenaire2, nom: 'Partenaire 2' },
  { id: 3, logo: partenaire3, nom: 'Partenaire 3' },
  { id: 4, logo: partenaire4, nom: 'Partenaire 4' },
  { id: 5, logo: partenaire5, nom: 'Partenaire 5' }
  // Ajoutez d'autres partenaires ici
];

const partnersSectionStyle = {
    color: '#00989E'
}

const imageWidthPercentage = 20; // Définissez la largeur en pourcentage de la largeur de l'écran
const imageHeight = 200; // Définissez la hauteur souhaitée pour les images

const PartnersSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % partenaires.length);
    }, 3000); // Changement d'image automatique toutes les 3 secondes

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="carousel-container" style={partnersSectionStyle}>
      <h1>Nos partenaires</h1>
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        selectedItem={currentSlide}
        onChange={(index) => setCurrentSlide(index)}
        autoPlay
        interval={3000}
      >
        {partenaires.map((partenaire, index) => (
          <div key={partenaire.id} className="partenaire">
            <img
              src={partenaire.logo}
              alt={partenaire.nom}
              style={{ width: `${imageWidthPercentage}%`, height: imageHeight }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PartnersSection;
