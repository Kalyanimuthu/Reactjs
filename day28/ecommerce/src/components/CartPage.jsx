// components/CartPage.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
  const { items, removeFromCart, clearCart } = useContext(CartContext);

  const handleCheckout = () => {
    alert('Checkout successful!');
    clearCart();
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item.id} className="flex justify-between items-center border p-2 rounded">
                <span>{item.name} - ₹{item.price}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-4">
            <button
              onClick={clearCart}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Clear Cart
            </button>
            <button
              onClick={handleCheckout}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
