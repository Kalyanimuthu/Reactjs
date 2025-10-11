import { useSearchParams } from 'react-router-dom';

const Jobs = () => {
  const [searchParams] = useSearchParams();
  const location = searchParams.get('location');
  const type = searchParams.get('type');

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">All Jobs</h2>
      <p>Filters: {location || 'Any'} / {type || 'Any'}</p>
      {/* Render job cards here */}
    </div>
  );
};

export default Jobs;
