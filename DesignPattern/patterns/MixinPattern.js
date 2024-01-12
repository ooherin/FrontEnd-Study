//❌ 쓰지 않는 패턴
//믹스인 패턴은 상속없이 객체나 클래스에 기능을 추가할 수 있는 패턴이다.
//클래스가 나온 다음에는 많이 쓰지는 않는다.
//속성을 상속받을 Dog라는 클래스를 만든다. Dog에는 name이라는 프포퍼티 하나밖에 없다.
//✅리액트 팀은 믹스인 패턴을 쓰지 말라고 하는데, 왜냐하면 컴포넌트가 쓸대없이 복잡해지기 때문이다.
//대신 HOC 라는 고차 컴포넌트 방식을 쓰라고 장려하고 있다. (이미 2015년에 나온 말)

//이 패턴의 취약점
//1. 구성 요소와 해당 믹스인 간의 계약은 임시적이다. 믹스인은 구성 요소에 정의된 메서드에 의존하는 경우가
//많지만 이를 바로 확인하기는 어렵다.

//2. 단일 구성 요소에서 많은 믹스인을 사용할 경우 충돌 위험이 있다. 예를 들어, 동일한 메소드를 정의하면
//예외가 발생한다.

//3. 믹스인은 구성 요소에 더 많은 상태를 추가하는 경향이 있는데, 이는 리액트가 지향하는 '더 적은 상태를
//가져야 한다'는 것과 반대이다.

//4. 믹스인은 성능 최적화를 복잡하게 만든다.
class Dog {
  constructor(name) {
    this.name = name;
  }
}

//Dog에 주입할 기능을 담은 dogFunctionality를 만든다.
const dogFunctionality = {
  bark: () => console.log("woof"),
  wagTail: () => console.log("Wagging my tail"),
  play: () => console.log("Playing"),
};

//dogFunctionality안에 있는 속성을 Dog 클래스에 주입한다.
// Object.assign(Dog.prototype, dogFunctionality);
// const dog = new Dog("tomi");
// dog.bark();

// Object.assign(dogFunctionality, animalFunctionlity);
// const pet1 = new Dog("Daisy");
// pet1.name();
// pet1.bark();
// pet1.play();

const animalFunctionlity = {
  walk: () => console.log("Walking!"),
  sleep: () => console.log("Sleeping!"),
};
const pet1 = new Dog("Daisy");
Object.assign(dogFunctionality, animalFunctionlity);
Object.assign(Dog.prototype, dogFunctionality);

pet1.walk(); //Walking!
pet1.sleep(); //Sleeping!
