//계산된 프로퍼티
let n = "name";
let a = "age";
const user = {
    [n] : "mike",
    [a] : 20,
};
console.log(user);

function makeObj(key,val){
    return{
        [key] : val,
    };
}
const obj = makeObj('성별','female');
console.log(obj)
//어떤 값이 key,값이 될지 모를때 유용

//객체 메소드 
const user2=  {...user};
console.log(user2);//{ name: 'mike', age: 20 }
//객체도 스프레드 문법 사용가능
user2.name ='jane';
console.log(user2); //jane
console.log(user); //mike
//Object.assign() 
const user3 = Object.assign({},user);
console.log(user3); //{ name: 'mike', age: 20 }

//Object.keys()
//Object.values()
//Object.entries() : 키와 value를 모두 가져오기 
const resultKeys = Object.keys(user);
const resultValues = Object.values(user);
console.log(resultKeys);//[ 'name', 'age' ]
console.log(resultValues);//[ 'mike', 20 ]

const resultAll = Object.entries(user);
console.log(resultAll);
//[ [ 'name', 'mike' ], [ 'age', 20 ] ]


//Object.fromEntries : 배열을 객체로 만드는 법
let arr = [
    ['mon','월'],
    ['tue','화'],
];
const resultArr = Object.fromEntries(arr);
console.log(resultArr);
//{ mon: '월', tue: '화' }

//setTimeout

setTimeout(function(){
    console.log('안녕')
},3000);
//3초 뒤에 콘솔창에 출력

//setInterval 
function showName(name){
    console.log(name);
}
// const tId = setInterval(showName,3000,'mike');
//setInterval을 지우고 싶을 때
// clearInterval(tId);

//setInterval은 일반 작업이 끝나고 나중에 실행된다.

// let num = 0; 
// function showTime(){
//     console.log(`접속한지 ${num++}초가 지났습니다`);
//     if(num > 5){
//         clearInterval(tId);
//     }
// }
// const tId = setInterval(showTime,1000);

// call, apply, bind
const Mike = {
    name : "mike",
};
const Tom = {
    name : 'tom',
}
function showThis(){
    console.log(this.name);
}
showThis(); //this

showThis.call(Tom); //tom

function update(birthYear,job){
    this.birthYear = birthYear;
    this.job = job;
}

//call때문에 여기서 this는 Tom이 됨
//update라는 함수를 호출시 birthYear,job의
//this가 tom이됨.
update.call(Tom,2000,'singer');
console.log(Tom);
//{ name: 'tom', birthYear: 2000, job: 'singer' }

//apply는 인수를 배열로 받는다
//Mike라는 객체에 뒤에 있는 인수를 적용한 
//update를 호출한다.
//함수이름.apply/call(this적용할 대상 객체, 함수에 넣을 인수)
update.apply(Mike,[2003,'cooker']);
console.log(Mike);

const nums = [100,20,7,2,3,4,5];
const minNum = Math.min.apply(null,nums);
console.log(minNum); //2

const maxNum = Math.max.apply(null,nums);
console.log(maxNum); //100

//만약 위를 call로 쓰려면 ? 
//call은 배열이 아닌 그냥 인수로 받으므로 ...스프레드 연산자
const minNum2 = Math.min.call(null,...nums);
console.log(minNum2); //2


//bind 함수의 this값 영구히 바꿈
const student = {
    name : 'cindy ',
    age : 30,
    showName : function(){
        console.log(`hi. my name is ${this.name}`);
    },
}
student.showName();//hi. my name is cindy 
let fn = student.showName;
fn();//hi. my name is undefined
//this을 잃어버림 
//메소드는 .앞에 있는게 this임

//call,apply는 함수를 실행할때 인수로 받은 객체가 this로 실행됨
fn.call(student);//hi. my name is cindy 
fn.apply(user);//hi. my name is mike

//새로운함수 boundFn.
//bind는 '영구히' boundFn의 this를 student로 바꿈
let boundFn = fn.bind(student);
boundFn();
console.log(boundFn);

//hasOwnProperty
//__proto__
const car = {
    sort : 'car',
    wheels  :4,
    drive() {
    console.log(`${this.name} is drive`)
    }
}

const benz = {
    name : 'benz',
    color : "white",
    price : 200000
}
const k5 = {
    name : 'k5',
    color : "blue",
    price : 100000,
}
const audi = {
    name : 'audi',
    color : "red",
    price : 500000
}
benz.__proto__ = car;
k5.__proto__ = car;
audi.__proto__= car;

//proto에 연결된 car의 메소드를 사용가능
//this는 메소드를 부른 객체이다.
benz.drive();//benz is drive

//Object.keys values같은 객체내장 메소드는
//상속받은 속성은 나오지 않는다

for(property in audi){
    if(audi.hasOwnProperty(property)){
        console.log('o',property)
    }else{
        console.log('x',property)
    }
};
// o name
// o color
// o price
// x sort
// x wheels
// x drive

const Flower = function(color,name){
    this.color = color;
    this.name = name;
}
//상위 유전자에 프로퍼티 하나추가.
Flower.prototype.water = function(){
    console.log(`growing up!`);
}

const rose = new Flower('red','rose');
rose.water();
console.log(rose instanceof Flower); //true

//클로저 사용해보기 : 생성자 함수
//생성자함수는 메소드를 쓸때 무조건 this쓰기 

//다음과 같이 생성자 함수에 변수를 설정하면
//하위 인스턴스에서 초기에 설정된 변수를 
//쉽게 변경할 수 없다.
const polarBear = function(color){ 
    const Color = color;
    this.showColor =  function(){
        console.log(Color);
    }
}
const poli = new polarBear('white');
poli.showColor(); //white
poli.color('blue'); //error







