import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('user');
  const navigate = useNavigate();

  const handleLogin = () => {
    const userData = {
      name: 'John Doe',
      email,
      role,
    };
    login(userData);
    navigate(role === 'admin' ? '/dashboard' : '/profile');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
          onChange={(e) => setEmail(e.target.value)}
        />
        <select
          className="w-full mb-3 p-2 border rounded"
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
