try {
} catch (e) {
    const error = e as Error;
    console.log(error.message);
}

//기본적으로 e는 any 타입, un
//정확하게 Error라는 타입을 지정해서 내부 속성(error)등을 사용할 수 있음.

//ts의 기본 인터페이스
//interface Error {
//   name: string;
//   message: string;
//   stack?: string;
// }

//다음과 같이 커스텀 에러 인터페이스interface CustomError extends Error {
//   response?: {
//     data: any;
//     status: number;
//     headers: string;
//   };
// }를 구현해도 됨.

//처음부터 인터페이스를 정교하게 만들기 보다, 타입 에러가 나면 속성을
//하나씩 추가해주어도 된다.

//인터페이스와 클래스의 차이: 컴파일 과정을 거친 후 js 파일에 코드가 남냐 안남냐의 차이
//인터페이스는 순수 ts 코드로 이루어져 컴파일 되면 코드가 사라짐
//클래스는 js에도 있는 문법이라, 컴파일되도 남는다.
