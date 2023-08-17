import { useEffect, useState } from "react";
import BasicButton from "../_common/Button";
import * as S from "./style";
import useInputs from "../../hooks/use-inputs";
// import useValidate from "../../../hooks/useValidate";
import { PALETTE } from "../../style/theme";
import axios from "axios";

type SignUpFormProps = {
  setIsFormLogin: React.Dispatch<React.SetStateAction<boolean>>;
};
const SignUpForm = ({ setIsFormLogin }: SignUpFormProps) => {
  const [value, onChangeForm] = useInputs({
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const { email, password, passwordConfirm } = value;

  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  // const [disabled, error] = useValidate(email, password);

  useEffect(() => {
    console.log(password, passwordConfirm);
    if (password !== passwordConfirm) {
      return setIsPasswordConfirm(false); //일치하지 않았을 때 실행문
    }
    return setIsPasswordConfirm(true); //일치했을때 실행문
  }, [password, passwordConfirm]);

  const handleSignUpSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    //예외처리
    //disabled 조건 추가해야 함
    e.preventDefault();
    if (!isPasswordConfirm) return;
    // if (disabled) return;

    //백엔드 통신
    axios
      .post("http://localhost:8080/user/sign", { email, password })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    alert("축하합니다. 회원가입이 완료되었습니다!");
    setIsFormLogin(true);
  };

  return (
    <>
      <S.Form>
        <S.InputBox>
          <label>이메일</label>
          <input onChange={onChangeForm} name="email" />
        </S.InputBox>
        <S.InputBox>
          <label>비밀번호</label>
          <input onChange={onChangeForm} name="password" />
        </S.InputBox>
        <S.InputBox>
          <label>비밀번호확인</label>
          <input onChange={onChangeForm} name="passwordConfirm" />
        </S.InputBox>
        {/* {error && <div style={{ color: PALETTE.error }}>{error}</div>} */}
        {!isPasswordConfirm && (
          <div style={{ color: PALETTE.error }}>
            비밀번호와 확인이 일치하지 않습니다.
          </div>
        )}
        <BasicButton
          children={"회원가입"}
          size={"full"}
          shape={"default"}
          variant={"primary"}
          onClick={handleSignUpSubmit}
        ></BasicButton>
      </S.Form>
    </>
  );
};

export default SignUpForm;

//passwordConfirm을 따로 커스텀 훅으로 뺴는것도 좋은 방법이다.

//인증관련 훅함수를 만든다. passwordConfirm을 제외한 함수를 넣는다.
//passwordConfirm은 signupForm에서 만든다.
//커스텀 훅은 공통적인 로직을 만든다.
// const { disabled, errors } = useAuthValidation(password, email, () => {});
//콜백함수를 넣어 실행시킬 수 있다.

//   errors : {
//       email : {message : '이메일 양식을 지켜주세요'}
//       password : {message : '비밀번호 양식을 지켜주세요'}
//     }
