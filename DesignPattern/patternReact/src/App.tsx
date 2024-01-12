import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import observable from "../src/ObserverPattern/ObserverPattern";

function App() {
  //observable에게 notify를 사용해서 전체 이벤트 전파
  //구독하고 있던 토스트와 로그가 데이터를 받아 반응함.
  function handleClick() {
    observable.notify("버튼 클릭!");
  }

  function toastify(data: string) {
    toast(data, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  function logger(data: string) {
    console.log(`${Date.now()} ${data}`);
  }

  observable.subscribe(toastify);
  observable.subscribe(logger);

  return (
    <>
      <button onClick={handleClick}>클릭</button>
      <ToastContainer />
    </>
  );
}

export default App;
