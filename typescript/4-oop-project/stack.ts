interface StackInterface {
  array: Array<string>;
  push(input: string): void;
  pop(): void;
  header: number;
}

class Stack2 implements StackInterface {
  array: Array<string> = [];
  header = -1;
  //헤더리
  push(value: string) {
    this.header += 1;
    this.array[this.header] = value;
    console.log(this.array);
    return this.array;
  }
  pop() {
    if (this.header <= 0) {
      return console.log("현재는 빈 배열 입니다. ");
    }
    this.array.length = this.header;
    this.header--;
    console.log(this.array);
    return this.array;
  }
}

const list = new Stack2();
list.push("1번쨰");
list.push("2번째");
list.pop();
list.push("3번째");
list.push("4번째");
list.push("5번째");
list.pop();
list.pop();
list.pop();
list.pop();
