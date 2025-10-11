import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-blue-600 text-white p-4 flex gap-4">
    <NavLink to="/" className={({ isActive }) => isActive ? 'font-bold' : ''}>Home</NavLink>
    <NavLink to="/jobs">Jobs</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/contact">Contact</NavLink>
    <NavLink to="/dashboard">Dashboard</NavLink>
  </nav>
);

export default Navbar;
