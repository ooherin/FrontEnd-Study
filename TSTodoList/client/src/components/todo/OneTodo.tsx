import styled from "styled-components";
import CheckBox from "./CheckBox";
import { OneTodoItem } from "../../model/Todo";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { BiSolidPencil } from "react-icons/bi";
import { useState } from "react";

interface OneTodoProps {
  todo: OneTodoItem;
  onCheckBox: (id: number) => void;
  onDeleteTodo: (id: number) => void;
  onSubmitEditTodo: (id: number, text: string) => void;
}

const OneTodo = ({
  todo,
  onCheckBox,
  onDeleteTodo,
  onSubmitEditTodo,
}: OneTodoProps) => {
  const { text, checked, id, createdTime } = todo;
  const [isEditMode, setIsEditMode] = useState(false);
  const [newText, setNewText] = useState("");

  const onClickEditMode = () => {
    setNewText(text);
    if (isEditMode) {
      onSubmitEditTodo(id, newText);
    }

    setIsEditMode((prev) => !prev);
    //만약 isEditMode가 true인 상태이면 submit까지 같이 실행함.
  };

  const onChangeNewText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewText(e.target.value);
  };

  return (
    <S.Wrapper>
      <CheckBox checked={checked} onCheckBox={onCheckBox} id={id} />
      {isEditMode ? (
        <input value={newText} onChange={onChangeNewText} />
      ) : (
        <S.TextWrapper checked={checked}>{text}</S.TextWrapper>
      )}
      <S.TodoInfo>
        <div>{createdTime}</div>
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
  checked: boolean;
}

const TextWrapper = styled.div<WrapperProps>`
  text-decoration: ${({ checked }: { checked: boolean }) =>
    checked ? "line-through" : "none"};
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
