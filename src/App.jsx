import { useSelector } from "react-redux";
import { Container, Grid, Paper, List } from "@mui/material/";
import Item from "./components/Item";
import TodoHeader from "./components/TodoHeader";
function App() {
  const todo = useSelector((state) => state.todo.list);

  return (
    <div className="main">
      <Container fixed sx={{ paddingTop: "30px" }}>
        <Paper
          elevation={0}
          sx={{ padding: "30px", backgroundColor: "#121212", color: "white" }}
        >
          <TodoHeader />
          <List sx={{ paddingTop: "50px" }}>
            {todo.length > 0 ? (
              <Grid container spacing={5}>
                {todo.map((current, index) => {
                  return (
                    <Item
                      text={current.name}
                      id={current.id}
                      secondary={current.time}
                      key={index}
                    />
                  );
                })}
              </Grid>
            ) : (
              "No hay tareas"
            )}
          </List>
        </Paper>
      </Container>
    </div>
  );
}

export default App;
