import { useParams } from 'react-router-dom';

const JobDetails = () => {
  const { jobId } = useParams();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Job Details</h2>
      <p>Job ID: {jobId}</p>
    </div>
  );
};

export default JobDetails;
