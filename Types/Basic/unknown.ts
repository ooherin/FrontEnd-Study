//any타입과의 차이점
//any는 타입을 지정하지 않은거나 마찬가지
//unknown은 ts 컴파일러가 개발자한테
//x가 unknown 타입이라서 잘 모르겠으니까 너가 타입을 정확히 지정해줘! ☹️

let unknownX: unknown;
//let nickName: string = unknownX; ❌
//'unknown' 형식은 'string' 형식에 할당할 수 없습니다.

let anyX: any;
let nickName: string = anyX; //✅
//anyX에 대한 타입 검사가 아예 생략됨

let unknownType: unknown;
unknownType = 1;
unknownType = '1';