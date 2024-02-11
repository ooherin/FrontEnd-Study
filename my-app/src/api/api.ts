// import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const fetchTodo = () => {
  return axios
    .get<Post>("https://koreanjson.com/posts/1")
    .then((res) => res.data);
};

// export const fetchTodos = (): Promise<Post[]> =>
//   axios.get("https://koreanjson.com/posts/1").then((res) => res.data);

// // const { data } = useQuery({ queryKey: ["groups"], queryFn: fetchGroups });

type Post = {
  UserId: number;
  content: string;
  createdAt: Date;
  id: number;
  title: string;
  updatedAt: Date;
};
