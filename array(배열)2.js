//shift: 원본 배열에서 첫번째 요소를 제거하고 제거한 요소를 반환한다. shift처럼 원본 배열을 직접 변경한다

const arr13 = [1,2];
let result = arr13.shift();
console.log(result); ////1
console.log(arr13); ////[2]

//concat: 전달된 값을 원본 배열의 마지막 요소로 추가한 새로운 배열을 반환.
//concat은 합치는 메소드
const arr14 =[3,4];

//배열을 배열에 concat하면 합쳐진다.
//숫자를 넣으면 마지막 요소로 합쳐저 배열이 반환된다.

// const arr13 =[1,2];
// const arr14 =[3,4];

let result1 = arr13.concat(arr14);
console.log(result1);
// 결과 : [1,2,3,4]

result = arr13.concat(3);
//// console.log(result);
//////결과 : [1,2,3]
console.log(arr13); //////[1,2] //////원본배열을 변경하지 않는다. 
 
// const arr14 = [3,4];
arr14.unshift([1,2]);
arr14.push([5,6]);
console.log(arr14); ////////[[1,2],3,4,[5,6]]
result = arr14.concat([5,6]);
console.log(result); ////////[3,4,5,6]

//////splice:배열의 중간에 요소를 추가하거나 삭제하는 경우, 
////세개의 인수(인덱스값, 삭제값, 대체값)
const arr15 = [1,2,3,5];
arr15.splice(3,1,4);
console.log(arr15); //////[1,2,3,4]

//splice의 두번째인수(삭제값)이 0이면 삭제하지 않고
//뒤에 있는 값을 추가한다. 
const arr16 = [1,10,1000];
arr15.splice(1,0,100); //////0개의 요소룰 제거
console.log(arr16); //////[1,100,10,1000]

const arr17 = [1,2,3,4];
const results = arr17.splice(1); //////index1부터 다 삭제
console.log(arr17); //////삭제되고 남은 값 [1]
console.log(results); //////splice = 삭제된 값 [2,3,4]

//특정한 요소 제거 (indexOf, splice);
//가~바 중에서 라 만 제거
const arr18 = ['가','나','다','라','마','바'];
result = arr18.splice(arr18.indexOf('라'),1);
console.log(arr18);
//["가","나","다","마","바"]

//////slice : 인수로 전달된 범위의 요소들을 복사하여 배열로 봔환한다.
const arr19 = [1,2,3,4];
console.log(arr19.slice(0,2)); //////[1,2]
//index0부터 2까지 인수를 잘라서 반환한다.

console.log(arr19) //////결과값 : [1,2,3,4];

const arr20 = [1,2,3,4,5];
console.log(arr20.slice(1)); //////[2,3,4,5]
console.log(arr20); //////[1,2,3,4,5]

//reverse: 원본 배열의 순서를 반대로 뒤집는다.
const arr30 = [1,2,3];
const resultss = arr30.reverse();
console.log(arr30); 
//////원본 배열도 직접 바뀜
console.log(resultss);
//[3,2,1]

//fill : 전달받은 인수로 배열의 처음과 끝까지 채운다.
const arr21 = [1,2,3,4,5];
arr21.fill(0);
console.log(arr21); //////[0,0,0]

arr21.fill(0,2,3);
console.log(arr21); //////[1,2,0,4,5]

const arr22 = new Array(5);
arr22.fill(1);
console.log(arr22); //////[1,1,1,1,1]

//flat : 인수를 평탄화해주는 메소드 . []를 없애줌
const arr23 = [1,2,[[3],[[4],[5]]]];
console.log(arr23.flat(Infinity)); //////[1,2,3,4,5]

//배열 고차 함수
////함수를 인수로 전달받거나 함수를 반환하는 함수

//sort함수
//sort는 기본적으로 오름차순으로 요소를 정렬한다. 
const fruits = ['banana','strawberry','orange','apple'];
console.log(fruits.sort());
//결과 : ["apple","banana","orange","strawberry"]

const points = [1,10,3,200,5,40];
console.log(points.sort()); 
//결과 : [1,10,200,3,40,5] 의도한 대로 정렬되지 않는다. 왜냐하면
//유니코드 순서대로 숫자가 정렬되기 때문이다. 

//sort로 정렬하려면 정렬 순서를 정의하는 비교함수를 인수로 전달해야 한다.
//숫자 배열의 내림차순 정렬. 비교함수의 반환값이 0보다 작으면 a를 우선하여 정렬한다. 
points.sort((a,b) => a-b);
console.log(points);
//결과 : [1,3,5,10,40,200]

//id로 정렬하기. sort를 이용해서
const todos = [
  {id : 3, content : 'javascript'},
  {id : 1, content : 'HTML' },
  {id : 2, content : 'CSS'},
  {id : 4, content : 'react'} 
]
function compare(key) {
  return(a,b) => (a[key]>b[key] ? 1: (a[key] < b[key] ? -1 : 0));
}
  todos.sort(compare('id'));
  console.log(todos);

//  {id : 1, content : 'HTML' }, {id : 2, content : 'CSS'},  {id : 3, content : 'javascript'},  {id : 4, content : 'react'} 

//forEach
const numbers = [1,2,3];
const pows = [];
for(let i = 0 ;i <numbers.length; i++){
  pows.push(numbers[i]**2);
}
console.log(pows);

// 결과 : [1,4,9]

//forEach의 반환값은 언제나 undefined이다
const result2 = [1,2,3].forEach(console.log);
console.log(result2);
//결과 : undefined

//map: 자신을 호출한 배열의 모든 요소들을 함수에 넣어서 반환
const number = [1,4,9];
const roots = number.map(item => Math.sqrt(item));
console.log(roots);
//결과 : [1,2,3]
//map메서드는 새로운 배열을 반환한다. 

//forEach와 map모두 인수들 하나하나 순회하며 콜백함수를 호출한다는 점이 공통적이나,
//forEach는 undefined를 반환하고 map은 반환값으로 구성된 새로운 배열을 호출

//filter: true인 값만 걸러내 새로운 배열을 반환
const numberss = [1,2,5,6,9,11,13,14];
//////numbers중에 짝수만반환함
const doubles = numberss.filter(item => item%2 - 1);
//////1이면 true, 0이면 false
console.log(doubles);
//////결과 [2,6,14] -> why? 홀수를 넣으면 결과는 0, 짝수를 넣으면 결과는 
//////-1
const odds = numberss.filter(item => item%2);
console.log(odds);
//////[1,5,9,11,13]

