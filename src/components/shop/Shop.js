import React from 'react';
import ProductList from './ProductList';
import toy1 from '../../data/fake_toys_papou/toy_1.jpg';
import toy2 from '../../data/fake_toys_papou/toy_2.jpg';
import toy3 from '../../data/fake_toys_papou/toy_3.jpg';
import toy4 from '../../data/fake_toys_papou/toy_4.jpg';
import toy5 from '../../data/fake_toys_papou/toy_5.jpg';

const Shop = () => {
    const products = [
        {
            id: 1,
            name: 'Produit 1',
            price: 19.99,
            description: 'Ceci est la description du produit 1.',
            image: toy1
        },
        {
            id: 2,
            name: 'Produit 2',
            price: 29.99,
            description: 'Ceci est la description du produit 2.',
            image: toy2
        },
        {
            id: 2,
            name: 'Produit 2',
            price: 29.99,
            description: 'Ceci est la description du produit 2.',
            image: toy3
        },
        {
            id: 2,
            name: 'Produit 2',
            price: 29.99,
            description: 'Ceci est la description du produit 2.',
            image: toy4
        },
        {
            id: 2,
            name: 'Produit 2',
            price: 29.99,
            description: 'Ceci est la description du produit 2.',
            image: toy5
        },
        // Ajoutez d'autres produits ici
    ];

    return (
        <div>
            <h1>Boutique</h1>
            <ProductList products={products} />
        </div>
    );
};

export default Shop;
