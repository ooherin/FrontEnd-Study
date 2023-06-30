{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface milkProvider {
    name: string;
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    name: string;
    makeSugar(cup: CoffeeCup): CoffeeCup;
  }

  //milkProvider라는 규격을 지키는 class라는 뜻
  class CheapMilkSteamer implements milkProvider {
    name = "일반 우유";
    private steamMilk(): void {
      console.log("일반 우유를 스팀하고 있어요");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }
  class NoMilk implements milkProvider {
    name = "우유 없음";
    makeMilk(cup: CoffeeCup) {
      return cup;
    }
  }

  class ExpensiveMilkSteamer implements milkProvider {
    name = "고급 우유";
    private steamMilk(): void {
      console.log("고급 우유를 스팀하고 있어요");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class CandySugarMixer implements SugarProvider {
    name = "사탕 설탕";
    private addSugar() {
      console.log("사탕에서 설탕을 가져옵니다.");
    }
    makeSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.addSugar();
      return {
        ...cup,
        hasSugar: true,
      };
    }
  }

  class ExpensizeSugarMixer implements SugarProvider {
    name = "고급 설탕";
    private addSugar() {
      console.log("비싼 설탕을 가져옵니다.");
    }
    makeSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.addSugar();
      return {
        ...cup,
        hasSugar: true,
      };
    }
  }

  class NoSugar implements SugarProvider {
    name = "무설탕";
    private addSugar() {
      console.log("설탕을 넣지 않습니다. 가져옵니다.");
    }
    makeSugar(cup: CoffeeCup) {
      return cup;
    }
  }

  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;
    public constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans; //인자값만큼 커피콩이 들어간 머신이 만들어짐.
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
    protected abstract extract(shots: number): CoffeeCup;
    //메소드
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      const coffee = this.extract(shots);
      return coffee;
    }
  }

  const cheapMilkMaker = new CheapMilkSteamer();
  const expensiveMilkMaker = new ExpensiveMilkSteamer();
  const candySugarMaker = new CandySugarMixer();
  const expensizeSugarMaker = new ExpensizeSugarMixer();
  const noMilk = new NoMilk();
  const noSugar = new NoSugar();

  class CaffeeLatteeMachine extends CoffeeMachine {
    // constructor(beans: number, public readonly serialNumber: string) {
    //   super(beans);
    // }
    private steamMilk(): void {
      console.log("우유 스팀 중...");
    }
    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    // constructor(beans: number, public readonly serialNumber: string) {
    //   super(beans);
    // }
    private makeSugars(): void {
      console.log("설탕 만드는 중...");
    }
    protected extract(shots: number): CoffeeCup {
      this.makeSugars();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  const SweetCoffeeMaker1 = new SweetCoffeeMaker(10);
  SweetCoffeeMaker1.makeCoffee(1);
  SweetCoffeeMaker1.fillCoffeeBeans(10);
}
