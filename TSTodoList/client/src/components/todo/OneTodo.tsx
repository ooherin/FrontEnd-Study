import styled from "styled-components";
import CheckBox from "./CheckBox";
import { OneTodoItem } from "../../model/Todo";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { BiSolidPencil } from "react-icons/bi";
import { useState } from "react";
import TodoApi from "../../apis/todo.api";

interface OneTodoProps {
  todo: OneTodoItem;
  onDeleteTodo: (id: number) => void;
  onSubmitEditTodo: (id: number, text: string) => void;
  todos: OneTodoItem[];
  setTodos: React.Dispatch<React.SetStateAction<OneTodoItem[]>>;
  getTodo: () => void;
}

const OneTodo = ({
  todo,
  onDeleteTodo,
  onSubmitEditTodo,
  getTodo,
}: OneTodoProps) => {
  const { content, title, state, id, createdTime } = todo;
  const [isEditMode, setIsEditMode] = useState(false);
  const [newText, setNewText] = useState("");
  const [newTitleText, setNewTitleText] = useState("");

  const onClickEditMode = () => {
    setNewText(content);
    if (isEditMode) {
      onSubmitEditTodo(id, newText);
    }
    if (isEditMode) {
    }
    if (isEditMode) {
      onUpdateTodo();
    }
    getTodo();
    setIsEditMode((prev) => !prev);
    setNewText("");
    setNewTitleText("");
  };

  const onUpdateTodo = async () => {
    try {
      console.log("title", newTitleText);
      const res = await TodoApi.updateTodo(id, {
        ...todo,
        content: newText,
        title: newTitleText,
      });
      getTodo();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const onChangeNewText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewText(e.target.value);
  };
  const onChangeNewTitleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitleText(e.target.value);
  };

  return (
    <S.Wrapper>
      <CheckBox id={id} state={state} todo={todo} getTodo={getTodo} />
      {isEditMode ? (
        <>
          <input value={newTitleText} onChange={onChangeNewTitleText} />
          <input value={newText} onChange={onChangeNewText} />
        </>
      ) : (
        <>
          <S.TextWrapper state={state}>{title}</S.TextWrapper>
          <S.TextWrapper state={state}>{content}</S.TextWrapper>
        </>
      )}
      <div>{createdTime}</div>
      <S.TodoInfo>
        {/*수정*/}
        {isEditMode ? (
          <BiSolidPencil
            size={20}
            color="blue"
            onClick={() => {
              onClickEditMode();
            }}
          />
        ) : (
          <BiSolidPencil size={20} color="blue" onClick={onClickEditMode} />
        )}
        {/*삭제*/}
        <RiDeleteBack2Fill
          color="red"
          size={20}
          onClick={() => {
            onDeleteTodo(id);
          }}
        />
      </S.TodoInfo>
    </S.Wrapper>
  );
};
export default OneTodo;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  padding-top: 10px;
  border-bottom: 2px solid #0e9aa4;
  position: relative;
`;

interface WrapperProps {
  state: boolean;
}

const TextWrapper = styled.div<WrapperProps>`
  text-decoration: ${({ state }: { state: boolean }) =>
    state ? "line-through" : "none"};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 10px;
`;

const TodoInfo = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  width: 110px;
  justify-content: space-between;
`;

const S = { Wrapper, TextWrapper, TodoInfo };
