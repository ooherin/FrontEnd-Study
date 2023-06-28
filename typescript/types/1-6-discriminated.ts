{
  //동일한 result라는 key를 가지고 있다.
  //이를 활용해서 함수에서 분기점을 만들 수 있다.
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail";
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  //함수의 리턴값에 type을 지정한 경우임
  //리턴값이 Loginstate이므로 successState의 type을 모두 맞추어야 함.
  //result라는 속성값조차 필수이다.
  function login(id: string, password: string): LoginState {
    return {
      result: "success",
      response: {
        body: "logged in!",
      },
    };
  }

  //printLoginState(state : LoginState)
  //success => body
  //fail => reason

  //함수의 인자값에 type을 지정한 경우임
  //state가 무엇인지에 따라서 다른 내용의 result를 보여주는 것
  function printLoginState(state: LoginState) {
    //success or fail
    //공통적인 프로터티인 state.result에 따라서 분기점을 나누어
    //함수를 작성할 수 있다.
    if (state.result === "success") {
      console.log(`${state.response.body}`);
    } else {
      console.log(`${state.reason}`);
    }
  }
}
