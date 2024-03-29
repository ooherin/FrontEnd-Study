import styled from "styled-components";
import CheckBox from "./CheckBox";
import { OneTodoProps } from "../../types/todo_type";
import { TiDeleteOutline } from "react-icons/ti";
import { BiSolidPencil } from "react-icons/bi";
import { useState } from "react";
import TodoApi from "../../apis/todo.api";
import { timeHelper } from "../../utils/time-helper";
import useInputs from "../../hooks/use-inputs";

const OneTodo = ({
  todo,
  onDeleteTodo,
  onSubmitEditTodo,
  getTodo,
}: OneTodoProps) => {
  const { content, title, state, id, createdAt } = todo;
  const [isEditMode, setIsEditMode] = useState(false);
  const [value, onChangeForm] = useInputs({
    newText: content,
    newTitle: title,
  });

  const { newText, newTitle } = value;

  const onClickEditMode = () => {
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
  };

  const onUpdateTodo = async () => {
    try {
      const res = await TodoApi.updateTodo(id, {
        ...todo,
        content: newText,
        title: newTitle,
      });
      getTodo();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.Wrapper state={state}>
      <CheckBox id={id} state={state} todo={todo} getTodo={getTodo} />
      {isEditMode ? (
        <div style={{ display: "flex", flexDirection: "column", width: "70%" }}>
          <input value={newTitle} name="newTitle" onChange={onChangeForm} />
          <input value={newText} name="newText" onChange={onChangeForm} />
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", width: "70%" }}>
          <S.TextWrapper isTitle={true} state={state}>
            {title}
          </S.TextWrapper>
          <S.TextWrapper isTitle={false} state={state}>
            {content}
          </S.TextWrapper>
        </div>
      )}
      <S.TodoInfo>
        <div>{timeHelper(createdAt)}</div>
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
        <TiDeleteOutline
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

interface WrapperProps {
  state: boolean;
}

interface TextWrapperProps {
  state: boolean;
  isTitle: boolean;
}
//#0e9aa4
const Wrapper = styled.div<WrapperProps>`
  margin-top: 5px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;

  position: relative;
  background-color: ${({ state }: { state: boolean }) =>
    state ? "#dbdbdb" : "#ccebed"};
`;

const TextWrapper = styled.div<TextWrapperProps>`
  text-decoration: ${({ state }: { state: boolean }) =>
    state ? "line-through" : "none"};
  font-weight: ${({ isTitle }: { isTitle: boolean }) =>
    isTitle ? "500" : "300"};
  border-bottom: ${({ isTitle }: { isTitle: boolean }) =>
    isTitle ? "2px solid #efe8e8" : "none"};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 10px;
  padding-top: 3px;
`;

const TodoInfo = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  width: 110px;
  justify-content: space-evenly;
`;

const S = { Wrapper, TextWrapper, TodoInfo };
