const log = console.log;

//array
const arr = [1, 2, 3];
let iter1 = arr[Symbol.iterator]();
log(iter1.next()); //{ value: 1, done: false }
log(iter1); //Object [Array Iterator] {}
for (const a of iter1) log(a); //1 2 3

//### Set을 통해 알아보기
const set = new Set([10, 20, 30]);
for (const a of set) {
  log(a);
} //10 20 30

//### Map을 통해 알아보기
const map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
for (const key of map.keys()) log(key); //a b c
for (const value of map.values()) log(value); //1 2 3
for (const entry of map.entries()) log(entry);
// [ 'a', 1 ]
// [ 'b', 2 ]
// [ 'c', 3 ]

//이터러블 Symbol.iterator()를 가진 값
const iterable = {
  [Symbol.iterator]() {
    let i = 0;
    return {
      next() {
        return i > 2 ? { done: true } : { value: i++, done: false };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  },
};
let iterator = iterable[Symbol.iterator]();
log(iterator.next()); //{ value: 0, done: false }
log(iterator.next()); //{ value: 1, done: false }
log(iterator.next()); //{ value: 2, done: false }
log(iterator.next()); //{ done: true }

// for (const a of document.querySelectorAll("*")) log(a);
// const all = document.querySelectorAll("*");
// let iter3 = all[Symbol.iterator]();
// log(iter3.next());
// log(iter3.next());
// log(iter3.next());
