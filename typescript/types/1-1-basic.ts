{
  //javascipt의 타입
  //primitive : number, string, boolean, bigint, symbol, null, undefined
  //Object  : function, array...

  //typescript
  //number
  // const num: number = "d"; //type error
  const num: number = 4;
  const str: string = "haha";
  const bool: boolean = true;

  //undefined
  // let name:undefined; //안씀
  // name = 'hello' //error
  let age: number | undefined; //undefined가 나올수도 있다.
  age = undefined; //(0)

  //null
  let person: null; //안씀
  let person2: string | null; //or을 쓸때는 |한번만 씀

  //unknown
  let notSure: unknown = 0;
  notSure = "haha";
  notSure = true;
  //unknown : 타입을 알 수 없음. 구체적인 타입을 지향하는 타입스크립트에서는 좋지 않음

  //any
  let anything: any = 0;
  anything = "hello";
  //난 어떤 것이든 다 담을 수 있다. 사용을 지양.

  //void
  function print(): void {
    console.log("hello");
    return; //아무것도 return 하지 않음. 이게 생략된 것임
    //함수에서 아무것도 return 안하면 void타입이 됨.
  }
  let unusable: void = undefined; //이렇게 안씀. 함수에만 쓰는 void

  //never
  function throwError(message: string): never {
    //message => server
    throw new Error(message);
    // while(true){
    // }
    //never는 다른 것을 리턴할 수 없다. 에러를 던지던지 while 문으로 루프를 돌릴때 사용
  }

  //object
  let obj: object;
  function acceptSomeObj(obj: object) {}
  acceptSomeObj({ name: "rin" });
  acceptSomeObj(["a", "b", "c"]);
  //object는 원시타입을 제외한 모든 타입을 받을 수 있다.
  //객체가 광범위해서 이를 지양
  //어떤 object type인지를 명시해야 함.
}
