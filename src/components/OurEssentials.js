import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import toy1 from '../data/fake_toys_papou/toy_1.jpg';
import toy2 from '../data/fake_toys_papou/toy_2.jpg';
import toy3 from '../data/fake_toys_papou/toy_3.jpg';
import toy4 from '../data/fake_toys_papou/toy_4.jpg';
import toy5 from '../data/fake_toys_papou/toy_5.jpg';
import toy6 from '../data/fake_toys_papou/toy_6.jpg';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const carouselItems = [
  {
    image: toy1,
    seller: 'Nom du vendeur 1',
    price: '$10',
  },
  {
    image: toy2,
    seller: 'Nom du vendeur 2',
    price: '$20',
  },
  {
    image: toy3,
    seller: 'Nom du vendeur 3',
    price: '$30',
  },
  {
    image: toy4,
    seller: 'Nom du vendeur 4',
    price: '$40',
  },
  {
    image: toy5,
    seller: 'Nom du vendeur 5',
    price: '$50',
  },
  {
    image: toy6,
    seller: 'Nom du vendeur 6',
    price: '$60',
  }
];

const ourEssentialsStyle = {
  color: '#00989E'
}

const carouselContainerStyle = {
  margin: '20px', // Ajoutez la marge souhaitée
};

const imageStyle = {
  width: '100%', // La largeur de l'image sera de 100% du conteneur
  height: '250px', // La hauteur de l'image est fixée à 200px (ajustez selon vos besoins)
};

const OurEssentials = () => {
  return (
<>
<h1 style={ourEssentialsStyle}>Nos incontournables</h1>
    <div className='cards_carousel_essentials'>
      <Carousel responsive={responsive} style={carouselContainerStyle}>
        {carouselItems.map((item, index) => (
          <div key={index} className="card" style={{ margin: '50px', borderRadius: '10px'}}>
            <div className="card-image waves-effect waves-block waves-light">
              <img 
              className="activator" 
              src={item.image} 
              alt={`Produit ${index + 1}`}
              style={imageStyle} />
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">
                Card Title<i className="material-icons right">more_vert</i>
              </span>
              <p>{item.seller}</p>
              <p>{item.price}</p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                Card Title<i className="material-icons right">close</i>
              </span>
              <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
    </>
    )
};

export default OurEssentials;
