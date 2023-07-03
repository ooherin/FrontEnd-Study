{
  //index 타입
  //다른 타입 내부의 있는 타입을 사용할 수 있다.
  //key값을 쓸 수도 있다.
  const obj = {
    name: "ellie,",
  };

  obj.name; //ellie
  obj["name"]; //ellie

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  type Name = Animal["name"]; //string
  const text: Name = "haha";

  type Gender = Animal["gender"]; //'male' | 'female'

  type Keys = keyof Animal; //'name' | 'age' | 'gender'

  const ex: Keys = "name";
  const ex2: Keys = "age";
  const ex3: Keys = "gender";

  type Person = {
    name: string;
    gender: Animal["gender"];
  };

  const rin: Person = {
    name: "rin",
    gender: "female",
  };
}

// {
//   const obj = {
//     name: 'ellie',
//   };
//   obj.name; // ellie
//   obj['name']; // ellie

//   type Animal = {
//     name: string;
//     age: number;
//     gender: 'male' | 'female';
//   };

//   type Name = Animal['name']; // string
//   const text: Name = 'hello';

//   type Gender = Animal['gender']; //'male' | 'female'

//   type Keys = keyof Animal; // 'name' | 'age' | 'gender'
//   const key: Keys = 'gender';

//   type Person = {
//     name: string;
//     gender: Animal['gender'];
//   };
//   const person: Person = {
//     name: 'ellie',
//     gender: 'male',
//   };
// }
