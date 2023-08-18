import TodoList from "../components/todo/TodoList";
import styled from "styled-components";

const TodoPage = () => {
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
