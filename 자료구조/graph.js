class Graph {
  vertices = [];
  matrix = [];

  insertVertex(name) {
    this.vertices.push(new Vertex(name));
    this.matrix.push([]); //vertex마다 배열이 하나씩 생기고, 결과적으론 이차원 배열이 됨.
  }

  #searchVertex(name) {
    for (let i = 0; i < this.vertices.length; i++) {
      if (this.vertices[i].name === name) {
        return i;
      }
    }
    return null;
  }
  insertArc(from, to, value, capacity) {
    //출발, 도착, 값, 용량
    const fromV = this.#searchVertex(from);
    const toV = this.#searchVertex(to);
    if (fromV < 0 || toV < 0) {
      throw "찾는 버텍스가 없습니다!";
    }
    this.matrix[fromV][toV] = new Arc(value, capacity);
    new Arc(value, capacity);
  }
}
class Vertex {
  //구분하는 이름을 가지고 있다.
  constructor(name) {
    this.name = name;
  }
}
class Arc {
  constructor(value, capacity) {
    this.value = value;
    this.capacity = capacity;
  }
}

const graph = new Graph();
console.log(graph.insertVertex("a"));
console.log(graph.insertVertex("b"));
console.log(graph.insertVertex("c"));
console.log(graph.insertVertex("d"));
console.log(graph.insertArc("a", "b", 3));
console.log(graph.insertArc("a", "c", 2));
console.log(graph.insertArc("c", "a", 4));
console.log(graph.insertArc("b", "c", 1));
console.log(graph.insertArc("d", "a", 5));
