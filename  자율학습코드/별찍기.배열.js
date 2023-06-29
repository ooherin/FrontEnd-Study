//Q1. 구구단인데 결과값이 짝수가 안나오게 
//1-(1)
for(let i = 1; i <10 ; i++){
  for(let j = 1; j <10; j++){
    if((i*j) %2 === 0){
      continue;
    }
    console.log(`${i} x ${j} = ${i*j}`);
  }
}

//1-(2) 또 다른 풀이(i,j 중 하나라도 짝수면 소거하는 방법)

for(let i = 0; i < 10 ; i++){
  if(i % 2 === 0 )continue;
  for(let j = 0; j < 10; j++){
    if(j % 2 === 0) continue;
    console.log(`${i} x ${j} = ${i*j}`);
  }
}

//1-(3) 또 다른 풀이 
for (let i = 1; i < 10; i += 2) {
  for(let j = 1; j <10; j += 2){
    console.log(`${i} x ${j} = ${i*j}`);
  }
}

//Q2. 별찍기(1개부터)
for (let i = 1; i<6; i++){
  console.log('*'.repeat(i));
}

//2. 결과
// "*"
// "**"
// "***"
// "****"
// "*****"

//Q3. 별찍기(5개부터)
for(let i = 5; i >=1 ; i--){
  console.log('*'.repeat(i));
}


//3-(2) 
for(let i = 0; i < 5; i++){
  console.log('*'.repeat(5-i));
}

//3. 결과
// "*****"
// "****"
// "***"
// "**"
// "*"

//repeat => 앞을 ()번 반복한다.

//Q4. 13579 별찍기(1,3,5,7,9)

for(let i = 1; i < 10; i += 2){
  console.log('*'.repeat(i));
}
for(let i = 1; i < 10;i+=2){
  console.log('*'.repeat(10-i));
}

//4 결과
// "*"
// "***"
// "*****"
// "*******"
// "*********"

// "*********"
// "*******"
// "*****"
// "***"
// "*"

// Q5. 별찍기 오른쪽 정렬

for (let i = 5; i >= 1; i--)
{ let j = 5- i;
  console.log(' '.repeat(j) + '*'.repeat(i) );}

//5 결과

// "*****"
// " ****"
// "  ***"
// "   **"
// "    *"

//5 풀이법
//우선 반복문은 i 하나만 필요하다. 5줄이기 때문이다. i는 별의 개수이고 54321로 줄어든다. 
//별의 개수는 하나씩 줄어들고 빈칸이 하나씩 늘어난다. 빈칸의 개수는 j이다.
//이때 모든 줄이 5칸씩 차지하고 있다는 걸 알아야 한다.
//let j = 5- i 식이 핵심이다. 

//배열에서 마지막 요소 찾기
const findLastElement = ['a','b','c','d'];
console.log(findLastElement[findLastElement.length - 1]);

//배열 

//Q6. 배열에서 마지막에서 세번째 요소 찾기
const array  = ['a','b','c','d','e','f']
console.log(array[array.length -3]);

//Q7. 배열 마지막에 요소를 추가하는 법
const target = ['a','b','c','d'];
target[target.length] = 'e';
console.log(target);

//7 다른 방법
const target = ['a','b','c','d'];
target.push('e'); //=쓰지말기
console.log(target);
//상수여도 배열 안에 요소는 바꿀 수 있다.

//Q8. 배열 앞에다 추가 
const target = ['b','c','d'];
target.unshift('a');
console.log(target);

