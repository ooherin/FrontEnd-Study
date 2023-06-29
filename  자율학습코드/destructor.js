let arr = [2,3,4];
let [a,b,c] = [2,3,4];
console.log(a);

let [A=10,B=20,C=30] = [2,3];
console.log(C); //30
console.log(A); //2

let[d,e,f] = [];
console.log(d); //undefined

let obj = {name : 'kim', age : 30};
// let name = obj.name;
// let age = obj.age;
// console.log(name);
// console.log(age);

//왼쪽은 변수명, 디폴트 값, 오른쪽은 넣을 객체(키값 포함)를 나타낸다 ******

let {name, age = 20} = {name : 'kim', age : 30}; //키값이랑 동일하게 해야함. 다르면 안들어감
console.log(name);
console.log(age);
//let {Name, age } = {name :'kim', age :30} 

let { type : 타입 = 'dog', color = 'blue'} = { type : 'rabbit'};
//type을 타입이라는 변수명으로 지정하고 디폴트값을 dog로 지정한다. 
// console.log(type); //not defined
console.log(타입);
console.log(color);

//변수명과 동일한 객체의 키를 생성하는 방법
let Name = 'kim';
let Age = 20;
let Obj = {Name, Age}; //{Name : 'kim', Age : 20}
//let obj = {Name : Name , Age : Age} 와 같다. 
console.log(Obj);

//함수 파라미터 만들 때, object데이터들을 파라미터로 만들때
// let obj1 = { id : 'candy', pw : '1234'};

//{}안의 id,pw는 변수명이며 이는 함수 사용시 인자로 들어가는 키의 값과 일치하게 된다.
//showObj에 의해 id,pw의 값이 콘솔에 찍힌다.
function showObj({id, pw}){ //객체의 키값을 {}안에 넣어서 변수로 활용
    console.log(id);
    console.log(pw);
}
showObj({id :'candy', pw : 1234 }); //candy 1234

//배열도 파라미터와 인수를 []로 형식을 맞추면 자연스럽게 매칭이 된다.
function showarr([ID,PW]){
    console.log(ID);
    console.log(PW);
}
showarr([1,2]); //1 2

let 신체정보 = {body : {height : 165, weight : 45}, size: ["top S","bottom S"],};
let {body : {height , weight}, size  : [상의, 하의]} = 신체정보;

console.log(상의);
console.log(height);
console.log(weight);
console.log(하의);
//배열은 변수명과 값이 상관이 없다. 애초에 값은 키값이 없기 때문이다.
//하지만 객체는 객체안에서 키값으로 구분하기 때문에 새롭게 만드는 변수명은 반드시 키 값과 일치해야 한다.
 
let flower = {type : 'rose', color1 : 'red', size : 30, 
              from : [ "korea", "seoul"]};
let {type, color1, size, from : [country, city]} = flower;
console.log(type);
console.log(country);
console.log(city);








