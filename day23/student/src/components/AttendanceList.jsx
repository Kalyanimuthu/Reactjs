import React from 'react';
import StudentCard from './StudentCard';

const AttendanceList = ({ students }) => {
  // Calculate overall statistics
  const totalStudents = students.length;
  const averageAttendance = students.reduce((sum, student) => sum + student.attendance, 0) / totalStudents;
  const goodAttendanceCount = students.filter(student => student.attendance > 75).length;
  const lowAttendanceCount = students.filter(student => student.attendance < 50).length;

  return (
    <div className="space-y-8">
      {/* Dashboard Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
          <h3 className="text-gray-600 text-sm uppercase font-semibold mb-2">Total Students</h3>
          <p className="text-3xl font-bold text-gray-800">{totalStudents}</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
          <h3 className="text-gray-600 text-sm uppercase font-semibold mb-2">Average Attendance</h3>
          <p className="text-3xl font-bold text-gray-800">{averageAttendance.toFixed(1)}%</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
          <h3 className="text-gray-600 text-sm uppercase font-semibold mb-2">Good Attendance (%gt;75%)</h3>
          <p className="text-3xl font-bold text-gray-800">{goodAttendanceCount}</p>
        </div>
      </div>

      {/* Students Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            rollNo={student.rollNo}
            attendance={student.attendance}
          >
            {/* Children prop - Custom messages based on attendance */}
            {student.attendance < 50 && (
              <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-lg text-sm mt-3">
                ⚠️ <span className="font-semibold">Warning:</span> Low Attendance! Meet your counselor.
              </div>
            )}
            {student.attendance > 90 && (
              <div className="bg-blue-50 border border-blue-200 text-blue-800 px-4 py-3 rounded-lg text-sm mt-3">
                ⭐ <span className="font-semibold">Excellent Student!</span> Keep it up!
              </div>
            )}
            {student.attendance >= 50 && student.attendance <= 75 && (
              <div className="bg-gray-50 border border-gray-200 text-gray-600 px-4 py-3 rounded-lg text-sm mt-3">
                ℹ️ Maintain regular attendance to improve.
              </div>
            )}
          </StudentCard>
        ))}
      </div>
    </div>
  );
};

export default AttendanceList;