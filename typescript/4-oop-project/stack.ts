interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): void;
}
class List implements Stack {
  //각 노드는 고유의 인덱스 번호를 가지고 있음
  index = 0;
  size = this.index; //실제 사이즈
  head = this.index;
  arr: string[];
  push(value: string) {
    console.log(`${this.index}번째 값`);
    this.arr[this.index] = value;
    this.index += 1;
  }
  pop() {
    this.index -= 1;
    console.log(this.index);
  }
}

const list = new List();
list.push("1번쨰");
