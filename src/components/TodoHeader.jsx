import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { Box, Paper, TextField, IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { increment } from "../store/counterSlice";

const TodoHeader = () => {
  const dispatch = useDispatch();
  const [newTodo, setTodo] = useState("");
  const handleAdd = (e) => {
    e.preventDefault();
    let currentTime = new Date().toDateString();
    let addTodo = {
      name: newTodo,
      time: currentTime,
    };
    setTodo("");
    dispatch(increment(addTodo));
  };
  const handleEnter = (e) => {
    if (e.key === "enter" || e.key === "Enter") {
      handleAdd(e);
    }
  };
  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <h1 sx={{}}>Organizate</h1>
      </Box>
      <Paper
        sx={{
          display: "flex",
          backgroundColor: "#1a2027",
          alignItems: "center",
        }}
      >
        <TextField
          label="Add new ToDo"
          size="large"
          value={newTodo}
          sx={{
            width: 1,
            color: "white",
            input: {
              color: "white",
              border: "none",
            },
          }}
          InputLabelProps={{
            style: { color: "#fff" },
          }}
          onChange={(e) => setTodo(e.target.value)}
          onKeyDown={(e) => handleEnter(e)}
        />
        <IconButton onClick={(e) => handleAdd(e)}>
          <SendIcon sx={{ color: "white" }} />
        </IconButton>
      </Paper>
    </>
  );
};

export default TodoHeader;
