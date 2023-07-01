{
  class User {
    //get함수를 쓰면 user.fullName형식으로 작성해야 함/
    //함수형태로 만들지만 쓸 때에는 함수가 아님.
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    //외부적으로 접근할 수 없는 internalAge
    private internalAge = 4;
    //user.age를 쓰면 간접적으로 internalAge에 접근할 수 있다.
    get age(): number {
      return this.internalAge;
    }
    //user.age = 5를 쓰면 간접적으로 internalAge를 변경할 수 있다.
    //단순히 변경뿐만 아니라 조건식을 첨가할 수도 있다.
    set age(num: number) {
      if (num < 0) {
        console.log("나이는 양수여야 합니다.");
      } else {
        this.internalAge = num;
      }
    }

    constructor(private firstName: string, public lastName: string) {}
  }
  const user = new User("taylor", "swift");
  console.log(user);
  // User {
  //   firstName: 'taylor',
  //   lastName: 'swift',
  //   fullName: 'taylor swift'
  // }
  console.log(user.fullName); //taylor swift
  // user.firstName = "Ariana";
  console.log(user.fullName); //Ariana swift
  //getter함수를 썼기 때문에 내부적으로 변경이 가능함.

  // console.log(user.internalAge ) //접근 불가
  user.age = 5;
  console.log(user.age); //5
}
