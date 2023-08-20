import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineCheckBox,
} from "react-icons/md";
import TodoApi from "../../apis/todo.api";
import { CheckBoxProps } from "../../types/todo_type";

const CheckBox = ({ state, todo, id, getTodo }: CheckBoxProps) => {
  const onClickCheckBox = async ({ id, todo, state }: CheckBoxProps) => {
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
        onClickCheckBox({ id, todo, state, getTodo });
      }}
    />
  ) : (
    <MdOutlineCheckBoxOutlineBlank
      onClick={() => {
        onClickCheckBox({ id, todo, state, getTodo });
      }}
    />
  );
};

export default CheckBox;
