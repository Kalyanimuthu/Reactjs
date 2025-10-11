import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import CartPage from './components/CartPage';

const sampleProducts = [
  { id: 1, name: 'T-Shirt', price: 499 },
  { id: 2, name: 'Jeans', price: 999 },
  { id: 3, name: 'Sneakers', price: 1999 },
];

const App = () => (
  <CartProvider>
    <Navbar />
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route
        path="/"
        element={
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {sampleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        }
      />
      <Route path="/cart" element={<CartPage />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  </CartProvider>
);

export default App;
