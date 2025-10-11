import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/dashboard');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome to Job Portal</h1>
      <button onClick={handleLogin} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
        Login to Dashboard
      </button>
    </div>
  );
};

export default Home;
