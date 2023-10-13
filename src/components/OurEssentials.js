import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
    image: 'images/office.jpg',
    seller: 'Nom du vendeur 1',
    price: '$10',
  },
  {
    image: 'images/office.jpg',
    seller: 'Nom du vendeur 2',
    price: '$20',
  },
  {
    image: 'images/office.jpg',
    seller: 'Nom du vendeur 3',
    price: '$30',
  },
  {
    image: 'images/office.jpg',
    seller: 'Nom du vendeur 4',
    price: '$40',
  },
  {
    image: 'images/office.jpg',
    seller: 'Nom du vendeur 5',
    price: '$50',
  },
  {
    image: 'images/office.jpg',
    seller: 'Nom du vendeur 6',
    price: '$60',
  }
];

const carouselContainerStyle = {
  margin: '20px', // Ajoutez la marge souhaitée
};

const ourEssentialsStyle = {
  color: '#00989E'
}

const OurEssentials = () => {
  return (
<>
<h1 style={ourEssentialsStyle}>Nos incontournables</h1>
    <div className='cards_carousel_essentials'>
      <Carousel responsive={responsive} style={carouselContainerStyle}>
        {carouselItems.map((item, index) => (
          <div key={index} className="card" style={{ margin: '50px' }}>
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={item.image} alt={`Produit ${index + 1}`} />
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">
                Card Title<i className="material-icons right">more_vert</i>
              </span>
              <p><a href="/">This is a link</a></p>
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
