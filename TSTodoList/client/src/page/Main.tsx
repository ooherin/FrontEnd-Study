import styled from "styled-components";
import { useState } from "react";
import { flexAlignCenter, flexCenter } from "../style/common";
import SignInForm from "../components/main/SignIn";
import SignUpForm from "../components/main/Signup";

const MainPage = () => {
  const [isFormLogin, setIsFormLogin] = useState(false);

  const onClickForm = (e: React.MouseEvent<HTMLElement>) => {
    const { innerText } = e.currentTarget;
    if (innerText === "LOGIN") {
      setIsFormLogin(true);
    } else {
      setIsFormLogin(false);
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.LoginHeader isFormLogin={isFormLogin} onClick={onClickForm}>
          LOGIN
        </S.LoginHeader>
        <S.SignUpHeader isFormLogin={isFormLogin} onClick={onClickForm}>
          SIGN UP
        </S.SignUpHeader>
      </S.Header>
      <S.BodyContainer>
        {isFormLogin ? (
          <SignInForm />
        ) : (
          <SignUpForm setIsFormLogin={setIsFormLogin} />
        )}
      </S.BodyContainer>
    </S.Container>
  );
};
export default MainPage;

type HeaderProps = {
  isFormLogin: boolean;
};

const LoginHeader = styled.div<HeaderProps>`
  background-color: ${({ isFormLogin }) =>
    isFormLogin ? "#9fe9ed" : "#f5f5f5"};
  ${flexAlignCenter}
`;

const SignUpHeader = styled.div<HeaderProps>`
  background-color: ${({ isFormLogin }) =>
    isFormLogin ? "#f5f5f5" : "#9fe9ed"};
  ${flexAlignCenter}
`;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  ${flexAlignCenter}
  flex-direction: column;
  position: absolute;
  top: 50px;
`;

const Header = styled.div`
  width: 360px;
  height: 48px;
  display: flex;
  div {
    ${flexCenter}
    width: 50%;
    cursor: pointer;
    :hover {
      opacity: 0.7;
    }
  }
`;

const BodyContainer = styled.div`
  ${flexAlignCenter};
  background-color: orange;
`;

//style component를 일반 컴포넌트와 구분하기 위해 S로 객체화
const S = {
  Container,
  LoginHeader,
  Header,
  SignUpHeader,
  BodyContainer,
};
