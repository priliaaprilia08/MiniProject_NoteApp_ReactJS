import { createSlice } from "@reduxjs/toolkit";
import mockapi from "../api/mockapi";

const initialState = {
  todos: [],
  refresh: false,
};

// Action Creator
export const fetchTodos = () => {
  return async (dispatch) => {
    const { data } = await mockapi.get("/notes");
    dispatch(getTodo(data));
    // console.log(data);
  };
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,

  reducers: {
    getTodo: (state, action) => {
      state.todos = action.payload;
    },

    addTodo: (state, action) => {
      mockapi.post("/notes", {
        item: action.payload,
      });
    },

    removeTodo: (state, action) => {
      console.log(action.payload);
      mockapi.delete(`/notes/${state.todos[action.payload].id}`);
    },

    updateTodo: (state, action) => {
      mockapi.put(`/notes/${state.todos[action.payload.id].id}`, {
        item: action.payload.value,
      });
      // console.log(action.payload.value + action.payload.id);
    },

    completeTodo: (state, action) => {
      mockapi.put(`/notes/${state.todos[action.payload].id}`, {
        completed: true,
      });
    },

    setRefresh: (state, action) => {
      state.refresh = action.payload;
    },
  },
});

export const {
  getTodo,
  addTodo,
  removeTodo,
  updateTodo,
  completeTodo,
  setRefresh,
} = todoSlice.actions;
export const reducer = todoSlice.reducer;
