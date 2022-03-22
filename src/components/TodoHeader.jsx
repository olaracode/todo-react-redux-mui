import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { Box, Paper, TextField, Button, Grid, Alert } from "@mui/material";
import { useDispatch } from "react-redux";
import { increment } from "../store/counterSlice";
import { useSelector } from "react-redux";

const TodoHeader = () => {
  const dispatch = useDispatch();
  const [todoTitle, setTitle] = useState("");
  const [todoDescription, setDescription] = useState("");
  const [error, setError] = useState(false);
  const theme = useSelector((state) => state.setup.theme);
  const language = useSelector((state) => state.setup.language);

  const handleAdd = (e) => {
    e.preventDefault();
    if (todoTitle.length > 4 && todoDescription.length > 8) {
      let addTodo = {
        name: todoTitle,
        description: todoDescription,
      };
      setTitle("");
      setDescription("");
      dispatch(increment(addTodo));
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleEnter = (e) => {
    if (e.key === "enter" || e.key === "Enter") {
      handleAdd(e);
    }
  };

  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <h1 sx={{}}>{language.text.title}</h1>
      </Box>
      <form>
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
        {error ? (
          <Alert severity="error" onClose={() => setError(false)}>
            {`${language.text.noTasks}`}
          </Alert>
        ) : null}
        <Grid container sx={{ justifyContent: "flex-end", paddingY: "10px" }}>
          <Grid item>
            <Button onClick={(e) => handleAdd(e)} variant={"contained"}>
              <SendIcon sx={{ color: theme.colors.text, paddingX: "10px" }} />
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default TodoHeader;
