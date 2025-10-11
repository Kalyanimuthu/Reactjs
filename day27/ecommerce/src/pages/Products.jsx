import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'Wireless Headphones', price: 99.99, image: 'https://via.placeholder.com/300x200?text=Headphones' },
  { id: 2, name: 'Smart Watch', price: 149.99, image: 'https://via.placeholder.com/300x200?text=Smart+Watch' },
  { id: 3, name: 'Gaming Mouse', price: 59.99, image: 'https://via.placeholder.com/300x200?text=Gaming+Mouse' },
  { id: 4, name: 'Bluetooth Speaker', price: 79.99, image: 'https://via.placeholder.com/300x200?text=Speaker' },
];

const Products = () => (
  <div className="p-6 max-w-7xl mx-auto">
    <h1 className="text-3xl font-bold mb-6">Featured Products</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default Products;
