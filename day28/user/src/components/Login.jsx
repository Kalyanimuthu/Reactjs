import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('user');
  const navigate = useNavigate();

  const handleLogin = () => {
    login({ name: 'John Doe', email, role });
    navigate(role === 'admin' ? '/dashboard' : '/profile');
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input
        type="email"
        placeholder="Email"
        className="border p-2 mb-2 block w-full"
        onChange={(e) => setEmail(e.target.value)}
      />
      <select
        className="border p-2 mb-4 block w-full"
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
