import React from 'react';
import '../../styles/shop/ProductDetails.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import toy1 from "../../data/fake_toys_papou/toy_1.jpg";
import toy2 from '../../data/fake_toys_papou/toy_2.jpg';
import toy3 from '../../data/fake_toys_papou/toy_3.jpg';
import toy4 from '../../data/fake_toys_papou/toy_4.jpg';
import toy5 from '../../data/fake_toys_papou/toy_5.jpg';
import toy6 from '../../data/fake_toys_papou/toy_6.jpg';

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

const ProductDetails = () => {
    return (
        <>
            <div className="product-description">
                <div className="product-main">
                    <img src={toy1} alt="product_details" className="main-image" />
                    <div className="product-details">
                        <h2>Nom du produit</h2>
                        <p>Prix : $99.99</p>
                        <p>Vendu par : Nom du vendeur</p>
                    </div>
                </div>
                <div className="product-info">
                    <div className="product-history">
                        <h3>L'histoire du produit</h3>
                        <p>Ici, vous pouvez écrire l'histoire fascinante de ce produit.</p>
                    </div>
                    <div className="product-condition">
                        <h3>État du produit</h3>
                        <p>Ce produit est neuf et dans un état parfait.</p>
                    </div>
                </div>
            </div>
            <div className="related-products">
                <div className="product-carousel">
                    <h3 className="our-essentials-title">Produits de la même catégorie</h3>
                    <div className="cards-carousel-essentials">
                        <Carousel responsive={responsive}>
                            {carouselItems.map((item, index) => (
                                <div key={index} className="card">
                                    <div className="card-image waves-effect waves-block waves-light">
                                        <img
                                            className="activator"
                                            src={item.image}
                                            alt={`Produit ${index + 1}`}
                                        />
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
                                        <p>
                                            Here is some more information about this product that is only revealed once clicked on.
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>

            <a href='/' className="back-button">Retour</a>
        </>
    );
}

export default ProductDetails;