const log = console.log;
const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];

//커스텀 map 만들기
const map = (f, iter) => {
  const res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
};

log(map((e) => e.name, products));
//[ '반팔티', '긴팔티', '핸드폰케이스', '후드티', '바지' ]

//일반 map은 배열 메소드이나, 커스텀 map은 이터러블이면 어디서든 사용가능'
//log(map((el) => el.nodeName, document.querySelectorAll("*")));

//제너레이터 예제
function* gen() {
  let a = 1;
  while (a < 3) {
    yield a++;
  }
}
log(map((a) => a * a, gen())); //[ 1, 4 ]

//map 예제
const m = new Map();
m.set("a", 10);
m.set("b", 20);
log(map(([k, v]) => v - 5, m)); //[ 5, 15 ]
//만약 새로운 map을 만들고 싶다면
log(new Map(map(([k, v]) => [k, v * 2], m)));
//Map(2) { 'a' => 20, 'b' => 40 }
//이터러블에 사용가능한 filter

//-------------------------------------

const filter = (f, iter) => {
  const res = [];
  for (const a of iter) {
    if (f(a)) res.push(a);
  }
  return res;
};

log(products.filter((e) => e.price > 20000, products));
//[ { name: '후드티', price: 30000 }, { name: '바지', price: 25000 } ]

log(filter((n) => n % 2, [1, 2, 3, 4]));
//[1, 3]

//제너레이터 사용 예시
log(
  filter(
    (n) => n % 2,
    (function* () {
      yield 1;
      yield 2;
      yield 3;
      yield 4;
      yield 5;
    })()
  )
);
//  //[1,3,5]

//-------------------------------------
//커스텀 reduce
const reduce = (f, acc, iter) => {
  //만약 인수가 2개일 때
  if (!iter) {
    //acc를 iter라는 이터레이터로 만듦
    iter = acc[Symbol.iterator]();
    //iter의 첫번쨰 값을 꺼내서 acc를 만듦.
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
};

const add = (a, b) => a + b;
log(reduce(add, [1, 2, 3, 4, 5])); //15
log(reduce(add, 0, [1, 2, 3, 4, 5])); //15

//첫번쨰 인자는 f임.
log(reduce((total_price, product) => total_price + product.price, 0, products));
//105000

// module.exports = { log, add, products, map, reduce, filter };

log(
  reduce(
    add,
    map(
      (p) => p.price,
      filter((p) => p.price > 20000, products)
    )
  )
);
//55000
