import * as S from "../style";
import BasicButton from "../../../components/Button/button";
import { PALETTE } from "../../../styles/theme";
import { useForm } from "react-hook-form";
// //S라는 별칭으로 모든 것을 가져온다.
const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      {/*onSubmit에다가 붙여줘야 한다!!*/}
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
              minLength: {
                value: 8,
                message: "비밀번호는 최소 8자리 이상이여야 합니다.",
              },
            })}
          />
        </S.InputBox>
        {errors.email?.type === "required" && (
          <div style={{ color: PALETTE.error }}>
            이메일은 필수 입력값입니다.
          </div>
        )}
        {errors.email?.type === "pattern" && (
          <div style={{ color: PALETTE.error }}>
            이메일의 형식을 확인해 주세요
          </div>
        )}
        {errors.password?.type === "required" && (
          <div style={{ color: PALETTE.error }}>
            비밀번호는 필수 입력값입니다.
          </div>
        )}
        {errors.password?.type === "minLength" && (
          <div style={{ color: PALETTE.error }}>
            비밀번호는 최소 8자 이상입니다.
          </div>
        )}
        <BasicButton
          size={"full"}
          shape={"default"}
          variant={"primary"}
          disabled={errors.password || errors.email ? true : false}
          type="submit"
        >
          로그인
        </BasicButton>
      </S.Form>
    </>
  );
};
export default SignInForm;

// const [allInputFull, setAllInputFull] = useState(false);
// const [{ email, password }, onChangeForm] = useInputs({
//   email: "",
//   password: "",
// });

//얘 마저도 중복됨
// const [email, onChangeEmail] = useInput();
// const [password, onChangePassword] = useInput();

// value만 쓰면 value가 고정되어 있기 때문에 input에 값을 제대로 칠 수 없다.
// input의 value와 onChange를 이용하여 직접 dom에 접근하지 말고도
// 값을 쓸 수 있다.
// let [email, setEmail] = useState("");
// let [password, setPassword] = useState("");

// const [isValidEmail, isValidPassword] = useValidate({ email, password });
// const onPressSignIn = (e) => {
//   e.preventDefault();
//   console.log(email, password);
// };

// 모든 양식 제출 확인
// useEffect(() => {
//   email === "" || password === ""
//     ? setAllInputFull(false)
//     : setAllInputFull(true);
// }, [email, password]);

{
  /* {errors.email.type === "required" && (
          <div>이메일은 필수 입력값입니다</div>
        )}
        {errors.email.type === "pattern" && (
          <div>이메일은 형식을 확인하세요</div>
        )}
        {errors.password.type === "required" && (
          <div>비밀번호는 필수 입력값입니다</div>
        )}
        {errors.password.type === "minLength" && (
          <div>비밀번호는 최소 8자리 이상이여야 합니다</div>
        )} */
}

{
  /* /*{" "}
        {(!isValidEmail && allInputFull) ||
        (!isValidPassword && allInputFull) ? (
          <div style={{ color: PALETTE.error }}>
            이메일과 비밀번호 형식을 확인해 주세요
          </div>
        ) : null}{" "}
        */
}
