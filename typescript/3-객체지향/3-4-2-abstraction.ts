{
  //절차지향적으로 커피머신을 만들기

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  //public (✅기본) : 외부에서 다 볼 수있다.
  //private : 외부에서는 볼 수 없다.
  //protected : 외부에서는 볼 수 있으나 인스턴스에서는 볼 수 있다.

  //💚 interface : 명세서 작성
  //interface는 추상체
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  //💙상업적인 interface
  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  //이 class는 interface를 구현하는 구현체
  //interface에 정의한 모든 함수를 정의해야 함.
  class CoffeeMachine implements CoffeeMachine, CommercialCoffeeMaker {
    //한 샷당 들어가는 커피빈의 양
    //private하게 만들어주면 외부에서 접근하지 못한다.
    //내부에서는 static이므로 CoffeCup.으로 접근 가능
    private static BEANS_GRAM_PER_SHOT: number = 7;

    //static을 사용하면 인스턴스마다 해당 속성이 생성되지 않음. 문신으로 만드는 것. 메모리의 낭비를 막음
    //static의 경우 사용할 때에는 this가 아닌 해당 클래스의 이름(문신새긴 사람의 이름)을 쓰는 것.

    //남아있는 커피빈의 양
    private coffeeBeans: number = 0;

    //생성기계 => 인스턴스를 만들어줌
    //private을 사용해 makeMachine으로 인스턴스를 생성하도록 유도
    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans; //인자값만큼 커피콩이 들어간 머신이 만들어짐.
    }

    //기계를 생성하는 법2 : constructor 사용하지 않고 함수로 만드는 법
    //static은 문신이므로 해당 함수의 이름으로 사용 해야함.
    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    //커피콩 채우는 메서드 : 양수인 경우에만 유효
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

      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error("커피 콩이 부족합니다.");
      } //만들지 못하는 경우
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
      //외부의 커피콩을 사용한 만큼 줄여줌
      return {
        shots, //몇샷이 들어가는지
        hasMilk: false, //우유가 들어가는지
      };
    }
  }

  //인스턴스 만드는 법
  //1. constructor로 만드는 법
  //const maker = new CoffeeMaker(32);
  //constuctor를 static으로 만들면 new 생성자 함수를 못씀
  //자연스럽게 메소드를 사용하도록 유도함.

  // maker.coffeeBeans = 3;
  //이렇게 직접적으로 추가하는 것은 불가능함

  //maker.coffeeBeans = -32; //invalid

  const newMachine: CoffeeMachine = CoffeeMachine.makeMachine(32);
  // newMachine.fillCoffeeBeans(33);
  // newMachine.makeCoffee(2);
  // console.log(newMachine);

  //필요하지 않은 함수grindBeans, preheats 등은 private으로 정의해서
  //외부로 노출되지 않도록 함
  // newMachine.fillCoffeeBeans(100);
  // newMachine.makeCoffee(2);
  //32 + 33 = 65
  //65- 7 *2
  //51
  //CoffeeMaker { coffeeBeans: 51 }

  const newMachine2: CoffeeMaker = CoffeeMachine.makeMachine(32);

  //CoffeeMaker라는 interface에는 밑과 같은 fillCoffeeBeans라는
  //기능이 없음. 오직 makeCoffee만 가능
  //추상화를 사용하면 원하는 정보를 은닉할 수도 있다.

  // newMachine2.fillCoffeeBeans(33); ❌ 안보임
  // newMachine2.makeCoffee(2);
  // console.log(newMachine);

  //interface로 타입을 제한해서 받음
  // const newMachine3: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
  // newMachine3.fillCoffeeBeans(32);
  // newMachine3.makeCoffee(2);
  // newMachine3.clean();

  class AmateurBarista {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      console.log("저는 아마추어 바리스타입니다.");
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      console.log("저는 프로바리스타입니다.");
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(30);
      this.machine.clean();
    }
  }

  //둘 한테 동일한 newMachine을 인자로 건네줌.
  //CoffeeMachine을 받아오지 않고. 각각 CoffeeMaker와 CommercialCoffeeMaker
  //라는 두가지의 인터페이스를 생성자에서 받아옴.
  const amateurBarista = new AmateurBarista(newMachine);
  const proBarista = new ProBarista(newMachine);

  amateurBarista.makeCoffee();
  console.log(amateurBarista);
  //AmateurBarista { machine: CoffeeMachine { coffeeBeans: 32 } }
  proBarista.makeCoffee();
  console.log(proBarista);
  //ProBarista { machine: CoffeeMachine { coffeeBeans: 62 } }
  //pro는 커피콩까지 채워넣는다.
}
