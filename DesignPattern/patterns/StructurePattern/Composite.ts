//객체들의 관계를 트리 구조로 구성하여 부분-전체 계층을 표현하는 패턴, 사용자가 단일 개체와 복합 객체 모두 동일하게 다루도록 하는 패턴

//트리 구조, 즉 계층 구조 => 어떤 객체가 하위 객체를 포함하는 상황을
//잘 다룰 수 있다.

interface Component {
  operation(): void;
}

class Leaf implements Component {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  operation(): void {
    console.log(`Leaf ${this.name} operation`);
  }
}

//복합 객체 클래스 ⭐️
class Composite implements Component {
  private children: Component[] = [];

  add(component: Component): void {
    this.children.push(component);
  }

  remove(component: Component): void {
    const index = this.children.indexOf(component);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }

  operation(): void {
    for (const child of this.children) {
      child.operation();
    }
  }
}

const leaf1 = new Leaf("A");
const leaf2 = new Leaf("B");
const leaf3 = new Leaf("C");

const branch1 = new Composite();
branch1.add(leaf1);
branch1.add(leaf2);

const branch2 = new Composite();
branch2.add(leaf3);

const root = new Composite();
root.add(branch1);
root.add(branch2);

root.operation();
