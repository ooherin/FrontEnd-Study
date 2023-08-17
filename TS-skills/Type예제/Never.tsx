function error(message: string): never {
  throw new Error(message);
}

function foo(x: string | number | number[]): boolean {
  if (typeof x === "string") {
    return true;
  } else if (typeof x === "number") {
    return false;
  }
  //never를 통해 명시적으로 반환되지 않은 것을 컴파일러에 전달할수 있다
  //never를 사용하지 않으면 타입스크립트는 컴파일 에러를 일으킨다.
  return error("Never happens!");
}

//이때 never 타입과 error 함수를 사용하는 것은 올바른 방법입니다. never 타입은 "이 코드는 절대로 실행되지 않을 것"을 나타내는 타입으로,
// 컴파일러에게 이 부분을 처리하거나 대비할 필요가 없음을 알립니다. 그리고 error 함수는 실제로는 호출되지 않을 것이며,
//해당 함수가 실행되면 프로그램은 중단될 것입니다. 이를 통해 모든 가능한 경우를 대비하며 코드의 안정성을 확보할 수 있습니다.

enum PageType {
  ViewProfile,
  EditProfile,
  HideProfile,
}
//각 타입별 제목을 알려주는 함수
const getTitleText = (type: PageType) => {
  switch (type) {
    case PageType.ViewProfile:
      return "프로필 보기";
    case PageType.EditProfile:
      return "프로필 수정";
    case PageType.HideProfile:
      return "프로필 숨기기";
    default:
      const wrongType: never = type;
      throw new Error(`${wrongType}이 PageType내에서 정의되지 않았습니다.`);
  }
};

//나중에 PageType에 DeleteProfile이 추가된후, getTitleText에 해당 조건을 깜박할 경우 error 발생으로 알려줌
