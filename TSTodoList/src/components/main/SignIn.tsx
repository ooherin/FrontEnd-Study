import { useForm } from "react-hook-form";
import * as S from "./style";
import { PALETTE } from "../../style/theme";
import BasicButton from "../_common/Button";

const SignInForm = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  const onPressSignIn = () => {};
  return (
    <>
      <S.Form onSubmit={onPressSignIn}>
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
