import * as S from "../style";
//export default로 내보내지 않아서 가능함
//이미 객체이기 때문에 import 때도 객체로 꺼내올 수 잇다.
import BasicButton from "../../../components/Button/button";
import { PALETTE } from "../../../styles/theme";
import { useForm } from "react-hook-form";
//useInputs.js에서 가져옴
const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    getValues,
  } = useForm();

  const onChange = (data) => {
    console.log(data);
  };

  return (
    <>
      <S.Form onSubmit={handleSubmit((data) => console.log(data))}>
        <S.InputBox>
          <label>이메일</label>
          <input
            {...register("email", {
              required: true,
              pattern: /^[\w.%+\-]+@[\w.\-]+\.[A-Za-z]{2,3}$/,
            })}
          />
        </S.InputBox>
        <S.InputBox>
          <label>비밀번호</label>
          <input
            {...register("password", {
              required: true,
              minLength: 8,
            })}
          />
        </S.InputBox>
        <S.InputBox>
          <label>비밀번호확인</label>
          <input
            {...register("passwordConfirm", {
              required: true,
              validate: {
                check: (value) => {
                  if (getValues()["password"] !== value) {
                    return "비밀번호와 일치하지 않습니다.";
                  }
                },
              },
            })}
          />
        </S.InputBox>

        {(errors.email?.type === "required" ||
          errors.password?.type === "required" ||
          errors.passwordConfirm === "required") && (
          <div style={{ color: PALETTE.error }}>
            {/* 이메일은 필수 입력값입니다. */}
            모두 입력을 하지 않으셨습니다.
          </div>
        )}

        {errors.email?.type === "pattern" && (
          <div style={{ color: PALETTE.error }}>이메일은 형식을 확인하세요</div>
        )}

        {/* {errors.password?.type === "required" && (
          <div style={{ color: PALETTE.error }}>
            비밀번호는 필수 입력값입니다.
          </div>
        )} */}

        {errors.password?.type === "minLength" && (
          <div style={{ color: PALETTE.error }}>비밀번호는 8자 이상입니다.</div>
        )}

        {errors.passwordConfirm && (
          <div style={{ color: PALETTE.error }}>
            {errors.passwordConfirm.message}
          </div>
        )}

        {/* 
        {errors.passwordConfirm &&
          errors.passwordConfirm.type === "required" && (
            <div style={{ color: PALETTE.error }}>
              {errors.passwordConfirm.message}
            </div>
          )}

        {errors.passwordConfirm &&
          errors.passwordConfirm.type === "validate" && (
            <div style={{ color: PALETTE.error }}>
              {errors.passwordConfirm.check.message}
            </div>
          )} */}

        <BasicButton
          children={"회원가입"}
          size={"full"}
          shape={"default"}
          variant={"primary"}
          disabled={
            errors.password || errors.email || errors.passwordConfirm
              ? true
              : false
            // &&
            //   watch("email").length > 1 &&
            //   watch("password").length > 1 &&
            //   watch("passwordConfirm").length > 1
          }
        ></BasicButton>
      </S.Form>
    </>
  );
};
export default SignUpForm;

{
  /*이메일이 들어옴ㄴ useInput의 event.target.name 의 email이 설정되면서 
          input값안에 있는 value가 event.target.value로 바뀐다.
          두번째 인자의 onChangeForm은 useUInputs에서 설정한 onChange이다 .
          input의 onChange(onChangeForm)가 실헹되면 name이 key 값인 event.target인 input의 
          value가 값으로 설정된 프로퍼티가 들어간다..
          
          이떄 키 값은 useInput에서 가져올때 email과 name의 이름이 동일해야 한다.
          input이 여러개라도 state 하나로 관리하기 위해서 use inputs을 만들어준다
          즉, 여러 input의 값을 객체로 관리함으로써 로직을 줄인 것이다.*/
}

{
  /*비밀번호 실시간 확인*/
}
{
  /* {passwordSame || (
          <div style={{ color: PALETTE.error }}>
            비밀번호가 일치하지 않습니다
          </div>
        )}

        {(!isValidEmail && allInputFull) ||
        (!isValidPassword && allInputFull) ? (
          <div style={{ color: PALETTE.error }}>
            이메일과 비밀번호 양식을 확인해 주세요
          </div>
        ) : null} */
}

// const [{ email, password, passwordConfirm }, onChangeForm] = useInputs({
//   email: "",
//   password: "",
//   passwordConfirm: "",
// });

// const [isValidEmail, isValidPassword] = useValidate({
//   email,
//   password,
// });

// const [passwordSame, setPasswordSame] = useState(true);
// const [allInputFull, setAllInputFull] = useState(false);

// const onPressSignUp = (e) => {
//   e.preventDefault();
//   if (isValidEmail) {
//     console.log("유효한 이메일");
//   } else {
//     console.log("유효하지 않은 이메일");
//   }

//   if (isValidPassword) {
//     console.log("유효한 비밀번호");
//   } else {
//     console.log("유효하지 않은 비밀번호");
//   }
// };

//이메일과 비밀번호 양식 확인
// useEffect(() => {
//   const regex = /^[a-zA-Z0-9+%\._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//   regex.test(email) === false && email !== ""
//     ? setEmailFormat(false)
//     : setEmailFormat(true);

//   password.length < 8 ? setPassWordFormat(false) : setPassWordFormat(true);
// }, [email, password]);

//비밀번호 양식 확인
// useEffect(() => {
//   console.log("검사중");
//   passwordConfirm !== "" && password !== "" && password !== passwordConfirm
//     ? setPasswordSame(false)
//     : setPasswordSame(true);
// }, [password, passwordConfirm]);

// //모든 양식 제출 확인
// useEffect(() => {
//   email === "" || password === "" || passwordConfirm === ""
//     ? setAllInputFull(false)
//     : setAllInputFull(true);
// }, [email, password, passwordConfirm]);
