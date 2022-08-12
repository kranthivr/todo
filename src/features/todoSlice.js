import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    list: [
      { id: 1659248294925, task: "Groceries", completed: false },
      { id: 1659248294926, task: "Car Wash", completed: true },
    ],
    filteredList: [],
    toggleValue: null,
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        task: action.payload.task,
        completed: false,
      };
      state.list.push(newTodo);
    },
    toggleComplete: (state, action) => {
      const index = state.list.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.list[index].completed = action.payload.completed;
    },
    updateTodo: (state, action) => {
      const index = state.list.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.list[index].task = action.payload.editedTask;
    },
    deleteTodo: (state, action) => {
      return {
        ...state,
        list: state.list.filter((todo) => todo.id !== action.payload.id),
        filteredList: null,
      };
    },
    filter: (state, action) => {
      let filtered = state.list.filter(
        (todo) => todo.completed === action.payload.toggleValue
      );
      return {
        ...state,
        toggleValue: action.payload.toggleValue,
        filteredList: action.payload.toggleValue === null ? [] : filtered,
      };
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo, updateTodo, filter } =
  todoSlice.actions;

export default todoSlice.reducer;
