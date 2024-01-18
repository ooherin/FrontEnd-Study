useRef는 2가지의 리턴 타입을 가지고 있는데 MutableRefObject와
RefObject의 차이는 다음과 같다.

MutableRefObject: current의 값이 변경 가능한 객체이다
RefObject: current 프로퍼티의 값이 readonly로 변경할 수 없다

useRef의 타입 3가지
1. useRef(initialValue: T):: MutableRefObject
제네릭 타입 T와 초깃값이 T로 일치하는 경우, 리턴 타입은 MutableRefObject<T> 가 된다.
ref 객체의 current 프로퍼티를 직접 변경할 수 있다
ex) 카운터로 ref의 값을 +1 씩 증가시키는 경우

2. 

