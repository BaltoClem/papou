import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

const ProductCard = ({ products }) => {
    useEffect(() => {
        window.addEventListener('load', function () {
            M.AutoInit();
        });
    }, []);

    return (
        <div className="container">
            <div className="row">
                {products.map((product, index) => (
                    <div key={index} className="col s12 m6 l3">
                        <div className="card">
                            <div className="card-image">
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className="card-content">
                                <span className="card-title">{product.name}</span>
                                <p>{product.description}</p>
                            </div>
                            <div className="card-action">
                                <a href={`/product/${product.id}`}>Voir le produit</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCard;
