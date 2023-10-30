import React from 'react';
import '../../styles/shop/ProductDetails.css';
import toy1 from "../../data/fake_toys_papou/toy_1.jpg";

const ProductDetails = () => {
    return (
        <>
            <div className="product-description">
                <div className="product-main">
                    <img src={toy1} alt="product_details" className="main-image" />
                    <div className="product-details">
                        <h2>Nom du produit</h2>
                        <p>Prix : $99.99</p>
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
                <h3>Produits de la même catégorie</h3>
                <div className="product-carousel">
                    Insérez ici le composant de carousel pour les produits connexes
                </div>
            </div>

            <button className="back-button">Retour</button>
        </>
    );
}

export default ProductDetails;
