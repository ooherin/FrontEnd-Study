import { useForm } from "react-hook-form";
import * as S from "./style";
import { PALETTE } from "../../style/theme";
import BasicButton from "../_common/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignInForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();
  const navigate = useNavigate();

  const onPressSignIn = async () => {
    const { email, password } = getValues();
    try {
      const res = await axios.post("http://localhost:8080/user/login", {
        email,
        password,
        //withCrenditals을 true로 해야 cookie 사용 가능
        withCredentials: true,
      });
      localStorage.setItem("accessToken", res.data.data.token);
      console.log(res);
      if (res.status === 200) {
        navigate("/todo");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <S.Form onSubmit={handleSubmit(onPressSignIn)} method="post">
        <S.InputBox>
          <label>이메일</label>
          <input
            {...register("email", {
              required: true,
              // pattern: /^[\w.%+\-]+@[\w.\-]+\.[A-Za-z]{2,3}$/,
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
          onClick={onPressSignIn}
        >
          로그인
        </BasicButton>
      </S.Form>
    </>
  );
};
export default SignInForm;
