interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay(): void {
    console.log("풀타임 임금 지급");
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay(): void {}
  workPartTime() {}
}

//세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 안좋다.
// function pay(employee: Employee): Employee {
//   employee.pay();
//   return employee;
// }

function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}
const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();

const ellieAfterPay = pay(ellie);
const bobAfterPay = pay(bob);

const obj2 = {
  name: "rin",
  age: 20,
};
//K는 T안에 있는 키의 타입 중 하나임.
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log(getValue(obj2, "name"));
// console.log(getValue(obj2,'aa') //'name' | 'age'
console.log(getValue(obj2, "age"));

// interface Employee {
//   pay(): void;
// }

// class FullTimeEmployee implements Employee {
//   pay() {
//     console.log(`full time!!`);
//   }
//   workFullTime() {}
// }

// class PartTimeEmployee implements Employee {
//   pay() {
//     console.log(`part time!!`);
//   }
//   workPartTime() {}
// }

// // 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩💩💩
// function payBad(employee: Employee): Employee {
//   employee.pay();
//   return employee;
// }

// function pay<T extends Employee>(employee: T): T {
//   employee.pay();
//   return employee;
// }

// const ellie = new FullTimeEmployee();
// const bob = new PartTimeEmployee();
// ellie.workFullTime();
// bob.workPartTime();

// const ellieAfterPay = pay(ellie);
// const bobAfterPay = pay(bob);

// const obj = {
//   name: 'ellie',
//   age: 20,
// };

// const obj2 = {
//   animal: '🐕',
// };

// console.log(getValue(obj, 'name')); // ellie
// console.log(getValue(obj, 'age')); // 20
// console.log(getValue(obj2, 'animal')); // 🐕

// function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key];
// }
