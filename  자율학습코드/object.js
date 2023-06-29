//Objects
//연관된 데이터 혹은 기능의 집합
//js의 거의 모든 객체는 이 Object의 인스턴스이다
//키와 값으로 이루어짐 => JSON의 형태와 비슷
const obj1 = {}; //객체 리터럴
const obj2 = new Object(); //객체 생성자 함수
//object constructor 

const ellie = {name : 'ellie', age : 20};
ellie.job = 'teacher';
console.log(ellie);
//js는 동적 타입언어라 이런게 가능함

delete ellie.job;
console.log(ellie.job);

//계산된 프로퍼티
console.log(ellie["name"]);

//키가 object에 있는지 확인하는 방법 
console.log('name' in ellie); //true
console.log('gender' in ellie); //false

//for ...in vs for ...of
//for...in
//객체에서 key들만 뽑는 방법
for(const key in ellie){
  console.log(key) //name age
;}

//객체에서 value만 뽑는 방법
for(const key in ellie){
  console.log(ellie[key]); //ellie 20
}

//for(value of iterable)
const arr = [1,2,3,4,5];
for(value of arr){
  console.log(value); //1 2 3 4 5
}

//객체 깊은 복사 : old (현재x)
const user = {name : 'rin', age : 20};
const user2 = {};
for(key in user){
  user2[key] = user[key];
}
console.log(user2);

//객체 깊은 복사
const user3 = Object.assign({},user);
console.log(user3);


//일반 생성자 함수 : 대문자로 시작해야. this를 씀. new 사용
const Flower = function(name,color){
  this.name = name;
  this.color = color;
  this.showName = function(){
    console.log(`this flower name is ${this.name}`);
  }
}
const rose = new Flower('rose','red');
console.log(rose.name);//"rose"
console.log(rose.color);//"red"
rose.showName();//"this flower name is rose"


