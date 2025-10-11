import React from 'react';

const StudentCard = ({ name, rollNo, attendance, children }) => {
  // Get status badge styling based on attendance
  const getStatusBadgeClass = () => {
    if (attendance >= 90) return 'bg-green-100 text-green-800';
    if (attendance >= 75) return 'bg-blue-100 text-blue-800';
    if (attendance >= 50) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  // Get status text
  const getStatusText = () => {
    if (attendance >= 90) return 'Excellent';
    if (attendance >= 75) return 'Good';
    if (attendance >= 50) return 'Average';
    return 'Poor';
  };

  // Get progress bar color based on attendance
  const getProgressBarColor = () => {
    if (attendance >= 75) return 'bg-green-500';
    if (attendance >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 p-6 hover:-translate-y-1">
      {/* Student Header */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">{name}</h3>
        <p className="text-gray-600 text-sm font-medium">Roll No: {rollNo}</p>
      </div>

      {/* Attendance Display */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-gray-700 font-medium">Attendance:</span>
          <span 
            className={`font-bold text-lg ${
              attendance > 75 ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {attendance}%
          </span>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadgeClass()}`}>
          {getStatusText()}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className={`h-2.5 rounded-full ${getProgressBarColor()} transition-all duration-500`}
            style={{ width: `${attendance}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0%</span>
          <span>50%</span>
          <span>100%</span>
        </div>
      </div>

      {/* Custom Messages via Children Prop */}
      <div className="mb-4">
        {children}
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2">
        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium text-sm transition-colors duration-200">
          View Details
        </button>
        <button className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg font-medium text-sm transition-colors duration-200">
          Send Report
        </button>
      </div>
    </div>
  );
};

export default StudentCard;