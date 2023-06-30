//예제1
{
  function getSize<T>(arr: T[]): number {
    return arr.length;
  }

  const arr1 = [1, 2, 3];
  getSize<number>(arr1);

  const arr2 = ["a", "b", "c"];
  getSize<string>(arr2);

  const arr3 = [false, true, true];
  getSize<boolean>(arr3);

  const arr4 = [{}, {}, {}];
  getSize<object>(arr4);

  //예제2

  interface Mobile<T> {
    name: string;
    price: number;
    option: T;
  }

  const m1: Mobile<{ color: string; coupon: boolean }> = {
    name: "s21",
    price: 1000,
    option: {
      color: "red",
      coupon: false,
    },
  };

  const m2: Mobile<string> = {
    name: "s20",
    price: 900,
    option: "white",
  };

  //예제3

  interface User {
    name: string;
    age: number;
  }
  interface Car {
    name: string;
    color: string;
  }
  interface Book {
    price: number;
  }

  //extends 를 사용해서 (interface)를 정의함.
  const user: User = { name: "tomi", age: 10 };
  const car: Car = { name: "BMW", color: "red" };
  const book: Book = { price: 3000 };

  function showName<T extends { name: string }>(data: T): string {
    return data.name;
  }
  showName(user);
  showName(car);
  // showName(book); //{name : string}에 해당하지 않음.
}
