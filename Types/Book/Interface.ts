//빈 객체 타입 : {}
//null과 undefined를 제외한 모든 타입
//인터페이스도 이 빈 객체 타입임
interface NoProps {}

const obj3: NoProps = {
  why: "에러 안나",
};

const what: NoProps = "이게 되네?";
//const omg: NoProps = null; //❌null 은 할당 불가
//이렇게 한 이유는 아무것도 없는 빈 객체를 쓸 일이 없기 때문이다.

//인터페이스의 경우 쉽게 병합 할 수 있지만 속성 이름이 같을 경우 타입도 같아야 함.
interface Merge {
  one: string;
}
interface Merge {
  //one: number; ❌
}
