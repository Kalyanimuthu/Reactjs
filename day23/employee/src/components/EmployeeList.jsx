// EmployeeList.jsx
import React from 'react';
import EmployeeCard from './EmployeeCard';

const employees = [
  { id: 1, name: 'Alice Johnson', role: 'Manager', department: 'HR', isActive: true },
  { id: 2, name: 'Bob Smith', department: 'Engineering', isActive: false },
  { id: 3, name: 'Carol White', role: 'Designer', department: 'Marketing', isActive: true },
  { id: 4, name: 'David Lee', role: 'Recruiter', department: 'HR', isActive: false },
];

const EmployeeList = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">👥 Employee Directory</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {employees.map((emp) => (
          <EmployeeCard
            key={emp.id}
            name={emp.name}
            role={emp.role}
            department={emp.department}
            isActive={emp.isActive}
          />
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
