import { Route, Routes } from "react-router-dom";
import MainPage from "../page/Main";
import TodoPage from "../page/Todo";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/todo" element={<TodoPage />}></Route>
    </Routes>
  );
};
export default Routing;
