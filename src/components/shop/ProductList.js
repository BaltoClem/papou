import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import '../../styles/shop/ProductList.css';


const ProductList = ({ products }) => {
  return (
    <div>
      <div className="row">
        {products.map((product) => (
          <div className="col s12 m6 l3" key={product.id}>
            <div className="card">
              <div className="card-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="card-content">
                <p>Nom : {product.name}</p>
                <p>Prix : {product.price} €</p>
                <p>Description : {product.description}</p>
                <br/>
                <a href="/product-details" className="product_details">Voir le produit</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
