class NetworkClient {
  tryConnect(): void {
    throw new Error("new Network");
  }
}

class UserService {
  constructor(private client: NetworkClient) {}
  login() {
    this.client.tryConnect();
    //login/...
  }
}

class App {
  constructor(private userService: UserService) {}
  run() {
    try {
      this.userService.login();
    } catch (err) {
      console.log("에러 처리 로직");
    }
  }
}

const client = new NetworkClient();
const service = new UserService(client);
const app = new App(service);

//✅에러를 잡았을 때 처리할 수 있는 곳에서 에러를 잡고 처리하는 것이 좋다.

// {
//   class TimeoutError extends Error {}
//   class OfflineError extends Error {}

//   class NetworkClient {
//     tryConnect(): void {
//       throw new OfflineError('no network!');
//     }
//   }

//   class UserService {
//     constructor(private client: NetworkClient) {}

//     login() {
//       this.client.tryConnect();
//     }
//   }

//   class App {
//     constructor(private userService: UserService) {}
//     run() {
//       try {
//         this.userService.login();
//       } catch (error) {
//         // show dialog to use
//       }
//     }
//   }

//   const client = new NetworkClient();
//   const service = new UserService(client);
//   const app = new App(service);
//   app.run();
// }
