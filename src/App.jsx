import "./App.css";
import { Stack, Typography } from "@mui/material";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import FilterList from "./components/FilterList";

function App() {
  return (
    <>
      <Typography textAlign="center">Todo App</Typography>
      <Stack
        backgroundColor="#b2ebf2"
        maxWidth={540}
        alignItems="center"
        margin="auto"
        borderRadius={3}
      >
        <TodoForm />
        <FilterList />
        <TodoList />
      </Stack>
    </>
  );
}

export default App;
