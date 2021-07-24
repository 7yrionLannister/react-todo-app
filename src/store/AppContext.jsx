import React, { useState } from "react";

const AppContext = React.createContext();

export const AppContextWrapper = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const state = { tasks, setTasks };

  return (
    <AppContext.Provider value={state} displayName="AppContext">
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;
