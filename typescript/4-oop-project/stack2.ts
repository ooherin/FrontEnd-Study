{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  //next는 다음 스택 노드를 가리키거나 안가리킴
  type StackNode = {
    readonly value: string;
    readonly next?: StackNode | undefined;
  };

  //단일 연결 리스트로 스택 구현
  class StackImpl implements Stack {
    //private은 내부에서만 쓴다는 뜻
    private _size: number = 0;
    private head?: StackNode;

    //외부에서는 size를 읽을 수만 있음. size는 private이라 변경 불가능.
    get size() {
      return this._size;
    }

    push(value: string) {
      this._size++;
      const node: StackNode = { value, next: this.head };
      //헤드는 새로운 노드를 가리킴
      this.head = node;
    }
    pop(): string {
      //null == undefined
      //null, undefined 경우 모두를 걸러주는 if
      //head가 null이라는 것은 빈 배열이라는 의미
      if (this.head == null) {
        throw new Error("Stack is empty");
      }
      //제거해야 할 대상(노드)
      const node = this.head;
      //헤드는 노드가 가리키는 다음것을 가리킴
      this.head = node?.next;
      this._size--;
      return node?.value;
    }
  }
}
