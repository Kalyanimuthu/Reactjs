// Import React
import React from 'react';

// Functional Component Definition
const ProductCard = (props) => {
    // Destructuring props for easier access
    const { name, price, discount, availability, image } = props;

    return (
        <div className="product-card">
            {/* Product Image */}
            <img src={image} alt={name} className="product-image" />
            
            {/* Conditional Rendering - Sale Badge */}
            {discount > 0 && (
                <span className="sale-badge" style={{ color: 'red' }}>
                    On Sale
                </span>
            )}
            
            {/* Product Details */}
            <h3>{name}</h3>
            
            {/* Price Display */}
            <p className="price">
                <strong>${price}</strong>
                {discount > 0 && (
                    <span style={{ color: 'red', marginLeft: '8px' }}>
                        Save ${discount}
                    </span>
                )}
            </p>
            
            {/* Conditional Rendering - Availability */}
            <p className={availability ? 'in-stock' : 'out-of-stock'}>
                {availability ? 'In Stock' : 'Out of Stock'}
            </p>
        </div>
    );
};

// Export the component
export default ProductCard;