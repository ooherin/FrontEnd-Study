{
  //type cs interface 의 차이점

  //기본적으로 interface가 더 기능이 많다.
  type PositionType = {
    x: number;
    y: number;
  };
  interface PositionInterface {
    x: number;
    y: number;
  }

  //interface만 병합이 가능 : 중복 선언으로 병합 가능
  interface PositionInterface {
    z: number;
  }

  //object
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };
  const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1,
  };

  //class
  class Pos1 implements PositionType {
    x: number;
    y: number;
  }
  class Pos2 implements PositionInterface {
    x: number;
    y: number;
    z: 1;
  }

  //Extends
  interface ZPositionInterface extends PositionInterface {
    z: number;
  }

  type ZPositionType = PositionType & { z: number };

  //Type alias 의 장점 : computed properties
  type Person = {
    name: string;
    age: number;
  };
  type Name = Person["name"]; //string
  type NumberType = number;
  type Direction = "left" | "right"; //union

  //인터페이스 : 특정한 규격을 정할 때
  //클래스가 같이 어떤 것을 구현 할 때
}

// {
//   type PositionType = {
//     x: number;
//     y: number;
//   };
//   interface PositionInterface {
//     x: number;
//     y: number;
//   }

//   // object ★
//   const obj1: PositionType = {
//     x: 1,
//     y: 1,
//   };
//   const obj2: PositionInterface = {
//     x: 1,
//     y: 1,
//     z: 1,
//   };

//   // class ★
//   class Pos1 implements PositionType {
//     x: number;
//     y: number;
//   }
//   class Pos2 implements PositionInterface {
//     x: number;
//     y: number;
//     z: number;
//   }

//   // Extends
//   interface ZPositionInterface extends PositionInterface {
//     z: number;
//   }
//   type ZPositionType = PositionType & { z: number };

//   // 😆 only interfaces can be merged.
//   interface PositionInterface {
//     z: number;
//   }

//   // type PositionType {
//   // }

//   // 😆 Type aliases can use computed properties
//   type Person = {
//     name: string;
//     age: number;
//   };
//   type Name = Person["name"]; // string

//   type NumberType = number;
//   type Direction = "left" | "right";
// }
