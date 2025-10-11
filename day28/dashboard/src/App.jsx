import React from 'react';
import { TasksProvider } from './context/TasksContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import SummaryBar from './components/SummaryBar';

const App = () => (
  <TasksProvider>
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <AddTaskForm />
          <TaskList />
        </main>
      </div>
      <SummaryBar />
    </div>
  </TasksProvider>
);

export default App;
