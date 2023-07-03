{
  //null인지 확인하는 함수
  //나쁜 예시1
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  //나쁜 예시2
  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }
  const result = checkNotNullAnyBad(123);

  //제네릭

  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not valid num");
    }
    return arg;
  }
  const number = checkNotNull(123);
  const bool: boolean = checkNotNull(true);
}
