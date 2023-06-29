
 //isInteger : 정수인지 알려주는 메소드
 console.log(Number.isInteger(0)); //true
 console.log(Number.isInteger(0.1)); //false
 
 //toFixed : 소수점 없애는 메소드
 console.log((12.123151).toFixed(2)); //"12.12"
 
 //Math메소드
 //Math.abs : 절댓값반환 메소드
 console.log(Math.abs(-2)); //2
 //Math.round : 반올림메소드
 console.log(Math.round(1.3)); //1
 //Math.ceil : 올림 메소드(천장)
 console.log(Math.ceil(1.3)); //2
 //Math.floor : 내림 메소드(바닥)
 console.log(Math.floor(1.6));//1
 //Math.sqrt : 루트 메소드
 console.log(Math.sqrt(25));//5
 //Math.random : 랜덤 메소드(0~1사이의 실수)
 console.log(Math.random()); //0.1273037193394
 //Math random을 사용하여 1~10 사이의 숫자 반환하기
 console.log(Math.floor(Math.random()+1));
 // 0 < Math.random() < 1  --> * 10
 // 0 < Math.random() < 10 --> +1
 // 1 < Math.random()  + 1 < 11 --> Math.floor
 // 1 < Math.floor(Math.random() + 1)) < 10
 
 //Math.pow(거듭제곱) --sqrt와 반대
 console.log(Math.pow(2,4));//16
 console.log(Math.pow(3,2));//9
 
 //Math.max
 console.log(Math.max(1,2,3));
 // //배열 요소에서 최댓값 취득 스프레드 문법 : 배열 앞에 ...
 console.log(Math.max(...[1,2,3,4]));//4
 console.log(Math.min(...[1,2,3,4]));//1
 
 //string 메소드
 //substring
 const str1 = 'hello world!';
 console.log(str1.substring(0,str.indexOf(' '))); //처음부터 띄어쓰기칸의 앞까지 문자열 휙득 : "hello"
 console.log(str1.substring(str.indexOf(' ')+1,str.length)); //띄어쓰기 이후부터 끝까지 문자열 획득 : "world!"
 
 //slice(substring과 비슷하나, 음수도 가능)
 const str2 = 'hello world!';
 console.log(str2.slice(0,5)); //"hello"
 console.log(str2.slice(-6)); //음수는 마지막 6자리를 반환 "world!"
 
 //toUpperCase
 const str3 = 'hello!';
 console.log(str3.toUpperCase()); //"HELLO!"
 
 // trim(문자열 중간의 공백은 제거되지 않는다. )
 const str4 = '  d a y  ';
 console.log(str4.trim()); //"d a y"
 
 //repeat
 const str5 = 'abc';
 console.log(str5.repeat());//'' 반복횟수를 정해주지 않으면 빈문자열 반환
 console.log(str5.repeat(2));//"abcabc"
 
 //replace
 const str6 = 'i love apple';
 console.log(str6.replace('apple','orange'));//"i love orange"
 
 //split
 const str = 'how are you?';
 console.log(str.split(' '));//["how","are","you?"]
 console.log(str.split(''));//["h","o","w"," ","a","r","e"," ","y","o","u","?"]