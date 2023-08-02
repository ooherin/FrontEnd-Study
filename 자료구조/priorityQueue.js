class PriorityQueue {
  arr = [];
  //자식이 들어가서 부모랑 비교 => 부모보다 크면 부모랑 순서 바꾸기 => 루트까지 자리잡을 떄까지 무한 반복

  //우선순위를 비교해서 더 크면 바꾸기
  #reheapup(index) {
    if (index > 0) {
      //자식이 root가 아니면, 첫번쨰 인자가 아니면
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.arr[index].priority > this.arr[parentIndex].priority) {
        const temp = this.arr[index]; //자식 값 저장
        this.arr[index] = this.arr[parentIndex]; //자식 값을 부모 값으로 바꿈
        this.arr[parentIndex] = temp; //부모값을 저장한 자식 값으로 바꿈
        this.#reheapup(parentIndex); //자식이 부모의 index가 됨. 재귀함수 실행
      }
    }
  }

  #reheapDown(index) {
    //자식과 비교해서 더 작으면 밑으로 내려주는 로직
    const leftIndex = index * 2 + 1; //왼쪽 자식 인덱스
    const rightIndex = index * 2 + 2; //오른쪽 자식 인덱스

    //더 큰 자식 인덱스가 bigger
    const bigger =
      this.arr[leftIndex].priority > this.arr[rightIndex]?.priority
        ? leftIndex
        : rightIndex;
    //부모가 더 크면 서로 바꿔주기
    if (this.arr[index] > this.arr[bigger]) {
      const temp = this.arr[index];
      this.arr[index] = this.arr[bigger];
      this.arr[bigger] = temp;
      this.#reheapDown(bigger);
    }
  }

  //힙으로 만들어주는 로직
  #heapify(index) {
    const leftIndex = index * 2 + 1; //왼쪽 자식 인덱스
    const rightIndex = index * 2 + 2; //오른쪽 자식 인덱스
    //더 큰 자식 인덱스가 bigger
    const bigger =
      (this.arr[leftIndex]?.priority || 0) >
      (this.arr[rightIndex]?.priority || 0)
        ? leftIndex
        : rightIndex;
    if (this.arr[index] < this.arr[bigger]) {
      const temp = this.arr[index];
      this.arr[index] = this.arr[bigger];
      this.arr[bigger] = temp;
    }
  }

  insert(priority, value) {
    const index = this.arr.length; //맨 마지막에 넣어주기
    this.arr[index] = { priority, value };
    this.#reheapup(index);
  }

  remove() {
    if (!this.arr.length === 0) {
      return false;
    }
    if (this.arr.length === 1) {
      return this.arr.pop();
    }
    const root = this.arr[0];
    this.arr[0] = this.arr.pop();
    this.#reheapDown(0);
    return root;
  }
  search(value) {
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i].value === value) {
        return i;
      }
    }
    return null;
  }
  update(value, newValue) {
    const index = this.search(value); //값의 인덱스를 찾는다.
    if (index === null) {
      return false;
    }
    this.arr[index].value = newValue;
    //leaf가 아닌 node를 찾아서 root까지 순회함.
    for (let i = Math.floor(this.arr.length / 2 - 1); i >= 0; i--) {
      this.#heapify(i); //힙이 아닌 경우 힙으로 만들어 준다.
    }
  }
  removeValue(value) {
    //특정 값을 삭제하는 remove 함수
    const index = this.search(value); //값의 인덱스를 찾는다.
    if (index === null) {
      return false;
    }
    this.arr.splice(index, 1);
    for (let i = Math.floor(this.arr.length / 2 - 1); i >= 0; i--) {
      this.#heapify(i); //힙이 아닌 경우 힙으로 만들어 준다.
    }
  }
}

const pq = new PriorityQueue();
pq.insert(6, "one");
pq.insert(5, "two");
pq.insert(4, "three");
pq.insert(3, "four");
pq.insert(2, "five");
pq.insert(1, "six");
//vip인얘들은 확 높여버리는게 나음
pq.insert(1000, "king");
console.log(pq.remove()); //king
console.log(pq.remove()); //king
console.log(pq.remove()); //king
console.log(pq.remove()); //king
