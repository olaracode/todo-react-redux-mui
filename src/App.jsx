import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Grid,
  Paper,
  List,
  Switch,
  Box,
  Alert,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material/";
import { DarkMode, LightMode } from "@mui/icons-material";
import Item from "./components/Item";
import TodoHeader from "./components/TodoHeader";
import { toggleTheme, toggleLanguage } from "./store/themeSlice";

function App() {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo.list);
  const theme = useSelector((state) => state.setup.theme);
  const language = useSelector((state) => state.setup.language);
  const [textLanguage, setTextLanguage] = useState("English");

  const handleTranslate = (e) => {
    if (e.target.value !== textLanguage) {
      setTextLanguage(e.target.value);
      dispatch(toggleLanguage());
    }
  };

  return (
    <div className={`main ${theme.isDark ? "dark" : "clear"}`}>
      <Container fixed sx={{ paddingTop: "30px" }}>
        <Paper
          elevation={0}
          sx={{
            padding: "30px",
            backgroundColor: theme.colors.primary,
            color: theme.colors.text,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {theme.isDark ? (
                <DarkMode sx={{ color: "#f0f7ff" }} />
              ) : (
                <LightMode sx={{ color: "#f5a11f" }} />
              )}
              <Switch
                checked={theme.isDark}
                onClick={() => dispatch(toggleTheme())}
              />
            </Box>
            <ToggleButtonGroup
              value={textLanguage}
              exclusive
              onChange={(e) => handleTranslate(e)}
            >
              <ToggleButton value={"English"}>EN</ToggleButton>
              <ToggleButton value={"Spanish"}>ES</ToggleButton>
            </ToggleButtonGroup>
          </Box>

          <TodoHeader />
          <List sx={{ paddingTop: "50px" }}>
            {todo.length > 0 ? (
              <Grid container spacing={5}>
                {todo.map((current, index) => {
                  return (
                    <Item
                      text={current.name}
                      id={current.id}
                      secondary={current.description}
                      key={index}
                    />
                  );
                })}
              </Grid>
            ) : (
              <Alert>{`${language.text.noTasks}`}</Alert>
            )}
          </List>
        </Paper>
      </Container>
    </div>
  );
}

export default App;
