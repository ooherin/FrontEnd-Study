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

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;
    public constructor(
      coffeeBeans: number,
      private milk: milkProvider,
      private sugar: SugarProvider
    ) {
      this.coffeeBeans = coffeeBeans; //인자값만큼 커피콩이 들어간 머신이 만들어짐.
    }
    // static makeMachine(coffeeBeans: number): CoffeeMachine {
    //   return new CoffeeMachine(coffeeBeans);
    // }

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
      const coffee = this.extract(shots);
      const sugarAddedCoffee = this.sugar.makeSugar(coffee);
      const completedCoffee = this.milk.makeMilk(sugarAddedCoffee);
      console.log(`${this.milk.name}, ${this.sugar.name}커피를 완성했습니다. `);
      return completedCoffee;
    }
  }

  // //카페라테 만들기
  // class CaffeeLatteeMachine extends CoffeeMachine {
  //   constructor(
  //     beans: number,
  //     public readonly serialNumber: string,
  //     private milk: milkProvider, //싸구려 우유제공기가 아닌 interface 자체를 받아옴 => 디커플링
  //     private sugar: SugarProvider
  //   ) {
  //     super(beans);
  //   }
  //   makeCoffee(shots: number): CoffeeCup {
  //     const coffee = super.makeCoffee(shots);
  //     return this.milk.makeMilk(coffee);
  //   }
  // }
  // //설탕커피 만들기
  // class SweetCoffeeMaker extends CoffeeMachine {
  //   constructor(
  //     beans: number,
  //     private milk: milkProvider,
  //     private sugar: SugarProvider
  //   ) {
  //     super(beans);
  //   }
  //   makeCoffee(shots: number): CoffeeCup {
  //     const coffee = super.makeCoffee(shots);
  //     return this.sugar.makeSugar(coffee);
  //   }
  // }
  // //설탕 카페라테 만들기
  // class SweetCaffeLatteMachine extends CoffeeMachine {
  //   constructor(
  //     beans: number,
  //     private milk: CheapMilkSteamer,
  //     private sugar: CandySugarMixer
  //   ) {
  //     super(beans);
  //   }
  //   makeCoffee(shots: number): CoffeeCup {
  //     const coffee = super.makeCoffee(shots);
  //     const sugarAddCoffee = this.sugar.makeSugar(coffee);
  //     return this.milk.makeMilk(sugarAddCoffee);
  //   }
  // }

  const cheapMilkMaker = new CheapMilkSteamer();
  const expensiveMilkMaker = new ExpensiveMilkSteamer();
  const candySugarMaker = new CandySugarMixer();
  const expensizeSugarMaker = new ExpensizeSugarMixer();
  const noMilk = new NoMilk();
  const noSugar = new NoSugar();

  // const AAAlatteMachine = new CaffeeLatteeMachine(
  //   30,
  //   "AAA",
  //   expensiveMilkMaker,
  //   expensizeSugarMaker
  // );
  // console.log(AAAlatteMachine);
  // AAAlatteMachine.makeCoffee(4);

  const SpecialCaffeLatte = new CoffeeMachine(
    30,
    expensiveMilkMaker,
    expensizeSugarMaker
  );
  SpecialCaffeLatte.makeCoffee(3);
}
