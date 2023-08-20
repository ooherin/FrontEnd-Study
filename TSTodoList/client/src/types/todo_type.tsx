import { OneTodoItem } from "../model/Todo";

export interface CheckBoxProps {
  state?: boolean;
  id: number;
  todos?: OneTodoItem[];
  todo: OneTodoItem;
  onClick?: () => void;
  getTodo: () => void;
}

export interface OneTodoProps {
  todo: OneTodoItem;
  onDeleteTodo: (id: number) => void;
  onSubmitEditTodo: (id: number, text: string) => void;
  todos: OneTodoItem[];
  setTodos: React.Dispatch<React.SetStateAction<OneTodoItem[]>>;
  getTodo: () => void;
  title?: string;
}
