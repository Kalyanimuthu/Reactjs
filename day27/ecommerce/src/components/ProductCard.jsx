import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <Link to={`/products/${product.id}`} className="block border rounded-lg shadow hover:shadow-xl transition overflow-hidden">
    <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">${product.price}</p>
      <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        View Details
      </button>
    </div>
  </Link>
);

export default ProductCard;
