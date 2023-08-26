//일급 함수
//값으로 다룰 수 있다.
//조합성과 추상화의 도구
const log = console.log;
const a = 10;
const add10 = (a) => a + 10;
const r = add10(a);

//함수도 인자로 받을 수 있다.
const apply1 = (f) => f(1);
const add2 = (a) => a + 2;
log(apply1(add2)); //3

const times = (f, n) => {
  let i = -1;
  while (++i < n) f(i);
};
times(log, 3); //0 1 2
times((a) => log(a + 10), 15);

//함수를 만들어 리턴하는 함수
const addMaker = (a) => (b) => a + b;
const addTen = addMaker(10);
log(addTen);
log(addTen(29)); //38
