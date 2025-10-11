import React from "react";
import JobCard from "./JobCard";

function JobList() {
  const jobs = [
    { id: 1, title: "Frontend Developer", company: "TechSoft", location: "Bangalore", isRemote: true, salary: 120000 },
    { id: 2, title: "Backend Engineer", company: "CodeWave", location: "Hyderabad", isRemote: false, salary: 90000 },
    { id: 3, title: "Full Stack Developer", company: "InnovateX", location: "Remote", isRemote: true, salary: 150000 },
    { id: 4, title: "UI/UX Designer", company: "DesignPro", location: "Chennai", isRemote: false, salary: 75000 },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        Job Board
      </h1>

      {jobs.map((job) => (
        <JobCard
          key={job.id}
          title={job.title}
          company={job.company}
          location={job.location}
          salary={job.salary}
          isRemote={job.isRemote}
        />
      ))}
    </div>
  );
}

export default JobList;
