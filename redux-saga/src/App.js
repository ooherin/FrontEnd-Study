import "./App.css";
import { Provider } from "react-redux";
import store from "../store";

function App() {
  return (
    <Provider store={store}>
      <counter />
    </Provider>
  );
}

export default App;
