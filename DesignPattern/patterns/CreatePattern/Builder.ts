//빌더 패턴
//생성 패턴
//복잡한 객체들을 단계별로 생성할 수 있도록 하는 생성 디자인 패턴이다.
interface Builder {
  productPartA(): void;
  productPartB(): void;
  productPartC(): void;
}

class ConcreteBuilder1 implements Builder {
  private product!: Product1;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.product = new Product1();
  }

  public productPartA(): void {
    this.product.parts.push("파트 A 조립");
  }

  public productPartB(): void {
    this.product.parts.push("파트 B 조립");
  }

  public productPartC(): void {
    this.product.parts.push("파트 C 조립");
  }

  public getProduct(): Product1 {
    const result = this.product;
    this.reset();
    return result;
  }
}

class Product1 {
  public parts: string[] = [];

  public listParts(): void {
    console.log(`현재 제품의 요소 : ${this.parts.join(", ")}\n`);
  }
}

class Director {
  private builder!: Builder;

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public buildMinimalProduct(): void {
    this.builder.productPartA();
  }

  public buildFullFeaturedProduct(): void {
    this.builder.productPartA();
    this.builder.productPartB();
    this.builder.productPartC();
  }
}
