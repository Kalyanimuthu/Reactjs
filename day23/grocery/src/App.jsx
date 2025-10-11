import React from 'react';
import ProductList from './components/ProductList';
import './App.css';

function App() {
    // Products Array with all required data
    const products = [
        {
            id: 1,
            name: 'Organic Apples',
            price: 4.99,
            discount: 0.50,
            availability: true,
            image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400'
        },
        {
            id: 2,
            name: 'Fresh Milk',
            price: 3.49,
            discount: 0,
            availability: true,
            image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400'
        },
        {
            id: 3,
            name: 'Whole Wheat Bread',
            price: 2.99,
            discount: 1.00,
            availability: false,
            image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400'
        },
        {
            id: 4,
            name: 'Greek Yogurt',
            price: 4.25,
            discount: 0,
            availability: false,
            image: 'https://images.unsplash.com/photo-1567171307661-b0d0e584d1d9?w=400'
        }
    ];

    return (
        <div className="app">
            <h1>FreshMart Grocery Store</h1>
            {/* Passing data via props to child component */}
            <ProductList products={products} />
        </div>
    );
}

export default App;