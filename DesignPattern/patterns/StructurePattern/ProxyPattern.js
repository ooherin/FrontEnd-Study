//proxy는 대리인. 특정 객체에 접근하고자 하는 사람이 이 프록시를 통해 객체에 접근하는 방식이다.
//해당 객체를 직접 다루는 것이 아닌 Proxy객체와 인터렉션하게 된다.

/**
 * @param
 * target: 타겟이 되는 객체를 의미합니다.
 * handler: 객체에 대한 행동을 어떻게 수행할지 정의해놓은 것.동작을 가로채는 메서드인 '트랩(trap)'이 담긴 객체
 *          get, set이 있습니다.
 */
//let proxyObj = new Proxy(target, handler);

const person = {
  name: "Rin",
  age: 10,
  nationality: "Korea",
};

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    console.log(`${prop}은 ${obj[prop]}입니다.`);
  },
  set: (obj, prop, value) => {
    console.log(`${prop}인 ${obj[prop]}을 ${value}로 바꿨습니다.`);
    obj[prop] = value;
    return true;
  },
});

//proxy를 사용할 때에는 get, set이 아닌 객체 속성에 직접 접근하면 된다
personProxy.name; //name은 Rin입니다.
personProxy.age = 20; //age인 10을 20로 바꿨습니다.

//유효성 검사를 구현할 때 유용하다.
//예를 들면, person의 age속성을 string으로 바꾸지 못하게 한다.
//person의 name 속성을 빈 문자열로 바꾸지 못하게 한다.

const personProxy2 = new Proxy(person, {
  get: (obj, prop) => {
    if (!obj[prop]) {
      return console.log(`해당 속성이 존재하지 않습니다.`);
    }
    console.log(`${prop}은 ${obj[prop]}입니다.`);
  },
  set: (obj, prop, value) => {
    if (prop === "age" && typeof value === "string") {
      console.log(`age는 number속성이여야 합니다.`);
      return false;
    }
    if (prop === "name" && value.length < 1) {
      console.log(`이름의 길이는 1자 이상이여야 합니다.`);
      return false;
    }
    console.log(`${prop}인 ${obj[prop]}을 ${value}로 바꿨습니다.`);
    obj[prop] = value;
    return true;
  },
});

personProxy2.hobby; //해당 속성이 존재하지 않습니다.
personProxy2.age = "이십살"; //age는 number속성이여야 합니다.
personProxy2.name = ""; //이름의 길이는 1자 이상이여야 합니다
personProxy2.name = "haru"; //name인 Rin을 haru로 바꿨습니다.

//Reflect
//Reflect이라는 빌트인 객체를 Proxy와 함께 사용하면, 대상 객체를 쉽게 조작할 수 있다.
const personProxy3 = new Proxy(person, {
  get: (obj, prop) => {
    console.log(`${prop}은 ${Reflect.get(obj, prop)}입니다.`);
  },
  set: (obj, prop, value) => {
    console.log(`${prop}인 ${obj[prop]}을 ${value}로 바꿨습니다.`);
    Reflect.set(obj, prop, value);
    return true;
  },
});

//Proxy는 객체의 동작을 커스터마이징 할 수 있는 유용한 기능이다.
//유효성 검사, 포맷팅, 알람, 디버깅 등에 사용된다.
//핸들러 객체에서 Proxy를 너무 헤비하게 사용하면 앱의 성능에 부정적인 영향을 줄 수 있다

//사전 예제
let dictionary = {
  hello: "안녕하세요",
  bye: "안녕히 가세요.",
};

//사전에 없는단어를 검색할 경우 undefined이 아니라, 구절을 그대로 나오게하는 작업을 수행하기
dictionary = new Proxy(dictionary, {
  get(target, pharse) {
    if (pharse in target) {
      return target[pharse];
    }
    //해당 단어가 없을 때
    return pharse;
  },
});

console.log(dictionary["hello"]); //안녕하세요
console.log(dictionary["welcome"]); //welcome

//주의할 점
//Proxy객체는 무조건 타깃 객체를 덮어써야만 한다. 객체를 Proxy로 감싼 이후에는
//절대로 타깃 객체를 참조하는 코드가 없어야 한다. 그렇지 않으면 엉망이 될 확률이 높다.
//즉, proxy객체를 한번 썼다면, 원본 객체는 없는 셈 치고 Proxy를 사용해야 한다.

//또 주의할 점
//set 트랩을 사용할 때는 꼭 true를 반환해야 한다.
//true를 반환하지 않았거나 falsy한 값을 반환하게 되면 TypeError가 발생한다.

//Object.keys와 for...in같은 반복문의 메서드는 내부 메서드 [[OwnPropertyKeys]]를
//사용하고, 트랩 메서드는 ownKeys가 된다.

//프로퍼티 중에 _로 이루어진 프로퍼티는 반복문에서 생략하게 하는 proxy를 만들어보자
let user = {
  name: "rin",
  age: 20,
  _password: "1234",
};

user = new Proxy(user, {
  ownKeys(target) {
    return Object.keys(target).filter((key) => !key.startsWith("_"));
  },
});

for (let key in user) console.log(key);
//name age (_password 속성 빠짐)

//다음과 같이 객체에 없는 속성을 반환하려고 하는 경우에는 반환이 되지 않는다.
let user2 = {};
user2 = new Proxy(user, {
  //프로퍼티 리스트를 얻을 때 딱 한번만 호출된다.
  ownKeys(target) {
    return ["a", "b", "c"];
  },
  //모든 프로퍼티를 대상으로 각각 호출된다.
  //모든 프로퍼티의 enumerable이 true가 된다.
  getOwnPropertyDescriptor(target, prop) {
    return {
      enumerable: true,
      configurable: true,
    };
  },
});
console.log(Object.keys(user)); // a, b, c

//객체에 프로퍼티가 없을 때 [[GetOwnProperty]]만 가로채면 된다. getOwnPropertyDescriptor 로

let user3 = {
  name: "rin",
  _password: 123,
  checkPassword(value) {
    return value === this._password;
  },
};

user3 = new Proxy(user3, {
  get(target, prop) {
    if (prop.startsWith("_")) {
      throw new Error("접근이 제한되어 있습니다.");
    }
    let value = target[prop];
    //함수안의 인자가 target일 경우 그대로 수행
    return typeof value === "function" ? value.bind(target) : value;
  },
  //프로퍼티 쓰기를 가로챕니다.
  set(target, prop, val) {
    if (prop.startsWith("_")) {
      throw new Error("접근이 제한되어 있습니다.");
    } else {
      target[prop] = val;
      return true;
    }
  },
  //프로퍼티를 삭제할 때 쓰는 메소드
  deleteProperty(target, prop) {
    if (prop.startsWith("_")) {
      throw new Error("접근이 제한되어 있습니다.");
    } else {
      delete target[prop];
      return true;
    }
  },
  //프로퍼티 순회를 가로챕니다.
  ownKeys(target) {
    return Object.keys(target).filter((key) => !key.startsWith("_"));
  },
});

try {
  console.log(user3._password);
} catch (e) {
  console.log(e.message);
}
//접근이 제한되어 있습니다.

try {
  user3._password = "test";
} catch (e) {
  console.log(e.message);
}
//접근이 제한되어 있습니다.

try {
  delete user3._password;
} catch (e) {
  console.log(e.message);
}
//접근이 제한되어 있습니다.

for (let key in user3) console.log(key);
//name

try {
  console.log(user3.checkPassword(123)); //true
} catch (e) {
  console.log(e.message);
}
//접근이 제한되어 있습니다.

//클래스의 private를 사용하면 proxy없이도 프로퍼티를
//보호할 수 있다는 장점이 있다.
