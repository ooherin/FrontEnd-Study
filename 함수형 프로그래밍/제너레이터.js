//제너레이터/이터레이터 - 제너레이터: 이터레이터이자 이터러블을 생성하는 함수 #
//이터러블이므로 for...of문을 사용할 수 있다. # return 대신 yield를 사용한다.
const log = console.log;
//참고 : 제너레이터는 화살표 함수를 사용할 수 없다.
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}
const iter = gen();
log();
log(iter.next()); //{ value: 1, done: false }
log(iter.next()); //{ value: 2, done: false }
log(iter.next()); //{ value: 3, done: false }
log(iter.next()); //{ value: undefined, done: true }

function* infinity(i = 0) {
  while (true) yield i++;
}
function* limit(l, iter) {
  for (const a of iter) {
    yield a;
    if (a == l) return;
  }
}
function* odds(l) {
  for (const a of limit(l, infinity(1))) {
    if (a % 2) yield a;
  }
}

let iter2 = odds(10);
log(iter2.next()); //{value: 1, done: false}
log(iter2.next()); //{value: 3, done: false}
log(iter2.next()); //{value: 5, done: false}
log(iter2.next()); //{value: 7, done: false}
log(iter2.next()); //{value: 9, done: false}
log(iter2.next()); //{value: 1, done: false}
log(iter2.next()); //{value: 1, done: false}s

//# for of, 전개 연산자, 구조 분해, 나머지 연산자 # 나머지 연산자는 자동 배열화됨.
log(...odds(10)); //1 3 5 7 9
log([...odds(10), ...odds(20)]); //1 3 5 7 9 1 3 5 7 9 11 13 15 17 19

const [head, ...tail] = odds(5);
log(head); //1
log(tail); //[3,5]

const [a, b, ...rest] = odds(10);
log(a); //1
log(b); //3
log(rest); //[5, 7, 9]
//나머지 연산자는 배열 형식으로
