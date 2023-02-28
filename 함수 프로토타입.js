// Q.팩토리얼(재귀 함수 )
function factorial(n){
  //탈출문:n이 이하이면 n이 아니라 1
  //재귀함수는 탈출문을 꼭만들어야 함.
  if(n<=1) return 1;
  return n * factorial(n-1);
}

console.log(factorial(5));
console.log(factorial(4));
// 재귀함수는 반복문으로 만들 수 없을 때만 제한적으로 사용

// 콜백함수(함수로 전달)
// 콜백함수는 함수안에 함수가 들어가는 함수
setTimeout(function(){
  console.log('1초 경과');
},1000);
//1초뒤에 console에 '1초경과'메세지가 뜸.

// 순수함수 : 동일한 인수가 전달되면 동일한 값을 반환하는 함수
// 외부상태에 영향안받고 인수에게만 의존해 값을 생성
var count = 0;
function increase(n){
  return ++n;
}
count = increase(count);
console.log(count); //1
count = increase(count);
count = increase(count);
console.log(count); //3

// object 생성자 함수
const person = new Object();
person.name = 'lee';
person.job = 'singer';
console.log(person);

const arr = new Array(1,2,3);
console.log(arr);

//생성자 함수 : 인스턴스를 생성기 위한 탬플릿처럼 사용, 여러개의 객체를 간편하게 생성가능
function Circle(radius){
  this.radius = radius;
  this.getDiameter = function(){
    return 2 * this.radius;
  };
}

//생성자함수 - 인스턴스의 형성(new를 써주어야 한다. )
const circle_1 = new Circle(4);
const circle_2 = new Circle(9);
console.log(circle_1.radius);
console.log(circle_2.getDiameter());

//argument(인수)
function multiply(x,y){
  console.log(arguments); 
  return x*y;
}
console.log(multiply(1,2,4,5));

//결과 : // [object Arguments] 
//console.log(arguments)의 결과. 
// {
//   "0": 1,
//   "1": 2,
//   "2": 4,
//   "3": 5
// }

// arguments(s주의)는 유사배열객체,for문 사용 가능.
//그러나 배열특성을 모두가지지x
function sum(){
  let res = 0;
  for(let i = 0; i < arguments.length;i++){
    res += arguments[i]; //인덱스사용가능
  }
  return res;
}
console.log(sum(2,4,1)); //7

// 프로토타입
function Circle(radius){
  this.radius = radius;
}
//프로토타입으로 함수 생성
Circle.prototype.getArea = function(){
  return Math.PI * this.radius ** 2;
};
//인스턴스 형성
const circle1 = new Circle(4);
const circle2 = new Circle(2);

console.log(circle1.getArea());
console.log(circle1.getArea === circle2.getArea); //true
// prototype으로 getArea를 공유한다. 

function Person(name){
  this.name = name;
}
const student1 = new Person('James'); //생성자함수로 인스턴스 생성
console.log(Person.prototype === student1.__proto__); //true

Person.prototype.sayHello = function(name){
console.log(`Hi!My name is ${this.name}`)}
//this를 붙이지 않으면 codepen이 나온다.
const student2 = new Person('hyerin');
// me.sayHello();//"Hi!My name is hyerin"

delete Person.prototype.sayHello;
student2.sayHello(); //me.sayHello is not a function 

// 프로퍼티 열거(for...in)
const person = {
  name : 'lee',
  age : 23,
  job : 'singer',
}
for(const key in  person ){
  console.log(key + ':' + person[key]);
}
"name:lee"
"age:23"
"job:singer"




