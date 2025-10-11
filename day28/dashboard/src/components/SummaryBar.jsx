import React, { useContext } from 'react';
import { TasksContext } from '../context/TasksContext';

const SummaryBar = () => {
  const { state, dispatch } = useContext(TasksContext);

  return (
    <div className="bg-gray-100 p-4 flex justify-between items-center">
      <div>
        <strong>Total Tasks:</strong> {state.tasks.length} |{' '}
        <strong>Completed:</strong> {state.completedCount}
      </div>
      <button
        onClick={() => dispatch({ type: 'CLEAR_ALL' })}
        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
      >
        Clear All
      </button>
    </div>
  );
};

export default SummaryBar;
