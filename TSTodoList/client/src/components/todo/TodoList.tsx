import styled from "styled-components";
import NewInput from "./NewInput";
import OneTodo from "./OneTodo";
import { OneTodoItem } from "../../model/Todo";
import { useState } from "react";

const TodoList = () => {
  //초기값에 빈배열을 넣어주어야 undefined를 해결할 수 있다.
  const [todos, setTodos] = useState<OneTodoItem[]>([]);

  const onCheckBox = (id: number) => {
    setTodos(
      todos?.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const onDeleteTodo = (id: number) => {
    setTodos(
      todos?.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const onSubmitEditTodo = (id: number, newText: string) => {
    setTodos(
      todos?.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text: newText };
        }
        return todo;
      })
    );
  };

  return (
    <Wrapper>
      <TodoWrapper>
        {todos?.map((todo: OneTodoItem) => {
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
    </Wrapper>
  );
};

export default TodoList;

const TodoWrapper = styled.div`
  margin-top: 10vw;
  height: 550px;
  width: 500px;
  display: flex;
  flex-direction: column;
  background-color: #f9f7f2;
  padding: 10px;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  height: 600px;
`;
