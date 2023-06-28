{
  //Enum

  const MAX_NUM = 6;
  const MIN_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  //연관된 상수를 묶을 수 있는 문법이 js에서 존재하지 않음.
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  //앞만 대문자로 작성
  enum Days {
    Monday, //0
    Tuesday, //1
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Sunday); //6
  //기본값을 지정하지 않으면 0으로 시작함.
  //숫자가 아니라 문자를 지정하려면 하나하나씩 str지정
  let day: Days = Days.Saturday;

  //enum은 안 쓰는 것이 좋다.
  day = Days.Tuesday;
  day = 10;
  //enum은 type이 보장되지 않는다는 문제점이 있다.
  //10이 해당 Days 타입에 없음에도 사용할 수 있기 때문이다.

  type DaysOfWeek = "Monday" | "TuesDay" | "WednesDay";
  let dayOfWeek: DaysOfWeek = "Monday";
  dayOfWeek = "WednesDay"; //자동완성
  //이렇게 Union타입으로 대체가 가능하므로 굳이 enum을 쓸 이유는 없다.
}
