import React, { useContext, useState } from "react";
import "./TaskForm.scss";
import AppContext from "../../store/AppContext";
import { TextField, Button } from "@material-ui/core";
import { Save } from "@material-ui/icons";
import TasksSorter from "../TasksSorter/TasksSorter";

const TaskForm = () => {
  const state = useContext(AppContext);
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    state.saveTask(text);
    setText("");
  };

  return (
    <form className="taskForm" onSubmit={handleSubmit}>
      <TextField
        className="taskForm__input"
        required={true}
        value={text}
        onChange={(event) => setText(event.target.value)}
        label="Agrega un título a la tarea"
      />
      <Button
        type="submit"
        color="primary"
        startIcon={<Save />}
        disabled={!text.length}
      >
        Guardar
      </Button>
    </form>
  );
};

export default TaskForm;
