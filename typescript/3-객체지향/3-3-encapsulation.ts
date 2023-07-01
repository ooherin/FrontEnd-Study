{
  //절차지향적으로 커피머신을 만들기

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  //public (✅기본) : 외부에서 다 볼 수있다.
  //private : 외부에서는 볼 수 없다.
  //protected : 외부에서는 볼 수 있으나 인스턴스에서는 볼 수 있다.

  class CoffeeMaker {
    //한 샷당 들어가는 커피빈의 양
    //private하게 만들어주면 외부에서 접근하지 못한다.
    private static BEANS_GRAM_PER_SHOT: number = 7;

    //static을 사용하면 인스턴스마다 해당 속성이 생성되지 않음. 문신으로 만드는 것. 메모리의 낭비를 막음
    //static의 경우 사용할 때에는 this가 아닌 해당 클래스의 이름(문신새긴 사람의 이름)을 쓰는 것.

    //남아있는 커피빈의 양
    private coffeeBeans: number = 0;

    //생성기계 => 인스턴스를 만들어줌
    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans; //인자값만큼 커피콩이 들어간 머신이 만들어짐.
    }

    //기계를 생성하는 법2 : constructor 사용하지 않고 함수로 만드는 법
    //static은 문신이므로 해당 함수의 이름으로 사용 해야함.
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    //커피콩 채우는 메서드 : 양수인 경우에만 유효
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    //메소드
    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error("커피 콩이 부족합니다.");
      } //만들지 못하는 경우
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
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

  const newMachine = CoffeeMaker.makeMachine(32);
  newMachine.fillCoffeeBeans(33);
  newMachine.makeCoffee(2);
  console.log(newMachine);
  //32 + 33 = 65
  //65- 7 *2
  //51
  //CoffeeMaker { coffeeBeans: 51 }
}
