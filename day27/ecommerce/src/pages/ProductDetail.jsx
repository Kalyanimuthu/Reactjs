import { useParams } from 'react-router-dom';

const productData = {
  1: { name: 'Wireless Headphones', price: 99.99, description: 'High-quality sound with noise cancellation.' },
  2: { name: 'Smart Watch', price: 149.99, description: 'Track your fitness and stay connected.' },
  3: { name: 'Gaming Mouse', price: 59.99, description: 'Precision and speed for competitive gaming.' },
  4: { name: 'Bluetooth Speaker', price: 79.99, description: 'Portable speaker with deep bass.' },
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = productData[id];

  if (!product) return <div className="p-6">Product not found.</div>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
      <p className="text-gray-700 mb-4">${product.price}</p>
      <p>{product.description}</p>
      <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
