import { Outlet, useLocation } from 'react-router-dom';

const Profile = () => {
  const location = useLocation();
  const success = location.state?.success;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Your Profile</h2>
      {success && <p className="text-green-600">Order placed successfully!</p>}
      <Outlet />
    </div>
  );
};

export default Profile;
