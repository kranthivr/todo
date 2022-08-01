import "./App.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Link, Stack, Typography } from "@mui/material";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import FilterList from "./components/FilterList";

function App() {
  return (
    <>
      <Box display="flex" justifyContent="center">
        <Typography textAlign="center">Todo App</Typography>
        <Link
          marginLeft={2}
          target="_blank"
          href="https://github.com/kranthivr/todo.git"
        >
          <GitHubIcon />
        </Link>
      </Box>
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
