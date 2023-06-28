{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  //콘솔은 return 문이 아니므로 void 형식이다
  function printLoginState(State: ResourceLoadState): void {
    if (State.state === "loading") {
      return console.log("👀 loading...");
    }
    if (State.state === "success") {
      return console.log(`${State.response.body}`);
    }
    return console.log(`unknown state : ${State}`);
  }

  printLoginState({ state: "loading" }); // 👀 loading...
  printLoginState({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLoginState({ state: "fail", reason: "no network" }); // 😱 no network
}
