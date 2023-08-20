import styled from "styled-components";
import NewInput from "./NewInput";
import OneTodo from "./OneTodo";
import { OneTodoItem } from "../../model/Todo";
import { useEffect } from "react";
import TodoApi from "../../apis/todo.api";
import { useRecoilState } from "recoil";
import { todoListState } from "../../atom/todoState";

const TodoList = () => {
  //초기값에 빈배열을 넣어주어야 undefined를 해결할 수 있다.
  const [todos, setTodos] = useRecoilState(todoListState);

  //초기에 저장된 todo 가져오기
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

  const onDeleteTodo = async (id: number) => {
    try {
      const res = await TodoApi.deleteTodo(id);
      console.log(res);
      getTodo();
    } catch (err) {
      console.log(err);
    }
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
        <>
          {todos?.map((todo: OneTodoItem) => {
            return (
              <OneTodo
                todo={todo}
                key={todo.id}
                onDeleteTodo={onDeleteTodo}
                onSubmitEditTodo={onSubmitEditTodo}
                todos={todos}
                setTodos={setTodos}
                getTodo={getTodo}
              />
            );
          })}
        </>
      </TodoWrapper>
      <NewInput getTodo={getTodo} />
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
