import React from "react";
import { AppContextWrapper } from "./store/AppContext";
import TasksContainer from "./components/TasksContainer/TasksContainer";

const App = () => {
  return (
    <AppContextWrapper>
      <p>Hello world! 🌎</p>
      <TasksContainer />
    </AppContextWrapper>
  );
};

export default App;
