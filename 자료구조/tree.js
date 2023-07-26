class Tree{
  constructor(value){
    this.root = new Node(value);
  }
}
class Node{
  children = [];
  constructor(value){
    this.value= value;
  }
  push(value){
    this.children.push(new Node(value)); //노드를 만들어서 value를 넣은 다음 push 해야 함
  }
}
const tree = new Tree(50);
tree.root.push(25);
tree.root.push(75);
tree.root.children[0].push(1);
tree.root.children[0].push(2);
tree.root.children[1].push(3);
tree.root.children[1].push(4);

//이진 트리 => left,right 