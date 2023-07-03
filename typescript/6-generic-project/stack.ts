{
  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }

  type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T>;
  };

  class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    private head?: StackNode<T>;

    constructor(private capacity: number) {}
    get size() {
      return this._size;
    }
    push(value: T) {
      if (this.size === this.capacity) {
        throw new Error("Stack is full!");
      }
      const node = { value, next: this.head };
      this.head = node;
      this._size++;
    }
    pop(): T {
      if (this.head == null) {
        throw new Error("Stack is empty!");
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl(10);
  stack.push("Ellie 1");
  stack.push("Bob 2");
  stack.push("Steve 3");
  while (stack.size !== 0) {
    console.log(stack.pop());
  }
}

// {
//   interface Stack<T> {
//     readonly size: number;
//     push(value: T): void;
//     pop(): T;
//   }

//   //next는 다음 스택 노드를 가리키거나 안가리킴
//   type StackNode<T> = {
//     readonly value: T;
//     readonly next?: T | undefined;
//   };

//   //단일 연결 리스트로 스택 구현
//   class StackImpl<T> implements Stack<T> {
//     //private은 내부에서만 쓴다는 뜻
//     private _size: number = 0;
//     private head?: StackNode<T>;

//     constructor(private capacity: number) {}

//     //외부에서는 size를 읽을 수만 있음. size는 private이라 변경 불가능.
//     get size() {
//       return this._size;
//     }

//     push(value: T) {
//       if (this.size === this.capacity) {
//         throw new Error("stack is full");
//       }
//       const node = { value, next: this.head };
//       //헤드는 새로운 노드를 가리킴
//       this.head = node;
//       this._size++;
//     }
//     pop(): T {
//       //null == undefined
//       //null, undefined 경우 모두를 걸러주는 if
//       //head가 null이라는 것은 빈 배열이라는 의미
//       if (this.head == null) {
//         throw new Error("Stack is empty");
//       }
//       //제거해야 할 대상(노드)
//       const node = this.head;
//       //헤드는 노드가 가리키는 다음것을 가리킴
//       this.head = node.next;
//       this._size--;
//       return node?.value;
//     }
//   }
// }

type Student = {
  passed: boolean;
};

const students: Student[] = [{ passed: true }, { passed: false }];

const result = students.every((student) => {
  return student.passed;
});

console.log(result);

class Animal {}
class Cat extends Animal {
  isCat: boolean = true;
}
class Dog extends Animal {
  isDog: boolean = true;
}

const animals: Animal[] = [new Cat(), new Cat(), new Dog()];
function isCat(animal: Animal): animal is Cat {
  //cat이라는 의미
  //isCat이 undefined가 아니라 true라면
  return (animal as Cat).isCat !== undefined;
}

console.log(animals.every<Cat>(isCat));
