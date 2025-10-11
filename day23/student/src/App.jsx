import React from 'react';
import AttendanceList from './components/AttendanceList';

function App() {
  // Students array with all required data
  const students = [
    {
      id: 1,
      name: 'Alice Johnson',
      rollNo: '2024001',
      attendance: 92
    },
    {
      id: 2,
      name: 'Bob Smith',
      rollNo: '2024002',
      attendance: 45
    },
    {
      id: 3,
      name: 'Carol Davis',
      rollNo: '2024003',
      attendance: 78
    },
    {
      id: 4,
      name: 'David Wilson',
      rollNo: '2024004',
      attendance: 35
    },
    {
      id: 5,
      name: 'Eva Brown',
      rollNo: '2024005',
      attendance: 88
    },
    {
      id: 6,
      name: 'Frank Miller',
      rollNo: '2024006',
      attendance: 95
    },
    {
      id: 7,
      name: 'Grace Lee',
      rollNo: '2024007',
      attendance: 67
    },
    {
      id: 8,
      name: 'Henry Taylor',
      rollNo: '2024008',
      attendance: 82
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-8 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">Student Attendance Dashboard</h1>
          <p className="text-xl opacity-90">Monitor and manage student attendance records</p>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-1 py-8 px-4 max-w-7xl mx-auto w-full">
        <AttendanceList students={students} />
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>School Management System © 2024</p>
      </footer>
    </div>
  );
}

export default App;