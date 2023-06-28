//Type inference
let text: string = "hello";
text = "hi";

//message의 type은 기본적으로 any로 지정됨
//=> 더 구체적인 type을 명시하라는 경고

//기본값으로 hello를 주면 기본 타입이 string으로 됨.
function print(message = "hello") {
  console.log(message);
}
print("hello");
// print(1); //오류

function add(x: number, y: number): number {
  return x + y; //숫자를 리턴한다고 숫자 타입으로 추론
}
const result = add(3, 4); //숫자 타입으로 추론
//타입 추론은 항상 좋은 것은 아니며, 확실한 타입추론이 나오더라도
//일관성과 가독성을 위해 명시하는 것이 좋음
