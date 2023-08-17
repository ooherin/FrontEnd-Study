interface Restaurant {
  name: string;
  star: number;
}

let OutBack: Restaurant; // pinetree 변수 선언

let OutBackWithAddress = {
  // pinetreeWithAddress 변수 선언하고 초기화
  name: "대나무한정식",
  star: 5,
  address: "동대문",
};

console.log((OutBack = OutBackWithAddress));

let VIPS: Restaurant; // pinetree 변수 선언

let VIPSWithAddressNoStar = {
  // pinetreeWithAddress 변수 선언하고 초기화
  name: "대나무한정식",
  address: "동대문",
};

// console.log((VIPS = VIPSWithAddressNoStar));
//'star' 속성이 '{ name: string; address: string; }' 형식에 없지만 'Restaurant' 형식에서 필수입니다.ts(2741)

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
}

class PersonClass {
  name: string;
}

let developer: Developer;
let person: Person;

// developer = person;
//❌ 'skill' 속성이 'Person' 형식에 없지만 'Developer' 형식에서 필수입니다.ts(2741)
// person = developer;
//⭕️

let add = function (a: number) {
  return a;
};
let sum = function (a: number, b: number) {
  return a + b;
};
//❌ add = sum;
//'(a: number, b: number) => number' 형식은 '(a: number) => number' 형식에 할당할 수 없습니다.ts(2322)
sum = add;
