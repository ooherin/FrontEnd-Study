{
  //절차지향적으로 커피머신을 만들기

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  //한 샷당 들어가는 커피빈의 양
  const BEANS_GRAM_PER_SHOT: number = 7;
  //남아있는 커피빈의 양
  let coffeeBeans: number = 0;
  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAM_PER_SHOT) {
      throw new Error("커피 콩이 부족합니다.");
    } //만들지 못하는 경우
    coffeeBeans -= shots * BEANS_GRAM_PER_SHOT;
    //외부의 커피콩을 사용한 만큼 줄여줌
    return {
      shots, //몇샷이 들어가는지
      hasMilk: false, //우유가 들어가는지
    };
  }
  //커피콩을 충전함
  coffeeBeans += 3 * BEANS_GRAM_PER_SHOT;
  const coffee = makeCoffee(2);
  console.log(coffee);
}
