import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineCheckBox,
} from "react-icons/md";
import TodoApi from "../../apis/todo.api";
import { OneTodoItem } from "../../model/Todo";

interface CheckBoxProps {
  state?: boolean;
  id: number;
  todos?: OneTodoItem[];
  todo: OneTodoItem;
  onClick?: () => void;
  getTodo: () => void;
}

const CheckBox = ({ state, todo, id, getTodo }: CheckBoxProps) => {
  const onCheckBox = async ({ id, todo, state }: CheckBoxProps) => {
    try {
      const res = await TodoApi.updateTodo(id, { ...todo, state: !state });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
    getTodo();
  };
  return state ? (
    <MdOutlineCheckBox
      onClick={() => {
        onCheckBox({ id, todo, state, getTodo });
      }}
    />
  ) : (
    <MdOutlineCheckBoxOutlineBlank
      onClick={() => {
        onCheckBox({ id, todo, state, getTodo });
      }}
    />
  );
};

export default CheckBox;
