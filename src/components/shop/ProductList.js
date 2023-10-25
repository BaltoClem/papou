import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div>
      <div className="row">
        {products.map((product) => (
          <div className="col s3 m3 l3" key={product.id}>
            <div className="card">
              <div className="card-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="card-content">
                <p>Nom : {product.name}</p>
                <p>Prix : {product.price} €</p>
                <p>Description : {product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
