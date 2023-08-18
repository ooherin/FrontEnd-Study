import { OneTodoItem } from "../model/Todo";
import { axiosInstance } from "../utils/axios";
const PATH = "/todo";

const TodoApi = {
  getTodo() {
    return axiosInstance.get(PATH);
  },

  addTodo(content: string, title: string) {
    return axiosInstance.post(PATH, { content, title });
  },

  updateTodo(id: number, newTodo: OneTodoItem) {
    const { title, content, state } = newTodo;
    console.log("api title", title);
    return axiosInstance.put(PATH + `/${id}`, { state, title, content });
  },

  deleteTodo(id: number) {
    return axiosInstance.delete(PATH + `/${id}`);
  },
};
export default TodoApi;
