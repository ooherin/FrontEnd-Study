class LinkedList {
  //{value, head{value,next}}
  //배열과 같은 연결리스트를 만드는 법
  length = 0;
  head = null;
  prev = null;
  //head에는 다음 Node가 있음
  //또한 next라고 그 다음을 가리키는 속성이 있다.
  add(value) {
    if (this.head) {
      //head가 있을 때
      let current = this.head;
      while (current.next) {
        //next라는 속성이 없을때까지 반복함
        current = current.next;
      }
      current.next = new Node(value); //마지막 노드를 찾아(current) 그 다음 노드(방)을 만들어줌
    } else {
      //head가 비어있을때 => 마지막
      this.head = new Node(value);

      //input과 같은 output이 나오면 결코 좋지 않음
      //사용자가 참고할만한 값을 주는 것이 좋다.
    }
    this.length++; //if...else 공통 속성 뽑기
    return this.length;
  }

  //prev를 사용해서 구현한 add
  add2(value) {
    if (this.prev) {
      this.prev.next = new Node(value);
      this.prev = this.prev.next;
    } else {
      this.head = new Node(value);
      this.prev = this.head;
    }
    this.length++;
    return this.length;
  }

  search(index) {
    // let count = 0;
    // let current = this.head;
    // while (count < index) {
    //   //index가 0 인경우 적용되지 않음
    //   //index에 닿을 떄까지
    //   current = current?.next;
    //   count++;
    // }
    //    return current?.value;

    //리팩토링
    return this.#search(index)[1]?.value;
    //해당 index번쨰의 아무값이 없다면 null, undefined
  }
  #search(index) {
    let count = 0;
    let prev;
    let current = this.head; //지금 head는 현재를 가리킴
    while (count < index) {
      prev = current;
      //index가 0 인경우 적용되지 않음
      //index에 닿을 떄까지
      current = current?.next;
      count++;
    }
    return [prev, current];
  }

  remove(index) {
    //인덱스를 받아서 지우기
    const [prev, current] = this.#search(index);
    if (prev && current) {
      prev.next = current.next;
      this.length--;
      return this.length;
    } else if (current) {
      //prev가 없을떄 현재 index가 0일떄
      this.head = current.next; //바로 이배열의 head를 current가 아닌 current.next로 바꿔줌
      this.length--;
      return this.length;
    } else {
      //삭제할 대상이 없을떄
      return "삭제할 대상이 없습니다.";
    }
    // prev.next = current.next; //current을 없애서 이전 값의 next를 현재값의 next로 패쓰함.
    // if (!prev && current) {
    //   //첫번째 index가 0일때
    //   return (this.head = current.next);
    // }
    // if (!prev && !current) {
    //   //삭제하고자 하는 대상이 없을 떄
    //   return console.log("찾을 대상이 없습니다");
    // }
    // this.length--;
    // return this.length;
  }
  removeFirst() {}
}

class Node {
  next = null;
  constructor(value) {
    this.value = value;
  }
}

const ex = new LinkedList();
ex.length;
ex.add(1); //0
ex.add(2); //1
ex.add(3); //2
ex.add(4); //3
ex.add(5); //4
console.log("추가, 현재 length : ", ex.add(6)); //6
console.log("삭제, 남은 length : ", ex.remove(4));
console.log(ex.search(0)); //1
console.log("삭제, 남은 length : ", ex.remove(4));
console.log(ex.search(3)); //4 => 4s번쨰 있는 숫자를 찾아줘
console.log(ex.search(5)); //6
console.log(ex.search(8)); //undefined

//과제1 : prev next 기능 구현
//과제2 : O(1) 구현 => tail 꼬리 부분을
