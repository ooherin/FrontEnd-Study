class ChatRoom {
  logMessage(user, message) {
    const time = new Date();
    const sender = user.getName();

    console.log(`${time} [${sender}]: ${message}`);
  }
}

class User {
  constructor(name, chatroom) {
    this.name = name;
    this.chatroom = chatroom; //chatroot을 연결한다
  }

  getName() {
    return this.name;
  }

  send(message) {
    this.chatroom.logMessage(this, message);
    //연결한 chatroom을 통해 메세지 로깅을 수행한다.
  }
}

const chatroom = new ChatRoom();

const user1 = new User("John Doe", chatroom);
const user2 = new User("Jane Doe", chatroom);

user1.send("Hi there!");
//Thu Jan 11 2024 01:55:21 GMT+0900 (대한민국 표준시) [John Doe]: Hi there!
user2.send("Hey!");
//Thu Jan 11 2024 01:55:21 GMT+0900 (대한민국 표준시) [Jane Doe]: Hey!

//express의 미들웨어
app.use(
  (req, res, next) => {
    console.log("미들웨어 실행중");
    next();
  },
  () => {
    //code
  }
);

//특정 경로에서 실행할 때
app.get(
  ("/",
  (req, res, next) => {
    console.log("request get", "/");
    next();
  },
  (req, res) => {
    throw new Error("error");
  })
);

//모든 곳에서 사용되는 미들웨어
app.use(
  (req, res, next) => {
    console.log("first middleware!");
    next();
  },
  (req, res, next) => {
    console.log("second middleware!");
    next();
  },
  (req, res, next) => {
    console.log("thrid middleware!");
    next();
  }
);

app.get("/", (req, res) => {
  console.log("complete!");
});
