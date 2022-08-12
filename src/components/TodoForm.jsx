import { Button, TextField, Box, FormControl } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

function TodoForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const textAreaRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        task: task,
      })
    );
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box margin={2} display="flex">
        <TextField
          autoFocus
          label="Enter Task"
          size="small"
          variant="outlined"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          inputProps={{ maxLength: 20 }}
          required
        />
        <Button variant="contained" type="submit">
          Add
        </Button>
      </Box>
    </form>
  );
}

export default TodoForm;
