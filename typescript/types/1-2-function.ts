{
  //js
  function jsAdd(num1, num2) {
    return num1 + num2;
  }
  //ts
  function add2(num1: number, num2: number): number {
    return num1 + num2;
  }
  //js
  // function jsFetchNum(id) {
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }
  //ts
  function FetchNum(id: string): Promise<number> {
    //숫자의 데이터를 return하는 프로미스
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  //optional parameter : 파라미터에 옵션 주기
  //javascript => typescript
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName("taylor", "swift");
  printName("Elsa");

  //Default 파라미터
  function printMessage(message: string = "기본 메세지 입니다") {
    console.log(message);
  }
  printMessage(); //기본 메세지 입니다.

  //rest 파라미터 : 배열로 모든 숫자 인자를 받아옴, 숫자 타입의 배열로 받아오는거
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((acc, cur) => acc + cur);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
}
