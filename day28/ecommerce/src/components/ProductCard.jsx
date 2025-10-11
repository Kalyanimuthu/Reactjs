// components/ProductCard.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="border p-4 rounded shadow">
      <h2 className="font-semibold">{product.name}</h2>
      <p>₹{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
