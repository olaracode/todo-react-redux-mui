import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import themeReducer from "./themeSlice";
export default configureStore({
  reducer: {
    todo: todoReducer,
    setup: themeReducer,
  },
});
