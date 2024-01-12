//Enum은 다른 타입들과 달리 사라지지 않음
enum Level {
  NOVICE,
  INTERMEDIATE,
  ADVANCED,
  MASTER,
}

//enum타입의 속성은 값으로도 활용할 수 있다.
//값을 따로 설정하지 않으면 0부터 시작하는 숫자가 된다.
const a = Level.NOVICE; //0
const b = Level[Level.NOVICE];

const Enum = 1;
export default Enum;

//enum은 브랜딩을 위해 사용하면 좋다.
enum Money {
  WON,
  DOLLAR,
}
interface Won {
  type: Money.WON;
}

interface Dollar {
  type: Money.DOLLAR;
}

function moneyOrDollar(params: Won | Dollar) {
  if (params.type === Money.DOLLAR) {
    console.log("it is money");
  } else {
    console.log("it is dollar");
  }
}

//enum이 아닌 const enum을 사용하면 자바스크립트 코드가 생성되지 않게 할 수도 있다.

//타입 구분하기
interface Dog {
  type: "dog";
  name: string;
  color: string;
}
interface Cat {
  type: "cat";
  name: string;
  color: string;
}

//타입을 구분하는 함수 만들기
function isDog(param: Dog | Cat): param is Dog {
  return param.type == "dog";
}

function dogOrCat(param: Dog | Cat) {
  if (isDog(param)) {
    console.log("나는 개");
  } else {
    console.log("나는 고양이");
  }
}
