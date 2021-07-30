import React, { useContext, useState } from "react";
import "./TaskItem.scss";
import Card from "@material-ui/core/Card";
import AppContext from "../../store/AppContext";
import { IconButton, Checkbox, TextField } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";

const TaskItem = ({ id, completed, title }) => {
  const state = useContext(AppContext);

  const [isUpdating, setIsUpdating] = useState(false);
  const [text, setText] = useState(title);

  const handleCheck = (event) => {
    const status = event.target.checked;
    state.setTaskStatus(id, status);
    console.log(event);
  };

  const handleUpdate = (event) => {
    console.log("guardar");
    setIsUpdating(false);
    state.setTaskTitle(id, event.target.value);
  };

  return (
    <Card className="taskItem">
      <div className="taskItem__checkbox">
        <Checkbox
          checked={completed}
          onChange={(event) => handleCheck(event)}
        ></Checkbox>
      </div>
      <div className="taskItem__title">
        {isUpdating ? (
          <TextField
            className="taskItem__input"
            label="Tarea..."
            value={text}
            onChange={(event) => setText(event.target.value)}
          ></TextField>
        ) : (
          <p>{text}</p>
        )}
      </div>
      <div className="taskItem__buttons">
        {isUpdating ? (
          <IconButton
            color="primary"
            onClick={handleUpdate}
            disabled={!text.length}
          >
            <SaveIcon></SaveIcon>
          </IconButton>
        ) : (
          <IconButton
            color="secondary"
            onClick={() => {
              console.log("editar");
              setIsUpdating(true);
            }}
          >
            <CreateIcon></CreateIcon>
          </IconButton>
        )}
        <IconButton color="secondary" onClick={() => state.deleteTask(id)}>
          <DeleteIcon></DeleteIcon>
        </IconButton>
      </div>
    </Card>
  );
};

export default TaskItem;
