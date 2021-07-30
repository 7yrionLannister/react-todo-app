import React, { useState } from "react";
import * as uuid from "uuid";
import { SORT_TYPE_ASC, SORT_TYPE_DSC } from "../constants/sort";

const AppContext = React.createContext();

export const AppContextWrapper = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const setTaskStatus = (id, status) => {
    const tasksUpdated = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task, // esto expande todas las propiedades de este objeto
          completed: status,
        };
      }
      return task;
    });

    setTasks(tasksUpdated);
  };

  const setTaskTitle = (id, newTitle) => {
    const tasksUpdated = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task, // esto expande todas las propiedades de este objeto
          title: newTitle,
        };
      }
      return task;
    });

    setTasks(tasksUpdated);
  };

  const deleteTask = (id) => {
    const tasksUpdated = tasks.filter((task) => task.id !== id);
    setTasks(tasksUpdated);
  };

  const saveTask = (title) => {
    const newTask = {
      id: uuid.v1(),
      completed: false,
      userId: uuid.v1(),
      title,
    };

    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  };

  const sortTasks = (sortType) => {
    const tasksCopy = tasks.map((task) => task);
    if (sortType === SORT_TYPE_ASC) {
      tasksCopy.sort((a, b) => (a.title > b.title ? 1 : -1));
    } else if (sortType === SORT_TYPE_DSC) {
      tasksCopy.sort((a, b) => (a.title > b.title ? -1 : 1));
    }
    setTasks(tasksCopy);
  };

  const state = {
    tasks,
    setTasks,
    setTaskStatus,
    saveTask,
    sortTasks,
    setTaskTitle,
    deleteTask,
  };

  return (
    <AppContext.Provider value={state} displayName="AppContext">
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;
