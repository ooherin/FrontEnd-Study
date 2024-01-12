//네임 스페이스 : 이름이 겹치지 않게 하기 위한 것
namespace Example {
  export interface Ineer {
    test: string;
  }
  export type Inner2 = number;
}

//이렇게 하면 외부에서 만든 Inner, Inner2랑 겹치지 않음
//네임스페이스 내의 타입을 사용하려면 다음과 같이 import 해서 사용해야 함.
const ex: Example.Ineer = {
  test: "hello",
};

//객체의 속성에서 선언하지 않은 속성의 경우 에러가 남
//객체 리터럴 속성
interface Person {
  name: string;
}

const person: Person = {
  name: "rin",
  //age: 20, ❌
};

type PersonType = {
  name: string;
};

const person3: PersonType = {
  name: "jin",
  //age: 20, ❌
};

const obj2 = {
  name: "rin",
  age: 20,
};

const person2: Person = obj2; //✅

//이 차이는 리터럴을 바로 대입했냐, 아니면 리터럴이 아니라 객체를 담은 변수를 대입했냐의 차이
//전자는 에러, 후자는 에러가 안남.
//객체 리터럴을 대입하면 잉여 속성 검사가 실행됙서, 이는 타입 검사에서 선언하지 않은 속성을 사용했는지를 검사함.

type Animal = {
  name: string;
  sort: {
    name: string;
    country: string;
    color: string;
  };
};

type Sort = Animal["sort"]; //해당 값의 타입으로 타입을 만들 수 있다.
//이것을입덱스 접근 타입이라고 함.
// type Sort = {
//   name: string;
//   country: string;
//   color: string;
// }

const obj5 = {
  hello: "world",
  name: "zero",
  age: 20,
};

type Types = typeof obj5;
// type {
//   hello: string;
//   name: string;
//   age: number;
// }

type Keys = keyof typeof obj5;
//type Keys = "hello" | "name" | "age"

type HelloAndHi = {
  [key in "hello" | "hi"]: string;
};

const helloAndHi: HelloAndHi = {
  hello: "hello",
  hi: "hi",
};
//hello, hi 모두 있어야 에러가 안남

//매핑된 객체 타입
//타입 복사
interface Original {
  name: string;
  age: number;
  married: boolean;
}

type Copy = {
  [key in keyof Original]: Original[key];
};

//타입도 상속이 가능하다.
class Animal1 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class DogClass extends Animal1 {
  bark() {
    console.log(`${this.name}`);
  }
}

const dog = new DogClass("puppy");
console.log(dog.bark());

//타입으로 상속받는 법
interface Animal2 {
  name: string;
}

//인터페이스와 객체를 묶어 새로운 타입 Dog1를 만들었다.
type Dog1 = Animal2 & {
  bark(): void;
};

const dog1: Dog1 = {
  name: "choco",
  bark: function () {
    console.log(`${this.name}`);
  },
};

//타입 별칭이 인터페이스를 상속할 수 있고, 그 반대도 가능하다.
//한번에 여러 타입을 상속받을 수도 있다.
type Animal3 = {
  name: string;
};

interface Dog extends Animal3 {
  bark(): void;
}

interface Cat extends Animal3 {
  meow(): void;
}
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  bark: () => console.log("bark"),
  meow: () => console.log("bark"),
  name: "dog And cat",
};
console.log(dogCat);

type meow = DogCat["meow"];
type bark = DogCat["bark"];

const Basic2 = 1;
export default Basic2;
