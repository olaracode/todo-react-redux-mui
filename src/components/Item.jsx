import React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { decrement } from "../store/todoSlice";

const Item = (props) => {
  const dispatch = useDispatch();

  // Fetch theme from the store
  const theme = useSelector((state) => state.setup.theme);

  // Handle Delete
  const handleDelete = (id) => {
    dispatch(decrement(id));
  };
  return (
    <Grid item xs={12} lg={4}>
      <ListItem
        sx={{
          borderRadius: "10px",
          backgroundColor: theme.colors.secondary,
          justifyContent: "center",
        }}
      >
        <ListItemText
          primary={props.text}
          secondary={props.secondary}
          secondaryTypographyProps={{ color: theme.colors.special }}
        />
        <ListItemIcon>
          <IconButton onClick={() => handleDelete(props.id)} color="error">
            <DeleteIcon />
          </IconButton>
        </ListItemIcon>
      </ListItem>
    </Grid>
  );
};

export default Item;
