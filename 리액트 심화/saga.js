function* sumGenerator() {
  console.log("sumGenerator가 만들어졌습니다");
  let a = yield;
  let b = yield;
  yield a + b;
}

const sum = sumGenerator();
console.log(sum.next());
console.log(sum.next(1));
console.log(sum.next(2));
console.log(sum.next());

// { value: undefined, done: false }
// { value: undefined, done: false }
// { value: 3, done: false }
// { value: undefined, done: true }
