import { M } from "msw/lib/glossary-de6278a9";

{
  //mapped Type
  type Video = {
    title: string;
    author: string;
    description: string;
  };

  type VideoOptional = {
    title?: string;
    author?: string;
    description?: string;
  };

  type VideoReadOnly = {
    readonly title: string;
    readonly author: string;
  };

  type Optional<T> = {
    [P in keyof T]?: T[P]; //for...in
    //T에 들어간 객체의 키 값을 순회하여
    //key가 P가 되고
    //그 key의 타입이 T[P]가 된다.
    //title? : string
  };

  type VideoOptional2 = Optional<Video>;

  //예시
  type Animal = {
    name: string;
    age: number;
    gender: "F" | "M";
  };

  const rabbit: Optional<Animal> = {
    name: "tomi",
    age: 12,
    gender: "F",
  };

  //예시2
  type Flower = {
    name: string;
    color: string;
    price?: number;
  };

  type MappedType<T> = {
    [P in keyof T]: T[P];
  };

  const rose: MappedType<Flower> = {
    name: "rose",
    color: "red",
    price: 1000,
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  const lilly: ReadOnly<Flower> = {
    name: "lilly",
    color: "white",
  };

  // lilly.name = "aa"; //error -> readonly 타입임

  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj3: Nullable<Video> = {
    title: "hi",
    author: null,
    description: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}

// {
//   type Video = {
//     title: string;
//     author: string;
//   };
//   // [1, 2].map(item => item * item); // [1, 4]

//   type Optional<T> = {
//     [P in keyof T]?: T[P]; // for...in
//   };

//   type ReadOnly<T> = {
//     readonly [P in keyof T]: T[P];
//   };
//   type VideoOptional = Optional<Video>;

//   type Animal = {
//     name: string;
//     age: number;
//   };
//   const animal: Optional<Animal> = {
//     name: 'dog',
//   };
//   animal.name = 'ellie';

//   const video: ReadOnly<Video> = {
//     title: 'hi',
//     author: 'ellie',
//   };

//   // type VideoOptional = {
//   //   title?: string;
//   //   author?: string;
//   // };

//   // type VideoReadOnly = {
//   //   readonly title: string;
//   //   readonly author: string;
//   // };

//   type Nullable<T> = { [P in keyof T]: T[P] | null };
//   const obj2: Nullable<Video> = {
//     title: 'hi',
//     author: null,
//   };

//   type Proxy<T> = {
//     get(): T;
//     set(value: T): void;
//   };

//   type Proxify<T> = {
//     [P in keyof T]: Proxy<T[P]>;
//   };
// }
