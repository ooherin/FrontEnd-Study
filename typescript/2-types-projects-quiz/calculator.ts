/**
 * Let's make a calculator 🧮
 */
type calculateOptions =
  | "add"
  | "substract"
  | "multiply"
  | "divide"
  | "remainder";

function calculate(option: calculateOptions, ...numbers: number[]): number {
  if (option === "add") {
    return numbers.reduce((acc, cur) => acc + cur);
  }
  if (option === "substract") {
    return numbers[0] - numbers[1];
  }
  if (option === "multiply") {
    return numbers[0] * numbers[1];
  }
  if (option === "divide") {
    return numbers[0] / numbers[1];
  }
  return numbers[0] % numbers[1];
}

//switch문 사용
function calculator(option: calculateOptions, a: number, b: number): number {
  switch (option) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    case "remainder":
      return a % b;
    default:
      throw Error("unknown command");
  }
}

console.log(calculate("add", 1, 3)); // 4
console.log(calculate("add", 1, 2, 10));
console.log(calculate("substract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1

console.log(calculator("add", 1, 3)); // 4
console.log(calculator("add", 1, 2));
console.log(calculator("substract", 3, 1)); // 2
console.log(calculator("multiply", 4, 2)); // 8
console.log(calculator("divide", 4, 2)); // 2
console.log(calculator("remainder", 5, 2)); // 1
