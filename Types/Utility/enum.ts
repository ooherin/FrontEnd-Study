//Enum은 다른 타입들과 달리 사라지지 않음
enum Level {
  NOVICE,
  INTERMEDIATE,
  ADVANCED,
  MASTER,
}

//enum타입의 속성은 값으로도 활용할 수 있다.
//값을 따로 설정하지 않으면 0부터 시작하는 숫자가 된다.
const a = Level.NOVICE;
console.log(a); //0
//enum은 값이 따로 있다는 것에 주의. 객체와 비슷한데, 값만 숫자가 나오는 느낌.

const b = Level[Level.NOVICE];
console.log(b); //NOVICE
//만약 string을 가져오고 싶으면 위와 같이 []인덱스로 가져온다.

//다음과 같이 enum의 key들을 사용할 수 있다.
enum Permissions {
  READ = "읽기",
  WRITE = "쓰기",
  DELETE = "삭제",
}

type TUserPermission = keyof typeof Permissions;

//사실 객체임
const PermissionKey: string[] = Object.keys(Permissions);
const PermissionValues: string[] = Object.values(Permissions);
console.log(PermissionKey); //[ 'READ', 'WRITE', 'DELETE' ]
console.log(PermissionValues); //[ '읽기', '쓰기', '삭제' ]

let kimi: TUserPermission[] = ["READ", "WRITE"];
let daniel: TUserPermission[] = ["READ", "WRITE", "DELETE"];
let rin: TUserPermission[] = [];

function getPermission(user: TUserPermission[]) {
  user.forEach((e) => {
    console.log(`${Permissions[e]} 권한이 있습니다.`);
  });
}

getPermission(kimi);
getPermission(daniel);
getPermission(rin);

const enumm = 1;
export default enumm;

//const enum을 사용하는 것이 좋다. (enum의 값을 사용할 게 아니라면?)
