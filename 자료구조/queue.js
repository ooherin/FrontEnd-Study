class Queue{
  arr = [];
  enqueue(value){
    return this.arr.push(value) //length를 리턴 => 쓸모있는 정보 
  }
  dequeue(){
    return this.arr.shift()
  }
  peek(){
    return this.arr[0] //배열의 가장 마지막 요소를 구하는 문법 
  }
  get length(){
    return this.arr.length;
  }
}

const stack = new Stack();
