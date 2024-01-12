//싱글톤은 사실상 하나의 객체(상태)를 여러곳에서 쓰는 것이다.
//리액트에서는 Singleton 객체를 만드는 것 대신 redux나 react context를 자주 사용한다.

//Singleton은 인스턴스의 값을 직접 수정할 수 있는 반면, redux같은 상태관리 툴은
//읽기 전용 상태를 제공한다.
//redux를 사용할 때는 오직 컴포넌트에서 dispatch를 통해 넘긴 액션에 대해 실행된
//순수함수 리듀서를 통해서만 상태를 업데이트할 수 있다.

let instance;
let counter = 0;

class Counter {
    //인스턴스가 존재하는 경우에는 에러를 내고,
    //없는 경우에는 생성함.
    constructor() {
        if (instance) {
            throw new Error("이미 인스턴스가 존재합니다.");
        }
        instance = this;
        console.log("인스턴스가 생성되었습니다.");
    }

    getInstance() {
        return this;
    }

    getCount() {
        return counter;
    }

    increment() {
        return ++counter;
    }

    decrement() {
        return --counter;
    }
}

const counter1 = new Counter();
const counter2 = new Counter(); //error 인스턴스가 존재합니다.

//이렇게 하나의 인스턴스만 만들어 사용한다면
//다른 파일에서 메서드를 실행하더라도 카운터가 초기화되지 않고 계속 유지될 수 있다.

//Java나 C++같은 언어에서는 Javascript에서처럼 객체를 그냥 만들어 낼 수 없다.
