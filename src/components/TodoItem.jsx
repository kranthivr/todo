import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleComplete,
  deleteTodo,
  updateTodo,
  filter,
} from "../features/todoSlice";
import {
  Box,
  IconButton,
  Checkbox,
  Typography,
  Input,
  TextField,
  Button,
  FormGroup,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import UploadIcon from "@mui/icons-material/Upload";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function TodoItem({ id, task, completed }) {
  const dispatch = useDispatch();
  const [editText, setEditText] = useState("");
  const [tempId, setTempId] = useState("");
  const { filteredList, toggleValue } = useSelector((state) => state.todos);
  const editRef = useRef(null);
  const inputEditRef = useRef(null);
  const editButtonRef = useRef(null);
  const taskRef = useRef(null);
  const updateButtonRef = useRef(null);

  const toggleCheck = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
    dispatch(filter({ toggleValue: toggleValue }));
  };

  const editTask = () => {
    setEditText(task);
    editRef.current.style.display = "flex";
    inputEditRef.current.focus();
    taskRef.current.style.display = "none";
  };

  const updateTask = (e) => {
    e && e.preventDefault();
    dispatch(updateTodo({ id: tempId, editedTask: editText }));
    editRef.current.style.display = "none";
    taskRef.current.style.display = "flex";
  };

  const deleteTask = () => {
    dispatch(deleteTodo({ id: id }));
    dispatch(filter({ toggleValue: toggleValue }));
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
      <form
        ref={editRef}
        style={{ display: "none" }}
        onSubmit={() => {
          editRef.current.reportValidity();
          updateTask();
        }}
      >
        <TextField
          inputRef={inputEditRef}
          variant="standard"
          size="small"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          inputProps={{ maxLength: 20 }}
          onBlur={() => {
            if (editText.length === 0) {
              setEditText(task);
            }
            editRef.current.reportValidity();
            updateTask();
          }}
          required
        />
      </form>
      <Typography
        ref={taskRef}
        onClick={() => {
          editTask();
          setTempId(id);
          setEditText(task);
        }}
      >
        {task}
      </Typography>
      <Box>
        <IconButton type="button" onClick={deleteTask} title="Delete">
          <DeleteForeverIcon sx={{ color: "red" }} fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
}

export default TodoItem;
