//ellie의 JSON강의

//참고 사이트 : 
//JSON Differ: 오류 수정
//JSON Beautifire : 포맷 예쁘게 수정
//JSON parser : JSON을 object로 변환
//JSON validator : JSON 오류 수정

//JSON : javascript Object Notation

//Object to JSON
//stringfy(obj)
let json = JSON.stringify(true);
console.log(json); //true

json = JSON.stringify(['apple','banana']);
console.log(json);
//["apple", "banana"]; //[] 안에 값을 ""로 정렬

const dog = {
name : 'tomi',
color : 'white',
birthDate : new Date(),
jump(){
    console.log(`${this.name} can jump! `)
}
}
console.log(dog);
//{
//     name: 'tomi',
//     color: 'white',
//     birthDate: 2023-03-22T08:23:29.453Z,
//     jump: [Function: jump]
//   }

//일부분만 json화 하고 싶다면?
//객체 뒤에 []안에 프로퍼티 키를 넣기.
json = JSON.stringify(dog, ['name',"color"]);
console.log(json);//{"name":"tomi"}
//name이라는 프로퍼티만 json형식으로 전달

//더 세밀하게 통제하고 싶다면? : key,value , 콜백함수 사용
json = JSON.stringify(dog, (key,value) => {
    console.log(`key : ${key}, value : ${value}`);
    // return key === 'name' ? "hyerin's dog" : value ;
    return key === 'birthDate'? new Date(value) : value;
})
;
console.log(json);

//2.JSON to Object
//parse(json) 사용하면 됨 
// console.clear(); 콘솔 앞의 기록 지우기
json = JSON.stringify(dog);
const obj = JSON.parse(json);
console.log(obj);
dog.jump(); //TOmi can jump
obj.jump(); //error
//obj에 jump라는 함수가 없는 이유. 1번에서 JSON화 (stringfy) 시킬때 JSON에는 함수가 포함되지 않는다/
//이 JSON화 된것을 반대로 오브젝트화 시킬 때에도 처음부터 함수가 포함되어 있지
//않았기에 jump라는 함수는 사라진 것처럼 보인다.
//그러나 원본 객체인 dog에서는 당연히 jump메소드를 사용할 수 있다.

console.log(dog.birthDate.getDate()); 
//22
console.log(obj.birthDate.getDate()); 
//obj는 JSON stringfy되었기 때문에 date메소드를 사용 못한다.
//string이기 때문?
//앞에 json이라는 변수에서 콜백함수로 세밀하게 수정을 해주었기 때문에 에러가 안난다..(여기선 난다.)


