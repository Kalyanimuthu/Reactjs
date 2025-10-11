import React from "react";

function JobCard({ title, company, location, salary, isRemote }) {
  return (
    <div
      className={`border rounded-xl shadow-md p-5 mb-4 transition-all hover:shadow-lg ${
        isRemote ? "border-green-500" : "border-gray-300"
      }`}
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600">Company: {company}</p>
      <p className="text-gray-600 mb-2">Location: {location}</p>

      {isRemote && (
        <span className="inline-block bg-green-100 text-green-700 px-2 py-1 text-sm rounded-md mr-2">
          🌐 Remote Job
        </span>
      )}

      <span
        className={`inline-block px-2 py-1 text-sm rounded-md ${
          salary > 100000
            ? "bg-blue-100 text-blue-700 font-semibold"
            : "bg-gray-100 text-gray-600"
        }`}
      >
        {salary > 100000 ? "💰 High Paying Job" : "Standard Salary"}
      </span>

      <div className="mt-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
          Apply
        </button>
      </div>
    </div>
  );
}

export default JobCard;
