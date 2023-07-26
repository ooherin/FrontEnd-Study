class Tree {
  constructor(value) {
    this.root = new Node(value);
  }
}
class Node {
  children = [];
  constructor(value) {
    this.value = value;
  }
  push(value) {
    this.children.push(new Node(value)); //노드를 만들어서 value를 넣은 다음 push 해야 함
  }
}

class BinaryTree {
  root = null;

  #insert(node, value) {
    if (node > value) {
      //노드 보다 작은 값이면
      if (node.left) {
        //왼팔이 있다면
        this.#insert(node.left, value); //왼팔에 넘긴다.
      } else {
        node.left = new Node(value); //왼팔을 만든다.
      }
    } else {
      if (node.right) {
        //오른팔이 있다면
        this.#insert(node.right, value); //오른팔에 넘긴다
      } else {
        node.right = new Node(value); //오른팔을 만든다.
      }
    }
  }
  insert(value) {
    //어떤 값을 넣으려 할 때 root가 없다면 root가 된다.
    //왼팔 오른팔이게 맡기는데 왼팔 오른팔이 없다면 해당 value로 노드를 만든다.
    if (!this.root) {
      this.root = new Node(value);
    }
    this.#insert(this.root, value);
    //같은 값을 넣은 경우 에러 처리
  }

  #search(node, value) {
    if (node.value > value) {
      if (!node.left) {
        //왼팔이 없을 경우
        return;
      }
      if (node.left.value === value) {
        //왼팔이 내가 찾던 값이다.
        return node.left;
      }
      return this.#search(node.left, value); //더 작은 값 찾을 떄
    } else {
      if (!node.right) {
        //오른팔이 없을 경우
        return;
      }
      if (node.right.value === value) {
        return node.right;
        //오른팔이 내가 찾던 값이다.
      }
      return this.#search(node.right, value); //더 큰 값 찾을 떄
    }
  }

  search(value) {
    if (!this.root) {
      return null;
    }
    if (this.root.value === value) {
      return this.root;
    }
    return this.#search(this.root, value);
  }

  #remove(node, value) {
    //1.leaf(양팔 다 없음 ) => 제거
    //2. leaf x , 왼팔이 없다 => 오른팔 끌어올리기
    //3. leaf x, 오른팔이 없다 => 왼팔 끌어올리기
    //4. leaf x , 양팔 다 있다 => 왼팔에서 가장 큰 얘와 바꾸기

    if (!node) {
      //제거할 값이 없는 경우
      return false; //지울 값이 존재하지 않음
    }
    if (node.value === value) {
      //자식 입장
      //지울 값을 찾은 경우
      if (!node.left && !node.right) {
        //자식(왼팔, 오른팔 없음)
        return null;
      }
      if (!node.right) {
        //왼팔만 있는 경우
        return node.left;
      }
      if (!node.left) {
        //오른팔만 있는 경우
        return node.right;
      }

      //양팔다 있는 경우
      // const exchange = node.left;
      // while (exchange.right) {
      //   //right이 없을 때까지
      //   exchange = exchange.right;
      //   //right의 끝으로 감
      // }
      // const temp = node.value;
      // node.value = exchange.value;
      // exchange.value = temp;
      // //node의 값과 exchange의 값을 바꿈
      // node.left = this.#remove(node.left, temp);
      // return node;

      //양쪽 노드가 잇는 경우
      const exchange = this.#findMax(node.left);
      //왼쪽노드에서 가장 오른쪽의 큰 노드를 찾는다.
      node.value = exchange.value;
      //지울 값을 찾은 exchange로 바꾼다.
      node.left = this.#remove(node.left, exchange.value);
      //지워서 필요없어진 value값을 지운다.
      //왼쪽 자식의 서브 트리에서 가장 큰 값을 가진 exchange(이제 필요없어진 값)을 삭제한다.
      //#remove()를 재귀적으로 호출하여 삭제한다.
      return node;
    } else {
      //부모 입장
      if (node.value > value) {
        node.left = this.#remove(node.left, value);
        return node;
      } else {
        node.right = this.#remove(node.right, value);
        return node;
      }
    }
  }

  //제일 오른쪽으로 큰 값을 찾는다.
  #findMax(node) {
    while (node.right) {
      node = node.right;
    }
    return node;
  }

  //this.#remove의 반환값이 있을때에만 root가 node로 변경됨.
  remove(value) {
    const node = this.#remove(this.root, value);
    if (node) {
      this.root = node;
    }
  }
}

const tree = new BinaryTree();
console.log(tree.insert(8));
console.log(tree.insert(3));
console.log(tree.insert(6));
console.log(tree.insert(10));
console.log(tree.insert(14));
console.log(tree.insert(1));
console.log(tree.search(3));
console.log(tree.search(10));
console.log(tree.remove(8));
