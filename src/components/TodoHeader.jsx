import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { Box, TextField, Button, Grid, Alert } from "@mui/material";
import { useDispatch } from "react-redux";
import { increment } from "../store/todoSlice";
import { useSelector } from "react-redux";

const TodoHeader = () => {
  const dispatch = useDispatch();

  // Bring language and theme from the store
  const theme = useSelector((state) => state.setup.theme);
  const language = useSelector((state) => state.setup.language);

  //Local State Variables
  const [todoTitle, setTitle] = useState(""); // For the title Input
  const [todoDescription, setDescription] = useState(""); // For the description Input
  const [error, setError] = useState(false); // For the error ternary

  // Handle the "submit" of the new Todo
  const handleAdd = (e) => {
    e.preventDefault();

    // Validate field requirements
    if (todoTitle.length > 4 && todoDescription.length > 8) {
      let addTodo = {
        name: todoTitle,
        description: todoDescription,
      };

      // After validation and the creation of the newTodo Object "clean" the input and local state
      setTitle("");
      setDescription("");

      // Send dispatch
      dispatch(increment(addTodo));
      setError(false); // Remove any possible error
    } else {
      setError(true);
    }
  };

  // Handle the submit but when hitting enter
  const handleEnter = (e) => {
    if (e.key === "enter" || e.key === "Enter") {
      handleAdd(e);
    }
  };

  return (
    <>
      {/* START TITLE */}
      <Box sx={{ textAlign: "center" }}>
        <h1 sx={{}}>{language.text.title}</h1>
      </Box>
      {/* END TITLE */}

      {/* START FORM */}
      <form>
        {/* TITLE INPUT */}
        <TextField
          label={language.text.inputTitle}
          size="large"
          value={todoTitle}
          sx={{
            width: 1,
            paddingBottom: "15px",
            color: theme.colors.text,
            input: {
              color: theme.colors.text,
              border: "0px",
            },
          }}
          InputLabelProps={{
            style: { color: theme.colors.text },
          }}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => handleEnter(e)}
        />

        {/* DESCRIPTION INPUT */}
        <TextField
          label={language.text.inputDescription}
          size="large"
          value={todoDescription}
          sx={{
            width: 1,
            paddingBottom: "15px",
            color: theme.colors.text,
            input: {
              color: theme.colors.text,
              border: "0px",
            },
          }}
          InputLabelProps={{
            style: { color: theme.colors.text },
          }}
          onChange={(e) => setDescription(e.target.value)}
          onKeyDown={(e) => handleEnter(e)}
        />

        {/* START ERROR HANDLING */}
        {error ? (
          <Alert severity="error" onClose={() => setError(false)}>
            {`${language.text.noTasks}`}
          </Alert>
        ) : null}
        {/* END ERROR HANDLING */}

        {/* START SEND BUTTON */}
        <Grid container sx={{ justifyContent: "flex-end", paddingY: "10px" }}>
          <Grid item>
            <Button onClick={(e) => handleAdd(e)} variant={"contained"}>
              <SendIcon sx={{ color: theme.colors.text, paddingX: "10px" }} />
            </Button>
          </Grid>
        </Grid>
        {/* END SEND BUTTON */}
      </form>
      {/* END FORM */}
    </>
  );
};

export default TodoHeader;
