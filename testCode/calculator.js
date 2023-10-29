class Calculator {
  constructor() {
    this.value = 0;
  }
  set(num) {
    this.value = num;
  }
  clear() {
    this.value = 0;
  }
  add(num) {
    const sum = this.value + num;
    if (sum > 100) {
      throw new Error("[ERROR]계산한 값은 100 이상을 넘을 수 없습니다");
    }
    this.value = sum;
  }
  substract(num) {
    const sum = this.value - num;
    this.value = sum;
  }
  multiply(num) {
    this.value = this.value * num;
  }
  divide(num) {
    this.value = this.value / num;
  }
}

module.exports = Calculator;
