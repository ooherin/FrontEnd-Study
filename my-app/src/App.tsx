import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MainPage } from "./query/query";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <MainPage />
    </QueryClientProvider>
  );
}

export default App;
