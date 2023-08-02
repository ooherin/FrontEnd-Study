class Dequeue {
  arr = [];
  push(value) {
    return this.arr.push(value); //length를 리턴 => 쓸모있는 정보
  }
  pop(value) {
    return this.arr.pop(value); //length를 리턴 => 쓸모있는 정보
  }
  shift() {
    return this.arr.shift();
  }
  unshift() {
    return this.arr.unshift();
  }
  get length() {
    return this.arr.length;
  }
}

const dequeue = new Dequeue();

dequeue.push(1);
dequeue.push(3);
dequeue.push(5);
dequeue.unshift(2);
dequeue.unshift(4);
//4,2,1,3,5
console.log(dequeue.length); //5
dequeue.pop(); //4
