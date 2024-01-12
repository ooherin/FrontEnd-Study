interface IPerson<N, A> {
  type: "human";
  name: N;
  age: A;
}

let Generic = 1;
export default Generic;

interface Zero extends TPerson<"zero", 20> {}

//타입의 제네릭
type TPerson<N, A> = {
  type: "human";
  from: "Korea";
  name: N;
  age: A;
};

//클래스에서 제네릭
class Person<N, A> {
  name: N;
  age: A;
  constructor(name: N, age: A) {
    this.name = name;
    this.age = age;
  }
}

//함수에서의 제네릭
//화살표 함수에서는 () 앞에 붙입니다.
const personFactoryE = <N, A>(name: N, age: A) => ({
  type: "human",
  from: "Korea",
  name,
  age,
});

//함수선언문에서는 function 뒤,()앞에 붙입니다.
//제네릭에서는 기본 타입을 지정할 수도 있습니다.
function personFactorgyD<N = string, A = number>(name: N, age: A) {
  return {
    type: "human",
    from: "Korea",
    name,
    age,
  };
}

//제네릭에서는 ts가 타입을 유추할 수 있는 경우에는 타입을 굳이 명시하지 않아도 됩니다.

//상수 타입 매개변수
//타입앞에 const를 추가하면 as const를 붙인 값으로 추론됩니다.
function values<const T>(inital: T[]) {
  return {
    hasValue(value: T) {
      return inital.includes(value);
    },
  };
}

const savedValues = values(["a", "b", "c"]);
//savedValues.hasValue("x"); //❌

//제네릭에 제약 걸기
type Animal = {
  name: string;
  type: string;
};
interface Example<A extends Animal, B = string> {
  a: A;
  b: B;
}

type AnimalWithColor = Animal & { color: string };

type case1 = Example<AnimalWithColor, string>;
// type case2 = Example<number, string>;7❌
