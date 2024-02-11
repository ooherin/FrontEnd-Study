//프로토타입 패턴
//처음부터 일반적인 인터페이스를 만들고, 그것을 복사한 후 필요한 부분만 수정하여 사용하는 패턴
//기존 객체를 복사함으로써 객체를 생성

//Object.assign()으로 구성 가능
const target = { a: 1, b: 2 };
const source = { b: 3, c: 5 };
//같은 키가 있는 경우 덮어씌워진다.
//원본 객체의 열거 가능한 자체 속성만 목표 객체로 복사한다.

const returnTarget = Object.assign(target, source);
//{Object { a: 1, b: 3, c: 5 }}

console.log(returnTarget === target);
// Expected output: true

//객체 복제
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }

//깊은 복사 주의점

//Object.assign은 얕은 복사만 진행한다.
//깊은 복사는 다른 방식으로 진행해야 한다.
function test() {
  "use strict";

  let obj1 = { a: 0, b: { c: 0 } };
  let obj2 = Object.assign({}, obj1);
  console.log(JSON.stringify(obj2)); // { a: 0, b: { c: 0}} ✅얕은 복사

  obj1.a = 1;
  console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 0}}
  console.log(JSON.stringify(obj2)); // { a: 0, b: { c: 0}}
  //1 depth 까지는 제대로 복사가 되었다!

  obj2.b.c = 3;
  console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 3}}
  console.log(JSON.stringify(obj2)); // { a: 0, b: { c: 3}}
  //깊은 복사가 되지 않았다!

  //깊은 복사를 하려면 어떻게 해야 하는가? ⭐️다른 방법을 써야 한다!
  obj1 = { a: 0, b: { c: 0 } };
  let obj3 = JSON.parse(JSON.stringify(obj1));

  obj1.a = 5;
  obj1.b.c = 5;
  console.log(JSON.stringify(obj3)); // { a: 0, b: { c: 0}}
}

test();
