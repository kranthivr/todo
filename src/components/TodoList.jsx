import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { Stack } from "@mui/material";

function TodoList() {
  const todos = useSelector(
    (state) => state.todos.filteredState || state.todos.list
  );

  return (
    <Stack>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            task={todo.task}
            completed={todo.completed}
          />
        ))
      ) : (
        <></>
      )}
    </Stack>
  );
}

export default TodoList;
