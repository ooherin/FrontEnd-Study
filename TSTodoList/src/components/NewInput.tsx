import styled from "styled-components";
import { OneTodoItem } from "../model/Todo";
import React, { useState } from "react";

interface NewInputProps {
  setTodos: React.Dispatch<React.SetStateAction<OneTodoItem[]>>;
  todos: OneTodoItem[];
}

const NewInput = ({ setTodos, todos }: NewInputProps) => {
  const [text, setText] = useState("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const newTodo: OneTodoItem = {
    text: text,
    checked: false,
    id: Math.random() * 1000,
  };

  const onSubmitTodo = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos([...todos, newTodo]);
    setText("");
  };

  return (
    <Wrapper onSubmit={onSubmitTodo}>
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
