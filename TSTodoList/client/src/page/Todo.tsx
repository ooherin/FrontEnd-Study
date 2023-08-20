import TodoList from "../components/todo/TodoList";
import styled from "styled-components";
import { useEffect } from "react";

import TodoApi from "../apis/todo.api";
import { todoListState } from "../atom/todoState";
import { useRecoilState } from "recoil";

const TodoPage = () => {
  const [todos, setTodos] = useRecoilState(todoListState);

  useEffect(() => {
    getTodo();
  }, []);

  const getTodo = async () => {
    try {
      const res = await TodoApi.getTodo();
      console.log(res);
      setTodos(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.Wrapper>
      <TodoList />
    </S.Wrapper>
  );
};
export default TodoPage;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const S = { Wrapper };
