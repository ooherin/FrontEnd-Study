//Observer패턴에서 특정 객체를 구독할 수 있는데, 구독하는 주체를 Observer라고 한다.
//이때 observers 배열에 들어가는 observer들은 모두 data를 받을 수 있는 함수로 이루어져 있어야 한다.

type ObserverFun = (data: string) => void;

class Observable {
  #observers: ObserverFun[];

  constructor() {
    this.#observers = [];
  }

  subscribe(func: ObserverFun) {
    this.#observers.push(func);
  }

  unscribe(func: ObserverFun) {
    this.#observers.filter((observer) => observer !== func);
  }

  notify(data: string) {
    this.#observers.forEach((observer) => observer(data));
  }
}

export default new Observable();
