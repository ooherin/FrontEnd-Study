import "./App.css";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import MainPage from "./page/Main";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
