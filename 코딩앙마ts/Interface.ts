{
  type Score = "A" | "B" | "C" | "F";

  interface User {
    name: string;
    age: number;
    gender?: string;
    readonly birthYear: number;
    [grade: number]: Score;
  }

  let user: User = {
    name: "jin",
    age: 24,
    birthYear: 2000,
    1: "A",
    2: "F",
  };

  //함수 형태
  interface Add {
    (num1: number, num2: number): number;
  }
  const add: Add = function (x, y) {
    return x + y;
  };

  interface IsAdult {
    (age: number): boolean;
  }

  // const isAdultFunc: IsAdult = function (age: number) {
  //   if (age > 19) {
  //     return true;
  //   }
  //   return false;
  // };

  const isAdultFunc: IsAdult = (age) => {
    return age > 19;
  };

  //implements : 클래스 형태
  interface Car {
    color: string;
    wheels: number;
    start(): void;
  }

  class BMW implements Car {
    color;
    wheels = 4;
    constructor(c: string) {
      this.color = c;
    }
    start(): void {
      console.log("시동이 켜졌습니다.");
    }
  }

  //extends : interfce가 확장이 가능
  interface Animal {
    age?: number;
    color: string;
    sleep(): void;
  }

  const rabbit: Animal = {
    color: "white",
    age: 3,
    sleep() {
      console.log("zzz");
    },
  };

  //2개의 interface 확장하는 법
  interface Car {
    color: string;
    wheels: number;
    start(): void;
  }

  interface Toy {
    name: string;
  }

  interface ToyCar extends Toy, Car {
    price: number;
  }
}
