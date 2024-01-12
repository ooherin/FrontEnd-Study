class Person {
  name: string;
  age: number;
  married: boolean;
  constructor(name: string, age: number, married: boolean) {
    this.name = name;
    this.age = age;
    this.married = married;
  }
}

//변수를 class 안에 한번 더 적어두더야 함.
//안 그럼 에러 남❌
//모든 변수는 contructor와 짝이 맞아야 함.

//클래스 생성시 클래스를 interface 를 implements로 확실하게 검사 가능
//클래스를 생성할 때에는 interface를 통해 타입 검사를 함
interface Human {
  name: string;
  age: number;
  married: boolean;
  sayName(): void;
}

class Person1 implements Human {
  name: string;
  age: number;
  married: boolean;

  constructor(name: string, age: number, married: boolean) {
    this.name = name;
    this.age = age;
    this.married = married;
  }
  eat(): void {
    throw new Error("Method not implemented.");
  }
  sleep(): void {
    throw new Error("Method not implemented.");
  }
  sayName() {
    console.log(`My name is ${this.name}`);
  }
}

//public 속성인 경우 : 선언한 자신의 클래스, 자손 클래스, 인스턴스에서 속성을 사용할 수 있다.
//protected 속성인 경우 : 자신의 클래스와 자손 클래스에서는 속성을 사용할 수 있으나, 인스턴스에서는 사용 불가
//private 속성인 경우 : 자신의 클래스에서만 사용 가능

//인터페이스에서 모든 속성은 public 이여야 함.

//클래스 메소드 오버라이드
class Human {
  eat() {
    console.log("냠냠");
  }
  sleep() {
    console.log("쿨쿨");
  }
}

//sleep이라는 메서드를 다시 정의하는 방법
class Baby extends Human {
  override sleep() {
    console.log("코코");
  }
}
const baby = new Baby();
baby.sleep();
//noImplicitOverride를 직접 활성화 함

//추상 클래스
//추상 클래스는 변수나 메서드를 클래스 내에서 정의할 수도 있고,
//정의하지 않고 형태만 만들어 놓을 수도 있다.
//이 경우에는 하위 클래스에서 이 속성들을 무조건 정의 해야만 한다.
abstract class AbstractPerson {
  name: string;
  age: number;
  married: boolean = false;
  //job은 하위 클래스에서 다시 정의해야 함.
  abstract job: string;
  constructor(name: string, age: number, married: boolean) {
    this.name = name;
    this.age = age;
    this.married = married;
  }

  sayName() {
    console.log(this.name);
  }

  abstract sayAge(): void;
  abstract sayMarried(): void;
}

class RealPerson extends AbstractPerson {
  job: string = "worker";
  sayAge() {
    console.log(this.age);
  }
  sayMarried() {
    console.log(this.married);
  }
}

const Class = 1;
export default Class;
