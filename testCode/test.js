const Calculator = require("./calculator");

describe("calculator", () => {
  let cal;
  //beforeEach 메소드 사용
  //beforeEach는 매번 테스트를 실행하기 전에, 계속해서 안에 있는 콜백함수를 동작시켜주는 것 입니다.
  beforeEach(() => {
    cal = new Calculator();
  });
  it("inits with 0", () => {
    expect(cal.value).toBe(0);
  });
  it("set test", () => {
    cal.set(5);
    expect(cal.value).toBe(5);
  });
  it("add test", () => {
    cal.set(10);
    cal.add(3);
    expect(cal.value).toBe(13);
  });
  it("add limit test", () => {
    cal.set(99);

    expect(() => {
      cal.add(2);
    }).toThrow("[ERROR]");
  });
});
