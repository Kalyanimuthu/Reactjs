import React, { useContext } from 'react';
import { TasksContext } from '../context/TasksContext';

const TaskList = () => {
  const { state, dispatch } = useContext(TasksContext);

  return (
    <div className="p-4">
      {state.tasks.length === 0 ? (
        <p className="text-gray-500">No tasks yet.</p>
      ) : (
        <ul className="space-y-2">
          {state.tasks.map((task) => (
            <li
              key={task.id}
              className={`flex justify-between items-center p-3 border rounded ${
                task.completed ? 'bg-green-100' : 'bg-white'
              }`}
            >
              <span className={task.completed ? 'line-through' : ''}>{task.text}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  {task.completed ? 'Undo' : 'Mark Complete'}
                </button>
                <button
                  onClick={() => dispatch({ type: 'DELETE_TASK', payload: task.id })}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
