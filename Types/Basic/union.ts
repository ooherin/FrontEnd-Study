function getAge(age: number | string) {
  if (typeof age == "number") {
    age.toFixed(); //number의 메서드
  } else {
    age.toUpperCase(); //string의 메서드
  }
}

interface Designer {
  name: string;
  designSkill: string;
}

interface Developer {
  name: string;
  programmingLanguage: string;
}

function introduce(someone: Person | Developer) {
  someone.name;
  //someone.designSkill ❌
  //someone.programmingLanguage ❌
}
