{
  //Intersection Type
  type Student = {
    name: string;
    score: number;
  };
  type Worker = {
    employedId: number;
    work: () => void;
  };
  //person인자는 Student와 Worker타입을 동시에 갖는다.
  //두 타입의 필수 프로퍼티를 다 정의해야 한다.
  function internStudent(person: Student & Worker) {
    console.log(person.name, person.employedId, person.work());
  }

  //interStudent 함수를 사용할 때 4가지의 인자를 모두 전달해야 한다.
  internStudent({
    name: "hyerin",
    score: 1,
    employedId: 123,
    work: () => {},
  });
}
