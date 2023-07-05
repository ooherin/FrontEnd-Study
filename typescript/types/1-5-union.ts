{
  //Union Type: OR
  //여러가지 조합 중의 한가지를 return하는 타입
  type Direction = "left" | "right" | "up" | "down";

  //move라는 함수의 인자를 Direciton으로 지정했기 때문에 위에 있는
  //4가지 타입 외에는 인자로 넣지 못함.
  function move2(direction: Direction) {
    console.log(direction);
  }
  move2("down");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function login2(id: string, password: string): LoginState {
    return {
      response: {
        body: "logged in!",
      },
    };
  }

  //printLoginState(state : LoginState)
  //success => body
  //fail => reason

  //state가 무엇인지에 따라서 다른 내용의 result를 보여주는 것
  function printLoginState2(state: LoginState) {
    if ("response" in state) {
      console.log(`${state.response.body}`);
    } else {
      console.log(`${state.reason}`);
    }
  }
}
