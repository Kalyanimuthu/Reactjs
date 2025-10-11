import React, { useState, useContext } from 'react';
import { TasksContext } from '../context/TasksContext';

const AddTaskForm = () => {
  const { dispatch } = useContext(TasksContext);
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      dispatch({
        type: 'ADD_TASK',
        payload: { id: Date.now(), text, completed: false },
      });
      setText('');
    }
  };

  return (
    <div className="p-4">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New task"
        className="border p-2 rounded w-2/3"
      />
      <button
        onClick={handleAdd}
        className="ml-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTaskForm;
