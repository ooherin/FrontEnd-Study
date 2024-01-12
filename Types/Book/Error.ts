try {
} catch (err) {
  if (err) {
    const error = err as Error;
    console.log(error.message); //변수로 Error라는 타입을 명확히 저장해 줘야지 Error라는 객체로 인식
  }
}

//가장 좋은 방법
try {
} catch (err) {
  if (err instanceof Error) {
    console.log(err.message); //변수로 Error라는 타입을 명확히 저장해 줘야지 Error라는 객체로 인식
  }
}
