import { useQuery } from "@tanstack/react-query";
import { fetchTodo } from "../api/api";

export const MainPage = () => {
  const { data } = useQuery({
    queryKey: ["todo"],
    queryFn: fetchTodo,
    staleTime: 1000 * 5 * 60,
    gcTime: 1000 * 10 * 60,
    retry: 10,
  });

  return <div>:)</div>;
};
// export const MainPage = () => {
//   const { data } = useQuery({
//     queryKey: ["todo"],
//     queryFn: fetchTodos,
//   });

//   console.log(data);
//   return <div>:)</div>;
// };
