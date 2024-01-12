function add(x: number, y: number): number;
function add(x: string, y: string): string;

function add(x: any, y: any) {
  return x + y;
}

console.log(add(1, 2)); //3
console.log(add("안녕", "하세요")); //안녕하세요

const OverLoading = 1;
export default OverLoading;
