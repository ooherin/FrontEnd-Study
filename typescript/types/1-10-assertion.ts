import { S } from "msw/lib/glossary-de6278a9";

{
  //Type assertions
  function jsStrFunc(): any {
    return "hello";
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  //result가 string을 return한다고 장담하는 것
  //숫자가 리턴된다고 해도 string으로 장담했기 때문에 문제가 발생하지 않음

  console.log(<string>result.length);
  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); //push가 없다고 나옴

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  //const numbers = findNumbers()! //이렇게 써도 됨
  numbers!.push(2); //undefined일 수 있는데 push를 사용하는 것은 좋지 않다.
  //!를 쓰면 이건 undefined가 아니라 값이 있다고 장담할 수 있는것.

  const button = document.querySelector("class")!;
  //button이 있다고 장담할 때 !를 붙이면 된다.
  //확신이 있을 때 뺴고는 쓰지 않는다.
  if (button) {
    button.nodeValue;
  }
}
