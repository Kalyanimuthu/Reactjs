import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/profile/orders', { state: { success: true } });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Checkout</h2>
      <button onClick={handleCheckout} className="bg-green-600 text-white px-4 py-2 rounded">
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
