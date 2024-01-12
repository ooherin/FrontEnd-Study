//디자인 패턴 쓰기전에 주문 클래스
class OrderManager {
  constructor() {
    this.orders = [];
  }

  placeOrder(order, id) {
    this.orders.push(id);
    return `You have successfully ordered ${order} (${id})`;
  }

  trackOrder(id) {
    return `Your order ${id} will arrive in 20 minutes.`;
  }

  cancelOrder(id) {
    this.orders = this.orders.filter((order) => order.id !== id);
    return `You have canceled your order ${id}`;
  }
}

const manager = new OrderManager();
manager.placeOrder("sushi", 123);
manager.trackOrder(123);
manager.cancelOrder(123);

//명령 패턴 적용
//주문 매니저 클래스
class OrderManager {
  constructor() {
    this.orders = [];
  }

  //(명령)실행 함수
  execute(command, ...args) {
    return command.execute(this.orders, ...args);
  }
}

//명령 클래스
//명령(주문 추가, 주문 보기, 주문 삭제)를 만들 때마다
//이 명령 클래스의 인스턴스를 생성해서 함수화

//그저 Command라는 통일성을 위한 템플릿 클래스이다.
class Command {
  constructor(execute) {
    this.execute = execute;
  }
}

//인스턴스로 하나씩 명령 만들기
//new Command의 첫번쨰 인자에는 OrderManager에 의해서 orders가 들어가기 때문에 걱정 ㄴㄴ
function PlaceOrderCommand(order, id) {
  return new Command((orders) => {
    orders.push(id);
    return `성공적으로 ${order}가 주문되었습니다. (${id})`;
  });
}

function CancelOrderCommand(id) {
  return new Command((orders) => {
    orders.filter((order) => order.id === id);
    return `주문이 취소되었습니다 (id)`;
  });
}

function TrackOrderCommand(id) {
  return new Command(() => {
    console.log(
      `당신의 주문 ${id}는 곧 도착할 예정입니다! 잠시만 기다려 주세요.`
    );
  });
}
