import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../features/todoSlice";
import { Box, IconButton, Checkbox, Typography } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function TodoItem({ id, task, completed }) {
  const dispatch = useDispatch();

  const toggleCheck = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };

  const deleteTask = () => {
    dispatch(deleteTodo({ id: id }));
  };

  return (
    <Box
      width={250}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor="beige"
      margin={0.5}
      borderRadius={1}
    >
      <Checkbox checked={completed} onChange={toggleCheck} size="small" />
      <Typography>{task}</Typography>
      <IconButton type="button" onClick={deleteTask}>
        <DeleteForeverIcon sx={{ color: "red" }} fontSize="small" />
      </IconButton>
    </Box>
  );
}

export default TodoItem;
