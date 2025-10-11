import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const { items } = useContext(CartContext);

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">🛒 ShopEasy</Link>
      <div className="flex gap-4">
        <Link to="/cart">Cart: {items.length} items</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
