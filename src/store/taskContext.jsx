import { createContext, useState, useEffect, useContext } from 'react';

const TaskContext = createContext();

export const useTaskContext = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  // Task State
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Dark Mode State
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true';
  });

  // Persist Tasks
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Persist Dark Mode
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    // Apply class to body for global styling
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  // Task Actions
  const addTask = (text) => {
    if (!text.trim()) return;
    const newTask = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const value = {
    tasks,
    darkMode,
    addTask,
    deleteTask,
    toggleTask,
    toggleDarkMode,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
