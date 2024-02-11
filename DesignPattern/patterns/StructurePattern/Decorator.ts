//데코레이터

//객체에서 상속이 아닌, 집합 관계 또는 합성을 사용하는 것
//집합 관계 : 다른 객체에 대한 참조를 갖고 일부 작업을 위임함.
//상속 : 객체 자체가 부모 클래스에서 행동을 상속한 후 작업을 수행할 수 있음.

//예를 들어 간단한 알림 외에, 인스타그램, 페이스북, 슬랙 등 다양한 알림이 필요할 경우
//해당 알림을 데코레이터로 만들어서 필요할 떄마다 옵션으로 사용할 수 있다,

//데코레이터 패턴은 객체의 원본 코드를 훼손하지 않으면서, 런타임에 추가 행동을 객체들에 할당해야 할 때 사용
//상속을 사용하는 것이 힘들 때 사용
interface CProduct {
  price: number;
}

class CBasicProduct implements CProduct {
  constructor(public price: number) {}
}

abstract class CDiscountDecorator implements CProduct {
  constructor(protected product: CProduct) {}

  abstract get price(): number;
}
class TenPercentDiscount extends CDiscountDecorator {
  get price(): number {
    return this.product.price * 0.9;
  }
}

class TwentyPercentDiscount extends CDiscountDecorator {
  get price(): number {
    return this.product.price * 0.9;
  }
}

class CShoppingCart {
  private products: CProduct[] = [];

  addProduct(product: CProduct) {
    this.products.push(product);
  }

  calculateTotalPrice(): number {
    let totalPrice = 0;
    for (const product of this.products) {
      totalPrice += product.price;
    }

    return totalPrice;
  }
}

const cart1 = new CShoppingCart();

cart1.addProduct(
  new TwentyPercentDiscount(new TenPercentDiscount(new CBasicProduct(100)))
);
console.log("Total Price:", cart1.calculateTotalPrice());

//함수형 코딩 방법
interface FProduct {
  name: string;
  price: number;
}

const applyTenPercentDiscount = (product: FProduct) => {
  const newPrice = product.price * 0.9;
  return { ...product, price: newPrice };
};

const applyTwentyPercentDiscount = (product: FProduct) => {
  const newPrice = product.price * 0.8;
  return { ...product, price: newPrice };
};

const addProductCart = (cart: FProduct[], product: FProduct) => {
  const newCart = [...cart, product];
  return newCart;
};

const caculateTotalPriceInCart = (cart: FProduct[]) => {
  const price = cart.reduce((total, product) => {
    total = product.price;
    return total;
  }, 0);
};

const cart: FProduct[] = [];

const product1: FProduct = { name: "불닭볶음면", price: 1000 };
const product2: FProduct = { name: "진짬뽕", price: 2000 };
addProductCart(cart, product1);
addProductCart(cart, product2);
caculateTotalPriceInCart(cart);
