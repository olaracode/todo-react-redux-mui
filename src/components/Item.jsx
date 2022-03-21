import React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { decrement } from "../store/counterSlice";
const Item = (props) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(decrement(id));
  };
  return (
    <Grid item xs={12} lg={4}>
      <ListItem
        sx={{
          borderRadius: "10px",
          backgroundColor: "#1a2027",
          justifyContent: "center",
        }}
      >
        <ListItemText
          primary={props.text}
          secondary={props.secondary}
          secondaryTypographyProps={{ color: "#ed5d5b" }}
        />
        <ListItemIcon>
          <IconButton onClick={() => handleDelete(props.id)}>
            <DeleteIcon sx={{ color: "#e64a5c" }} />
          </IconButton>
        </ListItemIcon>
      </ListItem>
    </Grid>
  );
};

export default Item;
