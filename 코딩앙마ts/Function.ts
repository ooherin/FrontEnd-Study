{
  interface User {
    name: string;
  }

  const Sam: User = { name: "Sam" };

  // function showName(this: User, age: number, gender: "m" | "f") {
  //   console.log(this.name, age, gender);
  // }

  const a = showName.bind(Sam);
  a(20, "m");
  //Sam 20 m

  //리터럴
  const userName1 = "Bob"; //"Bob"
  let userName2: string | number = "Tom"; //string

  type Job = "police" | "teacher" | "developer";

  interface UserType {
    name: string;
    job: Job;
  }
  const user1: UserType = {
    name: "tomi",
    job: "police",
  };

  //union Types
  interface Car {
    name: "car";
    color: string;
    start(): void;
  }

  interface Phone {
    name: "phone";
    color: string;
    call(): void;
  }

  //식별가능한 유니온 타입으로 switch 문 만들기
  function choiceGift(gift: Car | Phone) {
    console.log(gift.color);
    switch (gift.name) {
      case "car":
        gift.start();
        break;
      case "phone":
        gift.call();
        break;
      default:
        throw new Error("pick car or phone only");
    }
  }

  //교차 타입

  type Size = "big" | "medium" | "small";
  interface Bag {
    color: string;
    size: Size;
    name: string;
  }

  interface Flower {
    number: number;
    name: string;
  }

  const flowerBag: Flower & Bag = {
    name: "iris",
    color: "white",
    size: "medium",
    number: 123,
  };
}
