import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "setup",
  initialState: {
    // Dark theme comes by default
    theme: {
      isDark: true,
      colors: {
        primary: "#121212",
        secondary: "#1a2027",
        text: "white",
        special: "#e64a5c",
      },
    },
    // English by default
    language: {
      isSpanish: false,
      text: {
        title: "Organize your day",
        inputTitle: "New task title",
        inputDescription: "New task description",
        noTasks: "There is no task left!",
        todoError:
          "Task name must be longer than 4 characters and task description must longer than 9 characters",
      },
    },
  },
  reducers: {
    // Change from dark to light theme
    toggleTheme: (state) => {
      state.theme.isDark = !state.theme.isDark; // Reverse the Boolean Value
      state.theme.colors = state.theme.isDark
        ? {
            primary: "#121212",
            secondary: "#1a2027",
            text: "white",
            special: "#e64a5c",
          }
        : {
            primary: "#fafafa",
            secondary: "#f0f7ff",
            text: "black",
            special: "red",
          };
    },
    // Change from spanish to english
    toggleLanguage: (state) => {
      state.language.isSpanish = !state.language.isSpanish;
      state.language.text = state.language.isSpanish
        ? {
            title: "Organiza tu día",
            inputTitle: "Titulo de la tarea",
            inputDescription: "Descripcion",
            noTasks: "There is no task left!",
            todoError:
              "El titulo debe ser mas largo de 4 caracteres y la descripcion debe ser mas larga de 9 caracteres",
          }
        : {
            title: "Organize your day",
            inputTitle: "New task title",
            inputDescription: "New task description",
            noTasks: "No hay mas tareas!",
            todoError:
              "Task name must be longer than 4 characters and task description must longer than 9 characters",
          };
    },
  },
});
export const { toggleTheme, toggleLanguage } = themeSlice.actions;

export default themeSlice.reducer;
