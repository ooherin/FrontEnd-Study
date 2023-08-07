class HashTable {
  data = []; //class에는 const 안씀
  constructor(capa) {
    //공간복잡도 O(n);
    //= 데이터의 개수랑 같음
    this.capa = capa;
  }
  insert(key, value) {
    //시간 복잡도 O(1)
    const hash = hashF(key, this.capa);

    if (!this.data[hash]) {
      this.data[hash] = [];
    }
    this.data[hash].push({ key, value });
  }
  search(key) {
    //시간 복잡도 O(N/hash) => 해쉬 능력이 아주 좋아서 hash가 N이면 O(N)이 되버림
    //해쉬 함수가 매우 키포인트이다!
    const hash = hashF(key, this.capa);
    if (this.data[hash]) {
      for (let i = 0; i < this.data[hash].length; i++) {
        if (this.data[hash][i].key === key) {
          return this.data[hash][i].value;
        }
      }
    }
    return null;
  }
  update(key, value) {
    //시간 복잡도 O(N/hash) => 해쉬 능력이 아주 좋아서 hash가 N이면 O(N)이 되버림
    //해쉬 함수가 매우 키포인트이다!
    const hash = hashF(key, this.capa);
    if (this.data[hash]) {
      for (let i = 0; i < this.data[hash].length; i++) {
        if (this.data[hash][i].key === key) {
          return (this.data[hash][i].value = value);
        }
      }
    }
    return "찾는 값이 없습니다.";
  }
  delete(key) {
    //시간 복잡도 O(N/hash) => 해쉬 능력이 아주 좋아서 hash가 N이면 O(N)이 되버림
    //해쉬 함수가 매우 키포인트이다!
    const hash = hashF(key, this.capa);
    if (this.data[hash]) {
      for (let i = 0; i < this.data[hash].length; i++) {
        if (this.data[hash][i].key === key) {
          return this.data[hash].splice(i, 1);
        }
      }
    }
    return "찾는 값이 없습니다.";
  }
}

//이게 핵심, 해쉬함수가 얼마나 잘 고르게 나눠주냐가 중요함
//데이터의 분포도가 잘 되냐!
//만약 나머지가 1,2,3에 분포된다면,.,,? -> 다른 hashF 알고리즘 필요
function hashF(key, mod) {
  if (typeof key === "number") {
    return key % mod;
  }
  if (typeof key === "string") {
    key.split("").reduce((a, c) => a + c.charCodeAt(), 0) % mod; //['a','b','c']
  }
}
const ht = new HashTable(30); //칸수가 30개
ht.insert(31, "hello");
ht.insert(91, "bye");
ht.insert(83, true);
console.log(ht.search(61));
console.log(ht.search(99));

//
