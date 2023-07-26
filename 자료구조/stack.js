class Stack{
  arr = [];
  push(){
    return this.arr.push() //length를 리턴 => 쓸모있는 정보 
  }
  pop(){
    return this.arr.pop()
  }
  top(){
    return this.arr.at(-1) //배열의 가장 마지막 요소를 구하는 문법 
  }
  get length(){
    return this.arr.length;
  }
}

const stack = new Stack();
