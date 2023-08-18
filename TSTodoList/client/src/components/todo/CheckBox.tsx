import { RiCheckboxBlankLine, RiCheckboxBlankFill } from "react-icons/ri";
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
  console.log("check", state);
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
    <RiCheckboxBlankFill
      onClick={() => {
        onCheckBox({ id, todo, state, getTodo });
      }}
    />
  ) : (
    <RiCheckboxBlankLine
      onClick={() => {
        onCheckBox({ id, todo, state, getTodo });
      }}
    />
  );
};

export default CheckBox;
