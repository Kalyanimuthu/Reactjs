import React, { useState, useEffect } from 'react';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('All');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTasks(savedTasks);
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const addTask = () => {
    if (inputValue.trim() === '') return;
    const newTask = {
      id: Date.now(),
      title: inputValue,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setInputValue('');
    showToast('Task added!');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
    showToast('Task deleted!');
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'Completed') return task.completed;
    if (filter === 'Pending') return !task.completed;
    return true;
  });

  const showToast = (message) => {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.className = 'fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded shadow-lg z-50';
    document.body.appendChild(toast);
    setTimeout(() => document.body.removeChild(toast), 3000);
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'} min-h-screen p-6`}>
      <h1 className="text-3xl font-bold mb-4">📝 To-Do List</h1>
      <button
        onClick={toggleTheme}
        className="mb-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        Toggle Theme ({theme})
      </button>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a task"
          className="flex-grow px-3 py-2 border rounded"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Add
        </button>
      </div>

      <div className="flex gap-2 mb-4">
        {['All', 'Completed', 'Pending'].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded ${filter === f ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'}`}
          >
            {f}
          </button>
        ))}
      </div>

      <ul className="space-y-2 mb-4">
        {filteredTasks.map(task => (
          <li key={task.id} className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-3 rounded">
            <span className={task.completed ? 'line-through' : ''}>{task.title}</span>
            <div className="flex gap-2">
              <button
                onClick={() => toggleComplete(task.id)}
                className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
              >
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="text-sm text-gray-600 dark:text-gray-300">
        Task Count: {tasks.length}
      </div>
    </div>
  );
};

export default ToDoList;
