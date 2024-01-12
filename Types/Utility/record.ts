//record의 정의
//Record<Key, Value>
//키가 Key이고 값이 Value인 객체 타입을 생성함.

// type Record<K, T> = {
//   [P in K]: T;
// };

type names = "kimi" | "daniel" | "rin";

type PeopleInfo = Record<names, number>;

let pair3: PeopleInfo = {
    kimi: 1,
    daniel: 2,
    rin: 3,
};
//kimi, daniel, rin 중 하나라도 빠지면 에러남.

//keyof랑 같이 사용하는 경우
type PersonType = {
    name: string;
    age: number;
    address: string;
};

type PersonRecordType = Record<keyof PersonType, string>;
//모든 객체 속성이 string이여야 함

const peanut: PersonRecordType = {
    name: "peanut",
    age: "20",
    address: "mobi",
};
//https://developer-talk.tistory.com/296
