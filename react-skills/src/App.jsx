import PaginationPage from "./pagination";
import { SkeletonContentCard } from "./skeleton/skeleton";
import SuspensePage from "./errorBoundary/resetBoundary";
import Main from "./page/main";
import ExampleComponent from "./예제";
const App = () => {
  return (
    <>
      <PaginationPage />
      <Main />
      <ExampleComponent />
    </>
  );
};
export default App;
