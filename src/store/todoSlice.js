import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    // It starts with one item for the example todo
    list: [
      {
        name: "Title",
        description: "Description",
        id: Math.floor(Math.random() * 10000), // Generate random number for ID
      },
    ],
  },
  reducers: {
    increment: (state, action) => {
      let newTodo = {
        name: action.payload.name,
        description: action.payload.description,
        id: Math.floor(Math.random() * 10000), // Generate random number for ID
      };
      state.list = [...state.list, newTodo];
    },
    decrement: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
  },
});

export const { increment, decrement } = todoSlice.actions;

export default todoSlice.reducer;
