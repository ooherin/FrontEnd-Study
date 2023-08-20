import styled from "styled-components";
import TodoApi from "../../apis/todo.api";
import useInputs from "../../hooks/use-inputs";

interface NewInputProps {
  getTodo: () => void;
}

const NewInput = ({ getTodo }: NewInputProps) => {
  const [value, onChangeForm] = useInputs({
    text: "",
    title: "",
  });

  const { text, title } = value;

  const onSubmitTodo = async (e: React.ChangeEvent<HTMLButtonElement>) => {
    console.log(text, title);
    try {
      const res = await TodoApi.addTodo(text, title);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
    getTodo();
  };

  return (
    <Wrapper>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Input
          name="title"
          placeholder="제목 입력..."
          onChange={onChangeForm}
          isTitle={true}
        />

        <Input
          name="text"
          placeholder="할일 입력..."
          onChange={onChangeForm}
          isTitle={false}
        />
      </div>
      <Button onClick={onSubmitTodo}>추가</Button>
    </Wrapper>
  );
};
export default NewInput;

type InputProps = {
  isTitle: boolean;
  name: string;
  placeholder?: string;
};

type ButtonProps = {
  onClick: (e: React.ChangeEvent<HTMLButtonElement>) => Promise<void>;
};

const Input = styled.input<InputProps>`
  width: 445px;
  font-size: 15px;
  background-color: #dbdbdb;
  border: none;
  border-bottom: ${({ isTitle }: { isTitle: boolean }) =>
    isTitle ? "2px solid #efe8e8" : "none"};
`;

const Button = styled.button<ButtonProps>`
  width: 50px;
  border: none;
`;

const Wrapper = styled.form`
  display: flex;
  width: 100%;
`;
