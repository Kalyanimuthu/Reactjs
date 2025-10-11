// EmployeeCard.jsx
import React from 'react';

const EmployeeCard = ({ name, role = "Employee", department, isActive }) => {
  const statusStyle = isActive ? 'text-green-600' : 'text-red-600';
  const cardStyle = department === "HR" ? 'bg-blue-50' : 'bg-white';

  return (
    <div className={`p-4 rounded shadow-md border ${cardStyle}`}>
      <div className="font-bold text-lg">{name}</div>
      <div className="italic text-gray-700">{role}</div>
      <span className="text-sm text-gray-500">Department: {department}</span>
      <div className={`mt-2 font-semibold ${statusStyle}`}>
        {isActive ? 'Active' : 'Inactive'}
      </div>
    </div>
  );
};

export default EmployeeCard;
