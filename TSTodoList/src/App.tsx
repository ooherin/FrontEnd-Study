import "./App.css";
import Header from "./layouts/Header";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
