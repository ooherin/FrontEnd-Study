////Array

////배열은이라는 타입은 없다. 배열은 Object 타입이다. 
////배열과 객체의 가장 큰 차이점은 1. 값의 순서 2. length 프로퍼티이다.
////순서나 length를 사용할 때 배열을 사용하면 좋다.
////js의 배열은 인덱스로 배열 요소에 접근하는 경우 일반 배열보다 느리나, 요소를 삽입하거나 삭제하는 경우에는 일반적인 배열보다 빠르다. 

////Array생성자 함수에 의한 함수 생성
//// new Array(element0, element1, ..., elementN);
//// Array(element0,element1,....,elementN);
////new를 쓰지 않아도 배열을 생성하는 함수가 호출된다. 

const arr = new Array(1,2,3);

const arr1 = new Array(10);
console.log(arr1.length);////////10
////array에 숫자로 된 인수 하나만 넣어주면 그 숫자를 length로 하는 빈 배열이 형성된다.
//// (10을 요소로 하는 배열이 형성되는 것이 아니다. )하나의 숫자를 넣어도 그것을 요소로 하는 배열을 만들고 싶다면 array of를 쓰면 된다.
const array3 = Array.of(3);
console.log(array3);
////결과 : [3]

////Array 리터럴 표기법(가장 유용하고 쉬운 방식)
const fruits = ['사과', '바나나'];



////array.length : 배열의 길이를 반환(요소의 개수)
console.log(fruits.length); ////////2 
////반복문을 쓸 때 유용하다(요소를 추가나 삭제하면 자동 갱신되므로)
for(let i = 0 ; i< fruits.length; i++){
console.log((i+1)+'.'+fruits[i])};
////결과  "1.사과"
////     "2.바나나"

////배열 단축(요소의 수보다 length를 작은 값으로 넣으면 배열의 길이가 줄어듦.)
var numbers = [1,2,3,4];
if(numbers.length > 3){
numbers.length = 3;}
console.log(numbers);
//// 결과 : [1,2,3]

////희소 배열 (왠만하면 사용x)
const sparse = [,1,2,,3];
console.log(sparse.length);////////5
////희소배열의 length는 요소의 개수와 일치하지 않는다.

////split(쪼개기)
const str  = 'I love you';
const split_words = str.split(' ');
console.log(split_words);
////결과 //////// [object Array] (3)
//// ["I","love","you"]

////join
const elements = ['I','love','you'];
console.log(elements.join());
////결과 : "I,love,you"
console.log(elements.join(' '));
////결과 : "I love you"

//// linearSearch(array,target)////배열안에 특정한
////값이 있는지 찾아줌
function linearSearch(array,target){
  for(let i = 0; i < array.length; i++){
    if(array[i] === target )
      return i;
  }
  return '배열안에 없는 값입니다!'
}
console.log(linearSearch([1,2,3,4,5],7));
////결과 :  "배열안에 없는 값입니다!"

////array.from 유사배열객체, 이터러블(문자열 포함)을 변환해 배열을 생성한다
array5 = Array.from({length:3, 0:'a', 1:'b', 2: 'c'});
console.log(array5);
////결과 : ["a","b","c"]

array6 = Array.from('hello!');
console.log(array6);
////결과 : ["h","e","l","l","o","!"]

//// textContent는 문자열만 태그 안에 넣어주고
////간단한 문자넣기는 이꺼쓰기
//// innerHTML은 HTML의 태그도 사용되는 태그이다
////선택자이름.append(document.createTextNode('추가할 글자넣기'));

////배열요소의 참조 : []안에 index를 집어넣으면 참조가 된다.
////존재하지 않은 요소를 선택하면 undefined
array7 = [1,2,3];
console.log(array7[3]);
////결과 : undefined

////배열요소의 추가: 존재하지 않는 index값을 통해 추가하면 된다.
array7[3] = 4;
console.log(array7);
////결과 [1,2,3,4]

////배열요소의 갱신 : 이미존재하는 요소에 값을 넣으면 갱신됨.
array7[2] = 10;
console.log(array7);
////결과: [1,2,10]

////splice : 배열의 요소를 완전히 제거
const arr8 = [1,2,3];
arr8.splice(1,1);
////index1 부터 1개의요소를 제거
console.log(arr8);
////결과 : [1,3]

////이제 진짜주석은 ////////가 아니라 ////////////로 쓰기
////배열 메서드

////push : 원본 배열를 직접 변경한다.
////메서드를 사용할 때는 = 를 쓰지않고 ()을 쓴다.
const arr9 = [1];
arr9.push(2);
console.log(arr9);
////결과: [1,2]

////concat : 원본 배열이 아닌 새로운 배열을 만들어서 변경한다.
//// concat이라는 변수가 새로운 배열이 된다.
//// const result = arr9.concat(3);
//// console.log(arr9); ////////[1,2]
//// console.log(result); ////////[1,2,3]

////Array.isArray : 이 메서드는 전달된 인수가 배열이면 t, 아니면 f를 반환
Array.isArray([]); ////////true
Array.isArray(undefined); ////////false
Array.isArray(true); ////////false
Array.isArray(1); ////////false
Array.isArray([1,2]);  ////////true

////Array.indexOf : 요소를 입력하면 첫번째로 찾은 요소의 index값이 나온다
const arr10 = [1,2,3,1,2];
arr10.indexOf(2); ////////////결과 : 1

////indexOf는 특정요소가 있는지 확인할 때 유용하다
const foods = ['apple', 'cake', 'juice'];
console.log(foods.indexOf('straws')); ////////////-1
////indexOf에서 요소가 없으면 -1을 반환한다.

if(foods.indexOf('carrot') === -1){
  foods.push('carrot');
  console.log(foods);
}else{
  console.log('이미 있는 요소입니다')
};
////결과 : ["apple","cake","juice","carrot"]

//////includes : 요소가 있는지 확인해서 t////f로 반환하는 메소드

console.log(foods.includes('pear')); ////////false
if(!foods.includes('pear')){
  foods.push('pear');
  console.log(foods); ////////////pear가 없을 때 
}else{
  console.log('이미 있는 요소입니다.') ////////////pear가 이미 있을 떄 
}

////push: 배열의 마지막에 추가하는 메소드 
const arr11  = [1,2,3];
arr11.push(4);
console.log(arr11); ////////////결과 : [1,2,3,4]

////length를 이용하여 추가하는 방법, 이게 더 빠르다.
arr11[arr11.length] = 4;
console.log(arr11); ////////////결과 : [1,2,3,4]

////pop: 원본배열에서 마지막요소를 제거하고 반환하는 메소드
const arr12 = [1,2,3,4];
arr12.pop();
console.log(arr12); ////////////결과 : [1,2,3]

///push와 pop은 마지막의 요소를 추가하고 삭제한다는 점에서 공통적이다
///last-in First out 이다.

///딥다이브 p. ~510까지

//unshift :인수로 전달받은 모든 값을 원본 배열의 선두에 추가하고 변경된 length
///프로퍼티를 반환한다. 원본 배열을 반환한다. 
//unshift :인수로 전달받은 모든 값을 원본 배열의 선두에 추가하고 변경된 length
///프로퍼티를 반환한다. 원본 배열을 반환한다. 
const arr123 = [1,2];
let results = arr123.unshift(3,4);
console.log(results);////4

console.log(arr12);////[3,4,1,2]

const arr14 = [3,4];
arr14.unshift(1,2);
console.log(arr14);
//[1,2,3,4]

arr14.push(5,6);
console.log(arr14);
//[1,2,3,4,5,6]

const arr15 = [3,4];
arr15.push([5,6]);
console.log(arr15);
////[3,4,[[5,6]]];

let result1 = [1,2].concat([3,4]);
console.log(result1);
//[1,2,3,4]

const arr16 = [1,2,3,4];
const result = arr16.splice(1,2,20,30);
console.log(result); //////[2,3]
console.log(arr); //////[1,20,30,4]















