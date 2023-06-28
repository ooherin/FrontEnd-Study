{
  //Array
  const fruits: string[] = ["apple", "banana"];
  const scores: Array<number> = [1, 2, 3];
  //readonly를 작성할때에는 string[]으로 작성해야 한다.
  //Array<string>으로 작성하면 안된다.
  //첫번쨰 버전으로 많이 쓰는 이유
  function printArray(fruits: readonly string[]) {
    // fruits.push
  }

  //Tuple : 여러개의 타입을 줄 수 있는 것 => 권장하지 않음
  //interface, type alias, class로 대체해서 사용하는 것이 좋음
  let student: [string, number];
  student = ["jane", 12];
  student[0]; //name
  student[1]; //123
  const [name, age] = student;
  //디스트럭쳐 문법을 사용하면 쉽게 사용할 수 있다.
  //해당 student의 값을 name,age로 만들어 주는 것
  //리액트 useState의 api는 이 튜플을 사용해서 만들것
  //const [count, setCount ] = useState(0)
  //이처럼 튜플은 꼭 필요할 때에만 쓰기
}
