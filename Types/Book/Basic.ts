const str1 = "hello"; //리터럴 타입. 'hello'로 나옴
let str2 = "hello"; //string 타입

let n = null; //null
let u = undefined; //undefined

//객체의 리터럴 타입이 있다.
const arr: [1, 3, "five"] = [1, 3, "five"];
//객체는 const 여도 값을 수정할 수 있으므로 타입을 넓게 추론한다.
const obj1 = { name: "five" };
const arr1 = [1, 3, "five"]; //(string | number)[]

//값이 변하지 않는다는 것이 확실하다면 as const 를 붙이면 된다.
const obj = { name: "rin " } as const;
//타입이 readonly name: "rin "; 로 추론된다.

//튜플인 요소마다 타입이 정해져있는 타입이지만, 배열에 요소를 추가하거나 삭제하는 것은 막지 않는다.
const tuple1: [number, string] = [1, "re"];
tuple1.push(1); //에러 없음

//막으려면 다음과 같이 readonly를 사용한다.
const tuple: readonly [number, boolean, string] = [1, false, "n"];
//tuple.push(3);

//배열보다 정교한 타입인 튜플

//변수를 타입으로 쓰려면 typeof를 붙이면된다.
function add(x: number, y: number) {
  return x + y;
}
const add2: typeof add = (x: number, y: number) => x + y;
//add2의 타입 :(x: number, y: number) => number

//유니온 (|)
//타입 좁히기
let strOrNum: string | number = "hello";
strOrNum = 123;
if (typeof strOrNum === "number") {
  strOrNum.toFixed();
}

// '|' 연산자는 타입앞에서도 사용할 수 있다.
type Union1 = string | number | boolean;

//any
//ts가 명시적으로 any로 반환하는 함수.
//1. JSON.parse
//2. fetch 함수
fetch("url")
  .then((res) => {
    //(parameter) res: Response
    return res.json();
  })
  .then((res) => console.log(res)); //res의 타입은 any로 설정됨

const result = JSON.parse('{ name: "rin" }'); //any

//unknown
//unknown은 any와 비슷하게 모든 타입을 대입할 수 있지만, 그 후 어떠한 동작도 수행x
const a: unknown = "hello";
const b: unknown = "world";

//a + b; error : unknown이므로 사용할 수 없음
//a.slice() : unknown이므로 사용할 수 없음

//useUnknownCatchVariables를 true로 하면 unknown타입으로 나옴
try {
} catch (e) {
  //e: any
  console.log(e.message);
}

//바로 e에 Error 타입을 할당하려고 하면 에러가 남.
//e는 any혹은 unknown 타입이여야 하기 때문
//catch문의 e는 unknown 혹은 any타입이여야 하므로 다음과 같이 변수에서 Error타입을 써줌
try {
} catch (e) {
  const error = e as Error;
  console.log(error.message);
}

//void
//void를 쓰는 2가지 이유
//(1) 사용자가 함수의 반환값을 사용하지 못하도록 제한한다.
//const func = (): void => 3; ❌error: 반환값이 무시되므로 number인 3을 할당할 수 없음
//(2) 반환값을 사용하지 않는 콜백 함수를 타이핑할 때 사용한다.

function neverFunc() {
  throw new Error("에러");
}

//const result1: never = neverFunc();
//함수 선언문은 throw를 하더라도 반환값이 void
//함수 표현식은 throw를 하면 반환값이 never

//noImplicitAny를 사용하면 빈 배열이 any[]에서 never[]로 됨. (any를 사용하지않으므로)
//해당 배열의 타입을 지정해주어야 해결됨.
const arrIsAny = []; //any
//noImplicitAny를 true로 했을 때
const arrIsKnown = []; //unknown

//strictNullChecks를 false로 설정하면 undefined와 null의 구분이 없어진다.

const Baisc1 = 1;
export default Baisc1;
