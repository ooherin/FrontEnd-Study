// {
//   type CoffeeCup = {
//     shots: number;
//     hasMilk: boolean;
//     hasSugar?: boolean;
//   };

//   interface CoffeeMaker {
//     makeCoffee(cup: CoffeeCup): CoffeeCup;
//   }

//   interface MilkMaker {
//     makeMilk(cup: CoffeeCup): CoffeeCup;
//   }

//   interface SugarProvider {
//     makeSugar(cup: CoffeeCup): CoffeeCup;
//   }

//   class CheapMilkSteamer implements MilkMaker {
//     private steamMilk(): void {
//       console.log("우유를 스팀하고 있어요");
//     }
//     makeMilk(cup: CoffeeCup): CoffeeCup {
//       this.steamMilk();
//       return {
//         ...cup,
//         hasMilk: true,
//       };
//     }
//   }

//   class CandySugarMixer implements SugarProvider {
//     private makeSugar() {
//       console.log("사탕에서 설탕을 가져옵니다.");
//     }
//     addSugar(cup: CoffeeCup): CoffeeCup {
//       const sugar = this.makeSugar();
//       return {
//         ...cup,
//         hasSugar: true,
//       };
//     }
//   }

//   class CoffeeMachine implements CoffeeMaker {
//     private static BEANS_GRAM_PER_SHOT: number = 7;
//     private coffeeBeans: number = 0;
//     public constructor(coffeeBeans: number) {
//       this.coffeeBeans = coffeeBeans; //인자값만큼 커피콩이 들어간 머신이 만들어짐.
//     }
//     static makeMachine(coffeeBeans: number): CoffeeMachine {
//       return new CoffeeMachine(coffeeBeans);
//     }

//     fillCoffeeBeans(beans: number) {
//       if (beans < 0) {
//         throw new Error("채울 커피콩의 양은 0 이상이여야 합니다.");
//       }
//       this.coffeeBeans += beans;
//     }

//     clean(): void {
//       console.log("기계를 청소중입니다.");
//     }

//     private grindBeans(shots: number) {
//       console.log(`${shots}만큼 커피를 갈고 있어요.`);
//       if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
//         throw new Error("커피 콩이 부족합니다.");
//       }
//     }

//     private preheat(): void {
//       console.log("기계를 예열 중입니다.🔥");
//     }
//     private extract(shots: number): CoffeeCup {
//       console.log(`${shots}샷만큼 커피를 내리고 있어요.`);
//       return {
//         shots, //몇샷이 들어가는지
//         hasMilk: false, //우유가 들어가는지
//       };
//     }
//     //메소드
//     makeCoffee(shots: number): CoffeeCup {
//       this.grindBeans(shots);
//       this.preheat();
//       return this.extract(shots);
//     }
//   }
// }
