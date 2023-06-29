{
  //절차지향적으로 커피머신을 만들기

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;
    public constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans; //인자값만큼 커피콩이 들어간 머신이 만들어짐.
    }
    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("채울 커피콩의 양은 0 이상이여야 합니다.");
      }
      this.coffeeBeans += beans;
    }

    clean(): void {
      console.log("기계를 청소중입니다.");
    }

    private grindBeans(shots: number) {
      console.log(`${shots}만큼 커피를 갈고 있어요.`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error("커피 콩이 부족합니다.");
      }
    }

    private preheat(): void {
      console.log("기계를 예열 중입니다.🔥");
    }
    private extract(shots: number): CoffeeCup {
      console.log(`${shots}샷만큼 커피를 내리고 있어요.`);
      return {
        shots, //몇샷이 들어가는지
        hasMilk: false, //우유가 들어가는지
      };
    }
    //메소드
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  //부모 함수에 있는 super의 makeCoffee 함수를 실행한후
  //hasMilk라는 변수만 true로 바꾸기
  class CaffeeLatteeMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log(`우유를 스팀하고 있어요.`);
    }
    //오버라이딩
    //부모의 makeCoffee를 재정의함.
    //steamMilk, milk를 추가함.
    makeCoffee(shots: number): CoffeeCup {
      this.steamMilk();
      const coffee = super.makeCoffee(shots);
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    private addSugar(): void {
      console.log("설탕을 첨가하고 있어요.");
    }
    makeCoffee(shots: number): CoffeeCup {
      this.addSugar();
      const coffee = super.makeCoffee(shots);
      return {
        ...coffee,
        hasSugar: true,
      };
    }
  }

  const machine = new CoffeeMachine(23);
  const latteMachine = new CaffeeLatteeMachine(23, "ABC");
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee);
  console.log(latteMachine.serialNumber);

  const machines = [
    new CoffeeMachine(16),
    new CaffeeLatteeMachine(16, "DDD"),
    new SweetCoffeeMaker(16),
  ];

  machines.forEach((machine) => {
    console.log("--------------");
    machine.makeCoffee(2);
  });
}
