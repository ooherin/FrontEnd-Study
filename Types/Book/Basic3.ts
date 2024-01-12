//변수를 대입할 때는 잉여속성을 검사하지 않지만
//어떨때 대입이 가능한지를 아는 것이 필요하다.

interface A {
  name: string;
}

interface B {
  name: string;
  age: number;
}

const aObj = {
  name: "rin",
};

const bObj = {
  name: "zero",
  age: 20,
};

const aToA: A = aObj; //ok
const bToB: B = bObj; //Ok
const bToA: A = bObj; //Ok
//const aToB: B = aObj;❌
//안되는 이유는 aObj에 B에서 요구하는 age속성이 없기 때문이다.

//넓은 집합에 좁은 집합을 넣을 수 있지만, 좁은 집합에 넓은 집합을 넣을 수는 없다.
//인터페이스 A가 B보다 넓은 집합이다.

//구조적 타이핑
//타입스크립트는 다음과 같이 타입이 모두 같은 경우에는, 구조가 같으면 같은 타입(객체)로 인식함.
//이를 구조적 타이핑이라고 함.
interface Phone {
  name: string;
  price: number;
}

interface Computer {
  name: string;
  price: number;
}

const computer: Computer = { name: "mac", price: 2000 };

const Baisc3 = 1;
export default Baisc3;

//함수를 사용할 때 콜백의 매개변수에는 타입을 생략해도된다.

function example(callback: (error: Error, result: string) => void) {}

example((e, r) => {});
example(() => {}); //에러 안남. 콜백에 인자 없어도 ok
