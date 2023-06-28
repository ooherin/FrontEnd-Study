{
  //Type Aliases
  //내가 타입을 정의해서 쓸 수 있다.
  type Text = string;
  const name: Text = "ellie";
  const address: Text = "Korea";
  type Num = number;

  //앞에다 type을 적고 만들어주면된다.
  //마치 클래스처럼 object안의 요소의 타입을 각각 지정해준다.
  //Student라는 type이 생성된 것이다.

  //Object 타입의 예시
  type Student = {
    name: string;
    age: number;
  };
  //
  const student: Student = {
    name: "Tomi",
    age: 14,
  };

  //String Literal Type

  //만약 타입을 만들때tring으로 만든다면
  //해당 string으로만 변수를 지정할 수 있다 => 왜 쓰는 거지?
  type Name = "name";
  let ellieName: Name;
  type JSON = "json";
  const json: JSON = "json";
}
