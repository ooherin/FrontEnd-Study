import styled from "styled-components";
import NewInput from "./NewInput";
import OneTodo from "./OneTodo";
import { OneTodoItem } from "../model/Todo";
import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      text: "투두1",
      checked: false,
      id: 1,
    },
    {
      text: "투두2",
      checked: false,
      id: 2,
    },
  ]);

  const onCheckBox = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const onDeleteTodo = (id: number) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const onSubmitEditTodo = (id: number, newText: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text: newText };
        }
        return todo;
      })
    );
  };

  return (
    <>
      <TodoWrapper>
        {todos.map((todo: OneTodoItem) => {
          return (
            <OneTodo
              todo={todo}
              onCheckBox={onCheckBox}
              key={todo.id}
              onDeleteTodo={onDeleteTodo}
              onSubmitEditTodo={onSubmitEditTodo}
            />
          );
        })}
      </TodoWrapper>
      <NewInput setTodos={setTodos} todos={todos} />
    </>
  );
};
export default TodoList;

const TodoWrapper = styled.div`
  margin-top: 10vw;
  height: 80vh;
  width: 500px;
  bac
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
