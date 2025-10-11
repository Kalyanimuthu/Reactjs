import { Outlet, NavLink } from 'react-router-dom';

const Dashboard = () => (
  <div className="p-4">
    <h2 className="text-xl font-bold mb-4">Dashboard</h2>
    <nav className="flex gap-4 mb-4">
      <NavLink to="applications">Applications</NavLink>
      <NavLink to="profile">Profile</NavLink>
    </nav>
    <Outlet />
  </div>
);

export default Dashboard;
