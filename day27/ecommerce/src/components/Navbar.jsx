import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gray-800 text-white p-4 flex gap-4">
    <NavLink to="/" className={({ isActive }) => isActive ? 'font-bold' : ''}>Home</NavLink>
    <NavLink to="/products">Products</NavLink>
    <NavLink to="/cart">Cart</NavLink>
    <NavLink to="/checkout">Checkout</NavLink>
    <NavLink to="/profile">Profile</NavLink>
  </nav>
);

export default Navbar;
