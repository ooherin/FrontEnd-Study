import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./page/Main";
import TodoPage from "./page/Todo";
import Layout from "./layouts/Layout";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/todo" element={<TodoPage />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
