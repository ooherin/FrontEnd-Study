// Java: Exception
// JavaScript: Error
// const array = new Array(100000000000000000);

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === "not exist") {
    throw new Error(`${fileName}파일이 존재하지 않습니다!`);
  }
  return "file contents📝";
}

function closeFile(fileName: string) {
  //
}

const fileName = "not existAAA";
console.log(readFile(fileName));
closeFile(fileName);

function run() {
  try {
    console.log(readFile(fileName));
  } catch (err) {
    console.log(err);
    return; //finally를 쓰면 catch에서 return을 해도 항상 실행됨
  } finally {
    closeFile(fileName);
    console.log("끝!");
  }
}
run();

//catch를 사용하면 에러를 잡은 정지되지 않는다. 다음 코드가 실행된다.

// function readFile(fileName: string): string {
//   if (fileName === 'not exist!💩') {
//     throw new Error(`file not exist! ${fileName}`);
//   }
//   return 'file contents🗒';
// }

// function closeFile(fileName: string) {
//   //
// }
// function run() {
//   const fileName = 'not exist!💩';

//   try {
//     console.log(readFile(fileName));
//   } catch (error) {
//     console.log(`catched!!`);
//     return;
//   } finally {
//     closeFile(fileName);
//     console.log(`closed!`);
//   }
// }
// run();
