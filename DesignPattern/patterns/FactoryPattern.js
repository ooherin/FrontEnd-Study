//팩토리 패턴은 새로운 객체를 만들어, 그 안에서 넣은 프로퍼티를 조합하여
//새로운 프로퍼티나 메소드를 만드는 패턴이다.
//말그대로 공장처럼 객체로 새로운 것을 찍어 주어진 틀을 만드는 패턴
//클래스랑 비슷하다.

const createUser = ({ firstName, lastName, email }) => ({
  firstName,
  lastName,
  email,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
});

const user1 = createUser({
  firstName: "hyerin",
  lastName: "oh",
  email: "aaa@naver.com",
});

console.log(user1.fullName()); //hyerin oh

//클래스와 같은 기능을 하나, 많은 케이스에서는 위 문법보다 클래스를
//쓰는 것이 메모리 효율 측면에서 더 좋다.
class User {
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user2 = new User({
  firstName: "yujin",
  lastName: "kim",
  email: "bbb@naver.com",
});

console.log(user2.fullName());
