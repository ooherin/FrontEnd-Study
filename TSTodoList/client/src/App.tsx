import "./App.css";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
