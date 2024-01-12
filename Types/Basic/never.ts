//숫자에서 0이 있듯이, 타입에도 never가 있다. 공집합을 의미한다.

//1. 값을 포함할 수 없는 빈 타입
//(1) 제네릭과 함수에서 허용되지 않은 매개변수
//(2) 호환되지 않는 타입의 교차 타입
//(3) 빈 합집합

//never 타입은 유니언 타입에서 없어진다.
type NeverOrString = never | string;
//string

//never타입은 인터렉션 타입에서 교차 타입을 엎어쓴다.
//0을 곱하면 0이 나오는 원리이다.
type NeverAndStr = never & string; //never

//만약 함수의 prop이 never타입일 경우 any로도 통과할 수 없다.
function neverFun(prop: never) {
  console.log(prop);
}

let imAny: any;
//neverFun(imAny);
//❌ any' 형식의 인수는 'never' 형식의 매개 변수에 할당될 수 없습니다.

//오직 never타입의 인수만 들어갈 수 있다.

//만약 switch, if..else문을 사용하면
//다른 경우를 다 정하고, 마지막 defualt 의 경우 never나 남기 때문에
//모든 상황을 다 보장할 수 있따.
type Color = "red" | "green" | "blue";

function getColorName(c: Color): string {
  switch (c) {
    case "red":
      return "it is red";
    case "green":
      return "it is green";
    case "blue":
      return "it is blue";
    default:
      return unknownColor(c);
    //return c;
    //never 타입
    //이게 실행될 일은 없지만 모든 경우를 다 보장한다는 뜻으로 사용할 수 있다.
  }
}

function unknownColor(x: never): never {
  throw new Error("unknown color");
}

//다음과 같이 유니언 타입을 사용할 떄 never는 쓸모가 없으므로
//빈자리를 채우기 좋은 타입이다.
type Foo = {
  name: "foo";
  id: number;
};
type Boo = {
  name: "boo";
  id: number;
};

type All = Foo | Boo;

//T는 검사하고 싶은 타입 묶음
//N은 그 타입에서 추출하고 싶은 세부 타입
type ExtractTypeByName<T, N> = T extends { name: N } ? T : never;

//name 속성이 foo 인 세부타입을 걸러냄
type NameIsFooType = ExtractTypeByName<All, "foo">;
