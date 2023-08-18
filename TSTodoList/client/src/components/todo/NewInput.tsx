import styled from "styled-components";
import { OneTodoItem } from "../../model/Todo";
import React, { useState } from "react";
import TodoApi from "../../apis/todo.api";

interface NewInputProps {
  setTodos: React.Dispatch<React.SetStateAction<OneTodoItem[]>>;
  todos: OneTodoItem[];
  getTodo: () => void;
}

const NewInput = ({ setTodos, todos, getTodo }: NewInputProps) => {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onChangeTitleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onSubmitTodo = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await TodoApi.addTodo(text, title);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
    setText("");
    setTitle("");
    getTodo();
  };

  return (
    <Wrapper onSubmit={onSubmitTodo}>
      <Input
        value={title}
        placeholder="제목 입력..."
        onChange={onChangeTitleInput}
      />
      <Input value={text} placeholder="할일 입력..." onChange={onChangeInput} />
      <Button>추가</Button>
    </Wrapper>
  );
};
export default NewInput;

const Input = styled.input`
  width: 450px;
  height: 30px;
  background-color: #dbdbdb;
  border: none;
`;

const Button = styled.button`
  width: 50px;
  height: 30px;
`;

const Wrapper = styled.form`
  display: flex;
  width: 500px;
`;
