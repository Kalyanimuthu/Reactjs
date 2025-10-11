import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
    return (
        <div className="product-list">
            {/* List Rendering using .map() */}
            {products.map((product) => (
                <ProductCard
                    key={product.id} // Unique key for each product
                    name={product.name}
                    price={product.price}
                    discount={product.discount}
                    availability={product.availability}
                    image={product.image}
                />
            ))}
        </div>
    );
};

export default ProductList;