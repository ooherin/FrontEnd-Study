//읽기 전용 배열
let arr: ReadonlyArray<number> = [1, 2, 3];

//arr[2] = 1;
//❌ 'readonly number[]' 형식의 인덱스 시그니처는 읽기만 허용됩니다.

//(1) array를 쓰는 2가지 방법
type TStudent = {
  name: string;
  age: number;
};

let students: TStudent[] = [
  {
    name: "kimi",
    age: 20,
  },
  {
    name: "daniel",
    age: 20,
  },
  {
    name: "rin",
    age: 20,
  },
];

//(2) 제네릭을 사용하는 방법
let students2: Array<TStudent> = [
  {
    name: "kimi",
    age: 20,
  },
  {
    name: "daniel",
    age: 20,
  },
  {
    name: "rin",
    age: 20,
  },
];

let idOrName: (number | string)[];
idOrName = [100, "냥냥", "잠온다", 123];
