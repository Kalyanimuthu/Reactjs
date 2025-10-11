import React, { createContext, useReducer, useEffect } from 'react';

export const TasksContext = createContext();

const initialState = {
  tasks: [],
  completedCount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      const newTasks = [...state.tasks, action.payload];
      return {
        tasks: newTasks,
        completedCount: newTasks.filter((t) => t.completed).length,
      };
    case 'DELETE_TASK':
      const filtered = state.tasks.filter((t) => t.id !== action.payload);
      return {
        tasks: filtered,
        completedCount: filtered.filter((t) => t.completed).length,
      };
    case 'TOGGLE_TASK':
      const toggled = state.tasks.map((t) =>
        t.id === action.payload ? { ...t, completed: !t.completed } : t
      );
      return {
        tasks: toggled,
        completedCount: toggled.filter((t) => t.completed).length,
      };
    case 'CLEAR_ALL':
      return { tasks: [], completedCount: 0 };
    default:
      return state;
  }
};

export const TasksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState, (init) => {
    const stored = localStorage.getItem('tasksState');
    return stored ? JSON.parse(stored) : init;
  });

  useEffect(() => {
    localStorage.setItem('tasksState', JSON.stringify(state));
  }, [state]);

  return (
    <TasksContext.Provider value={{ state, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};
